import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export const insertWish = payload => api.post('/create', payload);
export const getAllWishes = () => api.get('/');
export const updateWishById = (id, payload) => api.put(`/update/${id}`, payload);
export const deleteWishById = id => api.delete(`/delete/${id}`);
export const getWishById = id => api.get(`/${id}`);

const apis = {
    insertWish,
    getAllWishes,
    updateWishById,
    deleteWishById,
    getWishById,
};

export default apis;
