import { useHttpMethodContext } from '../../context/HttpMethodContext';
import { ApiResponseData } from '../../type';

const useUserApi = () => {
	const { get } = useHttpMethodContext();

	const getUser = async (id: string, showLoader = true): Promise<ApiResponseData> => {
		const response = await get(`/users/${id}`, showLoader);

		return response;
	};

	// other REST methods

	return { getUser };
};

export default useUserApi;
