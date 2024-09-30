import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HttpMethodContextProvider } from './src/context/HttpMethodContext';
import { UserSessionContextProvider } from './src/context/UserSessionContext';
import AppNavigator from './src/navigation/AppNavigator';
import LoaderHOC from './src/components/hoc/LoaderHOC';
import colors from './src/utils/colors';

export default function AppWrap() {
	return (
		<HttpMethodContextProvider>
			<UserSessionContextProvider>
				<LoaderHOC>
					<App />
				</LoaderHOC>
			</UserSessionContextProvider>
		</HttpMethodContextProvider>
	);
}

function App() {
	return (
		<SafeAreaProvider style={styles.container}>
			<AppNavigator />
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white
	}
});
