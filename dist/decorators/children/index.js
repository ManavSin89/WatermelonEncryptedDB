"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _makeDecorator = _interopRequireDefault(require("../../utils/common/makeDecorator"));
var _logError = _interopRequireDefault(require("../../utils/common/logError"));
var _invariant = _interopRequireDefault(require("../../utils/common/invariant"));
var Q = _interopRequireWildcard(require("../../QueryDescription"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
// Defines a model property that queries records that *belong_to* this model
// Pass name of the table with desired records. (The model defining a @children property must
// have a has_many association defined with this table)
//
// Example: a Task has_many Comments, so it may define:
//   @children('comment') comments: Query<Comment>
var children = (0, _makeDecorator.default)(function (childTable) {
  return function () {
    return {
      get: function () {
        // $FlowFixMe
        var that = this;
        // Use cached Query if possible
        that._childrenQueryCache = that._childrenQueryCache || {};
        var cachedQuery = that._childrenQueryCache[childTable];
        if (cachedQuery) {
          return cachedQuery;
        }

        // Cache new Query
        var model = that.asModel;
        var childCollection = model.collections.get(childTable);
        var association = model.constructor.associations[childTable];
        (0, _invariant.default)(association && 'has_many' === association.type, "@children decorator used for a table that's not has_many");
        var query = childCollection.query(Q.where(association.foreignKey, model.id));
        that._childrenQueryCache[childTable] = query;
        return query;
      },
      set: function () {
        (0, _logError.default)('Setter called on a @children-marked property');
      }
    };
  };
});
var _default = exports.default = children;