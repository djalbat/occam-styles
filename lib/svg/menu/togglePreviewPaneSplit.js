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
var TogglePreviewPaneSplitMenuSVG = /*#__PURE__*/ function(MenuSVG) {
    _inherits(TogglePreviewPaneSplitMenuSVG, MenuSVG);
    function TogglePreviewPaneSplitMenuSVG() {
        _class_call_check(this, TogglePreviewPaneSplitMenuSVG);
        return _call_super(this, TogglePreviewPaneSplitMenuSVG, arguments);
    }
    _create_class(TogglePreviewPaneSplitMenuSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("g", {
                    transform: "translate(8,0)"
                }, /*#__PURE__*/ React.createElement("path", {
                    d: "M 4.4999837 4.4999837 L 4.4999837 20.500041 L 12.500012 20.500041 L 12.500012 4.4999837 L 4.4999837 4.4999837 z M 6.7070841 6.1717163 L 9.5353353 8.9999674 L 8.8284017 9.706901 L 6.7070841 11.828219 L 6.0001506 11.121285 L 8.1214681 8.9999674 L 6.0001506 6.8786499 L 6.7070841 6.1717163 z "
                })), /*#__PURE__*/ React.createElement("rect", {
                    width: "1.499999",
                    height: "15.999999",
                    x: "11",
                    y: "4.5000005"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvbWVudS90b2dnbGVQcmV2aWV3UGFuZVNwbGl0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWVudVNWRyBmcm9tIFwiLi4vLi4vc3ZnL21lbnVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9nZ2xlUHJldmlld1BhbmVTcGxpdE1lbnVTVkcgZXh0ZW5kcyBNZW51U1ZHIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Zz5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDgsMClcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTSA0LjQ5OTk4MzcgNC40OTk5ODM3IEwgNC40OTk5ODM3IDIwLjUwMDA0MSBMIDEyLjUwMDAxMiAyMC41MDAwNDEgTCAxMi41MDAwMTIgNC40OTk5ODM3IEwgNC40OTk5ODM3IDQuNDk5OTgzNyB6IE0gNi43MDcwODQxIDYuMTcxNzE2MyBMIDkuNTM1MzM1MyA4Ljk5OTk2NzQgTCA4LjgyODQwMTcgOS43MDY5MDEgTCA2LjcwNzA4NDEgMTEuODI4MjE5IEwgNi4wMDAxNTA2IDExLjEyMTI4NSBMIDguMTIxNDY4MSA4Ljk5OTk2NzQgTCA2LjAwMDE1MDYgNi44Nzg2NDk5IEwgNi43MDcwODQxIDYuMTcxNzE2MyB6IFwiIC8+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxLjQ5OTk5OVwiIGhlaWdodD1cIjE1Ljk5OTk5OVwiIHg9XCIxMVwiIHk9XCI0LjUwMDAwMDVcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjEuNDk5OTk5XCIgaGVpZ2h0PVwiMTUuOTk5OTk5XCIgeD1cIjIwLjVcIiB5PVwiNC41MDAwMDA1XCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxLjQ5OTk5OTJcIiBoZWlnaHQ9XCIxNS45OTk5OTlcIiB4PVwiM1wiIHk9XCI0LjUwMDAwMDVcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjE4Ljk5OTk5OFwiIGhlaWdodD1cIjEuNDk5OTk5MlwiIHg9XCIzLjAwMDAwMDdcIiB5PVwiMy4wMDAwMDA3XCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxOC45OTk5OThcIiBoZWlnaHQ9XCIxLjQ5OTk5OTJcIiB4PVwiMy4wMDAwMDA3XCIgeT1cIjIwLjVcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidG9nZ2xlLXByZXZpZXctcGFuZS1zcGxpdFwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiVG9nZ2xlUHJldmlld1BhbmVTcGxpdE1lbnVTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInRyYW5zZm9ybSIsInBhdGgiLCJkIiwicmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJNZW51U1ZHIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzJEQUZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVMLElBQUEsQUFBTUEsOENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxxQkFFRSxvQkFBQ0MseUJBQ0Msb0JBQUNBO29CQUFFQyxXQUFVO2lDQUNYLG9CQUFDQztvQkFBS0MsR0FBRTttQ0FFVixvQkFBQ0M7b0JBQUtDLE9BQU07b0JBQVdDLFFBQU87b0JBQVlDLEdBQUU7b0JBQUtDLEdBQUU7a0NBQ25ELG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBV0MsUUFBTztvQkFBWUMsR0FBRTtvQkFBT0MsR0FBRTtrQ0FDckQsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFZQyxRQUFPO29CQUFZQyxHQUFFO29CQUFJQyxHQUFFO2tDQUNuRCxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQVlDLFFBQU87b0JBQVlDLEdBQUU7b0JBQVlDLEdBQUU7a0NBQzNELG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBWUMsUUFBTztvQkFBWUMsR0FBRTtvQkFBWUMsR0FBRTs7WUFJakU7OztXQWhCbUJWO0VBQXNDVyxhQUFPO0FBa0JoRSxpQkFsQm1CWCwrQkFrQlpZLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=