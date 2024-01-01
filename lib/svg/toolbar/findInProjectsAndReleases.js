"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FindInProjectsAndReleasesToolbarSVG;
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
var FindInProjectsAndReleasesToolbarSVG = /*#__PURE__*/ function(ToolbarSVG) {
    _inherits(FindInProjectsAndReleasesToolbarSVG, ToolbarSVG);
    var _super = _create_super(FindInProjectsAndReleasesToolbarSVG);
    function FindInProjectsAndReleasesToolbarSVG() {
        _class_call_check(this, FindInProjectsAndReleasesToolbarSVG);
        return _super.apply(this, arguments);
    }
    _create_class(FindInProjectsAndReleasesToolbarSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    d: "m 13.462926,16.048775 a 7.4999181,7.4999995 0 0 1 -0.659553,0.754567 7.4999181,7.4999995 0 0 1 -0.756751,0.657368 l 1.463806,1.463823 1.414113,-1.414128 z m 5.704212,4.29006 -2.828589,2.82862 a 1.9995924,1.9999889 43.43161 0 0 2.828309,8.6e-5 1.9995924,1.9999889 43.43161 0 0 2.8e-4,-2.828706 z m -3.535496,-3.535534 3.535495,3.535534 -2.828395,2.828426 -3.535496,-3.535533 z M 12.803105,6.1965584 a 7.4999181,7.4999995 0 0 0 -10.606205,0 7.4999181,7.4999995 0 0 0 -3.66e-4,10.6066846 7.4999181,7.4999995 0 0 0 10.606936,0 7.4999181,7.4999995 0 0 0 -3.65e-4,-10.6066846 z m -1.414112,1.4141272 a 5.4999398,5.4999995 0 0 1 3.65e-4,7.7784294 5.4999398,5.4999995 0 0 1 -7.778712,0 5.4999398,5.4999995 0 0 1 3.65e-4,-7.7784294 5.4999398,5.4999995 0 0 1 7.777982,0 z"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "M 9.000001,10.000001 H 15 V 13 H 9.000001 Z m 9e-7,-4.0000005 H 12.000002 V 12 H 9.0000019 Z m 6.0000001,-5.0000004 2,2 h -2 z m -4,-1.6e-7 h 3.999999 V 2.9999999 h -4 z m 9.000001,5.00000056 h 4 V 8 h -4 z m -6,5.9999995 h 9.999999 v 2 H 14.000003 Z M 11.000002,3 h 9.999999 v 2 h -10 z m 3,8.000001 H 16 v 1 h -1.999998 z m 8,-3 h 2.000001 V 12 h -2.000001 z m -11,-3.0000006 h 2 V 6.999999 h -2 z M 19.000001,5 h 2 v 4 h -2 z m -5,4.0000004 H 21 V 11 h -6.999999 z"
                }));
            }
        }
    ]);
    return FindInProjectsAndReleasesToolbarSVG;
}(_toolbar.default);
_define_property(FindInProjectsAndReleasesToolbarSVG, "defaultProperties", {
    className: "find-in-projects-and-releases"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9maW5kSW5Qcm9qZWN0c0FuZFJlbGVhc2VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVG9vbGJhclNWRyBmcm9tIFwiLi4vLi4vc3ZnL3Rvb2xiYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmluZEluUHJvamVjdHNBbmRSZWxlYXNlc1Rvb2xiYXJTVkcgZXh0ZW5kcyBUb29sYmFyU1ZHIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Zz5cbiAgICAgICAgPHBhdGggZD1cIm0gMTMuNDYyOTI2LDE2LjA0ODc3NSBhIDcuNDk5OTE4MSw3LjQ5OTk5OTUgMCAwIDEgLTAuNjU5NTUzLDAuNzU0NTY3IDcuNDk5OTE4MSw3LjQ5OTk5OTUgMCAwIDEgLTAuNzU2NzUxLDAuNjU3MzY4IGwgMS40NjM4MDYsMS40NjM4MjMgMS40MTQxMTMsLTEuNDE0MTI4IHogbSA1LjcwNDIxMiw0LjI5MDA2IC0yLjgyODU4OSwyLjgyODYyIGEgMS45OTk1OTI0LDEuOTk5OTg4OSA0My40MzE2MSAwIDAgMi44MjgzMDksOC42ZS01IDEuOTk5NTkyNCwxLjk5OTk4ODkgNDMuNDMxNjEgMCAwIDIuOGUtNCwtMi44Mjg3MDYgeiBtIC0zLjUzNTQ5NiwtMy41MzU1MzQgMy41MzU0OTUsMy41MzU1MzQgLTIuODI4Mzk1LDIuODI4NDI2IC0zLjUzNTQ5NiwtMy41MzU1MzMgeiBNIDEyLjgwMzEwNSw2LjE5NjU1ODQgYSA3LjQ5OTkxODEsNy40OTk5OTk1IDAgMCAwIC0xMC42MDYyMDUsMCA3LjQ5OTkxODEsNy40OTk5OTk1IDAgMCAwIC0zLjY2ZS00LDEwLjYwNjY4NDYgNy40OTk5MTgxLDcuNDk5OTk5NSAwIDAgMCAxMC42MDY5MzYsMCA3LjQ5OTkxODEsNy40OTk5OTk1IDAgMCAwIC0zLjY1ZS00LC0xMC42MDY2ODQ2IHogbSAtMS40MTQxMTIsMS40MTQxMjcyIGEgNS40OTk5Mzk4LDUuNDk5OTk5NSAwIDAgMSAzLjY1ZS00LDcuNzc4NDI5NCA1LjQ5OTkzOTgsNS40OTk5OTk1IDAgMCAxIC03Ljc3ODcxMiwwIDUuNDk5OTM5OCw1LjQ5OTk5OTUgMCAwIDEgMy42NWUtNCwtNy43Nzg0Mjk0IDUuNDk5OTM5OCw1LjQ5OTk5OTUgMCAwIDEgNy43Nzc5ODIsMCB6XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0gOS4wMDAwMDEsMTAuMDAwMDAxIEggMTUgViAxMyBIIDkuMDAwMDAxIFogbSA5ZS03LC00LjAwMDAwMDUgSCAxMi4wMDAwMDIgViAxMiBIIDkuMDAwMDAxOSBaIG0gNi4wMDAwMDAxLC01LjAwMDAwMDQgMiwyIGggLTIgeiBtIC00LC0xLjZlLTcgaCAzLjk5OTk5OSBWIDIuOTk5OTk5OSBoIC00IHogbSA5LjAwMDAwMSw1LjAwMDAwMDU2IGggNCBWIDggaCAtNCB6IG0gLTYsNS45OTk5OTk1IGggOS45OTk5OTkgdiAyIEggMTQuMDAwMDAzIFogTSAxMS4wMDAwMDIsMyBoIDkuOTk5OTk5IHYgMiBoIC0xMCB6IG0gMyw4LjAwMDAwMSBIIDE2IHYgMSBoIC0xLjk5OTk5OCB6IG0gOCwtMyBoIDIuMDAwMDAxIFYgMTIgaCAtMi4wMDAwMDEgeiBtIC0xMSwtMy4wMDAwMDA2IGggMiBWIDYuOTk5OTk5IGggLTIgeiBNIDE5LjAwMDAwMSw1IGggMiB2IDQgaCAtMiB6IG0gLTUsNC4wMDAwMDA0IEggMjEgViAxMSBoIC02Ljk5OTk5OSB6XCIgLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZpbmQtaW4tcHJvamVjdHMtYW5kLXJlbGVhc2VzXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJGaW5kSW5Qcm9qZWN0c0FuZFJlbGVhc2VzVG9vbGJhclNWRyIsImNoaWxkRWxlbWVudHMiLCJnIiwicGF0aCIsImQiLCJUb29sYmFyU1ZHIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzhEQUZFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVSLElBQUEsQUFBTUEsb0RBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLHFCQUVFLG9CQUFDQyx5QkFDQyxvQkFBQ0M7b0JBQUtDLEdBQUU7a0NBQ1Isb0JBQUNEO29CQUFLQyxHQUFFOztZQUlkOzs7V0FWbUJKO0VBQTRDSyxnQkFBVTtBQVl6RSxpQkFabUJMLHFDQVlaTSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9