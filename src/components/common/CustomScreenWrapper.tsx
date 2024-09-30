import { Platform, RefreshControl, StyleSheet, View } from 'react-native';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import colors from '../../utils/colors';

type ScreenWrapperType = {
	children: React.ReactNode;
	addKeyboardAwareView?: boolean;
	showsVerticalScrollIndicator?: boolean;
	backgroundColor?: string;
	addRefreshControl?: boolean;
	refresh?: boolean;
	onRefresh?: () => void;
};

const CustomScreenWrapper = ({
	children,
	addKeyboardAwareView = true,
	showsVerticalScrollIndicator = false,
	backgroundColor = colors.white,
	addRefreshControl = false,
	refresh = false,
	onRefresh
}: ScreenWrapperType) => {
	return (
		<View style={[styles.container, { backgroundColor }]}>
			{addKeyboardAwareView ? (
				<KeyboardAwareScrollView
					enableOnAndroid={true}
					enableAutomaticScroll={Platform.OS === 'ios'}
					keyboardShouldPersistTaps="handled"
					extraScrollHeight={25}
					showsVerticalScrollIndicator={showsVerticalScrollIndicator}
					contentContainerStyle={{ flexGrow: 1, backgroundColor: backgroundColor }}
					refreshControl={addRefreshControl ? <RefreshControl refreshing={refresh} onRefresh={onRefresh} /> : undefined}
				>
					{children}
				</KeyboardAwareScrollView>
			) : (
				<>{children}</>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		paddingHorizontal: 10
	}
});

export default CustomScreenWrapper;
