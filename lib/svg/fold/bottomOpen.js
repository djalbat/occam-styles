"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BottomOpenFoldSVG;
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
var BottomOpenFoldSVG = /*#__PURE__*/ function(Fold) {
    _inherits(BottomOpenFoldSVG, Fold);
    var _super = _createSuper(BottomOpenFoldSVG);
    function BottomOpenFoldSVG() {
        _classCallCheck(this, BottomOpenFoldSVG);
        return _super.apply(this, arguments);
    }
    _createClass(BottomOpenFoldSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    d: "M 7.9999971,2.8436987 2.04215,8.6171677 c 0,0 0,5.7734703 0,5.7734703 H 13.957849 V 8.6171677 Z",
                    style: "stroke-width:4;paint-order:markers stroke fill;stroke-linejoin: round;"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "m 4,11 h 8",
                    style: "stroke-width:3"
                }));
            }
        }
    ]);
    return BottomOpenFoldSVG;
}(_fold.default);
_defineProperty(BottomOpenFoldSVG, "defaultProperties", {
    viewBox: "0 0 16 16",
    className: "bottom-open"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvZm9sZC9ib3R0b21PcGVuLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRm9sZCBmcm9tIFwiLi4vLi4vc3ZnL2ZvbGRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm90dG9tT3BlbkZvbGRTVkcgZXh0ZW5kcyBGb2xkIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Zz5cbiAgICAgICAgPHBhdGggZD1cIk0gNy45OTk5OTcxLDIuODQzNjk4NyAyLjA0MjE1LDguNjE3MTY3NyBjIDAsMCAwLDUuNzczNDcwMyAwLDUuNzczNDcwMyBIIDEzLjk1Nzg0OSBWIDguNjE3MTY3NyBaXCIgc3R5bGU9XCJzdHJva2Utd2lkdGg6NDtwYWludC1vcmRlcjptYXJrZXJzIHN0cm9rZSBmaWxsO3N0cm9rZS1saW5lam9pbjogcm91bmQ7XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIm0gNCwxMSBoIDhcIiBzdHlsZT1cInN0cm9rZS13aWR0aDozXCIgLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgdmlld0JveDogXCIwIDAgMTYgMTZcIixcbiAgICBjbGFzc05hbWU6IFwiYm90dG9tLW9wZW5cIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJCb3R0b21PcGVuRm9sZFNWRyIsImNoaWxkRWxlbWVudHMiLCJnIiwicGF0aCIsImQiLCJzdHlsZSIsIkZvbGQiLCJkZWZhdWx0UHJvcGVydGllcyIsInZpZXdCb3giLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3lEQUZKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVGLElBQUEsQUFBTUEsa0NBQU47Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0I7Z0JBQ2QscUJBRUUsb0JBQUNDLHlCQUNDLG9CQUFDQztvQkFBS0MsR0FBRTtvQkFBa0dDLE9BQU07a0NBQ2hILG9CQUFDRjtvQkFBS0MsR0FBRTtvQkFBYUMsT0FBTTs7WUFJakM7OztXQVZtQkw7RUFBMEJNLGFBQUk7QUFZakQsZ0JBWm1CTixtQkFZWk8scUJBQW9CO0lBQ3pCQyxTQUFTO0lBQ1RDLFdBQVc7QUFDYiJ9