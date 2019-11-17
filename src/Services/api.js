import axios from 'axios';



const apiEndPoint = 'https://jsonplaceholder.typicode.com';
//const apiEndPoint = 'http://localhost:3000/Data/todos.data.json';
//const apiEndPoint = 'http://localhost:3000/Data/todos.data.json';

const getAll = async (resource) => {
    const {
        data
    } = await axios.get(`${apiEndPoint + (resource? '/'+resource: '')}`);

    return data;
}

const getItem = async (resource, id) => {
    const {
        data
    } = await axios.get(`${apiEndPoint}/${resource}`, id);

    return data;
}

const addItem = async (resource, item) => {
    const {
        data
    } = await axios.get(`${apiEndPoint}/${resource}`, item);

    return data;
}

const updateItem = async (resource, id) => {
    const {
        data
    } = await axios.get(`${apiEndPoint}/${resource}`, id);

    return data;
}

const deleteItem = async (resource, id) => {
    try {
        const {
            data
        } = await axios.get(`${apiEndPoint}/${resource}/${id}`);

        return data;
    } catch (err) {
        if (err.response && err.response.status === 404) {
            alert('This item has already been deleted.')
        } else {
            console.log('Logging the error', err);
            alert('Something failed while deleting a item')
        }
    }
}

export default {
    getAll,
    getItem,
    updateItem,
    addItem,
    deleteItem
}