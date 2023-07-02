"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strHelper = void 0;
class strHelper {
    normalizer(value) {
        return value.toLowerCase().replace(/ /g, "").trim();
    }
    check(value, regExp) {
        return !!value.match(regExp);
    }
}
exports.strHelper = strHelper;
//# sourceMappingURL=string.js.map