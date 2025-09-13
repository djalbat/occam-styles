"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _div = /*#__PURE__*/ _interop_require_default(require("../div"));
var _index = require("../../../index");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  margin-bottom: 2rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var AlphaNumericDiv = /*#__PURE__*/ function(Element) {
    _inherits(AlphaNumericDiv, Element);
    function AlphaNumericDiv() {
        _class_call_check(this, AlphaNumericDiv);
        return _call_super(this, AlphaNumericDiv, arguments);
    }
    _create_class(AlphaNumericDiv, [
        {
            key: "childElements",
            value: function childElements() {
                var AlphaNumericSVGs = [
                    _index.FrakturAlphaNumericSVG,
                    _index.MonospaceAlphaNumericSVG,
                    _index.DoubleStruckAlphaNumericSVG,
                    _index.SerifBoldAlphaNumericSVG,
                    _index.SerifItalicAlphaNumericSVG,
                    _index.SerifBoldItalicAlphaNumericSVG,
                    _index.SansSerifAlphaNumericSVG,
                    _index.SansSerifBoldAlphaNumericSVG,
                    _index.SansSerifItalicAlphaNumericSVG,
                    _index.SansSerifBoldItalicAlphaNumericSVG
                ], childElements = AlphaNumericSVGs.map(function(AlphaNumericSVG) {
                    return /*#__PURE__*/ React.createElement(_div.default, null, /*#__PURE__*/ React.createElement(AlphaNumericSVG, null));
                });
                return childElements;
            }
        }
    ]);
    return AlphaNumericDiv;
}(_wrap_native_super(_easy.Element));
_define_property(AlphaNumericDiv, "tagName", "div");
_define_property(AlphaNumericDiv, "defaultProperties", {
    className: "toolbar"
});
var _default = (0, _easywithstyle.default)(AlphaNumericDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L2FscGhhTnVtZXJpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBEaXYgZnJvbSBcIi4uL2RpdlwiO1xuXG5pbXBvcnQgeyBGcmFrdHVyQWxwaGFOdW1lcmljU1ZHLFxuICAgICAgICAgTW9ub3NwYWNlQWxwaGFOdW1lcmljU1ZHLFxuICAgICAgICAgRG91YmxlU3RydWNrQWxwaGFOdW1lcmljU1ZHLFxuICAgICAgICAgU2VyaWZCb2xkQWxwaGFOdW1lcmljU1ZHLFxuICAgICAgICAgU2VyaWZJdGFsaWNBbHBoYU51bWVyaWNTVkcsXG4gICAgICAgICBTZXJpZkJvbGRJdGFsaWNBbHBoYU51bWVyaWNTVkcsXG4gICAgICAgICBTYW5zU2VyaWZBbHBoYU51bWVyaWNTVkcsXG4gICAgICAgICBTYW5zU2VyaWZCb2xkQWxwaGFOdW1lcmljU1ZHLFxuICAgICAgICAgU2Fuc1NlcmlmSXRhbGljQWxwaGFOdW1lcmljU1ZHLFxuICAgICAgICAgU2Fuc1NlcmlmQm9sZEl0YWxpY0FscGhhTnVtZXJpY1NWRyB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuY2xhc3MgQWxwaGFOdW1lcmljRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgQWxwaGFOdW1lcmljU1ZHcyA9IFtcbiAgICAgICAgICAgIEZyYWt0dXJBbHBoYU51bWVyaWNTVkcsXG4gICAgICAgICAgICBNb25vc3BhY2VBbHBoYU51bWVyaWNTVkcsXG4gICAgICAgICAgICBEb3VibGVTdHJ1Y2tBbHBoYU51bWVyaWNTVkcsXG4gICAgICAgICAgICBTZXJpZkJvbGRBbHBoYU51bWVyaWNTVkcsXG4gICAgICAgICAgICBTZXJpZkl0YWxpY0FscGhhTnVtZXJpY1NWRyxcbiAgICAgICAgICAgIFNlcmlmQm9sZEl0YWxpY0FscGhhTnVtZXJpY1NWRyxcbiAgICAgICAgICAgIFNhbnNTZXJpZkFscGhhTnVtZXJpY1NWRyxcbiAgICAgICAgICAgIFNhbnNTZXJpZkJvbGRBbHBoYU51bWVyaWNTVkcsXG4gICAgICAgICAgICBTYW5zU2VyaWZJdGFsaWNBbHBoYU51bWVyaWNTVkcsXG4gICAgICAgICAgICBTYW5zU2VyaWZCb2xkSXRhbGljQWxwaGFOdW1lcmljU1ZHXG4gICAgICAgICAgXSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gQWxwaGFOdW1lcmljU1ZHcy5tYXAoKEFscGhhTnVtZXJpY1NWRykgPT5cblxuICAgICAgICAgICAgPERpdj5cbiAgICAgICAgICAgICAgPEFscGhhTnVtZXJpY1NWRyAvPlxuICAgICAgICAgICAgPC9EaXY+XG5cbiAgICAgICAgICApO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ0b29sYmFyXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEFscGhhTnVtZXJpY0RpdilgXG5cbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgXG5gO1xuXG4iXSwibmFtZXMiOlsiQWxwaGFOdW1lcmljRGl2IiwiY2hpbGRFbGVtZW50cyIsIkFscGhhTnVtZXJpY1NWR3MiLCJGcmFrdHVyQWxwaGFOdW1lcmljU1ZHIiwiTW9ub3NwYWNlQWxwaGFOdW1lcmljU1ZHIiwiRG91YmxlU3RydWNrQWxwaGFOdW1lcmljU1ZHIiwiU2VyaWZCb2xkQWxwaGFOdW1lcmljU1ZHIiwiU2VyaWZJdGFsaWNBbHBoYU51bWVyaWNTVkciLCJTZXJpZkJvbGRJdGFsaWNBbHBoYU51bWVyaWNTVkciLCJTYW5zU2VyaWZBbHBoYU51bWVyaWNTVkciLCJTYW5zU2VyaWZCb2xkQWxwaGFOdW1lcmljU1ZHIiwiU2Fuc1NlcmlmSXRhbGljQWxwaGFOdW1lcmljU1ZHIiwiU2Fuc1NlcmlmQm9sZEl0YWxpY0FscGhhTnVtZXJpY1NWRyIsIm1hcCIsIkFscGhhTnVtZXJpY1NWRyIsIkRpdiIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW1EQTs7O2VBQUE7OztvRUFqRHNCO29CQUVFOzBEQUVSO3FCQVdtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRCxJQUFBLEFBQU1BLGdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxtQkFBbUI7b0JBQ2pCQyw2QkFBc0I7b0JBQ3RCQywrQkFBd0I7b0JBQ3hCQyxrQ0FBMkI7b0JBQzNCQywrQkFBd0I7b0JBQ3hCQyxpQ0FBMEI7b0JBQzFCQyxxQ0FBOEI7b0JBQzlCQywrQkFBd0I7b0JBQ3hCQyxtQ0FBNEI7b0JBQzVCQyxxQ0FBOEI7b0JBQzlCQyx5Q0FBa0M7aUJBQ25DLEVBQ0RYLGdCQUFnQkMsaUJBQWlCVyxHQUFHLENBQUMsU0FBQ0M7eUNBRXBDLG9CQUFDQyxZQUFHLHNCQUNGLG9CQUFDRDs7Z0JBS1gsT0FBT2I7WUFDVDs7O1dBdkJJRDtxQkFBd0JnQixhQUFPO0FBeUJuQyxpQkF6QkloQixpQkF5QkdpQixXQUFVO0FBRWpCLGlCQTNCSWpCLGlCQTJCR2tCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ3BCIn0=