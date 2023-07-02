import * as process from "process";

export default {
	ROOT_MAIL: process.env.BACKEND_GOOGLE_ROOT_MAIL,

	CLIENT_ID: process.env.BACKEND_GOOGLE_CLIENT_ID,
	CLIENT_SECRET: process.env.BACKEND_GOOGLE_CLIENT_SECRET,
	REFRESH_TOKEN: process.env.BACKEND_GOOGLE_REFRESH_TOKEN,
};
