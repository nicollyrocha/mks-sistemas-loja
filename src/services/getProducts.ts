import api from './api';

export const getProducts = async () => {
	const response = await api.get('');
	return response.data;
};
