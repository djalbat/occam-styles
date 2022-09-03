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
var AddDirectorySVG = /*#__PURE__*/ function(Element) {
    _inherits(AddDirectorySVG, Element);
    var _super = _createSuper(AddDirectorySVG);
    function AddDirectorySVG() {
        _classCallCheck(this, AddDirectorySVG);
        return _super.apply(this, arguments);
    }
    _createClass(AddDirectorySVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", {
                    stroke: "none"
                }, /*#__PURE__*/ React.createElement("rect", {
                    width: "20",
                    height: "2",
                    x: "0",
                    y: "23"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "8",
                    x: "18",
                    y: "15"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "8",
                    x: "0",
                    y: "15"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "20",
                    height: "2",
                    x: "0",
                    y: "13"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "7",
                    height: "3",
                    x: "0",
                    y: "10"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "m 7,10 3,3 H 7 Z"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "8",
                    x: "14.5",
                    y: "2.5"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "8",
                    height: "2",
                    x: "11.5",
                    y: "5.5"
                }));
            }
        }
    ]);
    return AddDirectorySVG;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(AddDirectorySVG, "tagName", "svg");
_defineProperty(AddDirectorySVG, "defaultProperties", {
    viewBox: "0 0 25 25",
    className: "add-directory"
});
var _default = (0, _easyWithStyle.default)(AddDirectorySVG)(_templateObject(), _common.commonColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvZGlyZWN0b3J5L2FkZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IGNvbW1vbkNvbG91ciB9IGZyb20gXCIuLi8uLi9zY2hlbWUvY29tbW9uXCI7XG5cbmNsYXNzIEFkZERpcmVjdG9yeVNWRyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIj5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjJcIiB4PVwiMFwiIHk9XCIyM1wiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjhcIiB4PVwiMThcIiB5PVwiMTVcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjJcIiBoZWlnaHQ9XCI4XCIgeD1cIjBcIiB5PVwiMTVcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMlwiIHg9XCIwXCIgeT1cIjEzXCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCI3XCIgaGVpZ2h0PVwiM1wiIHg9XCIwXCIgeT1cIjEwXCIgLz5cbiAgICAgICAgPHBhdGggZD1cIm0gNywxMCAzLDMgSCA3IFpcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjJcIiBoZWlnaHQ9XCI4XCIgeD1cIjE0LjVcIiB5PVwiMi41XCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCI4XCIgaGVpZ2h0PVwiMlwiIHg9XCIxMS41XCIgeT1cIjUuNVwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInN2Z1wiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICB2aWV3Qm94OiBcIjAgMCAyNSAyNVwiLFxuICAgIGNsYXNzTmFtZTogXCJhZGQtZGlyZWN0b3J5XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEFkZERpcmVjdG9yeVNWRylgXG5cbiAgc3Ryb2tlOiAke2NvbW1vbkNvbG91cn07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJBZGREaXJlY3RvcnlTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInN0cm9rZSIsInJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJ5IiwicGF0aCIsImQiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwidmlld0JveCIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImNvbW1vbkNvbG91ciJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQWtDYixTQUlFOzs7ZUFKRixRQUlFOzs7a0VBcENvQixpQkFBaUI7b0JBRWYsTUFBTTtzQkFFRCxxQkFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEQsSUFBQSxBQUFNQSxlQUFlLGlCQTBCbEIsQUExQkg7Y0FBTUEsZUFBZTs4QkFBZkEsZUFBZTthQUFmQSxlQUFlOzhCQUFmQSxlQUFlOzs7aUJBQWZBLGVBQWU7O1lBQ25CQyxHQUFhLEVBQWJBLGVBQWE7bUJBQWJBLFNBQUFBLGFBQWEsR0FBRztnQkFDZCxxQkFFRSxvQkFBQ0MsR0FBQztvQkFBQ0MsTUFBTSxFQUFDLE1BQU07aUNBQ2Qsb0JBQUNDLE1BQUk7b0JBQUNDLEtBQUssRUFBQyxJQUFJO29CQUFDQyxNQUFNLEVBQUMsR0FBRztvQkFBQ0MsQ0FBQyxFQUFDLEdBQUc7b0JBQUNDLENBQUMsRUFBQyxJQUFJO2tCQUFHLGdCQUMzQyxvQkFBQ0osTUFBSTtvQkFBQ0MsS0FBSyxFQUFDLEdBQUc7b0JBQUNDLE1BQU0sRUFBQyxHQUFHO29CQUFDQyxDQUFDLEVBQUMsSUFBSTtvQkFBQ0MsQ0FBQyxFQUFDLElBQUk7a0JBQUcsZ0JBQzNDLG9CQUFDSixNQUFJO29CQUFDQyxLQUFLLEVBQUMsR0FBRztvQkFBQ0MsTUFBTSxFQUFDLEdBQUc7b0JBQUNDLENBQUMsRUFBQyxHQUFHO29CQUFDQyxDQUFDLEVBQUMsSUFBSTtrQkFBRyxnQkFDMUMsb0JBQUNKLE1BQUk7b0JBQUNDLEtBQUssRUFBQyxJQUFJO29CQUFDQyxNQUFNLEVBQUMsR0FBRztvQkFBQ0MsQ0FBQyxFQUFDLEdBQUc7b0JBQUNDLENBQUMsRUFBQyxJQUFJO2tCQUFHLGdCQUMzQyxvQkFBQ0osTUFBSTtvQkFBQ0MsS0FBSyxFQUFDLEdBQUc7b0JBQUNDLE1BQU0sRUFBQyxHQUFHO29CQUFDQyxDQUFDLEVBQUMsR0FBRztvQkFBQ0MsQ0FBQyxFQUFDLElBQUk7a0JBQUcsZ0JBQzFDLG9CQUFDQyxNQUFJO29CQUFDQyxDQUFDLEVBQUMsa0JBQWtCO2tCQUFHLGdCQUM3QixvQkFBQ04sTUFBSTtvQkFBQ0MsS0FBSyxFQUFDLEdBQUc7b0JBQUNDLE1BQU0sRUFBQyxHQUFHO29CQUFDQyxDQUFDLEVBQUMsTUFBTTtvQkFBQ0MsQ0FBQyxFQUFDLEtBQUs7a0JBQUcsZ0JBQzlDLG9CQUFDSixNQUFJO29CQUFDQyxLQUFLLEVBQUMsR0FBRztvQkFBQ0MsTUFBTSxFQUFDLEdBQUc7b0JBQUNDLENBQUMsRUFBQyxNQUFNO29CQUFDQyxDQUFDLEVBQUMsS0FBSztrQkFBRyxDQUM1QyxDQUVKO1lBQ0osQ0FBQzs7O1dBaEJHUixlQUFlO0NBd0JwQixrQkF4QjZCVyxLQUFPLFFBQUEsRUF3QnBDO0FBTkMsZ0JBbEJJWCxlQUFlLEVBa0JaWSxTQUFPLEVBQUcsS0FBSyxDQUFDO0FBRXZCLGdCQXBCSVosZUFBZSxFQW9CWmEsbUJBQWlCLEVBQUc7SUFDekJDLE9BQU8sRUFBRSxXQUFXO0lBQ3BCQyxTQUFTLEVBQUUsZUFBZTtDQUMzQixDQUFDO0lBR0osUUFJRSxHQUphQyxJQUFBQSxjQUFTLFFBQUEsRUFBQ2hCLGVBQWUsQ0FBQyxvQkFFN0JpQixPQUFZLGFBQUEifQ==