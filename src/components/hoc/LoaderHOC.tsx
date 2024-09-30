import React from 'react';
import { useHttpMethodContext } from '../../context/HttpMethodContext';
import CustomLoader from '../common/CustomLoader';

type LoaderPropType = {
	children: React.ReactNode;
};

const LoaderHOC = ({ children }: LoaderPropType) => {
	const { showLoader } = useHttpMethodContext();

	return (
		<>
			{children}
			{showLoader && <CustomLoader />}
		</>
	);
};

export default LoaderHOC;
