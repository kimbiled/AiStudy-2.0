import { ReactNode } from "react";

import { CustomCookieProvider } from "./CustomCookies/useCustomCookies.tsx";
import { UserProvider } from "./user/useUser.tsx";
import { AuthProvider } from "./auth/useAuth";
import { WritingProvider } from "./writing/useWriting.tsx";

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<CustomCookieProvider>
			<UserProvider>
				<AuthProvider>
					<WritingProvider>{children}</WritingProvider>
				</AuthProvider>
			</UserProvider>
		</CustomCookieProvider>
	);
}
