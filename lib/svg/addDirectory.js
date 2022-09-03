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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdmcvYWRkRGlyZWN0b3J5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgY29tbW9uQ29sb3VyIH0gZnJvbSBcIi4uL3NjaGVtZS9jb21tb25cIjtcblxuY2xhc3MgQWRkRGlyZWN0b3J5U1ZHIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGcgc3Ryb2tlPVwibm9uZVwiPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMlwiIHg9XCIwXCIgeT1cIjIzXCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiOFwiIHg9XCIxOFwiIHk9XCIxNVwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjhcIiB4PVwiMFwiIHk9XCIxNVwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyXCIgeD1cIjBcIiB5PVwiMTNcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjdcIiBoZWlnaHQ9XCIzXCIgeD1cIjBcIiB5PVwiMTBcIiAvPlxuICAgICAgICA8cGF0aCBkPVwibSA3LDEwIDMsMyBIIDcgWlwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjhcIiB4PVwiMTQuNVwiIHk9XCIyLjVcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjhcIiBoZWlnaHQ9XCIyXCIgeD1cIjExLjVcIiB5PVwiNS41XCIgLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic3ZnXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHZpZXdCb3g6IFwiMCAwIDI1IDI1XCIsXG4gICAgY2xhc3NOYW1lOiBcImFkZC1kaXJlY3RvcnlcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQWRkRGlyZWN0b3J5U1ZHKWBcblxuICBzdHJva2U6ICR7Y29tbW9uQ29sb3VyfTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkFkZERpcmVjdG9yeVNWRyIsImNoaWxkRWxlbWVudHMiLCJnIiwic3Ryb2tlIiwicmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJwYXRoIiwiZCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ2aWV3Qm94IiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiY29tbW9uQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBa0NiLFNBSUU7OztlQUpGLFFBSUU7OztrRUFwQ29CLGlCQUFpQjtvQkFFZixNQUFNO3NCQUVELGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQyxJQUFBLEFBQU1BLGVBQWUsaUJBMEJsQixBQTFCSDtjQUFNQSxlQUFlOzhCQUFmQSxlQUFlO2FBQWZBLGVBQWU7OEJBQWZBLGVBQWU7OztpQkFBZkEsZUFBZTs7WUFDbkJDLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxHQUFHO2dCQUNkLHFCQUVFLG9CQUFDQyxHQUFDO29CQUFDQyxNQUFNLEVBQUMsTUFBTTtpQ0FDZCxvQkFBQ0MsTUFBSTtvQkFBQ0MsS0FBSyxFQUFDLElBQUk7b0JBQUNDLE1BQU0sRUFBQyxHQUFHO29CQUFDQyxDQUFDLEVBQUMsR0FBRztvQkFBQ0MsQ0FBQyxFQUFDLElBQUk7a0JBQUcsZ0JBQzNDLG9CQUFDSixNQUFJO29CQUFDQyxLQUFLLEVBQUMsR0FBRztvQkFBQ0MsTUFBTSxFQUFDLEdBQUc7b0JBQUNDLENBQUMsRUFBQyxJQUFJO29CQUFDQyxDQUFDLEVBQUMsSUFBSTtrQkFBRyxnQkFDM0Msb0JBQUNKLE1BQUk7b0JBQUNDLEtBQUssRUFBQyxHQUFHO29CQUFDQyxNQUFNLEVBQUMsR0FBRztvQkFBQ0MsQ0FBQyxFQUFDLEdBQUc7b0JBQUNDLENBQUMsRUFBQyxJQUFJO2tCQUFHLGdCQUMxQyxvQkFBQ0osTUFBSTtvQkFBQ0MsS0FBSyxFQUFDLElBQUk7b0JBQUNDLE1BQU0sRUFBQyxHQUFHO29CQUFDQyxDQUFDLEVBQUMsR0FBRztvQkFBQ0MsQ0FBQyxFQUFDLElBQUk7a0JBQUcsZ0JBQzNDLG9CQUFDSixNQUFJO29CQUFDQyxLQUFLLEVBQUMsR0FBRztvQkFBQ0MsTUFBTSxFQUFDLEdBQUc7b0JBQUNDLENBQUMsRUFBQyxHQUFHO29CQUFDQyxDQUFDLEVBQUMsSUFBSTtrQkFBRyxnQkFDMUMsb0JBQUNDLE1BQUk7b0JBQUNDLENBQUMsRUFBQyxrQkFBa0I7a0JBQUcsZ0JBQzdCLG9CQUFDTixNQUFJO29CQUFDQyxLQUFLLEVBQUMsR0FBRztvQkFBQ0MsTUFBTSxFQUFDLEdBQUc7b0JBQUNDLENBQUMsRUFBQyxNQUFNO29CQUFDQyxDQUFDLEVBQUMsS0FBSztrQkFBRyxnQkFDOUMsb0JBQUNKLE1BQUk7b0JBQUNDLEtBQUssRUFBQyxHQUFHO29CQUFDQyxNQUFNLEVBQUMsR0FBRztvQkFBQ0MsQ0FBQyxFQUFDLE1BQU07b0JBQUNDLENBQUMsRUFBQyxLQUFLO2tCQUFHLENBQzVDLENBRUo7WUFDSixDQUFDOzs7V0FoQkdSLGVBQWU7Q0F3QnBCLGtCQXhCNkJXLEtBQU8sUUFBQSxFQXdCcEM7QUFOQyxnQkFsQklYLGVBQWUsRUFrQlpZLFNBQU8sRUFBRyxLQUFLLENBQUM7QUFFdkIsZ0JBcEJJWixlQUFlLEVBb0JaYSxtQkFBaUIsRUFBRztJQUN6QkMsT0FBTyxFQUFFLFdBQVc7SUFDcEJDLFNBQVMsRUFBRSxlQUFlO0NBQzNCLENBQUM7SUFHSixRQUlFLEdBSmFDLElBQUFBLGNBQVMsUUFBQSxFQUFDaEIsZUFBZSxDQUFDLG9CQUU3QmlCLE9BQVksYUFBQSJ9