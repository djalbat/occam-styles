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
        ";\n  width: auto;\n  height: 100%;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var CreateFileSVG = /*#__PURE__*/ function(Element) {
    _inherits(CreateFileSVG, Element);
    var _super = _createSuper(CreateFileSVG);
    function CreateFileSVG() {
        _classCallCheck(this, CreateFileSVG);
        return _super.apply(this, arguments);
    }
    _createClass(CreateFileSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", {
                    stroke: "none"
                }, /*#__PURE__*/ React.createElement("rect", {
                    width: "14.000001",
                    height: "1.9999999",
                    x: "5",
                    y: "23"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "1.9999999",
                    height: "7",
                    x: "17",
                    y: "16"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "1.9999999",
                    height: "12",
                    x: "5.000001",
                    y: "11"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "7",
                    height: "1.9999999",
                    x: "5.000001",
                    y: "9"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "8",
                    height: "2",
                    x: "15",
                    y: "5"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "8",
                    x: "18",
                    y: "2"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "m 12.000001,9.0000001 7,6.9999999 h -7 z"
                }));
            }
        }
    ]);
    return CreateFileSVG;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(CreateFileSVG, "tagName", "svg");
_defineProperty(CreateFileSVG, "defaultProperties", {
    viewBox: "0 0 25 25",
    className: "create-file"
});
var _default = (0, _easyWithStyle.default)(CreateFileSVG)(_templateObject(), _common.commonColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdmcvY3JlYXRlRmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IGNvbW1vbkNvbG91ciB9IGZyb20gXCIuLi9zY2hlbWUvY29tbW9uXCI7XG5cbmNsYXNzIENyZWF0ZUZpbGVTVkcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZyBzdHJva2U9XCJub25lXCI+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMTQuMDAwMDAxXCIgaGVpZ2h0PVwiMS45OTk5OTk5XCIgeD1cIjVcIiB5PVwiMjNcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjEuOTk5OTk5OVwiIGhlaWdodD1cIjdcIiB4PVwiMTdcIiB5PVwiMTZcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjEuOTk5OTk5OVwiIGhlaWdodD1cIjEyXCIgeD1cIjUuMDAwMDAxXCIgeT1cIjExXCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCI3XCIgaGVpZ2h0PVwiMS45OTk5OTk5XCIgeD1cIjUuMDAwMDAxXCIgeT1cIjlcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjhcIiBoZWlnaHQ9XCIyXCIgeD1cIjE1XCIgeT1cIjVcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjJcIiBoZWlnaHQ9XCI4XCIgeD1cIjE4XCIgeT1cIjJcIiAvPlxuICAgICAgICA8cGF0aCBkPVwibSAxMi4wMDAwMDEsOS4wMDAwMDAxIDcsNi45OTk5OTk5IGggLTcgelwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInN2Z1wiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICB2aWV3Qm94OiBcIjAgMCAyNSAyNVwiLFxuICAgIGNsYXNzTmFtZTogXCJjcmVhdGUtZmlsZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShDcmVhdGVGaWxlU1ZHKWBcblxuICBmaWxsOiAke2NvbW1vbkNvbG91cn07XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJDcmVhdGVGaWxlU1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJzdHJva2UiLCJyZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwieSIsInBhdGgiLCJkIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsInZpZXdCb3giLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJjb21tb25Db2xvdXIiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkFpQ2IsU0FNRTs7O2VBTkYsUUFNRTs7O2tFQXJDb0IsaUJBQWlCO29CQUVmLE1BQU07c0JBRUQsa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLElBQUEsQUFBTUEsYUFBYSxpQkF5QmhCLEFBekJIO2NBQU1BLGFBQWE7OEJBQWJBLGFBQWE7YUFBYkEsYUFBYTs4QkFBYkEsYUFBYTs7O2lCQUFiQSxhQUFhOztZQUNqQkMsR0FBYSxFQUFiQSxlQUFhO21CQUFiQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QscUJBRUUsb0JBQUNDLEdBQUM7b0JBQUNDLE1BQU0sRUFBQyxNQUFNO2lDQUNkLG9CQUFDQyxNQUFJO29CQUFDQyxLQUFLLEVBQUMsV0FBVztvQkFBQ0MsTUFBTSxFQUFDLFdBQVc7b0JBQUNDLENBQUMsRUFBQyxHQUFHO29CQUFDQyxDQUFDLEVBQUMsSUFBSTtrQkFBRyxnQkFDMUQsb0JBQUNKLE1BQUk7b0JBQUNDLEtBQUssRUFBQyxXQUFXO29CQUFDQyxNQUFNLEVBQUMsR0FBRztvQkFBQ0MsQ0FBQyxFQUFDLElBQUk7b0JBQUNDLENBQUMsRUFBQyxJQUFJO2tCQUFHLGdCQUNuRCxvQkFBQ0osTUFBSTtvQkFBQ0MsS0FBSyxFQUFDLFdBQVc7b0JBQUNDLE1BQU0sRUFBQyxJQUFJO29CQUFDQyxDQUFDLEVBQUMsVUFBVTtvQkFBQ0MsQ0FBQyxFQUFDLElBQUk7a0JBQUcsZ0JBQzFELG9CQUFDSixNQUFJO29CQUFDQyxLQUFLLEVBQUMsR0FBRztvQkFBQ0MsTUFBTSxFQUFDLFdBQVc7b0JBQUNDLENBQUMsRUFBQyxVQUFVO29CQUFDQyxDQUFDLEVBQUMsR0FBRztrQkFBRyxnQkFDeEQsb0JBQUNKLE1BQUk7b0JBQUNDLEtBQUssRUFBQyxHQUFHO29CQUFDQyxNQUFNLEVBQUMsR0FBRztvQkFBQ0MsQ0FBQyxFQUFDLElBQUk7b0JBQUNDLENBQUMsRUFBQyxHQUFHO2tCQUFHLGdCQUMxQyxvQkFBQ0osTUFBSTtvQkFBQ0MsS0FBSyxFQUFDLEdBQUc7b0JBQUNDLE1BQU0sRUFBQyxHQUFHO29CQUFDQyxDQUFDLEVBQUMsSUFBSTtvQkFBQ0MsQ0FBQyxFQUFDLEdBQUc7a0JBQUcsZ0JBQzFDLG9CQUFDQyxNQUFJO29CQUFDQyxDQUFDLEVBQUMsMENBQTBDO2tCQUFHLENBQ25ELENBRUo7WUFDSixDQUFDOzs7V0FmR1YsYUFBYTtDQXVCbEIsa0JBdkIyQlcsS0FBTyxRQUFBLEVBdUJsQztBQU5DLGdCQWpCSVgsYUFBYSxFQWlCVlksU0FBTyxFQUFHLEtBQUssQ0FBQztBQUV2QixnQkFuQklaLGFBQWEsRUFtQlZhLG1CQUFpQixFQUFHO0lBQ3pCQyxPQUFPLEVBQUUsV0FBVztJQUNwQkMsU0FBUyxFQUFFLGFBQWE7Q0FDekIsQ0FBQztJQUdKLFFBTUUsR0FOYUMsSUFBQUEsY0FBUyxRQUFBLEVBQUNoQixhQUFhLENBQUMsb0JBRTdCaUIsT0FBWSxhQUFBIn0=