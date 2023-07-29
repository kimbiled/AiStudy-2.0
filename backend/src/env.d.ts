declare global {
	namespace NodeJS {
		interface ProcessEnv {
			BACKEND_PORT: 8000;
		}
	}
}
export {};
