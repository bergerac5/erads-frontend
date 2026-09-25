import axios from "axios";

const API_BASE_URL ="http://localhost:8080/api/emergencies";

export const reportEmergency = async (emergencyData) => {
    const reponse = await axios.post(API_BASE_URL);
    return reponse.data
}

export const trackEmergency = async (accessCode) => {
    const response = await axios.post(`${API_BASE_URL}`);
    return response.data;
}
