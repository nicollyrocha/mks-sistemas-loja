import axios from 'axios';

const api = axios.create({
	baseURL: '/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC',
});

export default api;
