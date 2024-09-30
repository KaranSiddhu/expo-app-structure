import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screen/HomeScreen';
import UserStateLoadingScreen from '../screen/UserStateLoadingScreen';

const Stack = createNativeStackNavigator();

const UserStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="LoadingScreen" component={UserStateLoadingScreen} options={{ headerShown: false }} />

			<Stack.Screen name="HomeScreen" component={HomeScreen} />
		</Stack.Navigator>
	);
};

export default UserStack;
