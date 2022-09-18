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
        ";\n  stroke: ",
        ";\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var EditEntrySVG = /*#__PURE__*/ function(Element) {
    _inherits(EditEntrySVG, Element);
    var _super = _createSuper(EditEntrySVG);
    function EditEntrySVG() {
        _classCallCheck(this, EditEntrySVG);
        return _super.apply(this, arguments);
    }
    _createClass(EditEntrySVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", {
                    transform: "matrix(0.78501283,-0.78501283,0.78501283,0.78501283,-5.90466,13.24565)"
                }, /*#__PURE__*/ React.createElement("path", {
                    style: "stroke:none",
                    d: "M 6,8.7257576 2,11.225756 6,13.725758 Z"
                }), /*#__PURE__*/ React.createElement("rect", {
                    style: "fill:none;stroke-width:1.41364",
                    width: "10.586364",
                    height: "4.0863643",
                    x: "7.70682",
                    y: "9.2068176"
                }), /*#__PURE__*/ React.createElement("rect", {
                    style: "fill:none;stroke-width:1.41364",
                    width: "0.81444442",
                    height: "4.3144417",
                    x: "18.87048",
                    y: "9.0927782"
                }));
            }
        }
    ]);
    return EditEntrySVG;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(EditEntrySVG, "tagName", "svg");
_defineProperty(EditEntrySVG, "defaultProperties", {
    viewBox: "0 0 25 25",
    className: "edit-entry"
});
var _default = (0, _easyWithStyle.default)(EditEntrySVG)(_templateObject(), _common.commonColour, _common.commonColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdmcvZWRpdEVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgY29tbW9uQ29sb3VyIH0gZnJvbSBcIi4uL3NjaGVtZS9jb21tb25cIjtcblxuY2xhc3MgRWRpdEVudHJ5U1ZHIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDAuNzg1MDEyODMsLTAuNzg1MDEyODMsMC43ODUwMTI4MywwLjc4NTAxMjgzLC01LjkwNDY2LDEzLjI0NTY1KVwiPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZTpub25lXCIgZD1cIk0gNiw4LjcyNTc1NzYgMiwxMS4yMjU3NTYgNiwxMy43MjU3NTggWlwiIC8+XG4gICAgICAgIDxyZWN0IHN0eWxlPVwiZmlsbDpub25lO3N0cm9rZS13aWR0aDoxLjQxMzY0XCIgd2lkdGg9XCIxMC41ODYzNjRcIiBoZWlnaHQ9XCI0LjA4NjM2NDNcIiB4PVwiNy43MDY4MlwiIHk9XCI5LjIwNjgxNzZcIiAvPlxuICAgICAgICA8cmVjdCBzdHlsZT1cImZpbGw6bm9uZTtzdHJva2Utd2lkdGg6MS40MTM2NFwiIHdpZHRoPVwiMC44MTQ0NDQ0MlwiIGhlaWdodD1cIjQuMzE0NDQxN1wiIHg9XCIxOC44NzA0OFwiIHk9XCI5LjA5Mjc3ODJcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzdmdcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgdmlld0JveDogXCIwIDAgMjUgMjVcIixcbiAgICBjbGFzc05hbWU6IFwiZWRpdC1lbnRyeVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShFZGl0RW50cnlTVkcpYFxuXG4gIGZpbGw6ICR7Y29tbW9uQ29sb3VyfTtcbiAgc3Ryb2tlOiAke2NvbW1vbkNvbG91cn07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJFZGl0RW50cnlTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInRyYW5zZm9ybSIsInBhdGgiLCJzdHlsZSIsImQiLCJyZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwieSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ2aWV3Qm94IiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiY29tbW9uQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBNkJiLFNBS0U7OztlQUxGLFFBS0U7OztrRUFoQ29CLGlCQUFpQjtvQkFFZixNQUFNO3NCQUVELGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0MsSUFBQSxBQUFNQSxZQUFZLGlCQXFCZixBQXJCSDtjQUFNQSxZQUFZOzhCQUFaQSxZQUFZO2FBQVpBLFlBQVk7OEJBQVpBLFlBQVk7OztpQkFBWkEsWUFBWTs7WUFDaEJDLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxHQUFHO2dCQUNkLHFCQUVFLG9CQUFDQyxHQUFDO29CQUFDQyxTQUFTLEVBQUMsd0VBQXdFO2lDQUNuRixvQkFBQ0MsTUFBSTtvQkFBQ0MsS0FBSyxFQUFDLGFBQWE7b0JBQUNDLENBQUMsRUFBQyx5Q0FBeUM7a0JBQUcsZ0JBQ3hFLG9CQUFDQyxNQUFJO29CQUFDRixLQUFLLEVBQUMsZ0NBQWdDO29CQUFDRyxLQUFLLEVBQUMsV0FBVztvQkFBQ0MsTUFBTSxFQUFDLFdBQVc7b0JBQUNDLENBQUMsRUFBQyxTQUFTO29CQUFDQyxDQUFDLEVBQUMsV0FBVztrQkFBRyxnQkFDOUcsb0JBQUNKLE1BQUk7b0JBQUNGLEtBQUssRUFBQyxnQ0FBZ0M7b0JBQUNHLEtBQUssRUFBQyxZQUFZO29CQUFDQyxNQUFNLEVBQUMsV0FBVztvQkFBQ0MsQ0FBQyxFQUFDLFVBQVU7b0JBQUNDLENBQUMsRUFBQyxXQUFXO2tCQUFHLENBQzlHLENBRUo7WUFDSixDQUFDOzs7V0FYR1gsWUFBWTtDQW1CakIsa0JBbkIwQlksS0FBTyxRQUFBLEVBbUJqQztBQU5DLGdCQWJJWixZQUFZLEVBYVRhLFNBQU8sRUFBRyxLQUFLLENBQUM7QUFFdkIsZ0JBZkliLFlBQVksRUFlVGMsbUJBQWlCLEVBQUc7SUFDekJDLE9BQU8sRUFBRSxXQUFXO0lBQ3BCQyxTQUFTLEVBQUUsWUFBWTtDQUN4QixDQUFDO0lBR0osUUFLRSxHQUxhQyxJQUFBQSxjQUFTLFFBQUEsRUFBQ2pCLFlBQVksQ0FBQyxvQkFFNUJrQixPQUFZLGFBQUEsRUFDVkEsT0FBWSxhQUFBIn0=