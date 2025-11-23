"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DraftModeMenuSVG;
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
var DraftModeMenuSVG = /*#__PURE__*/ function(MenuSVG) {
    _inherits(DraftModeMenuSVG, MenuSVG);
    function DraftModeMenuSVG() {
        _class_call_check(this, DraftModeMenuSVG);
        return _call_super(this, DraftModeMenuSVG, arguments);
    }
    _create_class(DraftModeMenuSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    transform: "rotate(0, 12.5, 12.5) translate(16, 12.5)",
                    d: "m 0,0 l 4,-4 v 2 h 2 v 4 h -2 v 2 l -4,-4 z"
                }), /*#__PURE__*/ React.createElement("path", {
                    transform: "rotate(90, 12.5, 12.5) translate(16, 12.5)",
                    d: "m 0,0 l 4,-4 v 2 h 2 v 4 h -2 v 2 l -4,-4 z"
                }), /*#__PURE__*/ React.createElement("path", {
                    transform: "rotate(180, 12.5, 12.5) translate(16, 12.5)",
                    d: "m 0,0 l 4,-4 v 2 h 2 v 4 h -2 v 2 l -4,-4 z"
                }), /*#__PURE__*/ React.createElement("path", {
                    transform: "rotate(270, 12.5, 12.5) translate(16, 12.5)",
                    d: "m 0,0 l 4,-4 v 2 h 2 v 4 h -2 v 2 l -4,-4 z"
                }));
            }
        }
    ]);
    return DraftModeMenuSVG;
}(_menu.default);
_define_property(DraftModeMenuSVG, "defaultProperties", {
    className: "draft-mode"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvbWVudS9kcmFmdE1vZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNZW51U1ZHIGZyb20gXCIuLi8uLi9zdmcvbWVudVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFmdE1vZGVNZW51U1ZHIGV4dGVuZHMgTWVudVNWRyB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGc+XG4gICAgICAgIDxwYXRoIHRyYW5zZm9ybT1cInJvdGF0ZSgwLCAxMi41LCAxMi41KSB0cmFuc2xhdGUoMTYsIDEyLjUpXCIgZD1cIm0gMCwwIGwgNCwtNCB2IDIgaCAyIHYgNCBoIC0yIHYgMiBsIC00LC00IHpcIiAvPlxuICAgICAgICA8cGF0aCB0cmFuc2Zvcm09XCJyb3RhdGUoOTAsIDEyLjUsIDEyLjUpIHRyYW5zbGF0ZSgxNiwgMTIuNSlcImQ9XCJtIDAsMCBsIDQsLTQgdiAyIGggMiB2IDQgaCAtMiB2IDIgbCAtNCwtNCB6XCIgLz5cbiAgICAgICAgPHBhdGggdHJhbnNmb3JtPVwicm90YXRlKDE4MCwgMTIuNSwgMTIuNSkgdHJhbnNsYXRlKDE2LCAxMi41KVwiZD1cIm0gMCwwIGwgNCwtNCB2IDIgaCAyIHYgNCBoIC0yIHYgMiBsIC00LC00IHpcIiAvPlxuICAgICAgICA8cGF0aCB0cmFuc2Zvcm09XCJyb3RhdGUoMjcwLCAxMi41LCAxMi41KSB0cmFuc2xhdGUoMTYsIDEyLjUpXCJkPVwibSAwLDAgbCA0LC00IHYgMiBoIDIgdiA0IGggLTIgdiAyIGwgLTQsLTQgelwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkcmFmdC1tb2RlXCIsXG4gIH07XG59XG4iXSwibmFtZXMiOlsiRHJhZnRNb2RlTWVudVNWRyIsImNoaWxkRWxlbWVudHMiLCJnIiwicGF0aCIsInRyYW5zZm9ybSIsImQiLCJNZW51U1ZHIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzJEQUZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVMLElBQUEsQUFBTUEsaUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxxQkFFRSxvQkFBQ0MseUJBQ0Msb0JBQUNDO29CQUFLQyxXQUFVO29CQUE0Q0MsR0FBRTtrQ0FDOUQsb0JBQUNGO29CQUFLQyxXQUFVO29CQUE0Q0MsR0FBRTtrQ0FDOUQsb0JBQUNGO29CQUFLQyxXQUFVO29CQUE2Q0MsR0FBRTtrQ0FDL0Qsb0JBQUNGO29CQUFLQyxXQUFVO29CQUE2Q0MsR0FBRTs7WUFJckU7OztXQVptQkw7RUFBeUJNLGFBQU87QUFjbkQsaUJBZG1CTixrQkFjWk8scUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==