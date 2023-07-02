import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { IGetMe, IGetMeResponse, ISignIn, ISignInResponse, ISignUp, ISignUpResponse, TUser } from "./types";
import axios, { AxiosResponse } from "axios";
import { apiEndpoint } from "../../constants";

interface AuthContextProps {
	user: TUser | null;
	signUp: ({ username, email, password }: ISignUp) => Promise<void>;
	signIn: ({ username, password }: ISignIn) => Promise<void>;
}

const AuthContext = createContext({} as AuthContextProps);

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<TUser | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	async function signUp({ username, email, password }: ISignUp) {
		const config = {
			method: "POST",
			url: `${apiEndpoint}/auth/sign-up`,
			data: {
				username,
				email,
				password,
			},
		};

		await axios(config).then((response: AxiosResponse<ISignUpResponse>) => {
			localStorage.setItem("accessToken", response.data.data.accessToken);
			localStorage.setItem("refreshToken", response.data.data.refreshToken);
		});
	}
	async function signIn({ username, password }: ISignIn) {
		await axios({
			method: "POST",
			url: `${apiEndpoint}/auth/sign-in`,
			data: {
				username,
				password,
			} satisfies ISignIn,
		}).then((response: AxiosResponse<ISignInResponse>) => {
			localStorage.setItem("accessToken", response.data.accessToken);
			localStorage.setItem("refreshToken", response.data.refreshToken);
		});
	}

	async function getMe({ accessToken, refreshToken }: IGetMe) {
		return await axios({
			method: "POST",
			url: `${apiEndpoint}/user/get-me`,
			data: {
				accessToken: accessToken,
				refreshToken: refreshToken,
			} satisfies IGetMe,
		})
			.then((response: AxiosResponse<IGetMeResponse>) => {
				if (response.data.accessToken && response.data.refreshToken) {
					localStorage.setItem("accessToken", response.data.accessToken);
					localStorage.setItem("refreshToken", response.data.refreshToken);
				}

				return response.data.user;
			})
			.catch((error) => {
				console.log(error);
			});
	}

	useEffect(() => {
		const at = localStorage.getItem("accessToken")!;
		const rt = localStorage.getItem("refreshToken")!;

		try {
			getMe({
				accessToken: at,
				refreshToken: rt,
			}).then((response) => {
				if (!response) return;
				setUser(response);
			});
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}

		return () => {
			setUser(null);
		};
	}, []);

	const values: AuthContextProps = {
		user,
		signUp,
		signIn,
	};

	return <AuthContext.Provider value={values}>{!isLoading && children}</AuthContext.Provider>;
}
