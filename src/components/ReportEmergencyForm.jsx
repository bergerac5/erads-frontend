import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitEmergency, clearEmergencyState } from "../store/emergencySlice";
import { emergencySchema } from "../schemas/emergencySchema";
import LocationPicker from "./LocationPicker";

function ReportEmergencyForm() {
    const dispatch = useDispatch();
    const { lastReported, loading, error } = useSelector(
        (state) => state.emergency,
    );

    const [formData, setFormData] = useState({
        type: "MEDICAL",
        priority: "HIGH",
        description: "",
    });
    const [position, setPosition] = useState(null); // { lat, lng } | null
    const [locationError, setLocationError] = useState(null);
    const [validationErrors, setValidationErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleUseCurrentLocation = () => {
        setLocationError(null);

        if (!navigator.geolocation) {
            setLocationError("Geolocation is not supported by your browser.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
            },
            (err) => {
                setLocationError(
                    err.code === err.PERMISSION_DENIED
                        ? "Location access denied. You can still pick a spot on the map."
                        : "Could not detect your location. Try picking a spot on the map.",
                );
            },
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setValidationErrors({});

        const payload = {
            type: formData.type,
            priority: formData.priority,
            description: formData.description,
            latitude: position ? position.lat : null,
            longitude: position ? position.lng : null,
        };

        const result = emergencySchema.safeParse(payload);

        if (!result.success) {
            const fieldErrors = {};
            result.error.issues.forEach((issue) => {
                fieldErrors[issue.path[0]] = issue.message;
            });
            setValidationErrors(fieldErrors);
            return;
        }

        dispatch(submitEmergency(result.data));
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Report an Emergency
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Type
                    </label>
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        <option value="FIRE">Fire</option>
                        <option value="MEDICAL">Medical</option>
                        <option value="POLICE">Police</option>
                        <option value="NATURAL_DISASTER">Natural Disaster</option>
                        <option value="OTHER">Other</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Priority
                    </label>
                    <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        <option value="LOW">Low</option>
                        <option value="MEDIUM">Medium</option>
                        <option value="HIGH">High</option>
                        <option value="CRITICAL">Critical</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                    </label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={3}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    {validationErrors.description && (
                        <p className="text-sm text-red-600 mt-1">
                            {validationErrors.description}
                        </p>
                    )}
                </div>

                <div>
                    <div className="flex items-center justify-between mb-1">
                        <label className="block text-sm font-medium text-gray-700">
                            Location (optional)
                        </label>
                        <button
                            type="button"
                            onClick={handleUseCurrentLocation}
                            className="text-sm text-red-600 hover:underline"
                        >
                            Use my current location
                        </button>
                    </div>

                    <LocationPicker position={position} onPositionChange={setPosition} />

                    {position && (
                        <p className="text-xs text-gray-500 mt-1">
                            Selected: {position.lat.toFixed(5)}, {position.lng.toFixed(5)}
                        </p>
                    )}
                    {locationError && (
                        <p className="text-sm text-red-600 mt-1">{locationError}</p>
                    )}
                    {validationErrors.latitude && (
                        <p className="text-sm text-red-600 mt-1">
                            {validationErrors.latitude}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-300 text-white font-semibold py-2.5 rounded-lg transition-colors"
                >
                    {loading ? "Submitting..." : "Report Emergency"}
                </button>
            </form>

            {error && (
                <p className="mt-4 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                    {error}
                </p>
            )}

            {lastReported && (
                <div className="mt-4 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
                    <p className="text-green-800 font-medium">
                        Emergency reported successfully
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                        Your access code:{" "}
                        <strong className="text-lg tracking-wide">
                            {lastReported.accessCode}
                        </strong>
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                        Save this code — you'll need it to check status later.
                    </p>
                    <button
                        onClick={() => dispatch(clearEmergencyState())}
                        className="mt-3 text-sm text-red-600 hover:underline"
                    >
                        Report another
                    </button>
                </div>
            )}
        </div>
    );
}

export default ReportEmergencyForm;
