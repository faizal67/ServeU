import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/serviceUser'

const addServiceUser = async ( serviceUser ) => {
    try {
        const response = await axios.post(baseUrl, serviceUser); // Add 
        return response.data;

    } catch (error) {
        return error
    }
};

const updateServiceUser = async ({ serviceUser }) => {
    const response = await axios.put(`${baseUrl}/${serviceUser.id}`, serviceUser); // Update 
    return response.data;
};

const getServiceUser = async ( {email} ) => {
    const response = await axios.get(`${baseUrl}/${email}`); // Get
    return response.data;
};

export default { addServiceUser, updateServiceUser, getServiceUser };
