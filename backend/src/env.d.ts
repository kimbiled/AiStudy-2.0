declare global {
	namespace NodeJS {
		interface ProcessEnv {
			readonly BACKEND_PORT: 8000;

			readonly GOOGLE_ROOT_EMAIL: string;
			readonly GOOGLE_ROOT_CLIENT_ID: string;
			readonly GOOGLE_ROOT_CLIENT_SECRET: string;
			readonly GOOGLE_ROOT_REDIRECT_URI: string;
			readonly GOOGLE_ROOT_REFRESH_TOKEN: string;
		}
	}
}
export {};
