import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/serviceList';


const add = async ({provider, newService}) => {
    console.log(provider)
    const response = await axios.post(`${baseUrl}/${provider._id}`, newService)
    return response.data;
}

const update = async ({ currservice }) => {
    // console.log('getting value:',currservice)
    const response = await axios.put(`${baseUrl}/${currservice._id}`, currservice); // Update provider
    return response.data;
};

const deleteServiceList = async (currservice) => {
    await axios.delete(`${baseUrl}/${currservice._id}`)
}


export default {  update, add , deleteServiceList};
