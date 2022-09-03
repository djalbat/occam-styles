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
var ClosedRubbishBinSVG = /*#__PURE__*/ function(Element) {
    _inherits(ClosedRubbishBinSVG, Element);
    var _super = _createSuper(ClosedRubbishBinSVG);
    function ClosedRubbishBinSVG() {
        _classCallCheck(this, ClosedRubbishBinSVG);
        return _super.apply(this, arguments);
    }
    _createClass(ClosedRubbishBinSVG, [
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
                    width: "21",
                    height: "2",
                    x: "0",
                    y: "8"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "9",
                    height: "2",
                    x: "6",
                    y: "4"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "M 4,4 5,8 c 0,0 2,0 2,0 L 6,4 Z"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "M 17,4 16,8 H 14 L 15,4 Z"
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
                }));
            }
        }
    ]);
    return ClosedRubbishBinSVG;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(ClosedRubbishBinSVG, "tagName", "svg");
_defineProperty(ClosedRubbishBinSVG, "defaultProperties", {
    viewBox: "0 0 25 25",
    className: "closed-rubbish-bin"
});
var _default = (0, _easyWithStyle.default)(ClosedRubbishBinSVG)(_templateObject(), _common.commonColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvcnViYmlzaEJpbi9jbG9zZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBjb21tb25Db2xvdXIgfSBmcm9tIFwiLi4vLi4vc2NoZW1lL2NvbW1vblwiO1xuXG5jbGFzcyBDbG9zZWRSdWJiaXNoQmluU1ZHIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGcgc3Ryb2tlPVwibm9uZVwiPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjEzXCIgaGVpZ2h0PVwiMlwiIHg9XCI0XCIgeT1cIjIzXCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMTNcIiB4PVwiMlwiIHk9XCIxMFwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjEzXCIgeD1cIjE3XCIgeT1cIjEwXCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0gMiwyMyA0LDI1IHYgLTIgelwiLz5cbiAgICAgICAgPHBhdGggZD1cIm0gMTcsMjMgdiAyIGwgMiwtMiB6XCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIyMVwiIGhlaWdodD1cIjJcIiB4PVwiMFwiIHk9XCI4XCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCI5XCIgaGVpZ2h0PVwiMlwiIHg9XCI2XCIgeT1cIjRcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTSA0LDQgNSw4IGMgMCwwIDIsMCAyLDAgTCA2LDQgWlwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDE3LDQgMTYsOCBIIDE0IEwgMTUsNCBaXCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxXCIgaGVpZ2h0PVwiMTFcIiB4PVwiNlwiIHk9XCIxMVwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMVwiIGhlaWdodD1cIjExXCIgeD1cIjEzLjk5OTk5OVwiIHk9XCIxMVwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMVwiIGhlaWdodD1cIjExXCIgeD1cIjEwXCIgeT1cIjExXCIgLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic3ZnXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHZpZXdCb3g6IFwiMCAwIDI1IDI1XCIsXG4gICAgY2xhc3NOYW1lOiBcImNsb3NlZC1ydWJiaXNoLWJpblwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShDbG9zZWRSdWJiaXNoQmluU1ZHKWBcblxuICBzdHJva2U6ICR7Y29tbW9uQ29sb3VyfTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkNsb3NlZFJ1YmJpc2hCaW5TVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInN0cm9rZSIsInJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJ5IiwicGF0aCIsImQiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwidmlld0JveCIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImNvbW1vbkNvbG91ciJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQXNDYixTQUlFOzs7ZUFKRixRQUlFOzs7a0VBeENvQixpQkFBaUI7b0JBRWYsTUFBTTtzQkFFRCxxQkFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEQsSUFBQSxBQUFNQSxtQkFBbUIsaUJB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