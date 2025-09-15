"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CancelCharacterMapToolbarSVG;
    }
});
var _characterMap = /*#__PURE__*/ _interop_require_default(require("../characterMap"));
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
var CancelCharacterMapToolbarSVG = /*#__PURE__*/ function(CharacterMapToolbarSVG) {
    _inherits(CancelCharacterMapToolbarSVG, CharacterMapToolbarSVG);
    function CancelCharacterMapToolbarSVG() {
        _class_call_check(this, CancelCharacterMapToolbarSVG);
        return _call_super(this, CancelCharacterMapToolbarSVG, arguments);
    }
    _create_class(CancelCharacterMapToolbarSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", {
                    fill: "".concat(_common.cancelCharacterMapFill),
                    transform: "translate(12.5, 10) rotate(45)"
                }, /*#__PURE__*/ React.createElement("rect", {
                    width: "19",
                    height: "4",
                    x: "-7.5",
                    y: "0"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "4",
                    height: "19",
                    x: "0",
                    y: "-7.5"
                }));
            }
        }
    ]);
    return CancelCharacterMapToolbarSVG;
}(_characterMap.default);
_define_property(CancelCharacterMapToolbarSVG, "defaultProperties", {
    viewBox: "0 0 25 25",
    className: "cancel"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9jaGFyYWN0ZXJNYXAvY2FuY2VsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ2hhcmFjdGVyTWFwVG9vbGJhclNWRyBmcm9tIFwiLi4vY2hhcmFjdGVyTWFwXCI7XG5cbmltcG9ydCB7IGNhbmNlbENoYXJhY3Rlck1hcEZpbGwgfSBmcm9tIFwiLi4vLi4vLi4vc2NoZW1lL2NvbW1vblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW5jZWxDaGFyYWN0ZXJNYXBUb29sYmFyU1ZHIGV4dGVuZHMgQ2hhcmFjdGVyTWFwVG9vbGJhclNWRyB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGcgZmlsbD17YCR7Y2FuY2VsQ2hhcmFjdGVyTWFwRmlsbH1gfSB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTIuNSwgMTApIHJvdGF0ZSg0NSlcIj5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxOVwiIGhlaWdodD1cIjRcIiB4PVwiLTcuNVwiIHk9XCIwXCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiMTlcIiB4PVwiMFwiIHk9XCItNy41XCIgLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgdmlld0JveDogXCIwIDAgMjUgMjVcIixcbiAgICBjbGFzc05hbWU6IFwiY2FuY2VsXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJDYW5jZWxDaGFyYWN0ZXJNYXBUb29sYmFyU1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJmaWxsIiwiY2FuY2VsQ2hhcmFjdGVyTWFwRmlsbCIsInRyYW5zZm9ybSIsInJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJ5IiwiQ2hhcmFjdGVyTWFwVG9vbGJhclNWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwidmlld0JveCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7bUVBSmM7c0JBRUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhCLElBQUEsQUFBTUEsNkNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxxQkFFRSxvQkFBQ0M7b0JBQUVDLE1BQU0sQUFBQyxHQUF5QixPQUF2QkMsOEJBQXNCO29CQUFJQyxXQUFVO2lDQUM5QyxvQkFBQ0M7b0JBQUtDLE9BQU07b0JBQUtDLFFBQU87b0JBQUlDLEdBQUU7b0JBQU9DLEdBQUU7a0NBQ3ZDLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBS0MsR0FBRTtvQkFBSUMsR0FBRTs7WUFJMUM7OztXQVZtQlY7RUFBcUNXLHFCQUFzQjtBQVk5RSxpQkFabUJYLDhCQVlaWSxxQkFBb0I7SUFDekJDLFNBQVM7SUFDVEMsV0FBVztBQUNiIn0=