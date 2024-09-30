import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import colors from '../../utils/colors';

const CustomLoader = () => {
	return (
		<View style={styles.container}>
			<View style={styles.loaderBackground}>
				<ActivityIndicator size="large" color={colors.white} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: colors.backDropOverlay,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute'
	},
	loaderBackground: {
		backgroundColor: colors.loaderBackground,
		width: '34%',
		height: '15%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10
	}
});

export default CustomLoader;
