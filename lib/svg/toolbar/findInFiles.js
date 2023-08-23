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
                    d: "m 14.932939,6.5000005 a 7.4999995,7.4999995 0 0 1 0.06718,0.999939 7.4999995,7.4999995 0 0 1 -0.07028,0.999939 h 2.070158 v -1.999878 z m 7.067061,-1 V 9.500273 A 1.9996035,1.9999995 0 0 0 23.999999,7.5003955 1.9996035,1.9999995 0 0 0 22,5.5000005 Z m -5,0 h 4.999999 V 9.4999993 H 17 Z M 7.4998006,0 A 7.4999995,7.4999995 0 0 0 0,7.4998006 7.4999995,7.4999995 0 0 0 7.4998006,15.000118 7.4999995,7.4999995 0 0 0 15.000118,7.4998006 7.4999995,7.4999995 0 0 0 7.4998006,0 Z m 0,1.9998779 A 5.4999995,5.4999995 0 0 1 13.00024,7.4998006 5.4999995,5.4999995 0 0 1 7.4998006,13.00024 5.4999995,5.4999995 0 0 1 1.9998779,7.4998006 5.4999995,5.4999995 0 0 1 7.4998006,1.9998779 Z"
                }));
            }
        }
    ]);
    return FindInFilesToolbarSVG;
}(_toolbar.default);
_define_property(FindInFilesToolbarSVG, "defaultProperties", {
    className: "find-in-files"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9maW5kSW5GaWxlcy5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRvb2xiYXJTVkcgZnJvbSBcIi4uLy4uL3N2Zy90b29sYmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbmRJbkZpbGVzVG9vbGJhclNWRyBleHRlbmRzIFRvb2xiYXJTVkcge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aCBkPVwibSAxNC45MzI5MzksNi41MDAwMDA1IGEgNy40OTk5OTk1LDcuNDk5OTk5NSAwIDAgMSAwLjA2NzE4LDAuOTk5OTM5IDcuNDk5OTk5NSw3LjQ5OTk5OTUgMCAwIDEgLTAuMDcwMjgsMC45OTk5MzkgaCAyLjA3MDE1OCB2IC0xLjk5OTg3OCB6IG0gNy4wNjcwNjEsLTEgViA5LjUwMDI3MyBBIDEuOTk5NjAzNSwxLjk5OTk5OTUgMCAwIDAgMjMuOTk5OTk5LDcuNTAwMzk1NSAxLjk5OTYwMzUsMS45OTk5OTk1IDAgMCAwIDIyLDUuNTAwMDAwNSBaIG0gLTUsMCBoIDQuOTk5OTk5IFYgOS40OTk5OTkzIEggMTcgWiBNIDcuNDk5ODAwNiwwIEEgNy40OTk5OTk1LDcuNDk5OTk5NSAwIDAgMCAwLDcuNDk5ODAwNiA3LjQ5OTk5OTUsNy40OTk5OTk1IDAgMCAwIDcuNDk5ODAwNiwxNS4wMDAxMTggNy40OTk5OTk1LDcuNDk5OTk5NSAwIDAgMCAxNS4wMDAxMTgsNy40OTk4MDA2IDcuNDk5OTk5NSw3LjQ5OTk5OTUgMCAwIDAgNy40OTk4MDA2LDAgWiBtIDAsMS45OTk4Nzc5IEEgNS40OTk5OTk1LDUuNDk5OTk5NSAwIDAgMSAxMy4wMDAyNCw3LjQ5OTgwMDYgNS40OTk5OTk1LDUuNDk5OTk5NSAwIDAgMSA3LjQ5OTgwMDYsMTMuMDAwMjQgNS40OTk5OTk1LDUuNDk5OTk5NSAwIDAgMSAxLjk5OTg3NzksNy40OTk4MDA2IDUuNDk5OTk5NSw1LjQ5OTk5OTUgMCAwIDEgNy40OTk4MDA2LDEuOTk5ODc3OSBaXCIgLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZpbmQtaW4tZmlsZXNcIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJGaW5kSW5GaWxlc1Rvb2xiYXJTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInBhdGgiLCJkIiwiVG9vbGJhclNWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozs4REFGRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUixJQUFBLEFBQU1BLHNDQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UscUJBRUUsb0JBQUNDLHlCQUNDLG9CQUFDQztvQkFBS0MsR0FBRTs7WUFJZDs7O1dBVG1CSjtFQUE4QkssZ0JBQVU7QUFXM0QsaUJBWG1CTCx1QkFXWk0scUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==