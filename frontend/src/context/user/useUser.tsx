import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { Axios } from "../../lib/axios/Axios.ts";

import { useCustomCookies } from "../CustomCookies/useCustomCookies.tsx";

import type { TUser } from "./types";
import type { AxiosResponse } from "axios";

interface UserContextProps {
	user: TUser | null;
}

const UserContext = createContext({} as UserContextProps);

export function useUser(): UserContextProps {
	return useContext<UserContextProps>(UserContext);
}

export function UserProvider({ children }: { children: ReactNode }) {
	const { cookie } = useCustomCookies();

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [user, setUser] = useState<TUser | null>(null);

	async function getMe() {
		if (!cookie.sessionId) return null;

		return await Axios({
			method: "GET",
			url: "/user/get-me",
			params: {
				sessionId: cookie.sessionId,
				// device: ,
			},
		})
			.then((response: AxiosResponse<TUser>) => {
				return response.data;
			})
			.catch((error) => {
				console.log(error);
				return null;
			});
	}

	useEffect(() => {
		Promise.all([getMe()])
			.then(([retrievedUser]) => {
				setUser(retrievedUser);
			})
			.then(() => {
				setIsLoading(false);
			})
			.catch(() => {
				setIsLoading(false);
			});
	}, []);

	const values: UserContextProps = {
		user,
	};
	return <UserContext.Provider value={values}>{!isLoading && children}</UserContext.Provider>;
}
