"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _common = require("../scheme/common");
var _styles = require("../styles");
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
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
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
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  fill: ",
        ";\n  height: ",
        ";\n  margin-left: ",
        ";\n  vertical-align: bottom;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var MarkerSVG = /*#__PURE__*/ function(Element) {
    _inherits(MarkerSVG, Element);
    var _super = _createSuper(MarkerSVG);
    function MarkerSVG() {
        _classCallCheck(this, MarkerSVG);
        return _super.apply(this, arguments);
    }
    _createClass(MarkerSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", {
                    stroke: "none"
                }, /*#__PURE__*/ React.createElement("rect", {
                    width: "14",
                    height: "4",
                    x: "2",
                    y: "16"
                }));
            }
        }
    ]);
    return MarkerSVG;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(MarkerSVG, "tagName", "svg");
_defineProperty(MarkerSVG, "defaultProperties", {
    viewBox: "0 0 25 25",
    className: "marker"
});
var _default = (0, _easyWithStyle.default)(MarkerSVG)(_templateObject(), _common.commonColour, _styles.markerSVGHeight, _styles.markerSVGMarginLeft);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdmcvbWFya2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgY29tbW9uQ29sb3VyIH0gZnJvbSBcIi4uL3NjaGVtZS9jb21tb25cIjtcbmltcG9ydCB7IG1hcmtlclNWR0hlaWdodCwgbWFya2VyU1ZHTWFyZ2luTGVmdCB9IGZyb20gXCIuLi9zdHlsZXNcIjtcblxuY2xhc3MgTWFya2VyU1ZHIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGcgc3Ryb2tlPVwibm9uZVwiPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiNFwiIHg9XCIyXCIgeT1cIjE2XCIgLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic3ZnXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHZpZXdCb3g6IFwiMCAwIDI1IDI1XCIsXG4gICAgY2xhc3NOYW1lOiBcIm1hcmtlclwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShNYXJrZXJTVkcpYFxuXG4gIGZpbGw6ICR7Y29tbW9uQ29sb3VyfTtcbiAgaGVpZ2h0OiAke21hcmtlclNWR0hlaWdodH07XG4gIG1hcmdpbi1sZWZ0OiAke21hcmtlclNWR01hcmdpbkxlZnR9O1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiTWFya2VyU1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJzdHJva2UiLCJyZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwieSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ2aWV3Qm94IiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiY29tbW9uQ29sb3VyIiwibWFya2VyU1ZHSGVpZ2h0IiwibWFya2VyU1ZHTWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQTRCYixTQU9FOzs7ZUFQRixRQU9FOzs7a0VBakNvQixpQkFBaUI7b0JBRWYsTUFBTTtzQkFFRCxrQkFBa0I7c0JBQ00sV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhFLElBQUEsQUFBTUEsU0FBUyxpQkFtQlosQUFuQkg7Y0FBTUEsU0FBUzs4QkFBVEEsU0FBUzthQUFUQSxTQUFTOzhCQUFUQSxTQUFTOzs7aUJBQVRBLFNBQVM7O1lBQ2JDLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxHQUFHO2dCQUNkLHFCQUVFLG9CQUFDQyxHQUFDO29CQUFDQyxNQUFNLEVBQUMsTUFBTTtpQ0FDZCxvQkFBQ0MsTUFBSTtvQkFBQ0MsS0FBSyxFQUFDLElBQUk7b0JBQUNDLE1BQU0sRUFBQyxHQUFHO29CQUFDQyxDQUFDLEVBQUMsR0FBRztvQkFBQ0MsQ0FBQyxFQUFDLElBQUk7a0JBQUcsQ0FDekMsQ0FFSjtZQUNKLENBQUM7OztXQVRHUixTQUFTO0NBaUJkLGtCQWpCdUJTLEtBQU8sUUFBQSxFQWlCOUI7QUFOQyxnQkFYSVQsU0FBUyxFQVdOVSxTQUFPLEVBQUcsS0FBSyxDQUFDO0FBRXZCLGdCQWJJVixTQUFTLEVBYU5XLG1CQUFpQixFQUFHO0lBQ3pCQyxPQUFPLEVBQUUsV0FBVztJQUNwQkMsU0FBUyxFQUFFLFFBQVE7Q0FDcEIsQ0FBQztJQUdKLFFBT0UsR0FQYUMsSUFBQUEsY0FBUyxRQUFBLEVBQUNkLFNBQVMsQ0FBQyxvQkFFekJlLE9BQVksYUFBQSxFQUNWQyxPQUFlLGdCQUFBLEVBQ1ZDLE9BQW1CLG9CQUFBIn0=