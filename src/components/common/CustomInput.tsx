import React, { ForwardedRef, forwardRef } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { TextInput } from 'react-native-paper';

type CustomInputPropType = {
	placeHolder: string;
	value: string;
	onChangeText: (value: string) => void;
	secureEntry?: boolean;
};

const CustomInput = forwardRef((props: CustomInputPropType, ref: ForwardedRef<RNTextInput>) => {
	const { placeHolder, value = '', onChangeText, secureEntry = false } = props;

	return (
		<TextInput
			ref={ref}
			label={placeHolder}
			value={value}
			onChangeText={onChangeText}
			mode="outlined"
			autoCorrect={false}
			secureTextEntry={secureEntry}
		/>
	);
});

CustomInput.displayName = 'CustomInput';

export default CustomInput;
