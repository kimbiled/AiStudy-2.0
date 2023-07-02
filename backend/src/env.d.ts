declare global {
	namespace NodeJS {
		interface ProcessEnv {
			BACKEND_HOST: string;
			BACKEND_PORT: string;

			BACKEND_RT_JWT_SALT: string;
			BACKEND_AT_JWT_SALT: string;

			BACKEND_GOOGLE_ROOT_MAIL: string;

			BACKEND_GOOGLE_CLIENT_ID: string;
			BACKEND_GOOGLE_CLIENT_SECRET: string;
			BACKEND_GOOGLE_CLIENT_REFRESH: string;

			BACKEND_OPENAI_ORG: string;
			BACKEND_OPENAI_USERNAME: string;
			BACKEND_OPENAI_PASSWORD: string;
			BACKEND_OPENAI_API_KEY: string;
		}
	}
}
export {};
