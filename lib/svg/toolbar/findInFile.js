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
                    d: "m 15.462926,16.048776 a 7.4999181,7.4999995 0 0 1 -0.659553,0.754567 7.4999181,7.4999995 0 0 1 -0.756751,0.657368 l 1.463806,1.463823 1.414113,-1.414128 z m 5.704212,4.29006 -2.828589,2.82862 a 1.9995924,1.9999889 43.43161 0 0 2.828309,8.6e-5 1.9995924,1.9999889 43.43161 0 0 2.8e-4,-2.828706 z m -3.535496,-3.535534 3.535495,3.535534 -2.828395,2.828426 -3.535496,-3.535533 z M 14.803105,6.1965586 a 7.4999181,7.4999995 0 0 0 -10.6062051,0 7.4999181,7.4999995 0 0 0 -3.654e-4,10.6066854 7.4999181,7.4999995 0 0 0 10.6069355,0 7.4999181,7.4999995 0 0 0 -3.65e-4,-10.6066854 z m -1.414112,1.4141272 a 5.4999398,5.4999995 0 0 1 3.65e-4,7.7784302 5.4999398,5.4999995 0 0 1 -7.7787117,0 5.4999398,5.4999995 0 0 1 3.654e-4,-7.7784302 5.4999398,5.4999995 0 0 1 7.7779813,0 z"
                }));
            }
        }
    ]);
    return FindInFileToolbarSVG;
}(_toolbar.default);
_define_property(FindInFileToolbarSVG, "defaultProperties", {
    className: "find-in-file"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9maW5kSW5GaWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVG9vbGJhclNWRyBmcm9tIFwiLi4vLi4vc3ZnL3Rvb2xiYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmluZEluRmlsZVRvb2xiYXJTVkcgZXh0ZW5kcyBUb29sYmFyU1ZHIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Zz5cbiAgICAgICAgPHBhdGggZD1cIm0gMTUuNDYyOTI2LDE2LjA0ODc3NiBhIDcuNDk5OTE4MSw3LjQ5OTk5OTUgMCAwIDEgLTAuNjU5NTUzLDAuNzU0NTY3IDcuNDk5OTE4MSw3LjQ5OTk5OTUgMCAwIDEgLTAuNzU2NzUxLDAuNjU3MzY4IGwgMS40NjM4MDYsMS40NjM4MjMgMS40MTQxMTMsLTEuNDE0MTI4IHogbSA1LjcwNDIxMiw0LjI5MDA2IC0yLjgyODU4OSwyLjgyODYyIGEgMS45OTk1OTI0LDEuOTk5OTg4OSA0My40MzE2MSAwIDAgMi44MjgzMDksOC42ZS01IDEuOTk5NTkyNCwxLjk5OTk4ODkgNDMuNDMxNjEgMCAwIDIuOGUtNCwtMi44Mjg3MDYgeiBtIC0zLjUzNTQ5NiwtMy41MzU1MzQgMy41MzU0OTUsMy41MzU1MzQgLTIuODI4Mzk1LDIuODI4NDI2IC0zLjUzNTQ5NiwtMy41MzU1MzMgeiBNIDE0LjgwMzEwNSw2LjE5NjU1ODYgYSA3LjQ5OTkxODEsNy40OTk5OTk1IDAgMCAwIC0xMC42MDYyMDUxLDAgNy40OTk5MTgxLDcuNDk5OTk5NSAwIDAgMCAtMy42NTRlLTQsMTAuNjA2Njg1NCA3LjQ5OTkxODEsNy40OTk5OTk1IDAgMCAwIDEwLjYwNjkzNTUsMCA3LjQ5OTkxODEsNy40OTk5OTk1IDAgMCAwIC0zLjY1ZS00LC0xMC42MDY2ODU0IHogbSAtMS40MTQxMTIsMS40MTQxMjcyIGEgNS40OTk5Mzk4LDUuNDk5OTk5NSAwIDAgMSAzLjY1ZS00LDcuNzc4NDMwMiA1LjQ5OTkzOTgsNS40OTk5OTk1IDAgMCAxIC03Ljc3ODcxMTcsMCA1LjQ5OTkzOTgsNS40OTk5OTk1IDAgMCAxIDMuNjU0ZS00LC03Ljc3ODQzMDIgNS40OTk5Mzk4LDUuNDk5OTk5NSAwIDAgMSA3Ljc3Nzk4MTMsMCB6XCIgLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZpbmQtaW4tZmlsZVwiXG4gIH07XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkZpbmRJbkZpbGVUb29sYmFyU1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJwYXRoIiwiZCIsIlRvb2xiYXJTVkciLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7OERBRkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVIsSUFBQSxBQUFNQSxxQ0FBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLHFCQUVFLG9CQUFDQyx5QkFDQyxvQkFBQ0M7b0JBQUtDLEdBQUU7O1lBSWQ7OztXQVRtQko7RUFBNkJLLGdCQUFVO0FBVzFELGlCQVhtQkwsc0JBV1pNLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=