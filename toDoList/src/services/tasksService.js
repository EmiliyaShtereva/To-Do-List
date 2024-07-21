import axios from "axios";

const baseUrl = 'http://localhost:3000';

export const getMonday = async () => {
    const response = await axios.get(`${baseUrl}/monday`);
    const result = await response.data;
    return result;
}