import { createContext, ReactNode, useContext } from "react";
import { useCookies } from "react-cookie";
import type { CookieSerializeOptions } from "cookie";

type TCookie = "sessionId";

interface CustomCookiesContextProps {
	cookie: Partial<Record<TCookie, string>>;
	setCookie: (name: TCookie, value: string, options: CookieSerializeOptions) => void;
	removeCookie: (name: TCookie, options: CookieSerializeOptions) => void;
}

const CustomCookiesContext = createContext({} as CustomCookiesContextProps);

export function useCustomCookies(): CustomCookiesContextProps {
	return useContext<CustomCookiesContextProps>(CustomCookiesContext);
}

export function CustomCookieProvider({ children }: { children: ReactNode }) {
	const [cookie, setCookie, removeCookie] = useCookies([] as TCookie[]);

	const values: CustomCookiesContextProps = {
		cookie,
		setCookie,
		removeCookie,
	};
	return <CustomCookiesContext.Provider value={values}>{children}</CustomCookiesContext.Provider>;
}
