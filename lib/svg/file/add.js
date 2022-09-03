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
var AddFileSVG = /*#__PURE__*/ function(Element) {
    _inherits(AddFileSVG, Element);
    var _super = _createSuper(AddFileSVG);
    function AddFileSVG() {
        _classCallCheck(this, AddFileSVG);
        return _super.apply(this, arguments);
    }
    _createClass(AddFileSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", {
                    stroke: "none"
                }, /*#__PURE__*/ React.createElement("rect", {
                    width: "16",
                    height: "2",
                    x: "0",
                    y: "23"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "10",
                    x: "14",
                    y: "13"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "15",
                    x: "0",
                    y: "8"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "9",
                    height: "2",
                    x: "0",
                    y: "6"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "M 9,6 16,13 H 9 Z"
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
    return AddFileSVG;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(AddFileSVG, "tagName", "svg");
_defineProperty(AddFileSVG, "defaultProperties", {
    viewBox: "0 0 25 25",
    className: "add-file"
});
var _default = (0, _easyWithStyle.default)(AddFileSVG)(_templateObject(), _common.commonColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvZmlsZS9hZGQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBjb21tb25Db2xvdXIgfSBmcm9tIFwiLi4vLi4vc2NoZW1lL2NvbW1vblwiO1xuXG5jbGFzcyBBZGRGaWxlU1ZHIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGcgc3Ryb2tlPVwibm9uZVwiPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMlwiIHg9XCIwXCIgeT1cIjIzXCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMTBcIiB4PVwiMTRcIiB5PVwiMTNcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIxNVwiIHg9XCIwXCIgeT1cIjhcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjlcIiBoZWlnaHQ9XCIyXCIgeD1cIjBcIiB5PVwiNlwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDksNiAxNiwxMyBIIDkgWlwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjhcIiB4PVwiMTQuNVwiIHk9XCIyLjVcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjhcIiBoZWlnaHQ9XCIyXCIgeD1cIjExLjVcIiB5PVwiNS41XCIgLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic3ZnXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHZpZXdCb3g6IFwiMCAwIDI1IDI1XCIsXG4gICAgY2xhc3NOYW1lOiBcImFkZC1maWxlXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEFkZEZpbGVTVkcpYFxuXG4gIHN0cm9rZTogJHtjb21tb25Db2xvdXJ9O1xuICBcbmA7XG4iXSwibmFtZXMiOlsiQWRkRmlsZVNWRyIsImNoaWxkRWxlbWVudHMiLCJnIiwic3Ryb2tlIiwicmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJwYXRoIiwiZCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ2aWV3Qm94IiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiY29tbW9uQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBaUNiLFNBSUU7OztlQUpGLFFBSUU7OztrRUFuQ29CLGlCQUFpQjtvQkFFZixNQUFNO3NCQUVELHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRCxJQUFBLEFBQU1BLFVBQVUsaUJBeUJiLEFBekJIO2NBQU1BLFVBQVU7OEJBQVZBLFVBQVU7YUFBVkEsVUFBVTs4QkFBVkEsVUFBVTs7O2lCQUFWQSxVQUFVOztZQUNkQyxHQUFhLEVBQWJBLGVBQWE7bUJBQWJBLFNBQUFBLGFBQWEsR0FBRztnQkFDZCxxQkFFRSxvQkFBQ0MsR0FBQztvQkFBQ0MsTUFBTSxFQUFDLE1BQU07aUNBQ2Qsb0JBQUNDLE1BQUk7b0JBQUNDLEtBQUssRUFBQyxJQUFJO29CQUFDQyxNQUFNLEVBQUMsR0FBRztvQkFBQ0MsQ0FBQyxFQUFDLEdBQUc7b0JBQUNDLENBQUMsRUFBQyxJQUFJO2tCQUFHLGdCQUMzQyxvQkFBQ0osTUFBSTtvQkFBQ0MsS0FBSyxFQUFDLEdBQUc7b0JBQUNDLE1BQU0sRUFBQyxJQUFJO29CQUFDQyxDQUFDLEVBQUMsSUFBSTtvQkFBQ0MsQ0FBQyxFQUFDLElBQUk7a0JBQUcsZ0JBQzVDLG9CQUFDSixNQUFJO29CQUFDQyxLQUFLLEVBQUMsR0FBRztvQkFBQ0MsTUFBTSxFQUFDLElBQUk7b0JBQUNDLENBQUMsRUFBQyxHQUFHO29CQUFDQyxDQUFDLEVBQUMsR0FBRztrQkFBRyxnQkFDMUMsb0JBQUNKLE1BQUk7b0JBQUNDLEtBQUssRUFBQyxHQUFHO29CQUFDQyxNQUFNLEVBQUMsR0FBRztvQkFBQ0MsQ0FBQyxFQUFDLEdBQUc7b0JBQUNDLENBQUMsRUFBQyxHQUFHO2tCQUFHLGdCQUN6QyxvQkFBQ0MsTUFBSTtvQkFBQ0MsQ0FBQyxFQUFDLG1CQUFtQjtrQkFBRyxnQkFDOUIsb0JBQUNOLE1BQUk7b0JBQUNDLEtBQUssRUFBQyxHQUFHO29CQUFDQyxNQUFNLEVBQUMsR0FBRztvQkFBQ0MsQ0FBQyxFQUFDLE1BQU07b0JBQUNDLENBQUMsRUFBQyxLQUFLO2tCQUFHLGdCQUM5QyxvQkFBQ0osTUFBSTtvQkFBQ0MsS0FBSyxFQUFDLEdBQUc7b0JBQUNDLE1BQU0sRUFBQyxHQUFHO29CQUFDQyxDQUFDLEVBQUMsTUFBTTtvQkFBQ0MsQ0FBQyxFQUFDLEtBQUs7a0JBQUcsQ0FDNUMsQ0FFSjtZQUNKLENBQUM7OztXQWZHUixVQUFVO0NBdUJmLGtCQXZCd0JXLEtBQU8sUUFBQSxFQXVCL0I7QUFOQyxnQkFqQklYLFVBQVUsRUFpQlBZLFNBQU8sRUFBRyxLQUFLLENBQUM7QUFFdkIsZ0JBbkJJWixVQUFVLEVBbUJQYSxtQkFBaUIsRUFBRztJQUN6QkMsT0FBTyxFQUFFLFdBQVc7SUFDcEJDLFNBQVMsRUFBRSxVQUFVO0NBQ3RCLENBQUM7SUFHSixRQUlFLEdBSmFDLElBQUFBLGNBQVMsUUFBQSxFQUFDaEIsVUFBVSxDQUFDLG9CQUV4QmlCLE9BQVksYUFBQSJ9