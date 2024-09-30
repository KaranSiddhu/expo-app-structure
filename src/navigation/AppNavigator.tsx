import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UnknownUserStack from './UnknownUserStack';

const AppNavigator = () => {
	return (
		<NavigationContainer>
			{/* <UserStack /> */}
			<UnknownUserStack />
		</NavigationContainer>
	);
};

export default AppNavigator;
