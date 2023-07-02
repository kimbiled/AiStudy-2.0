import * as process from "process";

export default {
	HOST: process.env.BACKEND_HOST,
	PORT: parseInt(process.env.BACKEND_PORT),

	RT_JWT_SALT: process.env.BACKEND_RT_JWT_SALT,
	AT_JWT_SALT: process.env.BACKEND_AT_JWT_SALT,
};
