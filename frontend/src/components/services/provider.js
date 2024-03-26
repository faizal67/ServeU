import axios from 'axios';

const providerUrl = 'http://localhost:3001/api/providers';
const userUrl = 'http://localhost:3001/api/users';
const serviceUserUrl = 'http://localhost:3001/api/serviceUser'

const addProvider = async ({user,provider}) => {
    // console.log('getting values',provider)
    const currUser = { ...user, type: 'maid' };
    try {
        const updateProvider = await axios.put(`${userUrl}/${user.id}`, currUser); // Update user's type
        // await axios.delete(`${serviceUserUrl}/${user.email}`)
        const response = await axios.post(providerUrl, provider); // Add provider
        return response.data;
        
    } catch (error) {
        return error   
    }
};

const updateProvider = async ({ provider }) => {
    const response = await axios.put(`${providerUrl}/${provider.id}`, provider); // Update provider
    return response.data;
};

const getProvider = async ({ email }) => {
    const response = await axios.get(`${providerUrl}/${email}`); // Get provider
    return response.data;
};

export default { addProvider, updateProvider, getProvider };
