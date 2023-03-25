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
var _fold = /*#__PURE__*/ _interopRequireDefault(require("../../svg/fold"));
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
        "\n  \n  top: 0;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var TopOpenFoldSVG = /*#__PURE__*/ function(Fold) {
    _inherits(TopOpenFoldSVG, Fold);
    var _super = _createSuper(TopOpenFoldSVG);
    function TopOpenFoldSVG() {
        _classCallCheck(this, TopOpenFoldSVG);
        return _super.apply(this, arguments);
    }
    _createClass(TopOpenFoldSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    d: "M 7.9999975,13.589089 2.0421505,7.8156199 c 0,0 0,-5.7734694 0,-5.7734694 H 13.957849 v 5.7734694 z",
                    style: "stroke-width:4;paint-order:markers stroke fill;stroke-linejoin:round;"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "M 3.9999999,4.9999999 H 12",
                    style: "stroke-width:3"
                }));
            }
        }
    ]);
    return TopOpenFoldSVG;
}(_fold.default);
_defineProperty(TopOpenFoldSVG, "defaultProperties", {
    viewBox: "0 0 16 16",
    className: "top-open"
});
var _default = (0, _easyWithStyle.default)(TopOpenFoldSVG)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvZm9sZC90b3BPcGVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgRm9sZCBmcm9tIFwiLi4vLi4vc3ZnL2ZvbGRcIjtcblxuY2xhc3MgVG9wT3BlbkZvbGRTVkcgZXh0ZW5kcyBGb2xkIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Zz5cbiAgICAgICAgPHBhdGggZD1cIk0gNy45OTk5OTc1LDEzLjU4OTA4OSAyLjA0MjE1MDUsNy44MTU2MTk5IGMgMCwwIDAsLTUuNzczNDY5NCAwLC01Ljc3MzQ2OTQgSCAxMy45NTc4NDkgdiA1Ljc3MzQ2OTQgelwiIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjQ7cGFpbnQtb3JkZXI6bWFya2VycyBzdHJva2UgZmlsbDtzdHJva2UtbGluZWpvaW46cm91bmQ7XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0gMy45OTk5OTk5LDQuOTk5OTk5OSBIIDEyXCIgc3R5bGU9XCJzdHJva2Utd2lkdGg6M1wiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHZpZXdCb3g6IFwiMCAwIDE2IDE2XCIsXG4gICAgY2xhc3NOYW1lOiBcInRvcC1vcGVuXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFRvcE9wZW5Gb2xkU1ZHKWBcbiAgXG4gIHRvcDogMDtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIlRvcE9wZW5Gb2xkU1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJwYXRoIiwiZCIsInN0eWxlIiwiRm9sZCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwidmlld0JveCIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBd0JBOzs7ZUFBQTs7O2tFQXRCc0I7eURBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQixJQUFBLEFBQU1BLCtCQWtCSCxBQWxCSDtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7aUJBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLHFCQUVFLG9CQUFDQyx5QkFDQyxvQkFBQ0M7b0JBQUtDLEdBQUU7b0JBQXNHQyxPQUFNO2tDQUNwSCxvQkFBQ0Y7b0JBQUtDLEdBQUU7b0JBQTZCQyxPQUFNOztZQUlqRDs7O1dBVklMO0VBQXVCTSxhQUFJO0FBWS9CLGdCQVpJTixnQkFZR08scUJBQW9CO0lBQ3pCQyxTQUFTO0lBQ1RDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNWIn0=