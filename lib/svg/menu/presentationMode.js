"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PresentationModeMenuSVG;
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
var PresentationModeMenuSVG = /*#__PURE__*/ function(MenuSVG) {
    _inherits(PresentationModeMenuSVG, MenuSVG);
    function PresentationModeMenuSVG() {
        _class_call_check(this, PresentationModeMenuSVG);
        return _call_super(this, PresentationModeMenuSVG, arguments);
    }
    _create_class(PresentationModeMenuSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    transform: "rotate(0, 12.5, 12.5) translate(17, 12.5)",
                    d: "m 0,0 v -2 h 2 v -2 l 4,4 -4,4 v -2 h -2 z"
                }), /*#__PURE__*/ React.createElement("path", {
                    transform: "rotate(90, 12.5, 12.5) translate(17, 12.5)",
                    d: "m 0,0 v -2 h 2 v -2 l 4,4 -4,4 v -2 h -2 z"
                }), /*#__PURE__*/ React.createElement("path", {
                    transform: "rotate(180, 12.5, 12.5) translate(17, 12.5)",
                    d: "m 0,0 v -2 h 2 v -2 l 4,4 -4,4 v -2 h -2 z"
                }), /*#__PURE__*/ React.createElement("path", {
                    transform: "rotate(270, 12.5, 12.5) translate(17, 12.5)",
                    d: "m 0,0 v -2 h 2 v -2 l 4,4 -4,4 v -2 h -2 z"
                }));
            }
        }
    ]);
    return PresentationModeMenuSVG;
}(_menu.default);
_define_property(PresentationModeMenuSVG, "defaultProperties", {
    className: "presentation-mode"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvbWVudS9wcmVzZW50YXRpb25Nb2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWVudVNWRyBmcm9tIFwiLi4vLi4vc3ZnL21lbnVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlc2VudGF0aW9uTW9kZU1lbnVTVkcgZXh0ZW5kcyBNZW51U1ZHIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Zz5cbiAgICAgICAgPHBhdGggdHJhbnNmb3JtPVwicm90YXRlKDAsIDEyLjUsIDEyLjUpIHRyYW5zbGF0ZSgxNywgMTIuNSlcIiBkPVwibSAwLDAgdiAtMiBoIDIgdiAtMiBsIDQsNCAtNCw0IHYgLTIgaCAtMiB6XCIgLz5cbiAgICAgICAgPHBhdGggdHJhbnNmb3JtPVwicm90YXRlKDkwLCAxMi41LCAxMi41KSB0cmFuc2xhdGUoMTcsIDEyLjUpXCIgZD1cIm0gMCwwIHYgLTIgaCAyIHYgLTIgbCA0LDQgLTQsNCB2IC0yIGggLTIgelwiIC8+XG4gICAgICAgIDxwYXRoIHRyYW5zZm9ybT1cInJvdGF0ZSgxODAsIDEyLjUsIDEyLjUpIHRyYW5zbGF0ZSgxNywgMTIuNSlcIiBkPVwibSAwLDAgdiAtMiBoIDIgdiAtMiBsIDQsNCAtNCw0IHYgLTIgaCAtMiB6XCIgLz5cbiAgICAgICAgPHBhdGggdHJhbnNmb3JtPVwicm90YXRlKDI3MCwgMTIuNSwgMTIuNSkgdHJhbnNsYXRlKDE3LCAxMi41KVwiIGQ9XCJtIDAsMCB2IC0yIGggMiB2IC0yIGwgNCw0IC00LDQgdiAtMiBoIC0yIHpcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicHJlc2VudGF0aW9uLW1vZGVcIixcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJQcmVzZW50YXRpb25Nb2RlTWVudVNWRyIsImNoaWxkRWxlbWVudHMiLCJnIiwicGF0aCIsInRyYW5zZm9ybSIsImQiLCJNZW51U1ZHIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzJEQUZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVMLElBQUEsQUFBTUEsd0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxxQkFFRSxvQkFBQ0MseUJBQ0Msb0JBQUNDO29CQUFLQyxXQUFVO29CQUE0Q0MsR0FBRTtrQ0FDOUQsb0JBQUNGO29CQUFLQyxXQUFVO29CQUE2Q0MsR0FBRTtrQ0FDL0Qsb0JBQUNGO29CQUFLQyxXQUFVO29CQUE4Q0MsR0FBRTtrQ0FDaEUsb0JBQUNGO29CQUFLQyxXQUFVO29CQUE4Q0MsR0FBRTs7WUFJdEU7OztXQVptQkw7RUFBZ0NNLGFBQU87QUFjMUQsaUJBZG1CTix5QkFjWk8scUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==