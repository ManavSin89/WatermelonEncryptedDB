"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.tableSchema = exports.tableName = exports.localStorageKey = exports.columnName = exports.associations = exports.appSchema = exports.Relation = exports.Query = exports.Q = exports.Model = exports.Database = exports.Collection = void 0;
var Q = _interopRequireWildcard(require("./QueryDescription"));
exports.Q = Q;
var _Collection = _interopRequireDefault(require("./Collection"));
exports.Collection = _Collection.default;
var _Database = _interopRequireDefault(require("./Database"));
exports.Database = _Database.default;
var _Relation = _interopRequireDefault(require("./Relation"));
exports.Relation = _Relation.default;
var _Model = _interopRequireWildcard(require("./Model"));
exports.Model = _Model.default;
exports.associations = _Model.associations;
var _Query = _interopRequireDefault(require("./Query"));
exports.Query = _Query.default;
var _Schema = require("./Schema");
exports.tableName = _Schema.tableName;
exports.columnName = _Schema.columnName;
exports.appSchema = _Schema.appSchema;
exports.tableSchema = _Schema.tableSchema;
var _LocalStorage = require("./Database/LocalStorage");
exports.localStorageKey = _LocalStorage.localStorageKey;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }