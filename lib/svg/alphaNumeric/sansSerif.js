"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SansSerifAlphaNumericSVG;
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
var SansSerifAlphaNumericSVG = /*#__PURE__*/ function(AlphaNumericSVG) {
    _inherits(SansSerifAlphaNumericSVG, AlphaNumericSVG);
    function SansSerifAlphaNumericSVG() {
        _class_call_check(this, SansSerifAlphaNumericSVG);
        return _call_super(this, SansSerifAlphaNumericSVG, arguments);
    }
    _create_class(SansSerifAlphaNumericSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    d: "M4 0L91 0L155-199L400-199L463 0L554 0L327-657L231-657ZM177-266L209-366C233-439 254-511 275-587L279-587C301-511 322-439 347-366L379-266Z"
                }));
            }
        }
    ]);
    return SansSerifAlphaNumericSVG;
}(_alphaNumeric.default);
_define_property(SansSerifAlphaNumericSVG, "defaultProperties", {
    viewBox: "4 -657 550 657",
    className: "sans-serif"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvYWxwaGFOdW1lcmljL3NhbnNTZXJpZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEFscGhhTnVtZXJpY1NWRyBmcm9tIFwiLi4vLi4vc3ZnL2FscGhhTnVtZXJpY1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYW5zU2VyaWZBbHBoYU51bWVyaWNTVkcgZXh0ZW5kcyBBbHBoYU51bWVyaWNTVkcge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aCBkPVwiTTQgMEw5MSAwTDE1NS0xOTlMNDAwLTE5OUw0NjMgMEw1NTQgMEwzMjctNjU3TDIzMS02NTdaTTE3Ny0yNjZMMjA5LTM2NkMyMzMtNDM5IDI1NC01MTEgMjc1LTU4N0wyNzktNTg3QzMwMS01MTEgMzIyLTQzOSAzNDctMzY2TDM3OS0yNjZaXCIgLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgdmlld0JveDogXCI0IC02NTcgNTUwIDY1N1wiLFxuICAgIGNsYXNzTmFtZTogXCJzYW5zLXNlcmlmXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJTYW5zU2VyaWZBbHBoYU51bWVyaWNTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInBhdGgiLCJkIiwiQWxwaGFOdW1lcmljU1ZHIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ2aWV3Qm94IiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzttRUFGTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFYixJQUFBLEFBQU1BLHlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UscUJBRUUsb0JBQUNDLHlCQUNDLG9CQUFDQztvQkFBS0MsR0FBRTs7WUFJZDs7O1dBVG1CSjtFQUFpQ0sscUJBQWU7QUFXbkUsaUJBWG1CTCwwQkFXWk0scUJBQW9CO0lBQ3pCQyxTQUFTO0lBQ1RDLFdBQVc7QUFDYiJ9