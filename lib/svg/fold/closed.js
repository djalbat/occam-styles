"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ClosedFoldSVG;
    }
});
var _fold = /*#__PURE__*/ _interopRequireDefault(require("../../svg/fold"));
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var ClosedFoldSVG = /*#__PURE__*/ function(FoldSVG) {
    _inherits(ClosedFoldSVG, FoldSVG);
    var _super = _createSuper(ClosedFoldSVG);
    function ClosedFoldSVG() {
        _classCallCheck(this, ClosedFoldSVG);
        return _super.apply(this, arguments);
    }
    _createClass(ClosedFoldSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    d: "M 2.04651,2.04651 H 13.953488 V 13.953487 H 2.04651 Z",
                    style: "stroke-width:4;paint-order:markers stroke fill;stroke-linejoin:round;"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "M 7.9999998,3.9999999 V 12",
                    style: "stroke-width:3"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "M 3.9999999,7.9999998 H 12",
                    style: "stroke-width:3"
                }));
            }
        }
    ]);
    return ClosedFoldSVG;
}(_fold.default);
_defineProperty(ClosedFoldSVG, "defaultProperties", {
    viewBox: "0 0 16 16",
    className: "closed"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvZm9sZC9jbG9zZWQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGb2xkU1ZHIGZyb20gXCIuLi8uLi9zdmcvZm9sZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9zZWRGb2xkU1ZHIGV4dGVuZHMgRm9sZFNWRyB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGc+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDIuMDQ2NTEsMi4wNDY1MSBIIDEzLjk1MzQ4OCBWIDEzLjk1MzQ4NyBIIDIuMDQ2NTEgWlwiIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjQ7cGFpbnQtb3JkZXI6bWFya2VycyBzdHJva2UgZmlsbDtzdHJva2UtbGluZWpvaW46cm91bmQ7XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0gNy45OTk5OTk4LDMuOTk5OTk5OSBWIDEyXCIgc3R5bGU9XCJzdHJva2Utd2lkdGg6M1wiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDMuOTk5OTk5OSw3Ljk5OTk5OTggSCAxMlwiIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjNcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICB2aWV3Qm94OiBcIjAgMCAxNiAxNlwiLFxuICAgIGNsYXNzTmFtZTogXCJjbG9zZWRcIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDbG9zZWRGb2xkU1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJwYXRoIiwiZCIsInN0eWxlIiwiRm9sZFNWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwidmlld0JveCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7eURBRkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUwsSUFBQSxBQUFNQSw4QkFBTjtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7aUJBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxxQkFFRSxvQkFBQ0MseUJBQ0Msb0JBQUNDO29CQUFLQyxHQUFFO29CQUF3REMsT0FBTTtrQ0FDdEUsb0JBQUNGO29CQUFLQyxHQUFFO29CQUE2QkMsT0FBTTtrQ0FDM0Msb0JBQUNGO29CQUFLQyxHQUFFO29CQUE2QkMsT0FBTTs7WUFJakQ7OztXQVhtQkw7RUFBc0JNLGFBQU87QUFhaEQsZ0JBYm1CTixlQWFaTyxxQkFBb0I7SUFDekJDLFNBQVM7SUFDVEMsV0FBVztBQUNiIn0=