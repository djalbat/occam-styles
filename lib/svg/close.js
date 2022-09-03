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
        "\n\n  stroke: ",
        ";\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var CloseSVG = /*#__PURE__*/ function(Element) {
    _inherits(CloseSVG, Element);
    var _super = _createSuper(CloseSVG);
    function CloseSVG() {
        _classCallCheck(this, CloseSVG);
        return _super.apply(this, arguments);
    }
    _createClass(CloseSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", {
                    stroke: "none"
                }, /*#__PURE__*/ React.createElement("path", {
                    d: "m 12.803219,12.19644 a 7.5,7.5 0 0 0 -10.6066856,3.66e-4 7.5,7.5 0 0 0 4e-7,10.606319 7.5,7.5 0 0 0 10.6066852,3.66e-4 7.5,7.5 0 0 0 0,-10.607051 z m -0.771741,2.186599 a 5.5,5.5 0 0 1 -0.642387,7.006324 5.5,5.5 0 0 1 -7.0048623,0.640925 z m -1.415589,-1.413396 -7.6461529,7.646153 a 5.5,5.5 0 0 1 0.6409245,-7.004863 5.5,5.5 0 0 1 7.0052284,-0.64129 z"
                }));
            }
        }
    ]);
    return CloseSVG;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(CloseSVG, "tagName", "svg");
_defineProperty(CloseSVG, "defaultProperties", {
    viewBox: "0 0 25 25",
    className: "close"
});
var _default = (0, _easyWithStyle.default)(CloseSVG)(_templateObject(), _common.commonColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdmcvY2xvc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBjb21tb25Db2xvdXIgfSBmcm9tIFwiLi4vc2NoZW1lL2NvbW1vblwiO1xuXG5jbGFzcyBDbG9zZVNWRyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIj5cbiAgICAgICAgPHBhdGggZD1cIm0gMTIuODAzMjE5LDEyLjE5NjQ0IGEgNy41LDcuNSAwIDAgMCAtMTAuNjA2Njg1NiwzLjY2ZS00IDcuNSw3LjUgMCAwIDAgNGUtNywxMC42MDYzMTkgNy41LDcuNSAwIDAgMCAxMC42MDY2ODUyLDMuNjZlLTQgNy41LDcuNSAwIDAgMCAwLC0xMC42MDcwNTEgeiBtIC0wLjc3MTc0MSwyLjE4NjU5OSBhIDUuNSw1LjUgMCAwIDEgLTAuNjQyMzg3LDcuMDA2MzI0IDUuNSw1LjUgMCAwIDEgLTcuMDA0ODYyMywwLjY0MDkyNSB6IG0gLTEuNDE1NTg5LC0xLjQxMzM5NiAtNy42NDYxNTI5LDcuNjQ2MTUzIGEgNS41LDUuNSAwIDAgMSAwLjY0MDkyNDUsLTcuMDA0ODYzIDUuNSw1LjUgMCAwIDEgNy4wMDUyMjg0LC0wLjY0MTI5IHpcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzdmdcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgdmlld0JveDogXCIwIDAgMjUgMjVcIixcbiAgICBjbGFzc05hbWU6IFwiY2xvc2VcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQ2xvc2VTVkcpYFxuXG4gIHN0cm9rZTogJHtjb21tb25Db2xvdXJ9O1xuICBcbmA7XG4iXSwibmFtZXMiOlsiQ2xvc2VTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInN0cm9rZSIsInBhdGgiLCJkIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsInZpZXdCb3giLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJjb21tb25Db2xvdXIiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkEyQmIsU0FJRTs7O2VBSkYsUUFJRTs7O2tFQTdCb0IsaUJBQWlCO29CQUVmLE1BQU07c0JBRUQsa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLElBQUEsQUFBTUEsUUFBUSxpQkFtQlgsQUFuQkg7Y0FBTUEsUUFBUTs4QkFBUkEsUUFBUTthQUFSQSxRQUFROzhCQUFSQSxRQUFROzs7aUJBQVJBLFFBQVE7O1lBQ1pDLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxHQUFHO2dCQUNkLHFCQUVFLG9CQUFDQyxHQUFDO29CQUFDQyxNQUFNLEVBQUMsTUFBTTtpQ0FDZCxvQkFBQ0MsTUFBSTtvQkFBQ0MsQ0FBQyxFQUFDLGtXQUFrVztrQkFBRyxDQUMzVyxDQUVKO1lBQ0osQ0FBQzs7O1dBVEdMLFFBQVE7Q0FpQmIsa0JBakJzQk0sS0FBTyxRQUFBLEVBaUI3QjtBQU5DLGdCQVhJTixRQUFRLEVBV0xPLFNBQU8sRUFBRyxLQUFLLENBQUM7QUFFdkIsZ0JBYklQLFFBQVEsRUFhTFEsbUJBQWlCLEVBQUc7SUFDekJDLE9BQU8sRUFBRSxXQUFXO0lBQ3BCQyxTQUFTLEVBQUUsT0FBTztDQUNuQixDQUFDO0lBR0osUUFJRSxHQUphQyxJQUFBQSxjQUFTLFFBQUEsRUFBQ1gsUUFBUSxDQUFDLG9CQUV0QlksT0FBWSxhQUFBIn0=