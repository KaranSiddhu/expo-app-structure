import { GestureResponderEvent } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import CustomText from './CustomText';

enum ButtonModeType {
	text = 'text',
	outlined = 'outlined',
	contained = 'contained',
	elevated = 'elevated',
	containedTonal = 'contained-tonal'
}

type CustomButtonProp = {
	label: string;
	onPress: (e: GestureResponderEvent) => void;
	mode?: ButtonModeType;
};

const CustomButton = ({ label, mode = ButtonModeType.contained, onPress }: CustomButtonProp) => {
	return (
		<Button mode={mode} onPress={onPress}>
			<CustomText>{label}</CustomText>
		</Button>
	);
};

export default CustomButton;
