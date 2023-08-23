"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FindInFilesToolbarSVG;
    }
});
var _toolbar = /*#__PURE__*/ _interop_require_default(require("../../svg/toolbar"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var FindInFilesToolbarSVG = /*#__PURE__*/ function(ToolbarSVG) {
    _inherits(FindInFilesToolbarSVG, ToolbarSVG);
    var _super = _create_super(FindInFilesToolbarSVG);
    function FindInFilesToolbarSVG() {
        _class_call_check(this, FindInFilesToolbarSVG);
        return _super.apply(this, arguments);
    }
    _create_class(FindInFilesToolbarSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    id: "path1073",
                    style: "fill:#000000;stroke:#ba0055;stroke-width:0;paint-order:markers stroke fill",
                    d: "M 7.4972168 0 A 7.4972506 7.5782714 0 0 0 0 7.5783488 A 7.4972506 7.5782714 0 0 0 7.4972168 15.156698 A 7.4972506 7.5782714 0 0 0 14.994434 7.5783488 A 7.4972506 7.5782714 0 0 0 7.4972168 0 z M 7.4998006 1.9998779 A 5.4999995 5.4999995 0 0 1 13.00024 7.4998006 A 5.4999995 5.4999995 0 0 1 7.4998006 13.00024 A 5.4999995 5.4999995 0 0 1 1.9998779 7.4998006 A 5.4999995 5.4999995 0 0 1 7.4998006 1.9998779 z "
                }), /*#__PURE__*/ React.createElement("path", {
                    id: "rect1079",
                    style: "stroke:#ba0055;stroke-width:0;paint-order:markers stroke fill",
                    d: "M 14.000001,6.5000005 H 16 v 1.9999991 h -1.999999 z"
                }), /*#__PURE__*/ React.createElement("path", {
                    id: "rect1081",
                    style: "stroke:#ba0055;stroke-width:0;paint-order:markers stroke fill",
                    d: "m 15.999999,6 h 7 v 3 h -7 z"
                }), /*#__PURE__*/ React.createElement("path", {
                    id: "path1083",
                    style: "stroke:#ba0055;stroke-width:0;paint-order:markers stroke fill",
                    d: "M 24.499999,7.499999 A 1.4999994,1.4999995 0 0 1 23,8.9999986 1.4999994,1.4999995 0 0 1 21.500001,7.499999 1.4999994,1.4999995 0 0 1 23,5.9999995 1.4999994,1.4999995 0 0 1 24.499999,7.499999 Z"
                }));
            }
        }
    ]);
    return FindInFilesToolbarSVG;
}(_toolbar.default);
_define_property(FindInFilesToolbarSVG, "defaultProperties", {
    className: "find-in-files"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9maW5kSW5GaWxlcy5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRvb2xiYXJTVkcgZnJvbSBcIi4uLy4uL3N2Zy90b29sYmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbmRJbkZpbGVzVG9vbGJhclNWRyBleHRlbmRzIFRvb2xiYXJTVkcge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGlkPVwicGF0aDEwNzNcIlxuICAgICAgICAgIHN0eWxlPVwiZmlsbDojMDAwMDAwO3N0cm9rZTojYmEwMDU1O3N0cm9rZS13aWR0aDowO3BhaW50LW9yZGVyOm1hcmtlcnMgc3Ryb2tlIGZpbGxcIlxuICAgICAgICAgIGQ9XCJNIDcuNDk3MjE2OCAwIEEgNy40OTcyNTA2IDcuNTc4MjcxNCAwIDAgMCAwIDcuNTc4MzQ4OCBBIDcuNDk3MjUwNiA3LjU3ODI3MTQgMCAwIDAgNy40OTcyMTY4IDE1LjE1NjY5OCBBIDcuNDk3MjUwNiA3LjU3ODI3MTQgMCAwIDAgMTQuOTk0NDM0IDcuNTc4MzQ4OCBBIDcuNDk3MjUwNiA3LjU3ODI3MTQgMCAwIDAgNy40OTcyMTY4IDAgeiBNIDcuNDk5ODAwNiAxLjk5OTg3NzkgQSA1LjQ5OTk5OTUgNS40OTk5OTk1IDAgMCAxIDEzLjAwMDI0IDcuNDk5ODAwNiBBIDUuNDk5OTk5NSA1LjQ5OTk5OTUgMCAwIDEgNy40OTk4MDA2IDEzLjAwMDI0IEEgNS40OTk5OTk1IDUuNDk5OTk5NSAwIDAgMSAxLjk5OTg3NzkgNy40OTk4MDA2IEEgNS40OTk5OTk1IDUuNDk5OTk5NSAwIDAgMSA3LjQ5OTgwMDYgMS45OTk4Nzc5IHogXCIgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBpZD1cInJlY3QxMDc5XCJcbiAgICAgICAgICBzdHlsZT1cInN0cm9rZTojYmEwMDU1O3N0cm9rZS13aWR0aDowO3BhaW50LW9yZGVyOm1hcmtlcnMgc3Ryb2tlIGZpbGxcIlxuICAgICAgICAgIGQ9XCJNIDE0LjAwMDAwMSw2LjUwMDAwMDUgSCAxNiB2IDEuOTk5OTk5MSBoIC0xLjk5OTk5OSB6XCIgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBpZD1cInJlY3QxMDgxXCJcbiAgICAgICAgICBzdHlsZT1cInN0cm9rZTojYmEwMDU1O3N0cm9rZS13aWR0aDowO3BhaW50LW9yZGVyOm1hcmtlcnMgc3Ryb2tlIGZpbGxcIlxuICAgICAgICAgIGQ9XCJtIDE1Ljk5OTk5OSw2IGggNyB2IDMgaCAtNyB6XCIgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBpZD1cInBhdGgxMDgzXCJcbiAgICAgICAgICBzdHlsZT1cInN0cm9rZTojYmEwMDU1O3N0cm9rZS13aWR0aDowO3BhaW50LW9yZGVyOm1hcmtlcnMgc3Ryb2tlIGZpbGxcIlxuICAgICAgICAgIGQ9XCJNIDI0LjQ5OTk5OSw3LjQ5OTk5OSBBIDEuNDk5OTk5NCwxLjQ5OTk5OTUgMCAwIDEgMjMsOC45OTk5OTg2IDEuNDk5OTk5NCwxLjQ5OTk5OTUgMCAwIDEgMjEuNTAwMDAxLDcuNDk5OTk5IDEuNDk5OTk5NCwxLjQ5OTk5OTUgMCAwIDEgMjMsNS45OTk5OTk1IDEuNDk5OTk5NCwxLjQ5OTk5OTUgMCAwIDEgMjQuNDk5OTk5LDcuNDk5OTk5IFpcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZmluZC1pbi1maWxlc1wiXG4gIH07XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkZpbmRJbkZpbGVzVG9vbGJhclNWRyIsImNoaWxkRWxlbWVudHMiLCJnIiwicGF0aCIsImlkIiwic3R5bGUiLCJkIiwiVG9vbGJhclNWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozs4REFGRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUixJQUFBLEFBQU1BLHNDQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UscUJBRUUsb0JBQUNDLHlCQUNDLG9CQUFDQztvQkFDQ0MsSUFBRztvQkFDSEMsT0FBTTtvQkFDTkMsR0FBRTtrQ0FDSixvQkFBQ0g7b0JBQ0NDLElBQUc7b0JBQ0hDLE9BQU07b0JBQ05DLEdBQUU7a0NBQ0osb0JBQUNIO29CQUNDQyxJQUFHO29CQUNIQyxPQUFNO29CQUNOQyxHQUFFO2tDQUNKLG9CQUFDSDtvQkFDQ0MsSUFBRztvQkFDSEMsT0FBTTtvQkFDTkMsR0FBRTs7WUFJVjs7O1dBeEJtQk47RUFBOEJPLGdCQUFVO0FBMEIzRCxpQkExQm1CUCx1QkEwQlpRLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=