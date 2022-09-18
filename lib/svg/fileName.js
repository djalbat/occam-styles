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
        ";\n  padding-left: 3rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var FileNameSVG = /*#__PURE__*/ function(Element) {
    _inherits(FileNameSVG, Element);
    var _super = _createSuper(FileNameSVG);
    function FileNameSVG() {
        _classCallCheck(this, FileNameSVG);
        return _super.apply(this, arguments);
    }
    _createClass(FileNameSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", {
                    stroke: "none"
                }, /*#__PURE__*/ React.createElement("rect", {
                    width: "14",
                    height: "2",
                    x: "2",
                    y: "16"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "7",
                    x: "14",
                    y: "9"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "12",
                    x: "2",
                    y: "4"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "7",
                    height: "2",
                    x: "2",
                    y: "2"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "m 9,2 7,7 h -7 z"
                }));
            }
        }
    ]);
    return FileNameSVG;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(FileNameSVG, "tagName", "svg");
_defineProperty(FileNameSVG, "defaultProperties", {
    viewBox: "0 0 24 18",
    className: "file-name"
});
var _default = (0, _easyWithStyle.default)(FileNameSVG)(_templateObject(), _common.commonColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdmcvZmlsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBjb21tb25Db2xvdXIgfSBmcm9tIFwiLi4vc2NoZW1lL2NvbW1vblwiO1xuXG5jbGFzcyBGaWxlTmFtZVNWRyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIj5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxNFwiIGhlaWdodD1cIjJcIiB4PVwiMlwiIHk9XCIxNlwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjdcIiB4PVwiMTRcIiB5PVwiOVwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjEyXCIgeD1cIjJcIiB5PVwiNFwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiN1wiIGhlaWdodD1cIjJcIiB4PVwiMlwiIHk9XCIyXCIgLz5cbiAgICAgICAgPHBhdGggZD1cIm0gOSwyIDcsNyBoIC03IHpcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzdmdcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgdmlld0JveDogXCIwIDAgMjQgMThcIixcbiAgICBjbGFzc05hbWU6IFwiZmlsZS1uYW1lXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEZpbGVOYW1lU1ZHKWBcblxuICBmaWxsOiAke2NvbW1vbkNvbG91cn07XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkZpbGVOYW1lU1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJzdHJva2UiLCJyZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwieSIsInBhdGgiLCJkIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsInZpZXdCb3giLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJjb21tb25Db2xvdXIiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkErQmIsU0FLRTs7O2VBTEYsUUFLRTs7O2tFQWxDb0IsaUJBQWlCO29CQUVmLE1BQU07c0JBRUQsa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLElBQUEsQUFBTUEsV0FBVyxpQkF1QmQsQUF2Qkg7Y0FBTUEsV0FBVzs4QkFBWEEsV0FBVzthQUFYQSxXQUFXOzhCQUFYQSxXQUFXOzs7aUJBQVhBLFdBQVc7O1lBQ2ZDLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxHQUFHO2dCQUNkLHFCQUVFLG9CQUFDQyxHQUFDO29CQUFDQyxNQUFNLEVBQUMsTUFBTTtpQ0FDZCxvQkFBQ0MsTUFBSTtvQkFBQ0MsS0FBSyxFQUFDLElBQUk7b0JBQUNDLE1BQU0sRUFBQyxHQUFHO29CQUFDQyxDQUFDLEVBQUMsR0FBRztvQkFBQ0MsQ0FBQyxFQUFDLElBQUk7a0JBQUcsZ0JBQzNDLG9CQUFDSixNQUFJO29CQUFDQyxLQUFLLEVBQUMsR0FBRztvQkFBQ0MsTUFBTSxFQUFDLEdBQUc7b0JBQUNDLENBQUMsRUFBQyxJQUFJO29CQUFDQyxDQUFDLEVBQUMsR0FBRztrQkFBRyxnQkFDMUMsb0JBQUNKLE1BQUk7b0JBQUNDLEtBQUssRUFBQyxHQUFHO29CQUFDQyxNQUFNLEVBQUMsSUFBSTtvQkFBQ0MsQ0FBQyxFQUFDLEdBQUc7b0JBQUNDLENBQUMsRUFBQyxHQUFHO2tCQUFHLGdCQUMxQyxvQkFBQ0osTUFBSTtvQkFBQ0MsS0FBSyxFQUFDLEdBQUc7b0JBQUNDLE1BQU0sRUFBQyxHQUFHO29CQUFDQyxDQUFDLEVBQUMsR0FBRztvQkFBQ0MsQ0FBQyxFQUFDLEdBQUc7a0JBQUcsZ0JBQ3pDLG9CQUFDQyxNQUFJO29CQUFDQyxDQUFDLEVBQUMsa0JBQWtCO2tCQUFHLENBQzNCLENBRUo7WUFDSixDQUFDOzs7V0FiR1YsV0FBVztDQXFCaEIsa0JBckJ5QlcsS0FBTyxRQUFBLEVBcUJoQztBQU5DLGdCQWZJWCxXQUFXLEVBZVJZLFNBQU8sRUFBRyxLQUFLLENBQUM7QUFFdkIsZ0JBakJJWixXQUFXLEVBaUJSYSxtQkFBaUIsRUFBRztJQUN6QkMsT0FBTyxFQUFFLFdBQVc7SUFDcEJDLFNBQVMsRUFBRSxXQUFXO0NBQ3ZCLENBQUM7SUFHSixRQUtFLEdBTGFDLElBQUFBLGNBQVMsUUFBQSxFQUFDaEIsV0FBVyxDQUFDLG9CQUUzQmlCLE9BQVksYUFBQSJ9