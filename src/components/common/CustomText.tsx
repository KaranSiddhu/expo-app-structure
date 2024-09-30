import React from 'react';
import { Text } from 'react-native';
import colors from '../../utils/colors';

type CustomTextProp = {
	children: React.ReactNode;
	color?: string;
	numberOfLines?: number;
};

export default function CustomText({ color = colors.white, numberOfLines, children }: CustomTextProp) {
	return (
		<Text numberOfLines={numberOfLines} style={{ color }}>
			{children}
		</Text>
	);
}
