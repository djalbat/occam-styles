"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FindInFileToolbarSVG;
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
var FindInFileToolbarSVG = /*#__PURE__*/ function(ToolbarSVG) {
    _inherits(FindInFileToolbarSVG, ToolbarSVG);
    var _super = _create_super(FindInFileToolbarSVG);
    function FindInFileToolbarSVG() {
        _class_call_check(this, FindInFileToolbarSVG);
        return _super.apply(this, arguments);
    }
    _create_class(FindInFileToolbarSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    d: "m 13.462926,16.048775 a 7.4999181,7.4999995 0 0 1 -0.659553,0.754567 7.4999181,7.4999995 0 0 1 -0.756751,0.657368 l 1.463806,1.463823 1.414113,-1.414128 z m 5.704212,4.29006 -2.828589,2.82862 a 1.9995924,1.9999889 43.43161 0 0 2.828309,8.6e-5 1.9995924,1.9999889 43.43161 0 0 2.8e-4,-2.828706 z m -3.535496,-3.535534 3.535495,3.535534 -2.828395,2.828426 -3.535496,-3.535533 z M 12.803105,6.1965584 a 7.4999181,7.4999995 0 0 0 -10.606205,0 7.4999181,7.4999995 0 0 0 -3.66e-4,10.6066846 7.4999181,7.4999995 0 0 0 10.606936,0 7.4999181,7.4999995 0 0 0 -3.65e-4,-10.6066846 z m -1.414112,1.4141272 a 5.4999398,5.4999995 0 0 1 3.65e-4,7.7784294 5.4999398,5.4999995 0 0 1 -7.778712,0 5.4999398,5.4999995 0 0 1 3.65e-4,-7.7784294 5.4999398,5.4999995 0 0 1 7.777982,0 z"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "M 9.000001,10.000001 H 14 V 13 H 9.000001 Z m 9e-7,-4.0000005 H 12.000002 V 12 H 9.0000019 Z M 15.5,1.3478702e-6 19.999998,4.4999996 H 15.5 Z M 11.000001,5.3335864e-7 H 15.5 V 2.0000006 H 11.000001 Z M 11.000002,2.0000006 h 1.999999 v 4.9999988 h -1.999999 z m 6.999999,2.4999999 H 20 v 4.499999 h -1.999999 z m -4,4.4999999 H 20 V 11 h -5.999999 z"
                }));
            }
        }
    ]);
    return FindInFileToolbarSVG;
}(_toolbar.default);
_define_property(FindInFileToolbarSVG, "defaultProperties", {
    className: "find-in-file"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9maW5kSW5GaWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVG9vbGJhclNWRyBmcm9tIFwiLi4vLi4vc3ZnL3Rvb2xiYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmluZEluRmlsZVRvb2xiYXJTVkcgZXh0ZW5kcyBUb29sYmFyU1ZHIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Zz5cbiAgICAgICAgPHBhdGggZD1cIm0gMTMuNDYyOTI2LDE2LjA0ODc3NSBhIDcuNDk5OTE4MSw3LjQ5OTk5OTUgMCAwIDEgLTAuNjU5NTUzLDAuNzU0NTY3IDcuNDk5OTE4MSw3LjQ5OTk5OTUgMCAwIDEgLTAuNzU2NzUxLDAuNjU3MzY4IGwgMS40NjM4MDYsMS40NjM4MjMgMS40MTQxMTMsLTEuNDE0MTI4IHogbSA1LjcwNDIxMiw0LjI5MDA2IC0yLjgyODU4OSwyLjgyODYyIGEgMS45OTk1OTI0LDEuOTk5OTg4OSA0My40MzE2MSAwIDAgMi44MjgzMDksOC42ZS01IDEuOTk5NTkyNCwxLjk5OTk4ODkgNDMuNDMxNjEgMCAwIDIuOGUtNCwtMi44Mjg3MDYgeiBtIC0zLjUzNTQ5NiwtMy41MzU1MzQgMy41MzU0OTUsMy41MzU1MzQgLTIuODI4Mzk1LDIuODI4NDI2IC0zLjUzNTQ5NiwtMy41MzU1MzMgeiBNIDEyLjgwMzEwNSw2LjE5NjU1ODQgYSA3LjQ5OTkxODEsNy40OTk5OTk1IDAgMCAwIC0xMC42MDYyMDUsMCA3LjQ5OTkxODEsNy40OTk5OTk1IDAgMCAwIC0zLjY2ZS00LDEwLjYwNjY4NDYgNy40OTk5MTgxLDcuNDk5OTk5NSAwIDAgMCAxMC42MDY5MzYsMCA3LjQ5OTkxODEsNy40OTk5OTk1IDAgMCAwIC0zLjY1ZS00LC0xMC42MDY2ODQ2IHogbSAtMS40MTQxMTIsMS40MTQxMjcyIGEgNS40OTk5Mzk4LDUuNDk5OTk5NSAwIDAgMSAzLjY1ZS00LDcuNzc4NDI5NCA1LjQ5OTkzOTgsNS40OTk5OTk1IDAgMCAxIC03Ljc3ODcxMiwwIDUuNDk5OTM5OCw1LjQ5OTk5OTUgMCAwIDEgMy42NWUtNCwtNy43Nzg0Mjk0IDUuNDk5OTM5OCw1LjQ5OTk5OTUgMCAwIDEgNy43Nzc5ODIsMCB6XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0gOS4wMDAwMDEsMTAuMDAwMDAxIEggMTQgViAxMyBIIDkuMDAwMDAxIFogbSA5ZS03LC00LjAwMDAwMDUgSCAxMi4wMDAwMDIgViAxMiBIIDkuMDAwMDAxOSBaIE0gMTUuNSwxLjM0Nzg3MDJlLTYgMTkuOTk5OTk4LDQuNDk5OTk5NiBIIDE1LjUgWiBNIDExLjAwMDAwMSw1LjMzMzU4NjRlLTcgSCAxNS41IFYgMi4wMDAwMDA2IEggMTEuMDAwMDAxIFogTSAxMS4wMDAwMDIsMi4wMDAwMDA2IGggMS45OTk5OTkgdiA0Ljk5OTk5ODggaCAtMS45OTk5OTkgeiBtIDYuOTk5OTk5LDIuNDk5OTk5OSBIIDIwIHYgNC40OTk5OTkgaCAtMS45OTk5OTkgeiBtIC00LDQuNDk5OTk5OSBIIDIwIFYgMTEgaCAtNS45OTk5OTkgelwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJmaW5kLWluLWZpbGVcIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJGaW5kSW5GaWxlVG9vbGJhclNWRyIsImNoaWxkRWxlbWVudHMiLCJnIiwicGF0aCIsImQiLCJUb29sYmFyU1ZHIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzhEQUZFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVSLElBQUEsQUFBTUEscUNBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxxQkFFRSxvQkFBQ0MseUJBQ0Msb0JBQUNDO29CQUFLQyxHQUFFO2tDQUNSLG9CQUFDRDtvQkFBS0MsR0FBRTs7WUFJZDs7O1dBVm1CSjtFQUE2QkssZ0JBQVU7QUFZMUQsaUJBWm1CTCxzQkFZWk0scUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==