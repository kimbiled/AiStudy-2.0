declare global {
	namespace NodeJS {
		interface ProcessEnv {
			readonly BACKEND_PORT: string;

			readonly GOOGLE_KEY_FILE: string;
			readonly GOOGLE_ROOT_EMAIL: string;
			readonly GOOGLE_ROOT_CLIENT_ID: string;
			readonly GOOGLE_ROOT_CLIENT_SECRET: string;
			readonly GOOGLE_ROOT_REDIRECT_URI: string;
			readonly GOOGLE_ROOT_REFRESH_TOKEN: string;
			readonly GOOGLE_BUCKET_NAME: string;
		}
	}
}
export {};
