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
var _styles = require("../../styles");
var _common = require("../../scheme/common");
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
        "\n\n  fill: none;\n  stroke: ",
        ";\n  top: 0;\n  right: 0;\n  width: auto;\n  height: ",
        ";\n  position: absolute;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var UpTitleSVG = /*#__PURE__*/ function(Element) {
    _inherits(UpTitleSVG, Element);
    var _super = _createSuper(UpTitleSVG);
    function UpTitleSVG() {
        _classCallCheck(this, UpTitleSVG);
        return _super.apply(this, arguments);
    }
    _createClass(UpTitleSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:1.73925",
                    d: "M 14.234694,13.648389 V 6.4038409 L 6.9526058,10.026115 Z"
                }));
            }
        }
    ]);
    return UpTitleSVG;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(UpTitleSVG, "tagName", "svg");
_defineProperty(UpTitleSVG, "defaultProperties", {
    viewBox: "0 0 25 25",
    className: "up-toggle"
});
var _default = (0, _easyWithStyle.default)(UpTitleSVG)(_templateObject(), _common.titleSVGColour, _styles.titleSVGHeight);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdGl0bGUvdXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyB0aXRsZVNWR0hlaWdodCB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcbmltcG9ydCB7IHRpdGxlU1ZHQ29sb3VyIH0gZnJvbSBcIi4uLy4uL3NjaGVtZS9jb21tb25cIjtcblxuY2xhc3MgVXBUaXRsZVNWRyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDoxLjczOTI1XCIgZD1cIk0gMTQuMjM0Njk0LDEzLjY0ODM4OSBWIDYuNDAzODQwOSBMIDYuOTUyNjA1OCwxMC4wMjYxMTUgWlwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInN2Z1wiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICB2aWV3Qm94OiBcIjAgMCAyNSAyNVwiLFxuICAgIGNsYXNzTmFtZTogXCJ1cC10b2dnbGVcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVXBUaXRsZVNWRylgXG5cbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlOiAke3RpdGxlU1ZHQ29sb3VyfTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogJHt0aXRsZVNWR0hlaWdodH07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIlVwVGl0bGVTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInBhdGgiLCJzdHlsZSIsImQiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwidmlld0JveCIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsInRpdGxlU1ZHQ29sb3VyIiwidGl0bGVTVkdIZWlnaHQiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkE0QmIsU0FVRTs7O2VBVkYsUUFVRTs7O2tFQXBDb0IsaUJBQWlCO29CQUVmLE1BQU07c0JBRUMsY0FBYztzQkFDZCxxQkFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELElBQUEsQUFBTUEsVUFBVSxpQkFtQmIsQUFuQkg7Y0FBTUEsVUFBVTs4QkFBVkEsVUFBVTthQUFWQSxVQUFVOzhCQUFWQSxVQUFVOzs7aUJBQVZBLFVBQVU7O1lBQ2RDLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxHQUFHO2dCQUNkLHFCQUVFLG9CQUFDQyxHQUFDLHNCQUNBLG9CQUFDQyxNQUFJO29CQUFDQyxLQUFLLEVBQUMsc0JBQXNCO29CQUFDQyxDQUFDLEVBQUMsMkRBQTJEO2tCQUFHLENBQ2pHLENBRUo7WUFDSixDQUFDOzs7V0FUR0wsVUFBVTtDQWlCZixrQkFqQndCTSxLQUFPLFFBQUEsRUFpQi9CO0FBTkMsZ0JBWElOLFVBQVUsRUFXUE8sU0FBTyxFQUFHLEtBQUssQ0FBQztBQUV2QixnQkFiSVAsVUFBVSxFQWFQUSxtQkFBaUIsRUFBRztJQUN6QkMsT0FBTyxFQUFFLFdBQVc7SUFDcEJDLFNBQVMsRUFBRSxXQUFXO0NBQ3ZCLENBQUM7SUFHSixRQVVFLEdBVmFDLElBQUFBLGNBQVMsUUFBQSxFQUFDWCxVQUFVLENBQUMsb0JBR3hCWSxPQUFjLGVBQUEsRUFJZEMsT0FBYyxlQUFBIn0=