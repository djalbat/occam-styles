"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RefreshToolbarSVG;
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
var RefreshToolbarSVG = /*#__PURE__*/ function(ToolbarSVG) {
    _inherits(RefreshToolbarSVG, ToolbarSVG);
    var _super = _createSuper(RefreshToolbarSVG);
    function RefreshToolbarSVG() {
        _classCallCheck(this, RefreshToolbarSVG);
        return _super.apply(this, arguments);
    }
    _createClass(RefreshToolbarSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", {
                    stroke: "none"
                }, /*#__PURE__*/ React.createElement("path", {
                    d: "m 13.129426,5.3154487 v 2.3051479 a 5.0357433,5.159375 0 0 1 4.476215,5.1248894 5.0357433,5.159375 0 0 1 -5.035743,5.159375 5.0357433,5.159375 0 0 1 -5.002084,-4.58611 H 5.320089 a 7.2738511,7.4524302 0 0 0 7.249809,6.879166 7.2738511,7.4524302 0 0 0 7.273852,-7.452431 7.2738511,7.4524302 0 0 0 -6.714324,-7.4300373 z"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "M 13.129426,3 V 9.879167 L 8.653209,6.4395834 Z"
                }));
            }
        }
    ]);
    return RefreshToolbarSVG;
}(_toolbar.default);
_defineProperty(RefreshToolbarSVG, "defaultProperties", {
    className: "refresh"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9yZWZyZXNoLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVG9vbGJhclNWRyBmcm9tIFwiLi4vLi4vc3ZnL3Rvb2xiYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVmcmVzaFRvb2xiYXJTVkcgZXh0ZW5kcyBUb29sYmFyU1ZHIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZyBzdHJva2U9XCJub25lXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJtIDEzLjEyOTQyNiw1LjMxNTQ0ODcgdiAyLjMwNTE0NzkgYSA1LjAzNTc0MzMsNS4xNTkzNzUgMCAwIDEgNC40NzYyMTUsNS4xMjQ4ODk0IDUuMDM1NzQzMyw1LjE1OTM3NSAwIDAgMSAtNS4wMzU3NDMsNS4xNTkzNzUgNS4wMzU3NDMzLDUuMTU5Mzc1IDAgMCAxIC01LjAwMjA4NCwtNC41ODYxMSBIIDUuMzIwMDg5IGEgNy4yNzM4NTExLDcuNDUyNDMwMiAwIDAgMCA3LjI0OTgwOSw2Ljg3OTE2NiA3LjI3Mzg1MTEsNy40NTI0MzAyIDAgMCAwIDcuMjczODUyLC03LjQ1MjQzMSA3LjI3Mzg1MTEsNy40NTI0MzAyIDAgMCAwIC02LjcxNDMyNCwtNy40MzAwMzczIHpcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTSAxMy4xMjk0MjYsMyBWIDkuODc5MTY3IEwgOC42NTMyMDksNi40Mzk1ODM0IFpcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicmVmcmVzaFwiXG4gIH07XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJlZnJlc2hUb29sYmFyU1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJzdHJva2UiLCJwYXRoIiwiZCIsIlRvb2xiYXJTVkciLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7NERBRkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVIsSUFBQSxBQUFNQSxrQ0FBTjtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7aUJBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxxQkFFRSxvQkFBQ0M7b0JBQUVDLFFBQU87aUNBQ1Isb0JBQUNDO29CQUFLQyxHQUFFO2tDQUNSLG9CQUFDRDtvQkFBS0MsR0FBRTs7WUFJZDs7O1dBVm1CTDtFQUEwQk0sZ0JBQVU7QUFZdkQsZ0JBWm1CTixtQkFZWk8scUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==