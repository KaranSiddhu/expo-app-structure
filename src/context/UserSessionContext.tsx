import React, { createContext, useContext, useState } from 'react';

// This is a custom type of our user
type UserType = {
	id: string;
	email: string;
	age?: number;
	// TODO: add more when api is integrated
};

// Add all the variables and function here which are used by this context
type UserContextStateType = {
	userData: UserType | undefined;
	setUserData: React.Dispatch<React.SetStateAction<UserType | undefined>>;
};

export const UserContext = createContext<UserContextStateType | undefined>(undefined);

export const useUserContext = () => {
	const context = useContext(UserContext);

	if (!context) {
		throw new Error('useUserContext must be used within a UserProvider');
	}

	return context;
};

export const UserSessionContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [userData, setUserData] = useState<UserType | undefined>();

	return (
		<UserContext.Provider
			value={{
				userData,
				setUserData
		
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
