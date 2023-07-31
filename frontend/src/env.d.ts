/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_BACKEND_ENTRY_POINT: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
