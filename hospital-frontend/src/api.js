import axios from 'axios';

const API = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080/api'
});

export const getPatients = () => API.get('/patients');
export const getPatientById = (id) => API.get(`/patients/${id}`);
export const createPatient = (data) => API.post('/patients', data);
export const updatePatient = (id, data) => API.put(`/patients/${id}`, data);
export const deletePatient = (id) => API.delete(`/patients/${id}`);
export const searchPatients = (name) => API.get(`/patients/search?name=${name}`);

export const getDoctors = () => API.get('/doctors');
export const getDoctorById = (id) => API.get(`/doctors/${id}`);
export const createDoctor = (data) => API.post('/doctors', data);
export const updateDoctor = (id, data) => API.put(`/doctors/${id}`, data);
export const deleteDoctor = (id) => API.delete(`/doctors/${id}`);

export const getAppointments = () => API.get('/appointments');
export const createAppointment = (data) => API.post('/appointments', data);
export const updateAppointment = (id, data) => API.put(`/appointments/${id}`, data);
export const deleteAppointment = (id) => API.delete(`/appointments/${id}`);
export const updateAppointmentStatus = (id, status) => API.patch(`/appointments/${id}/status?status=${status}`);

export const loginUser = (data) => API.post('/auth/login', data);
export const registerUser = (data) => API.post('/auth/register', data);