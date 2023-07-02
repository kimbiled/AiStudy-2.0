import { sign } from "jsonwebtoken";
import * as crypto from "crypto";

import config from "@root/config";

export class tokenHelper {
	createAT(uid: string) {
		return sign({ id: uid }, config.AT_JWT_SALT, {
			expiresIn: 60 * 15,
		});
	}
	createRT() {
		return sign({ random: crypto.randomUUID() }, config.RT_JWT_SALT, {
			expiresIn: 60 * 60 * 24 * 7,
		});
	}
}
