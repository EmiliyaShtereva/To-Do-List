import axios from "axios";

const baseUrl = 'http://localhost:3000';

export const getMonday = async () => {
    const response = await axios.get(`${baseUrl}/monday`);
    const result = await response.data;
    return result;
}

export const getTuesday = async () => {
    const response = await axios.get(`${baseUrl}/tuesday`);
    const result = await response.data;
    return result;
}

export const getWednesday = async () => {
    const response = await axios.get(`${baseUrl}/wednesday`);
    const result = await response.data;
    return result;
}

export const getThursday = async () => {
    const response = await axios.get(`${baseUrl}/thursday`);
    const result = await response.data;
    return result;
}

export const getFriday = async () => {
    const response = await axios.get(`${baseUrl}/friday`);
    const result = await response.data;
    return result;
}

export const getSaturday = async () => {
    const response = await axios.get(`${baseUrl}/saturday`);
    const result = await response.data;
    return result;
}

export const getSunday = async () => {
    const response = await axios.get(`${baseUrl}/sunday`);
    const result = await response.data;
    return result;
}