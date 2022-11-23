"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ExportToolbarSVG;
    }
});
var _toolbar = /*#__PURE__*/ _interopRequireDefault(require("../../svg/toolbar"));
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
var ExportToolbarSVG = /*#__PURE__*/ function(ToolbarSVG) {
    _inherits(ExportToolbarSVG, ToolbarSVG);
    var _super = _createSuper(ExportToolbarSVG);
    function ExportToolbarSVG() {
        _classCallCheck(this, ExportToolbarSVG);
        return _super.apply(this, arguments);
    }
    _createClass(ExportToolbarSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", {
                    stroke: "none"
                }, /*#__PURE__*/ React.createElement("path", {
                    d: "m 13.229167,4.6075551 v 2.5648434 a 5.9531248,5.7406248 0 0 1 5.291665,5.7022545 5.9531248,5.7406248 0 0 1 -5.953124,5.740624 5.9531248,5.7406248 0 0 1 -5.9133336,-5.102776 H 3.9971723 a 8.5989576,8.2920132 0 0 0 8.5705357,7.654166 8.5989576,8.2920132 0 0 0 8.598959,-8.292014 8.5989576,8.2920132 0 0 0 -7.9375,-8.2670979 z"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "M 13.229167,2.0312503 V 9.6854171 L 7.9375001,5.8583336 Z"
                }));
            }
        }
    ]);
    return ExportToolbarSVG;
}(_toolbar.default);
_defineProperty(ExportToolbarSVG, "defaultProperties", {
    className: "export"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9leHBvcnQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb29sYmFyU1ZHIGZyb20gXCIuLi8uLi9zdmcvdG9vbGJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBvcnRUb29sYmFyU1ZHIGV4dGVuZHMgVG9vbGJhclNWRyB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGcgc3Ryb2tlPVwibm9uZVwiPlxuICAgICAgICA8cGF0aCBkPVwibSAxMy4yMjkxNjcsNC42MDc1NTUxIHYgMi41NjQ4NDM0IGEgNS45NTMxMjQ4LDUuNzQwNjI0OCAwIDAgMSA1LjI5MTY2NSw1LjcwMjI1NDUgNS45NTMxMjQ4LDUuNzQwNjI0OCAwIDAgMSAtNS45NTMxMjQsNS43NDA2MjQgNS45NTMxMjQ4LDUuNzQwNjI0OCAwIDAgMSAtNS45MTMzMzM2LC01LjEwMjc3NiBIIDMuOTk3MTcyMyBhIDguNTk4OTU3Niw4LjI5MjAxMzIgMCAwIDAgOC41NzA1MzU3LDcuNjU0MTY2IDguNTk4OTU3Niw4LjI5MjAxMzIgMCAwIDAgOC41OTg5NTksLTguMjkyMDE0IDguNTk4OTU3Niw4LjI5MjAxMzIgMCAwIDAgLTcuOTM3NSwtOC4yNjcwOTc5IHpcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTSAxMy4yMjkxNjcsMi4wMzEyNTAzIFYgOS42ODU0MTcxIEwgNy45Mzc1MDAxLDUuODU4MzMzNiBaXCIvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZXhwb3J0XCJcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRXhwb3J0VG9vbGJhclNWRyIsImNoaWxkRWxlbWVudHMiLCJnIiwic3Ryb2tlIiwicGF0aCIsImQiLCJUb29sYmFyU1ZHIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzREQUZFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVSLElBQUEsQUFBTUEsaUNBQU47Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0I7Z0JBQ2QscUJBRUUsb0JBQUNDO29CQUFFQyxRQUFPO2lDQUNSLG9CQUFDQztvQkFBS0MsR0FBRTtrQ0FDUixvQkFBQ0Q7b0JBQUtDLEdBQUU7O1lBSWQ7OztXQVZtQkw7RUFBeUJNLGdCQUFVO0FBWXRELGdCQVptQk4sa0JBWVpPLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=