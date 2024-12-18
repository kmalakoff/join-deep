"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return joinDeep;
    }
});
var _reducedeep = /*#__PURE__*/ _interop_require_default(require("reduce-deep"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function joinDeep(array, sep) {
    var length = array == null ? 0 : array.length;
    var hasJoined = false;
    return length ? (0, _reducedeep.default)(array, function(memo, value) {
        if (hasJoined) memo += sep;
        else hasJoined = true;
        if (value !== undefined) memo += value;
        return memo;
    }, '') : '';
}
/* CJS INTEROP */ if (exports.__esModule && exports.default) { try { Object.defineProperty(exports.default, '__esModule', { value: true }); for (var key in exports) { exports.default[key] = exports[key]; } } catch (_) {}; module.exports = exports.default; }