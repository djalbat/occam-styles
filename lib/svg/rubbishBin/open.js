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
        "\n\n  stroke: ",
        ";\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var OpenRubbishBinSVG = /*#__PURE__*/ function(Element) {
    _inherits(OpenRubbishBinSVG, Element);
    var _super = _createSuper(OpenRubbishBinSVG);
    function OpenRubbishBinSVG() {
        _classCallCheck(this, OpenRubbishBinSVG);
        return _super.apply(this, arguments);
    }
    _createClass(OpenRubbishBinSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", {
                    stroke: "none"
                }, /*#__PURE__*/ React.createElement("rect", {
                    width: "13",
                    height: "2",
                    x: "4",
                    y: "23"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "13",
                    x: "2",
                    y: "10"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "13",
                    x: "17",
                    y: "10"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "M 2,23 4,25 v -2 z"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "m 17,23 v 2 l 2,-2 z"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "1",
                    height: "11",
                    x: "6",
                    y: "11"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "1",
                    height: "11",
                    x: "13.999999",
                    y: "11"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "1",
                    height: "11",
                    x: "10",
                    y: "11"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "21",
                    height: "2",
                    x: "0",
                    y: "4"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "9",
                    height: "2",
                    x: "6",
                    y: "0"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "M 4,0 5,5 c 0,0 2,0 2,0 L 6,0 Z"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "M 17,0 16,4 H 14 L 15,0 Z"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "17",
                    height: "2",
                    x: "2",
                    y: "8"
                }));
            }
        }
    ]);
    return OpenRubbishBinSVG;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(OpenRubbishBinSVG, "tagName", "svg");
_defineProperty(OpenRubbishBinSVG, "defaultProperties", {
    viewBox: "0 0 25 25",
    className: "open-rubbish-bin"
});
var _default = (0, _easyWithStyle.default)(OpenRubbishBinSVG)(_templateObject(), _common.commonColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvcnViYmlzaEJpbi9vcGVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgY29tbW9uQ29sb3VyIH0gZnJvbSBcIi4uLy4uL3NjaGVtZS9jb21tb25cIjtcblxuY2xhc3MgT3BlblJ1YmJpc2hCaW5TVkcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZyBzdHJva2U9XCJub25lXCI+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMTNcIiBoZWlnaHQ9XCIyXCIgeD1cIjRcIiB5PVwiMjNcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIxM1wiIHg9XCIyXCIgeT1cIjEwXCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMTNcIiB4PVwiMTdcIiB5PVwiMTBcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTSAyLDIzIDQsMjUgdiAtMiB6XCIvPlxuICAgICAgICA8cGF0aCBkPVwibSAxNywyMyB2IDIgbCAyLC0yIHpcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjFcIiBoZWlnaHQ9XCIxMVwiIHg9XCI2XCIgeT1cIjExXCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxXCIgaGVpZ2h0PVwiMTFcIiB4PVwiMTMuOTk5OTk5XCIgeT1cIjExXCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxXCIgaGVpZ2h0PVwiMTFcIiB4PVwiMTBcIiB5PVwiMTFcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjIxXCIgaGVpZ2h0PVwiMlwiIHg9XCIwXCIgeT1cIjRcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjlcIiBoZWlnaHQ9XCIyXCIgeD1cIjZcIiB5PVwiMFwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDQsMCA1LDUgYyAwLDAgMiwwIDIsMCBMIDYsMCBaXCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0gMTcsMCAxNiw0IEggMTQgTCAxNSwwIFpcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjE3XCIgaGVpZ2h0PVwiMlwiIHg9XCIyXCIgeT1cIjhcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzdmdcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgdmlld0JveDogXCIwIDAgMjUgMjVcIixcbiAgICBjbGFzc05hbWU6IFwib3Blbi1ydWJiaXNoLWJpblwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShPcGVuUnViYmlzaEJpblNWRylgXG5cbiAgc3Ryb2tlOiAke2NvbW1vbkNvbG91cn07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJPcGVuUnViYmlzaEJpblNWRyIsImNoaWxkRWxlbWVudHMiLCJnIiwic3Ryb2tlIiwicmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJwYXRoIiwiZCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ2aWV3Qm94IiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiY29tbW9uQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBdUNiLFNBSUU7OztlQUpGLFFBSUU7OztrRUF6Q29CLGlCQUFpQjtvQkFFZixNQUFNO3NCQUVELHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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