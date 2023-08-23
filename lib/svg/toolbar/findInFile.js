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
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("rect", {
                    width: "3.5",
                    height: "1.5",
                    x: "15",
                    y: "9.5"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "1.5",
                    height: "3.75",
                    x: "17",
                    y: "5.75"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "1.5",
                    height: "2.5",
                    x: "11",
                    y: "3.5"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "3.75",
                    height: "1.5",
                    x: "11",
                    y: "2"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "M 14.75,2 18.5,5.75 H 14.75 Z"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2.5",
                    height: "3",
                    x: "9.5",
                    y: "7"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "5",
                    height: "2.5",
                    x: "9.5",
                    y: "10"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "m 9.8253217,5.0027954 a 6,6 0 0 0 -4.067968,1.7544149 6,6 0 0 0 0,8.4852697 6,6 0 0 0 7.7163243,0.645439 l 0.768945,0.768945 -0.353466,0.353467 5.656502,5.656502 a 1.55,1.55 0 0 0 2.121317,5.17e-4 1.55,1.55 0 0 0 0,-2.121834 l -5.656502,-5.656502 -0.353467,0.353983 -0.766878,-0.766878 A 6,6 0 0 0 14.242623,6.7572103 6,6 0 0 0 9.8253217,5.0027954 Z m -0.03669,2.5037232 a 3.4999826,3.4999824 0 0 1 2.6866573,1.0185424 3.4999826,3.4999824 0 0 1 -5.16e-4,4.950085 3.4999826,3.4999824 0 0 1 -4.9495693,0 3.4999826,3.4999824 0 0 1 0,-4.950085 3.4999826,3.4999824 0 0 1 2.263428,-1.0185424 z"
                }));
            }
        }
    ]);
    return FindInFileToolbarSVG;
}(_toolbar.default);
_define_property(FindInFileToolbarSVG, "defaultProperties", {
    className: "find-in-file"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9maW5kSW5GaWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVG9vbGJhclNWRyBmcm9tIFwiLi4vLi4vc3ZnL3Rvb2xiYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmluZEluRmlsZVRvb2xiYXJTVkcgZXh0ZW5kcyBUb29sYmFyU1ZHIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Zz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIzLjVcIiBoZWlnaHQ9XCIxLjVcIiB4PVwiMTVcIiB5PVwiOS41XCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxLjVcIiBoZWlnaHQ9XCIzLjc1XCIgeD1cIjE3XCIgeT1cIjUuNzVcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjEuNVwiIGhlaWdodD1cIjIuNVwiIHg9XCIxMVwiIHk9XCIzLjVcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjMuNzVcIiBoZWlnaHQ9XCIxLjVcIiB4PVwiMTFcIiB5PVwiMlwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDE0Ljc1LDIgMTguNSw1Ljc1IEggMTQuNzUgWlwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMi41XCIgaGVpZ2h0PVwiM1wiIHg9XCI5LjVcIiB5PVwiN1wiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiNVwiIGhlaWdodD1cIjIuNVwiIHg9XCI5LjVcIiB5PVwiMTBcIiAvPlxuICAgICAgICA8cGF0aCBkPVwibSA5LjgyNTMyMTcsNS4wMDI3OTU0IGEgNiw2IDAgMCAwIC00LjA2Nzk2OCwxLjc1NDQxNDkgNiw2IDAgMCAwIDAsOC40ODUyNjk3IDYsNiAwIDAgMCA3LjcxNjMyNDMsMC42NDU0MzkgbCAwLjc2ODk0NSwwLjc2ODk0NSAtMC4zNTM0NjYsMC4zNTM0NjcgNS42NTY1MDIsNS42NTY1MDIgYSAxLjU1LDEuNTUgMCAwIDAgMi4xMjEzMTcsNS4xN2UtNCAxLjU1LDEuNTUgMCAwIDAgMCwtMi4xMjE4MzQgbCAtNS42NTY1MDIsLTUuNjU2NTAyIC0wLjM1MzQ2NywwLjM1Mzk4MyAtMC43NjY4NzgsLTAuNzY2ODc4IEEgNiw2IDAgMCAwIDE0LjI0MjYyMyw2Ljc1NzIxMDMgNiw2IDAgMCAwIDkuODI1MzIxNyw1LjAwMjc5NTQgWiBtIC0wLjAzNjY5LDIuNTAzNzIzMiBhIDMuNDk5OTgyNiwzLjQ5OTk4MjQgMCAwIDEgMi42ODY2NTczLDEuMDE4NTQyNCAzLjQ5OTk4MjYsMy40OTk5ODI0IDAgMCAxIC01LjE2ZS00LDQuOTUwMDg1IDMuNDk5OTgyNiwzLjQ5OTk4MjQgMCAwIDEgLTQuOTQ5NTY5MywwIDMuNDk5OTgyNiwzLjQ5OTk4MjQgMCAwIDEgMCwtNC45NTAwODUgMy40OTk5ODI2LDMuNDk5OTgyNCAwIDAgMSAyLjI2MzQyOCwtMS4wMTg1NDI0IHpcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZmluZC1pbi1maWxlXCJcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRmluZEluRmlsZVRvb2xiYXJTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJ5IiwicGF0aCIsImQiLCJUb29sYmFyU1ZHIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzhEQUZFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVSLElBQUEsQUFBTUEscUNBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxxQkFFRSxvQkFBQ0MseUJBQ0Msb0JBQUNDO29CQUFLQyxPQUFNO29CQUFNQyxRQUFPO29CQUFNQyxHQUFFO29CQUFLQyxHQUFFO2tDQUN4QyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQU1DLFFBQU87b0JBQU9DLEdBQUU7b0JBQUtDLEdBQUU7a0NBQ3pDLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBTUMsUUFBTztvQkFBTUMsR0FBRTtvQkFBS0MsR0FBRTtrQ0FDeEMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFPQyxRQUFPO29CQUFNQyxHQUFFO29CQUFLQyxHQUFFO2tDQUN6QyxvQkFBQ0M7b0JBQUtDLEdBQUU7a0NBQ1Isb0JBQUNOO29CQUFLQyxPQUFNO29CQUFNQyxRQUFPO29CQUFJQyxHQUFFO29CQUFNQyxHQUFFO2tDQUN2QyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQU1DLEdBQUU7b0JBQU1DLEdBQUU7a0NBQ3ZDLG9CQUFDQztvQkFBS0MsR0FBRTs7WUFJZDs7O1dBaEJtQlQ7RUFBNkJVLGdCQUFVO0FBa0IxRCxpQkFsQm1CVixzQkFrQlpXLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=