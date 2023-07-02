import * as process from "process";

export default {
	ORG: process.env.BACKEND_OPENAI_ORG,
	USERNAME: process.env.BACKEND_OPENAI_USERNAME,
	PASSWORD: process.env.BACKEND_OPENAI_PASSWORD,
	API_KEY: process.env.BACKEND_OPENAI_API_KEY,
};
