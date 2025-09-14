"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CancelAlphaNumericToolbarSVG;
    }
});
var _alphaNumeric = /*#__PURE__*/ _interop_require_default(require("../../../svg/toolbar/alphaNumeric"));
var _common = require("../../../scheme/common");
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
var CancelAlphaNumericToolbarSVG = /*#__PURE__*/ function(AlphaNumericToolbarSVG) {
    _inherits(CancelAlphaNumericToolbarSVG, AlphaNumericToolbarSVG);
    function CancelAlphaNumericToolbarSVG() {
        _class_call_check(this, CancelAlphaNumericToolbarSVG);
        return _call_super(this, CancelAlphaNumericToolbarSVG, arguments);
    }
    _create_class(CancelAlphaNumericToolbarSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", {
                    fill: "".concat(_common.cancelCharacterMapFill),
                    transform: "translate(12.5, 9) rotate(45)"
                }, /*#__PURE__*/ React.createElement("rect", {
                    width: "19",
                    height: "5",
                    x: "-7",
                    y: "0"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "5",
                    height: "19",
                    x: "0",
                    y: "-7"
                }));
            }
        }
    ]);
    return CancelAlphaNumericToolbarSVG;
}(_alphaNumeric.default);
_define_property(CancelAlphaNumericToolbarSVG, "defaultProperties", {
    viewBox: "0 0 25 25",
    className: "cancel"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9hbHBoYU51bWVyaWMvY2FuY2VsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQWxwaGFOdW1lcmljVG9vbGJhclNWRyBmcm9tIFwiLi4vLi4vLi4vc3ZnL3Rvb2xiYXIvYWxwaGFOdW1lcmljXCI7XG5cbmltcG9ydCB7IGNhbmNlbENoYXJhY3Rlck1hcEZpbGwgfSBmcm9tIFwiLi4vLi4vLi4vc2NoZW1lL2NvbW1vblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW5jZWxBbHBoYU51bWVyaWNUb29sYmFyU1ZHIGV4dGVuZHMgQWxwaGFOdW1lcmljVG9vbGJhclNWRyB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGcgZmlsbD17YCR7Y2FuY2VsQ2hhcmFjdGVyTWFwRmlsbH1gfSB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTIuNSwgOSkgcm90YXRlKDQ1KVwiPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjE5XCIgaGVpZ2h0PVwiNVwiIHg9XCItN1wiIHk9XCIwXCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCI1XCIgaGVpZ2h0PVwiMTlcIiB4PVwiMFwiIHk9XCItN1wiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHZpZXdCb3g6IFwiMCAwIDI1IDI1XCIsXG4gICAgY2xhc3NOYW1lOiBcImNhbmNlbFwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQ2FuY2VsQWxwaGFOdW1lcmljVG9vbGJhclNWRyIsImNoaWxkRWxlbWVudHMiLCJnIiwiZmlsbCIsImNhbmNlbENoYXJhY3Rlck1hcEZpbGwiLCJ0cmFuc2Zvcm0iLCJyZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwieSIsIkFscGhhTnVtZXJpY1Rvb2xiYXJTVkciLCJkZWZhdWx0UHJvcGVydGllcyIsInZpZXdCb3giLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O21FQUpjO3NCQUVJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixJQUFBLEFBQU1BLDZDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UscUJBRUUsb0JBQUNDO29CQUFFQyxNQUFNLEFBQUMsR0FBeUIsT0FBdkJDLDhCQUFzQjtvQkFBSUMsV0FBVTtpQ0FDOUMsb0JBQUNDO29CQUFLQyxPQUFNO29CQUFLQyxRQUFPO29CQUFJQyxHQUFFO29CQUFLQyxHQUFFO2tDQUNyQyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQUtDLEdBQUU7b0JBQUlDLEdBQUU7O1lBSTFDOzs7V0FWbUJWO0VBQXFDVyxxQkFBc0I7QUFZOUUsaUJBWm1CWCw4QkFZWlkscUJBQW9CO0lBQ3pCQyxTQUFTO0lBQ1RDLFdBQVc7QUFDYiJ9