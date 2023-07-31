import { createContext, ReactNode, useContext } from "react";
import type { AxiosResponse } from "axios";

import { Axios } from "../../lib/axios/Axios.ts";

import { useCustomCookies } from "../CustomCookies/useCustomCookies.tsx";

import type { ILocalSignIn, ILocalSignUp, ILogOut } from "./types";

interface AuthContextProps {
	localSignUp: (params: ILocalSignUp) => Promise<void>;
	localSignIn: (params: ILocalSignIn) => Promise<void>;
	logOut: (params: ILogOut) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function useAuth(): AuthContextProps {
	return useContext<AuthContextProps>(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
	const { setCookie, removeCookie } = useCustomCookies();

	async function localSignUp(props: ILocalSignUp) {
		await Axios({
			method: "POST",
			url: "/auth/local/sign-up",
			data: props,
		}).then((response: AxiosResponse<string>) => {
			setCookie("sessionId", response.data, {
				path: "/",
			});
		});
	}

	async function localSignIn(props: ILocalSignIn) {
		await Axios({
			method: "POST",
			url: "/auth/local/sign-in",
			data: props,
		}).then((response: AxiosResponse<string>) => {
			setCookie("sessionId", response.data, {
				path: "/",
			});
		});
	}

	async function logOut(params: ILogOut) {
		await Axios({
			method: "POST",
			url: "/auth/log-out",
			data: params,
		}).then(() => {
			removeCookie("sessionId", {
				path: "/",
			});
		});
	}

	const values: AuthContextProps = {
		localSignUp,
		localSignIn,
		logOut,
	};
	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
