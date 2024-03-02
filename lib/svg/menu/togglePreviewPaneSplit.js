"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TogglePreviewPaneSplitMenuSVG;
    }
});
var _menu = /*#__PURE__*/ _interop_require_default(require("../../svg/menu"));
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
var TogglePreviewPaneSplitMenuSVG = /*#__PURE__*/ function(MenuSVG) {
    _inherits(TogglePreviewPaneSplitMenuSVG, MenuSVG);
    var _super = _create_super(TogglePreviewPaneSplitMenuSVG);
    function TogglePreviewPaneSplitMenuSVG() {
        _class_call_check(this, TogglePreviewPaneSplitMenuSVG);
        return _super.apply(this, arguments);
    }
    _create_class(TogglePreviewPaneSplitMenuSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    d: "M 4.4999837 4.4999837 L 4.4999837 20.500041 L 12.500012 20.500041 L 12.500012 4.4999837 L 4.4999837 4.4999837 z M 6.7070841 6.1717163 L 9.5353353 8.9999674 L 8.8284017 9.706901 L 6.7070841 11.828219 L 6.0001506 11.121285 L 8.1214681 8.9999674 L 6.0001506 6.8786499 L 6.7070841 6.1717163 z "
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "1.499999",
                    height: "15.999999",
                    x: "20.5",
                    y: "4.5000005"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "1.4999992",
                    height: "15.999999",
                    x: "3",
                    y: "4.5000005"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "18.999998",
                    height: "1.4999992",
                    x: "3.0000007",
                    y: "3.0000007"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "18.999998",
                    height: "1.4999992",
                    x: "3.0000007",
                    y: "20.5"
                }));
            }
        }
    ]);
    return TogglePreviewPaneSplitMenuSVG;
}(_menu.default);
_define_property(TogglePreviewPaneSplitMenuSVG, "defaultProperties", {
    className: "toggle-preview-pane-split"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvbWVudS90b2dnbGVQcmV2aWV3UGFuZVNwbGl0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWVudVNWRyBmcm9tIFwiLi4vLi4vc3ZnL21lbnVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9nZ2xlUHJldmlld1BhbmVTcGxpdE1lbnVTVkcgZXh0ZW5kcyBNZW51U1ZHIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Zz5cbiAgICAgICAgPHBhdGggZD1cIk0gNC40OTk5ODM3IDQuNDk5OTgzNyBMIDQuNDk5OTgzNyAyMC41MDAwNDEgTCAxMi41MDAwMTIgMjAuNTAwMDQxIEwgMTIuNTAwMDEyIDQuNDk5OTgzNyBMIDQuNDk5OTgzNyA0LjQ5OTk4MzcgeiBNIDYuNzA3MDg0MSA2LjE3MTcxNjMgTCA5LjUzNTMzNTMgOC45OTk5Njc0IEwgOC44Mjg0MDE3IDkuNzA2OTAxIEwgNi43MDcwODQxIDExLjgyODIxOSBMIDYuMDAwMTUwNiAxMS4xMjEyODUgTCA4LjEyMTQ2ODEgOC45OTk5Njc0IEwgNi4wMDAxNTA2IDYuODc4NjQ5OSBMIDYuNzA3MDg0MSA2LjE3MTcxNjMgeiBcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjEuNDk5OTk5XCIgaGVpZ2h0PVwiMTUuOTk5OTk5XCIgeD1cIjIwLjVcIiB5PVwiNC41MDAwMDA1XCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxLjQ5OTk5OTJcIiBoZWlnaHQ9XCIxNS45OTk5OTlcIiB4PVwiM1wiIHk9XCI0LjUwMDAwMDVcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjE4Ljk5OTk5OFwiIGhlaWdodD1cIjEuNDk5OTk5MlwiIHg9XCIzLjAwMDAwMDdcIiB5PVwiMy4wMDAwMDA3XCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxOC45OTk5OThcIiBoZWlnaHQ9XCIxLjQ5OTk5OTJcIiB4PVwiMy4wMDAwMDA3XCIgeT1cIjIwLjVcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidG9nZ2xlLXByZXZpZXctcGFuZS1zcGxpdFwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiVG9nZ2xlUHJldmlld1BhbmVTcGxpdE1lbnVTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInBhdGgiLCJkIiwicmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJNZW51U1ZHIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzJEQUZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVMLElBQUEsQUFBTUEsOENBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLHFCQUVFLG9CQUFDQyx5QkFDQyxvQkFBQ0M7b0JBQUtDLEdBQUU7a0NBQ1Isb0JBQUNDO29CQUFLQyxPQUFNO29CQUFXQyxRQUFPO29CQUFZQyxHQUFFO29CQUFPQyxHQUFFO2tDQUNyRCxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQVlDLFFBQU87b0JBQVlDLEdBQUU7b0JBQUlDLEdBQUU7a0NBQ25ELG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBWUMsUUFBTztvQkFBWUMsR0FBRTtvQkFBWUMsR0FBRTtrQ0FDM0Qsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFZQyxRQUFPO29CQUFZQyxHQUFFO29CQUFZQyxHQUFFOztZQUlqRTs7O1dBYm1CVDtFQUFzQ1UsYUFBTztBQWVoRSxpQkFmbUJWLCtCQWVaVyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9