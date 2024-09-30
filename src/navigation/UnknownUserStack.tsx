import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LogInScreen from '../screen/auth/LogInScreen';

const Stack = createNativeStackNavigator();

const UnknownUserStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="LogInScreen" component={LogInScreen} />
		</Stack.Navigator>
	);
};

export default UnknownUserStack;
