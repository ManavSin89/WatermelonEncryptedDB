"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.withDatabase = exports.DatabaseProvider = exports.DatabaseContext = exports.DatabaseConsumer = void 0;
var _withDatabase = _interopRequireDefault(require("../react/withDatabase"));
exports.withDatabase = _withDatabase.default;
var _DatabaseContext = _interopRequireWildcard(require("../react/DatabaseContext"));
exports.DatabaseContext = _DatabaseContext.default;
exports.DatabaseConsumer = _DatabaseContext.DatabaseConsumer;
var _DatabaseProvider = _interopRequireDefault(require("../react/DatabaseProvider"));
exports.DatabaseProvider = _DatabaseProvider.default;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }