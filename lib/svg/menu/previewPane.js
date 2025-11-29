"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PreviewPaneMenuSVG;
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
var PreviewPaneMenuSVG = /*#__PURE__*/ function(MenuSVG) {
    _inherits(PreviewPaneMenuSVG, MenuSVG);
    function PreviewPaneMenuSVG() {
        _class_call_check(this, PreviewPaneMenuSVG);
        return _call_super(this, PreviewPaneMenuSVG, arguments);
    }
    _create_class(PreviewPaneMenuSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("rect", {
                    width: "1.5",
                    height: "16",
                    x: "20.5",
                    y: "4.5"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "1.5",
                    height: "16",
                    x: "3",
                    y: "4.5"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "19",
                    height: "1.5",
                    x: "3",
                    y: "3"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "19",
                    height: "1.5",
                    x: "3",
                    y: "20.5"
                }));
            }
        }
    ]);
    return PreviewPaneMenuSVG;
}(_menu.default);
_define_property(PreviewPaneMenuSVG, "defaultProperties", {
    className: "preview-pane"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvbWVudS9wcmV2aWV3UGFuZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1lbnVTVkcgZnJvbSBcIi4uLy4uL3N2Zy9tZW51XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZXZpZXdQYW5lTWVudVNWRyBleHRlbmRzIE1lbnVTVkcge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjEuNVwiIGhlaWdodD1cIjE2XCIgeD1cIjIwLjVcIiB5PVwiNC41XCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxLjVcIiBoZWlnaHQ9XCIxNlwiIHg9XCIzXCIgeT1cIjQuNVwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMTlcIiBoZWlnaHQ9XCIxLjVcIiB4PVwiM1wiIHk9XCIzXCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxOVwiIGhlaWdodD1cIjEuNVwiIHg9XCIzXCIgeT1cIjIwLjVcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicHJldmlldy1wYW5lXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJQcmV2aWV3UGFuZU1lbnVTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJ5IiwiTWVudVNWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzsyREFGRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTCxJQUFBLEFBQU1BLG1DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UscUJBRUUsb0JBQUNDLHlCQUNDLG9CQUFDQztvQkFBS0MsT0FBTTtvQkFBTUMsUUFBTztvQkFBS0MsR0FBRTtvQkFBT0MsR0FBRTtrQ0FDekMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFNQyxRQUFPO29CQUFLQyxHQUFFO29CQUFJQyxHQUFFO2tDQUN0QyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQUtDLFFBQU87b0JBQU1DLEdBQUU7b0JBQUlDLEdBQUU7a0NBQ3RDLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBS0MsUUFBTztvQkFBTUMsR0FBRTtvQkFBSUMsR0FBRTs7WUFJNUM7OztXQVptQlA7RUFBMkJRLGFBQU87QUFjckQsaUJBZG1CUixvQkFjWlMscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==