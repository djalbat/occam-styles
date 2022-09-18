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
        ";\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ClearConsoleSVG = /*#__PURE__*/ function(Element) {
    _inherits(ClearConsoleSVG, Element);
    var _super = _createSuper(ClearConsoleSVG);
    function ClearConsoleSVG() {
        _classCallCheck(this, ClearConsoleSVG);
        return _super.apply(this, arguments);
    }
    _createClass(ClearConsoleSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", {
                    stroke: "none"
                }, /*#__PURE__*/ React.createElement("path", {
                    d: "m 19.217262,5.7822765 a 9.4998945,9.4998942 0 0 0 -13.4349871,4.636e-4 9.4998945,9.4998942 0 0 0 5e-7,13.4345199 9.4998945,9.4998942 0 0 0 13.4349866,4.64e-4 9.4998945,9.4998942 0 0 0 0,-13.4354475 z m -0.977529,2.7696608 a 6.9665893,6.9665892 0 0 1 -0.813681,8.8745777 6.9665893,6.9665892 0 0 1 -8.8727273,0.81183 z M 16.446674,6.7616556 6.7616542,16.446675 A 6.9665893,6.9665892 0 0 1 7.5734829,7.5739474 6.9665893,6.9665892 0 0 1 16.446674,6.7616556 Z"
                }));
            }
        }
    ]);
    return ClearConsoleSVG;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(ClearConsoleSVG, "tagName", "svg");
_defineProperty(ClearConsoleSVG, "defaultProperties", {
    viewBox: "0 0 25 25",
    className: "clear-console"
});
var _default = (0, _easyWithStyle.default)(ClearConsoleSVG)(_templateObject(), _common.clearConsoleColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdmcvY2xlYXJDb25zb2xlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgY2xlYXJDb25zb2xlQ29sb3VyIH0gZnJvbSBcIi4uL3NjaGVtZS9jb21tb25cIjtcblxuY2xhc3MgQ2xlYXJDb25zb2xlU1ZHIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGcgc3Ryb2tlPVwibm9uZVwiPlxuICAgICAgICA8cGF0aCBkPVwibSAxOS4yMTcyNjIsNS43ODIyNzY1IGEgOS40OTk4OTQ1LDkuNDk5ODk0MiAwIDAgMCAtMTMuNDM0OTg3MSw0LjYzNmUtNCA5LjQ5OTg5NDUsOS40OTk4OTQyIDAgMCAwIDVlLTcsMTMuNDM0NTE5OSA5LjQ5OTg5NDUsOS40OTk4OTQyIDAgMCAwIDEzLjQzNDk4NjYsNC42NGUtNCA5LjQ5OTg5NDUsOS40OTk4OTQyIDAgMCAwIDAsLTEzLjQzNTQ0NzUgeiBtIC0wLjk3NzUyOSwyLjc2OTY2MDggYSA2Ljk2NjU4OTMsNi45NjY1ODkyIDAgMCAxIC0wLjgxMzY4MSw4Ljg3NDU3NzcgNi45NjY1ODkzLDYuOTY2NTg5MiAwIDAgMSAtOC44NzI3MjczLDAuODExODMgeiBNIDE2LjQ0NjY3NCw2Ljc2MTY1NTYgNi43NjE2NTQyLDE2LjQ0NjY3NSBBIDYuOTY2NTg5Myw2Ljk2NjU4OTIgMCAwIDEgNy41NzM0ODI5LDcuNTczOTQ3NCA2Ljk2NjU4OTMsNi45NjY1ODkyIDAgMCAxIDE2LjQ0NjY3NCw2Ljc2MTY1NTYgWlwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInN2Z1wiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICB2aWV3Qm94OiBcIjAgMCAyNSAyNVwiLFxuICAgIGNsYXNzTmFtZTogXCJjbGVhci1jb25zb2xlXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKENsZWFyQ29uc29sZVNWRylgXG5cbiAgZmlsbDogJHtjbGVhckNvbnNvbGVDb2xvdXJ9O1xuICBcbmA7XG4iXSwibmFtZXMiOlsiQ2xlYXJDb25zb2xlU1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJzdHJva2UiLCJwYXRoIiwiZCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ2aWV3Qm94IiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiY2xlYXJDb25zb2xlQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBMkJiLFNBSUU7OztlQUpGLFFBSUU7OztrRUE3Qm9CLGlCQUFpQjtvQkFFZixNQUFNO3NCQUVLLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyRCxJQUFBLEFBQU1BLGVBQWUsaUJBbUJsQixBQW5CSDtjQUFNQSxlQUFlOzhCQUFmQSxlQUFlO2FBQWZBLGVBQWU7OEJBQWZBLGVBQWU7OztpQkFBZkEsZUFBZTs7WUFDbkJDLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxHQUFHO2dCQUNkLHFCQUVFLG9CQUFDQyxHQUFDO29CQUFDQyxNQUFNLEVBQUMsTUFBTTtpQ0FDZCxvQkFBQ0MsTUFBSTtvQkFBQ0MsQ0FBQyxFQUFDLHdjQUF3YztrQkFBRyxDQUNqZCxDQUVKO1lBQ0osQ0FBQzs7O1dBVEdMLGVBQWU7Q0FpQnBCLGtCQWpCNkJNLEtBQU8sUUFBQSxFQWlCcEM7QUFOQyxnQkFYSU4sZUFBZSxFQVdaTyxTQUFPLEVBQUcsS0FBSyxDQUFDO0FBRXZCLGdCQWJJUCxlQUFlLEVBYVpRLG1CQUFpQixFQUFHO0lBQ3pCQyxPQUFPLEVBQUUsV0FBVztJQUNwQkMsU0FBUyxFQUFFLGVBQWU7Q0FDM0IsQ0FBQztJQUdKLFFBSUUsR0FKYUMsSUFBQUEsY0FBUyxRQUFBLEVBQUNYLGVBQWUsQ0FBQyxvQkFFL0JZLE9BQWtCLG1CQUFBIn0=