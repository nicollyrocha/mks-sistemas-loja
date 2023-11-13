import { useQuery, useQueryClient, useMutation } from 'react-query';
import { getProducts } from './getProducts';

const useAllProducts = () => {
	return useQuery(['products'], getProducts);
};

export { useAllProducts };
