"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TopOpenFoldSVG;
    }
});
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
var TopOpenFoldSVG = /*#__PURE__*/ function(FoldSVG) {
    _inherits(TopOpenFoldSVG, FoldSVG);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvZm9sZC90b3BPcGVuLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRm9sZFNWRyBmcm9tIFwiLi4vLi4vc3ZnL2ZvbGRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wT3BlbkZvbGRTVkcgZXh0ZW5kcyBGb2xkU1ZHIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Zz5cbiAgICAgICAgPHBhdGggZD1cIk0gNy45OTk5OTc1LDEzLjU4OTA4OSAyLjA0MjE1MDUsNy44MTU2MTk5IGMgMCwwIDAsLTUuNzczNDY5NCAwLC01Ljc3MzQ2OTQgSCAxMy45NTc4NDkgdiA1Ljc3MzQ2OTQgelwiIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjQ7cGFpbnQtb3JkZXI6bWFya2VycyBzdHJva2UgZmlsbDtzdHJva2UtbGluZWpvaW46cm91bmQ7XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0gMy45OTk5OTk5LDQuOTk5OTk5OSBIIDEyXCIgc3R5bGU9XCJzdHJva2Utd2lkdGg6M1wiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHZpZXdCb3g6IFwiMCAwIDE2IDE2XCIsXG4gICAgY2xhc3NOYW1lOiBcInRvcC1vcGVuXCJcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVG9wT3BlbkZvbGRTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInBhdGgiLCJkIiwic3R5bGUiLCJGb2xkU1ZHIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ2aWV3Qm94IiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozt5REFGRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTCxJQUFBLEFBQU1BLCtCQUFOO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztpQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLHFCQUVFLG9CQUFDQyx5QkFDQyxvQkFBQ0M7b0JBQUtDLEdBQUU7b0JBQXNHQyxPQUFNO2tDQUNwSCxvQkFBQ0Y7b0JBQUtDLEdBQUU7b0JBQTZCQyxPQUFNOztZQUlqRDs7O1dBVm1CTDtFQUF1Qk0sYUFBTztBQVlqRCxnQkFabUJOLGdCQVlaTyxxQkFBb0I7SUFDekJDLFNBQVM7SUFDVEMsV0FBVztBQUNiIn0=