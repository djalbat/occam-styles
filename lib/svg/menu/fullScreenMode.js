"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FullScreenModeMenuSVG;
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
var FullScreenModeMenuSVG = /*#__PURE__*/ function(MenuSVG) {
    _inherits(FullScreenModeMenuSVG, MenuSVG);
    function FullScreenModeMenuSVG() {
        _class_call_check(this, FullScreenModeMenuSVG);
        return _call_super(this, FullScreenModeMenuSVG, arguments);
    }
    _create_class(FullScreenModeMenuSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    transform: "rotate(135, 12.5, 12.5) translate(17, 12.5) scale(1.5)",
                    d: "m 0,0 v -2 h 2 v -2 l 4,4 -4,4 v -2 h -2 z"
                }), /*#__PURE__*/ React.createElement("path", {
                    transform: "rotate(315, 12.5, 12.5) translate(17, 12.5) scale(1.5)",
                    d: "m 0,0 v -2 h 2 v -2 l 4,4 -4,4 v -2 h -2 z"
                }));
            }
        }
    ]);
    return FullScreenModeMenuSVG;
}(_menu.default);
_define_property(FullScreenModeMenuSVG, "defaultProperties", {
    className: "full-screen-mode"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvbWVudS9mdWxsU2NyZWVuTW9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1lbnVTVkcgZnJvbSBcIi4uLy4uL3N2Zy9tZW51XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bGxTY3JlZW5Nb2RlTWVudVNWRyBleHRlbmRzIE1lbnVTVkcge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aCB0cmFuc2Zvcm09XCJyb3RhdGUoMTM1LCAxMi41LCAxMi41KSB0cmFuc2xhdGUoMTcsIDEyLjUpIHNjYWxlKDEuNSlcIiBkPVwibSAwLDAgdiAtMiBoIDIgdiAtMiBsIDQsNCAtNCw0IHYgLTIgaCAtMiB6XCIgLz5cbiAgICAgICAgPHBhdGggdHJhbnNmb3JtPVwicm90YXRlKDMxNSwgMTIuNSwgMTIuNSkgdHJhbnNsYXRlKDE3LCAxMi41KSBzY2FsZSgxLjUpXCIgZD1cIm0gMCwwIHYgLTIgaCAyIHYgLTIgbCA0LDQgLTQsNCB2IC0yIGggLTIgelwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJmdWxsLXNjcmVlbi1tb2RlXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJGdWxsU2NyZWVuTW9kZU1lbnVTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInBhdGgiLCJ0cmFuc2Zvcm0iLCJkIiwiTWVudVNWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzsyREFGRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTCxJQUFBLEFBQU1BLHNDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UscUJBRUUsb0JBQUNDLHlCQUNDLG9CQUFDQztvQkFBS0MsV0FBVTtvQkFBeURDLEdBQUU7a0NBQzNFLG9CQUFDRjtvQkFBS0MsV0FBVTtvQkFBeURDLEdBQUU7O1lBSWpGOzs7V0FWbUJMO0VBQThCTSxhQUFPO0FBWXhELGlCQVptQk4sdUJBWVpPLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=