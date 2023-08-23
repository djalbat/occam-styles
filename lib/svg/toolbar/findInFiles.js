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
                    d: "m 15.462926,16.048776 a 7.4999181,7.4999995 0 0 1 -0.659553,0.754567 7.4999181,7.4999995 0 0 1 -0.756751,0.657368 l 1.463806,1.463823 1.414113,-1.414128 z m 5.704212,4.29006 -2.828589,2.82862 a 1.9995924,1.9999889 43.43161 0 0 2.828309,8.6e-5 1.9995924,1.9999889 43.43161 0 0 2.8e-4,-2.828706 z m -3.535496,-3.535534 3.535495,3.535534 -2.828395,2.828426 -3.535496,-3.535533 z M 14.803105,6.1965586 a 7.4999181,7.4999995 0 0 0 -10.6062051,0 7.4999181,7.4999995 0 0 0 -3.654e-4,10.6066854 7.4999181,7.4999995 0 0 0 10.6069355,0 7.4999181,7.4999995 0 0 0 -3.65e-4,-10.6066854 z m -1.414112,1.4141272 a 5.4999398,5.4999995 0 0 1 3.65e-4,7.7784302 5.4999398,5.4999995 0 0 1 -7.7787117,0 5.4999398,5.4999995 0 0 1 3.654e-4,-7.7784302 5.4999398,5.4999995 0 0 1 7.7779813,0 z"
                }));
            }
        }
    ]);
    return FindInFilesToolbarSVG;
}(_toolbar.default);
_define_property(FindInFilesToolbarSVG, "defaultProperties", {
    className: "find-in-files"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9maW5kSW5GaWxlcy5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRvb2xiYXJTVkcgZnJvbSBcIi4uLy4uL3N2Zy90b29sYmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbmRJbkZpbGVzVG9vbGJhclNWRyBleHRlbmRzIFRvb2xiYXJTVkcge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aCBkPVwibSAxNS40NjI5MjYsMTYuMDQ4Nzc2IGEgNy40OTk5MTgxLDcuNDk5OTk5NSAwIDAgMSAtMC42NTk1NTMsMC43NTQ1NjcgNy40OTk5MTgxLDcuNDk5OTk5NSAwIDAgMSAtMC43NTY3NTEsMC42NTczNjggbCAxLjQ2MzgwNiwxLjQ2MzgyMyAxLjQxNDExMywtMS40MTQxMjggeiBtIDUuNzA0MjEyLDQuMjkwMDYgLTIuODI4NTg5LDIuODI4NjIgYSAxLjk5OTU5MjQsMS45OTk5ODg5IDQzLjQzMTYxIDAgMCAyLjgyODMwOSw4LjZlLTUgMS45OTk1OTI0LDEuOTk5OTg4OSA0My40MzE2MSAwIDAgMi44ZS00LC0yLjgyODcwNiB6IG0gLTMuNTM1NDk2LC0zLjUzNTUzNCAzLjUzNTQ5NSwzLjUzNTUzNCAtMi44MjgzOTUsMi44Mjg0MjYgLTMuNTM1NDk2LC0zLjUzNTUzMyB6IE0gMTQuODAzMTA1LDYuMTk2NTU4NiBhIDcuNDk5OTE4MSw3LjQ5OTk5OTUgMCAwIDAgLTEwLjYwNjIwNTEsMCA3LjQ5OTkxODEsNy40OTk5OTk1IDAgMCAwIC0zLjY1NGUtNCwxMC42MDY2ODU0IDcuNDk5OTE4MSw3LjQ5OTk5OTUgMCAwIDAgMTAuNjA2OTM1NSwwIDcuNDk5OTE4MSw3LjQ5OTk5OTUgMCAwIDAgLTMuNjVlLTQsLTEwLjYwNjY4NTQgeiBtIC0xLjQxNDExMiwxLjQxNDEyNzIgYSA1LjQ5OTkzOTgsNS40OTk5OTk1IDAgMCAxIDMuNjVlLTQsNy43Nzg0MzAyIDUuNDk5OTM5OCw1LjQ5OTk5OTUgMCAwIDEgLTcuNzc4NzExNywwIDUuNDk5OTM5OCw1LjQ5OTk5OTUgMCAwIDEgMy42NTRlLTQsLTcuNzc4NDMwMiA1LjQ5OTkzOTgsNS40OTk5OTk1IDAgMCAxIDcuNzc3OTgxMywwIHpcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZmluZC1pbi1maWxlc1wiXG4gIH07XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkZpbmRJbkZpbGVzVG9vbGJhclNWRyIsImNoaWxkRWxlbWVudHMiLCJnIiwicGF0aCIsImQiLCJUb29sYmFyU1ZHIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzhEQUZFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVSLElBQUEsQUFBTUEsc0NBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxxQkFFRSxvQkFBQ0MseUJBQ0Msb0JBQUNDO29CQUFLQyxHQUFFOztZQUlkOzs7V0FUbUJKO0VBQThCSyxnQkFBVTtBQVczRCxpQkFYbUJMLHVCQVdaTSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9