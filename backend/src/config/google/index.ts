import * as process from "process";

export const GoogleConfig = {
	ROOT_MAIL: process.env.GOOGLE_ROOT_EMAIL,
	CLIENT_ID: process.env.GOOGLE_ROOT_CLIENT_ID,
	CLIENT_SECRET: process.env.GOOGLE_ROOT_CLIENT_SECRET,
	REDIRECT_URI: process.env.GOOGLE_ROOT_REDIRECT_URI,
	REFRESH_TOKEN: process.env.GOOGLE_ROOT_REFRESH_TOKEN,
};
