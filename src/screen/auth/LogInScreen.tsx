import React, { useState } from 'react';
import CustomScreenWrapper from '../../components/common/CustomScreenWrapper';
import CustomInput from '../../components/common/CustomInput';
import CustomButton from '../../components/common/CustomButton';

const LogInScreen = () => {
	const [userInput, setUserInput] = useState({
		email: '',
		password: ''
	});

	const handleStateChange = (key: string, value: string) => setUserInput(prev => ({ ...prev, [key]: value }));

	const handleSubmit = async () => {
		// TODO: Add validation for user input
		// TODO: Now navigate to OTP screen
	};

	return (
		<CustomScreenWrapper>
			<CustomInput
				value={userInput.email}
				onChangeText={value => handleStateChange('email', value)}
				placeHolder="Email"
			/>

			<CustomInput
				value={userInput.password}
				onChangeText={value => handleStateChange('password', value)}
				placeHolder="Password"
				secureEntry={true}
			/>

			<CustomButton label="Submit" onPress={handleSubmit} />
		</CustomScreenWrapper>
	);
};

export default LogInScreen;
