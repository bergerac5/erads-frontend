import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fecthEmergencyByCode, clearEmergencyState } from "../store/emergencySlice";
import { trackSchema } from "../schemas/emergencySchema";

function TrackEmergency() {
  const dispatch = useDispatch();
  const { tracked, loading, error } = useSelector((state) => state.emergency);

  const [accessCode, setAccessCode] = useState("");
  const [validationError, setValidationError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationError(null);

    const result = trackSchema.safeParse({ accessCode: accessCode.trim() });

    if (!result.success) {
      setValidationError(result.error.issues[0].message);
      return;
    }

    dispatch(fecthEmergencyByCode(result.data.accessCode));
  };

   return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Track Your Emergency</h2>

      <form onSubmit={handleSubmit} className="flex gap-3">
        <div className="flex-1">
          <input
            type="text"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value.toUpperCase())}
            maxLength={8}
            placeholder="e.g. KX8Q7M2R"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          {validationError && (
            <p className="text-sm text-red-600 mt-1">{validationError}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-red-600 hover:bg-red-700 disabled:bg-red-300 text-white font-semibold px-5 rounded-lg transition-colors"
        >
          {loading ? "..." : "Track"}
        </button>
      </form>

      {error && (
        <p className="mt-4 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          {error}
        </p>
      )}

      {tracked && (
        <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg px-4 py-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Status</span>
            <span className="text-sm font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800">
              {tracked.status}
            </span>
          </div>
          <p className="text-sm text-gray-700"><strong>Type:</strong> {tracked.type}</p>
          <p className="text-sm text-gray-700"><strong>Priority:</strong> {tracked.priority}</p>
          <p className="text-sm text-gray-700"><strong>Description:</strong> {tracked.description}</p>
          <p className="text-sm text-gray-500">
            Reported at: {new Date(tracked.createdAt).toLocaleString()}
          </p>
          <button
            onClick={() => dispatch(clearEmergencyState())}
            className="text-sm text-red-600 hover:underline pt-2"
          >
            Track another
          </button>
        </div>
      )}
    </div>
  );
}

export default TrackEmergency;