export class strHelper {
	normalizer(value: string): string {
		return value.toLowerCase().replace(/ /g, "").trim();
	}
	check(value: string, regExp: RegExp) {
		return !!value.match(regExp);
	}
}
