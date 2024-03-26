import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/service';


const addService = async ({service,provider,serviceUser, location}) => {
    // console.log(provider)
    const newService = {
        ...service,
        providerId: provider._id,
        serviceUserId: serviceUser._id,
        location : location
    }
    const response = await axios.post(`${baseUrl}`, newService)
    return response.data;
}

// const update = async ({ currservice }) => {
//     // console.log('getting value:',currservice)
//     const response = await axios.put(`${baseUrl}/${currservice._id}`, currservice); // Update provider
//     return response.data;
// };

// const deleteServiceList = async (currservice) => {
//     await axios.delete(`${baseUrl}/${currservice._id}`)
// }


export default { addService};