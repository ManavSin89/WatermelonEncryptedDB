"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = encodeMatcher;
var _allPass = _interopRequireDefault(require("../../utils/fp/allPass"));
var _anyPass = _interopRequireDefault(require("../../utils/fp/anyPass"));
var _invariant = _interopRequireDefault(require("../../utils/common/invariant"));
var _operators = _interopRequireDefault(require("./operators"));
var _canEncode = _interopRequireWildcard(require("./canEncode"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
/* eslint-disable no-use-before-define */
// eslint-disable-next-line no-unused-vars
var encodeWhereDescription = function (description) {
  return function (rawRecord) {
    var left = rawRecord[description.left];
    var {
      comparison: comparison
    } = description;
    var operator = _operators.default[comparison.operator];
    var compRight = comparison.right;
    var right;

    // TODO: What about `undefined`s ?
    if (compRight.value !== undefined) {
      right = compRight.value;
    } else if (compRight.values) {
      right = compRight.values;
    } else if (compRight.column) {
      right = rawRecord[compRight.column];
    } else {
      throw new Error('Invalid comparisonRight');
    }
    return operator(left, right);
  };
};
var _encodeWhere = function (where) {
  switch (where.type) {
    case 'where':
      return encodeWhereDescription(where);
    case 'and':
      return (0, _allPass.default)(where.conditions.map(_encodeWhere));
    case 'or':
      return (0, _anyPass.default)(where.conditions.map(_encodeWhere));
    case 'on':
      throw new Error('Illegal Q.on found -- nested Q.ons require explicit Q.experimentalJoinTables declaration');
    default:
      throw new Error("Illegal clause ".concat(where.type));
  }
};
var encodeConditions = function (conditions) {
  return (0, _allPass.default)(conditions.map(_encodeWhere));
};
function encodeMatcher(query) {
  (0, _invariant.default)((0, _canEncode.default)(query), _canEncode.forbiddenError);
  return encodeConditions(query.where);
}