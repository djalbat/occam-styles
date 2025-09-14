"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ShowReleasesToolbarSVG;
    }
});
var _toolbar = /*#__PURE__*/ _interop_require_default(require("../../svg/toolbar"));
var _common = require("../../scheme/common");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var ShowReleasesToolbarSVG = /*#__PURE__*/ function(ToolbarSVG) {
    _inherits(ShowReleasesToolbarSVG, ToolbarSVG);
    function ShowReleasesToolbarSVG() {
        _class_call_check(this, ShowReleasesToolbarSVG);
        return _call_super(this, ShowReleasesToolbarSVG, arguments);
    }
    _create_class(ShowReleasesToolbarSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("g", {
                    fill: "".concat(_common.showReleasesCrossFill),
                    transform: "translate(7, 3) rotate(45)"
                }, /*#__PURE__*/ React.createElement("rect", {
                    width: "3",
                    height: "2",
                    x: "-1",
                    y: "3"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "8",
                    x: "2",
                    y: "-3"
                })), /*#__PURE__*/ React.createElement("g", {
                    transform: "translate(3, 7)"
                }, /*#__PURE__*/ React.createElement("rect", {
                    width: "16",
                    height: "2",
                    x: "0",
                    y: "16"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "3",
                    x: "14",
                    y: "13"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "3",
                    x: "12",
                    y: "6"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "3",
                    x: "18",
                    y: "6"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "7",
                    x: "0",
                    y: "9"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "10",
                    height: "2",
                    x: "0",
                    y: "7"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "7",
                    height: "3",
                    x: "0",
                    y: "4"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "m 7,4 3,3 H 7 Z"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "m 15.966048,1.0000005 a 3.1111103,3.4999995 0 0 0 -3.077159,3.0003337 h 1.357826 a 1.7777774,1.9999996 0 0 1 1.719333,-1.5001669 1.7777774,1.9999996 0 0 1 1.718872,1.5001669 h 1.360124 A 3.1111103,3.4999995 0 0 0 15.966048,1.0000005 Z"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "7.9999995",
                    height: "1.9999995",
                    x: "12.000001",
                    y: "3.9999998"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "7.9999995",
                    height: "1.9999995",
                    x: "12.000001",
                    y: "9.000001"
                })));
            }
        }
    ]);
    return ShowReleasesToolbarSVG;
}(_toolbar.default);
_define_property(ShowReleasesToolbarSVG, "defaultProperties", {
    viewBox: "0 0 25 25",
    className: "show-releases"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9zaG93UmVsZWFzZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb29sYmFyU1ZHIGZyb20gXCIuLi8uLi9zdmcvdG9vbGJhclwiO1xuXG5pbXBvcnQgeyBzaG93UmVsZWFzZXNDcm9zc0ZpbGwgfSBmcm9tIFwiLi4vLi4vc2NoZW1lL2NvbW1vblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93UmVsZWFzZXNUb29sYmFyU1ZHIGV4dGVuZHMgVG9vbGJhclNWRyB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGc+XG4gICAgICAgIDxnIGZpbGw9e2Ake3Nob3dSZWxlYXNlc0Nyb3NzRmlsbH1gfSB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNywgMykgcm90YXRlKDQ1KVwiPlxuICAgICAgICAgIDxyZWN0IHdpZHRoPVwiM1wiIGhlaWdodD1cIjJcIiB4PVwiLTFcIiB5PVwiM1wiIC8+XG4gICAgICAgICAgPHJlY3Qgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiOFwiIHg9XCIyXCIgeT1cIi0zXCIgLz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMywgNylcIj5cbiAgICAgICAgICA8cmVjdCB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMlwiIHg9XCIwXCIgeT1cIjE2XCIgLz5cbiAgICAgICAgICA8cmVjdCB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIzXCIgeD1cIjE0XCIgeT1cIjEzXCIgLz5cbiAgICAgICAgICA8cmVjdCB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIzXCIgeD1cIjEyXCIgeT1cIjZcIiAvPlxuICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjNcIiB4PVwiMThcIiB5PVwiNlwiIC8+XG4gICAgICAgICAgPHJlY3Qgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiN1wiIHg9XCIwXCIgeT1cIjlcIiAvPlxuICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIyXCIgeD1cIjBcIiB5PVwiN1wiIC8+XG4gICAgICAgICAgPHJlY3Qgd2lkdGg9XCI3XCIgaGVpZ2h0PVwiM1wiIHg9XCIwXCIgeT1cIjRcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJtIDcsNCAzLDMgSCA3IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJtIDE1Ljk2NjA0OCwxLjAwMDAwMDUgYSAzLjExMTExMDMsMy40OTk5OTk1IDAgMCAwIC0zLjA3NzE1OSwzLjAwMDMzMzcgaCAxLjM1NzgyNiBhIDEuNzc3Nzc3NCwxLjk5OTk5OTYgMCAwIDEgMS43MTkzMzMsLTEuNTAwMTY2OSAxLjc3Nzc3NzQsMS45OTk5OTk2IDAgMCAxIDEuNzE4ODcyLDEuNTAwMTY2OSBoIDEuMzYwMTI0IEEgMy4xMTExMTAzLDMuNDk5OTk5NSAwIDAgMCAxNS45NjYwNDgsMS4wMDAwMDA1IFpcIiAvPlxuICAgICAgICAgIDxyZWN0IHdpZHRoPVwiNy45OTk5OTk1XCIgaGVpZ2h0PVwiMS45OTk5OTk1XCIgeD1cIjEyLjAwMDAwMVwiIHk9XCIzLjk5OTk5OThcIiAvPlxuICAgICAgICAgIDxyZWN0IHdpZHRoPVwiNy45OTk5OTk1XCIgaGVpZ2h0PVwiMS45OTk5OTk1XCIgeD1cIjEyLjAwMDAwMVwiIHk9XCI5LjAwMDAwMVwiIC8+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgdmlld0JveDogXCIwIDAgMjUgMjVcIixcbiAgICBjbGFzc05hbWU6IFwic2hvdy1yZWxlYXNlc1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiU2hvd1JlbGVhc2VzVG9vbGJhclNWRyIsImNoaWxkRWxlbWVudHMiLCJnIiwiZmlsbCIsInNob3dSZWxlYXNlc0Nyb3NzRmlsbCIsInRyYW5zZm9ybSIsInJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJ5IiwicGF0aCIsImQiLCJUb29sYmFyU1ZHIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ2aWV3Qm94IiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozs4REFKRTtzQkFFZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsSUFBQSxBQUFNQSx1Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLHFCQUVFLG9CQUFDQyx5QkFDQyxvQkFBQ0E7b0JBQUVDLE1BQU0sQUFBQyxHQUF3QixPQUF0QkMsNkJBQXFCO29CQUFJQyxXQUFVO2lDQUM3QyxvQkFBQ0M7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUtDLEdBQUU7a0NBQ3BDLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBSUMsR0FBRTtvQkFBSUMsR0FBRTttQ0FFckMsb0JBQUNSO29CQUFFRyxXQUFVO2lDQUNYLG9CQUFDQztvQkFBS0MsT0FBTTtvQkFBS0MsUUFBTztvQkFBSUMsR0FBRTtvQkFBSUMsR0FBRTtrQ0FDcEMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFJQyxHQUFFO29CQUFLQyxHQUFFO2tDQUNwQyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUtDLEdBQUU7a0NBQ3BDLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBSUMsR0FBRTtvQkFBS0MsR0FBRTtrQ0FDcEMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFJQyxHQUFFO29CQUFJQyxHQUFFO2tDQUNuQyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQUtDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUlDLEdBQUU7a0NBQ3BDLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBSUMsR0FBRTtvQkFBSUMsR0FBRTtrQ0FDbkMsb0JBQUNDO29CQUFLQyxHQUFFO2tDQUNSLG9CQUFDRDtvQkFBS0MsR0FBRTtrQ0FDUixvQkFBQ047b0JBQUtDLE9BQU07b0JBQVlDLFFBQU87b0JBQVlDLEdBQUU7b0JBQVlDLEdBQUU7a0NBQzNELG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBWUMsUUFBTztvQkFBWUMsR0FBRTtvQkFBWUMsR0FBRTs7WUFLbkU7OztXQXpCbUJWO0VBQStCYSxnQkFBVTtBQTJCNUQsaUJBM0JtQmIsd0JBMkJaYyxxQkFBb0I7SUFDekJDLFNBQVM7SUFDVEMsV0FBVztBQUNiIn0=