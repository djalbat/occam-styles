"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CopySessionKeyToolbarSVG;
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
var CopySessionKeyToolbarSVG = /*#__PURE__*/ function(ToolbarSVG) {
    _inherits(CopySessionKeyToolbarSVG, ToolbarSVG);
    var _super = _create_super(CopySessionKeyToolbarSVG);
    function CopySessionKeyToolbarSVG() {
        _class_call_check(this, CopySessionKeyToolbarSVG);
        return _super.apply(this, arguments);
    }
    _create_class(CopySessionKeyToolbarSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("rect", {
                    width: "2.5",
                    height: "13",
                    x: "6",
                    y: "8"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "4",
                    height: "2",
                    x: "3",
                    y: "18"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "3",
                    height: "2",
                    x: "3",
                    y: "14"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "2",
                    x: "4",
                    y: "16"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "m 12,11.285714 h 8 V 8.8571429 l 4,3.6428581 -4,3.642856 v -2.428571 h -8 z"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "M 7.2503228,2.9998169 A 3.7499058,3 0 0 0 3.5,6.0001506 3.7499058,3 0 0 0 7.2503228,8.9999674 3.7499058,3 0 0 0 11,6.0001506 3.7499058,3 0 0 0 7.2503228,2.9998169 Z m 0,2.0003947 A 1.2499684,0.99999994 0 0 1 8.500215,6.0001506 1.2499684,0.99999994 0 0 1 7.2503228,7.0000895 1.2499684,0.99999994 0 0 1 6.0004306,6.0001506 1.2499684,0.99999994 0 0 1 7.2503228,5.0002116 Z"
                }));
            }
        }
    ]);
    return CopySessionKeyToolbarSVG;
}(_toolbar.default);
_define_property(CopySessionKeyToolbarSVG, "defaultProperties", {
    className: "copy-session-key"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9jb3B5U2Vzc2lvbktleS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRvb2xiYXJTVkcgZnJvbSBcIi4uLy4uL3N2Zy90b29sYmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcHlTZXNzaW9uS2V5VG9vbGJhclNWRyBleHRlbmRzIFRvb2xiYXJTVkcge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjIuNVwiIGhlaWdodD1cIjEzXCIgeD1cIjZcIiB5PVwiOFwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiNFwiIGhlaWdodD1cIjJcIiB4PVwiM1wiIHk9XCIxOFwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiM1wiIGhlaWdodD1cIjJcIiB4PVwiM1wiIHk9XCIxNFwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjJcIiB4PVwiNFwiIHk9XCIxNlwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJtIDEyLDExLjI4NTcxNCBoIDggViA4Ljg1NzE0MjkgbCA0LDMuNjQyODU4MSAtNCwzLjY0Mjg1NiB2IC0yLjQyODU3MSBoIC04IHpcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTSA3LjI1MDMyMjgsMi45OTk4MTY5IEEgMy43NDk5MDU4LDMgMCAwIDAgMy41LDYuMDAwMTUwNiAzLjc0OTkwNTgsMyAwIDAgMCA3LjI1MDMyMjgsOC45OTk5Njc0IDMuNzQ5OTA1OCwzIDAgMCAwIDExLDYuMDAwMTUwNiAzLjc0OTkwNTgsMyAwIDAgMCA3LjI1MDMyMjgsMi45OTk4MTY5IFogbSAwLDIuMDAwMzk0NyBBIDEuMjQ5OTY4NCwwLjk5OTk5OTk0IDAgMCAxIDguNTAwMjE1LDYuMDAwMTUwNiAxLjI0OTk2ODQsMC45OTk5OTk5NCAwIDAgMSA3LjI1MDMyMjgsNy4wMDAwODk1IDEuMjQ5OTY4NCwwLjk5OTk5OTk0IDAgMCAxIDYuMDAwNDMwNiw2LjAwMDE1MDYgMS4yNDk5Njg0LDAuOTk5OTk5OTQgMCAwIDEgNy4yNTAzMjI4LDUuMDAwMjExNiBaXCIgLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImNvcHktc2Vzc2lvbi1rZXlcIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDb3B5U2Vzc2lvbktleVRvb2xiYXJTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJ5IiwicGF0aCIsImQiLCJUb29sYmFyU1ZHIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzhEQUZFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVSLElBQUEsQUFBTUEseUNBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxxQkFFRSxvQkFBQ0MseUJBQ0Msb0JBQUNDO29CQUFLQyxPQUFNO29CQUFNQyxRQUFPO29CQUFLQyxHQUFFO29CQUFJQyxHQUFFO2tDQUN0QyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUlDLEdBQUU7a0NBQ25DLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBSUMsR0FBRTtvQkFBSUMsR0FBRTtrQ0FDbkMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFJQyxHQUFFO29CQUFJQyxHQUFFO2tDQUNuQyxvQkFBQ0M7b0JBQUtDLEdBQUU7a0NBQ1Isb0JBQUNEO29CQUFLQyxHQUFFOztZQUlkOzs7V0FkbUJUO0VBQWlDVTtBQWdCcEQsaUJBaEJtQlYsMEJBZ0JaVyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9