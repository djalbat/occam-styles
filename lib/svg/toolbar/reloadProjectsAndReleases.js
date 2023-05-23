"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ReloadProjectsAndReleasesToolbarSVG;
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
var ReloadProjectsAndReleasesToolbarSVG = /*#__PURE__*/ function(ToolbarSVG) {
    _inherits(ReloadProjectsAndReleasesToolbarSVG, ToolbarSVG);
    var _super = _create_super(ReloadProjectsAndReleasesToolbarSVG);
    function ReloadProjectsAndReleasesToolbarSVG() {
        _class_call_check(this, ReloadProjectsAndReleasesToolbarSVG);
        return _super.apply(this, arguments);
    }
    _create_class(ReloadProjectsAndReleasesToolbarSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    d: "m 13.229167,4.6075551 v 2.5648434 a 5.9531248,5.7406248 0 0 1 5.291665,5.7022545 5.9531248,5.7406248 0 0 1 -5.953124,5.740624 5.9531248,5.7406248 0 0 1 -5.9133336,-5.102776 H 3.9971723 a 8.5989576,8.2920132 0 0 0 8.5705357,7.654166 8.5989576,8.2920132 0 0 0 8.598959,-8.292014 8.5989576,8.2920132 0 0 0 -7.9375,-8.2670979 z"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "M 13.229167,2.0312503 V 9.6854171 L 7.9375001,5.8583336 Z"
                }));
            }
        }
    ]);
    return ReloadProjectsAndReleasesToolbarSVG;
}(_toolbar.default);
_define_property(ReloadProjectsAndReleasesToolbarSVG, "defaultProperties", {
    className: "reload-projects-and-releases"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9yZWxvYWRQcm9qZWN0c0FuZFJlbGVhc2VzLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVG9vbGJhclNWRyBmcm9tIFwiLi4vLi4vc3ZnL3Rvb2xiYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsb2FkUHJvamVjdHNBbmRSZWxlYXNlc1Rvb2xiYXJTVkcgZXh0ZW5kcyBUb29sYmFyU1ZHIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Zz5cbiAgICAgICAgPHBhdGggZD1cIm0gMTMuMjI5MTY3LDQuNjA3NTU1MSB2IDIuNTY0ODQzNCBhIDUuOTUzMTI0OCw1Ljc0MDYyNDggMCAwIDEgNS4yOTE2NjUsNS43MDIyNTQ1IDUuOTUzMTI0OCw1Ljc0MDYyNDggMCAwIDEgLTUuOTUzMTI0LDUuNzQwNjI0IDUuOTUzMTI0OCw1Ljc0MDYyNDggMCAwIDEgLTUuOTEzMzMzNiwtNS4xMDI3NzYgSCAzLjk5NzE3MjMgYSA4LjU5ODk1NzYsOC4yOTIwMTMyIDAgMCAwIDguNTcwNTM1Nyw3LjY1NDE2NiA4LjU5ODk1NzYsOC4yOTIwMTMyIDAgMCAwIDguNTk4OTU5LC04LjI5MjAxNCA4LjU5ODk1NzYsOC4yOTIwMTMyIDAgMCAwIC03LjkzNzUsLTguMjY3MDk3OSB6XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0gMTMuMjI5MTY3LDIuMDMxMjUwMyBWIDkuNjg1NDE3MSBMIDcuOTM3NTAwMSw1Ljg1ODMzMzYgWlwiLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInJlbG9hZC1wcm9qZWN0cy1hbmQtcmVsZWFzZXNcIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSZWxvYWRQcm9qZWN0c0FuZFJlbGVhc2VzVG9vbGJhclNWRyIsImNoaWxkRWxlbWVudHMiLCJnIiwicGF0aCIsImQiLCJUb29sYmFyU1ZHIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzhEQUZFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVSLElBQUEsQUFBTUEsb0RBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxxQkFFRSxvQkFBQ0MseUJBQ0Msb0JBQUNDO29CQUFLQyxHQUFFO2tDQUNSLG9CQUFDRDtvQkFBS0MsR0FBRTs7WUFJZDs7O1dBVm1CSjtFQUE0Q0s7QUFZL0QsaUJBWm1CTCxxQ0FZWk0scUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==