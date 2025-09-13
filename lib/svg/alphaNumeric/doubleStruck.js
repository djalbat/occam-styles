"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DoubleStruckAlphaNumericSVG;
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
var DoubleStruckAlphaNumericSVG = /*#__PURE__*/ function(AlphaNumericSVG) {
    _inherits(DoubleStruckAlphaNumericSVG, AlphaNumericSVG);
    function DoubleStruckAlphaNumericSVG() {
        _class_call_check(this, DoubleStruckAlphaNumericSVG);
        return _call_super(this, DoubleStruckAlphaNumericSVG, arguments);
    }
    _create_class(DoubleStruckAlphaNumericSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    d: "M640 0L410-657L243-657L4 0L51 0L125-209L392-209L468 0ZM580-42L497-42L296-615L379-615ZM376-251L142-251L260-580L262-580Z"
                }));
            }
        }
    ]);
    return DoubleStruckAlphaNumericSVG;
}(_alphaNumeric.default);
_define_property(DoubleStruckAlphaNumericSVG, "defaultProperties", {
    viewBox: "4 -657 636 657",
    className: "double-struck"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvYWxwaGFOdW1lcmljL2RvdWJsZVN0cnVjay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEFscGhhTnVtZXJpY1NWRyBmcm9tIFwiLi4vLi4vc3ZnL2FscGhhTnVtZXJpY1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb3VibGVTdHJ1Y2tBbHBoYU51bWVyaWNTVkcgZXh0ZW5kcyBBbHBoYU51bWVyaWNTVkcge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aCBkPVwiTTY0MCAwTDQxMC02NTdMMjQzLTY1N0w0IDBMNTEgMEwxMjUtMjA5TDM5Mi0yMDlMNDY4IDBaTTU4MC00Mkw0OTctNDJMMjk2LTYxNUwzNzktNjE1Wk0zNzYtMjUxTDE0Mi0yNTFMMjYwLTU4MEwyNjItNTgwWlwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHZpZXdCb3g6IFwiNCAtNjU3IDYzNiA2NTdcIixcbiAgICBjbGFzc05hbWU6IFwiZG91YmxlLXN0cnVja1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiRG91YmxlU3RydWNrQWxwaGFOdW1lcmljU1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJwYXRoIiwiZCIsIkFscGhhTnVtZXJpY1NWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwidmlld0JveCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7bUVBRk87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWIsSUFBQSxBQUFNQSw0Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLHFCQUVFLG9CQUFDQyx5QkFDQyxvQkFBQ0M7b0JBQUtDLEdBQUU7O1lBSWQ7OztXQVRtQko7RUFBb0NLLHFCQUFlO0FBV3RFLGlCQVhtQkwsNkJBV1pNLHFCQUFvQjtJQUN6QkMsU0FBUztJQUNUQyxXQUFXO0FBQ2IifQ==