"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FrakturAlphaNumericSVG;
    }
});
var _alphaNumeric = /*#__PURE__*/ _interop_require_default(require("../../svg/alphaNumeric"));
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
var FrakturAlphaNumericSVG = /*#__PURE__*/ function(AlphaNumericSVG) {
    _inherits(FrakturAlphaNumericSVG, AlphaNumericSVG);
    function FrakturAlphaNumericSVG() {
        _class_call_check(this, FrakturAlphaNumericSVG);
        return _call_super(this, FrakturAlphaNumericSVG, arguments);
    }
    _create_class(FrakturAlphaNumericSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    d: "M659-63L647-84L585-58C575-69 559-85 559-121L559-463C559-558 562-616 655-645L648-671L447-588C454-541 454-485 454-414L454-132L321-63C289-94 256-130 208-157C326-228 408-318 408-452C408-596 314-670 208-670C114-670 41-612 41-526C41-425 141-410 141-336C141-288 100-259 75-249L83-227C145-243 230-299 230-379C230-465 130-501 130-577C130-620 163-641 199-641C281-641 296-534 296-451C296-262 219-177 80-115L80-100C128-84 207-29 244 22L454-100C457-36 478-1 521 23Z"
                }));
            }
        }
    ]);
    return FrakturAlphaNumericSVG;
}(_alphaNumeric.default);
_define_property(FrakturAlphaNumericSVG, "defaultProperties", {
    viewBox: "41 -671 618 694",
    className: "fraktur"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvYWxwaGFOdW1lcmljL2ZyYWt0dXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBbHBoYU51bWVyaWNTVkcgZnJvbSBcIi4uLy4uL3N2Zy9hbHBoYU51bWVyaWNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJha3R1ckFscGhhTnVtZXJpY1NWRyBleHRlbmRzIEFscGhhTnVtZXJpY1NWRyB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGc+XG4gICAgICAgIDxwYXRoIGQ9XCJNNjU5LTYzTDY0Ny04NEw1ODUtNThDNTc1LTY5IDU1OS04NSA1NTktMTIxTDU1OS00NjNDNTU5LTU1OCA1NjItNjE2IDY1NS02NDVMNjQ4LTY3MUw0NDctNTg4QzQ1NC01NDEgNDU0LTQ4NSA0NTQtNDE0TDQ1NC0xMzJMMzIxLTYzQzI4OS05NCAyNTYtMTMwIDIwOC0xNTdDMzI2LTIyOCA0MDgtMzE4IDQwOC00NTJDNDA4LTU5NiAzMTQtNjcwIDIwOC02NzBDMTE0LTY3MCA0MS02MTIgNDEtNTI2QzQxLTQyNSAxNDEtNDEwIDE0MS0zMzZDMTQxLTI4OCAxMDAtMjU5IDc1LTI0OUw4My0yMjdDMTQ1LTI0MyAyMzAtMjk5IDIzMC0zNzlDMjMwLTQ2NSAxMzAtNTAxIDEzMC01NzdDMTMwLTYyMCAxNjMtNjQxIDE5OS02NDFDMjgxLTY0MSAyOTYtNTM0IDI5Ni00NTFDMjk2LTI2MiAyMTktMTc3IDgwLTExNUw4MC0xMDBDMTI4LTg0IDIwNy0yOSAyNDQgMjJMNDU0LTEwMEM0NTctMzYgNDc4LTEgNTIxIDIzWlwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHZpZXdCb3g6IFwiNDEgLTY3MSA2MTggNjk0XCIsXG4gICAgY2xhc3NOYW1lOiBcImZyYWt0dXJcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkZyYWt0dXJBbHBoYU51bWVyaWNTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInBhdGgiLCJkIiwiQWxwaGFOdW1lcmljU1ZHIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ2aWV3Qm94IiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzttRUFGTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFYixJQUFBLEFBQU1BLHVDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UscUJBRUUsb0JBQUNDLHlCQUNDLG9CQUFDQztvQkFBS0MsR0FBRTs7WUFJZDs7O1dBVG1CSjtFQUErQksscUJBQWU7QUFXakUsaUJBWG1CTCx3QkFXWk0scUJBQW9CO0lBQ3pCQyxTQUFTO0lBQ1RDLFdBQVc7QUFDYiJ9