import { ReactNode } from "react";

import { AuthProvider } from "./auth/useAuth";
import { UserProvider } from "./user/useUser.tsx";
import { CustomCookieProvider } from "./CustomCookies/useCustomCookies.tsx";

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<CustomCookieProvider>
			<UserProvider>
				<AuthProvider>{children}</AuthProvider>
			</UserProvider>
		</CustomCookieProvider>
	);
}
