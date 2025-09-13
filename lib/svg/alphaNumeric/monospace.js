"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MonospaceAlphaNumericSVG;
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
var MonospaceAlphaNumericSVG = /*#__PURE__*/ function(AlphaNumericSVG) {
    _inherits(MonospaceAlphaNumericSVG, AlphaNumericSVG);
    function MonospaceAlphaNumericSVG() {
        _class_call_check(this, MonospaceAlphaNumericSVG);
        return _call_super(this, MonospaceAlphaNumericSVG, arguments);
    }
    _create_class(MonospaceAlphaNumericSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    d: "M581-46L542-52C526-54 523-61 519-74L343-650C342-655 340-657 333-657C313-657 277-655 242-655C209-655 178-657 162-657C158-657 156-655 156-651L156-617C156-614 158-611 162-611L219-605C235-603 239-600 237-591L84-69C81-60 77-54 67-53L20-46C16-45 14-43 14-40L14-6C14-2 16 0 20 0C53 0 83-2 116-2C147-2 206 0 235 0C239 0 241-2 241-6L241-40C241-44 240-46 236-46L161-53C154-54 147-61 149-69L192-223L408-223L449-87C456-63 451-54 437-53L363-46C359-46 357-43 357-40L357-6C357-2 359 0 363 0C396 0 456-2 491-2C522-2 551 0 580 0C584 0 586-2 586-6L586-40C586-44 585-45 581-46ZM206-274L296-594L393-274Z"
                }));
            }
        }
    ]);
    return MonospaceAlphaNumericSVG;
}(_alphaNumeric.default);
_define_property(MonospaceAlphaNumericSVG, "defaultProperties", {
    viewBox: "14 -657 572 657",
    className: "monospace"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvYWxwaGFOdW1lcmljL21vbm9zcGFjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEFscGhhTnVtZXJpY1NWRyBmcm9tIFwiLi4vLi4vc3ZnL2FscGhhTnVtZXJpY1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb25vc3BhY2VBbHBoYU51bWVyaWNTVkcgZXh0ZW5kcyBBbHBoYU51bWVyaWNTVkcge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aCBkPVwiTTU4MS00Nkw1NDItNTJDNTI2LTU0IDUyMy02MSA1MTktNzRMMzQzLTY1MEMzNDItNjU1IDM0MC02NTcgMzMzLTY1N0MzMTMtNjU3IDI3Ny02NTUgMjQyLTY1NUMyMDktNjU1IDE3OC02NTcgMTYyLTY1N0MxNTgtNjU3IDE1Ni02NTUgMTU2LTY1MUwxNTYtNjE3QzE1Ni02MTQgMTU4LTYxMSAxNjItNjExTDIxOS02MDVDMjM1LTYwMyAyMzktNjAwIDIzNy01OTFMODQtNjlDODEtNjAgNzctNTQgNjctNTNMMjAtNDZDMTYtNDUgMTQtNDMgMTQtNDBMMTQtNkMxNC0yIDE2IDAgMjAgMEM1MyAwIDgzLTIgMTE2LTJDMTQ3LTIgMjA2IDAgMjM1IDBDMjM5IDAgMjQxLTIgMjQxLTZMMjQxLTQwQzI0MS00NCAyNDAtNDYgMjM2LTQ2TDE2MS01M0MxNTQtNTQgMTQ3LTYxIDE0OS02OUwxOTItMjIzTDQwOC0yMjNMNDQ5LTg3QzQ1Ni02MyA0NTEtNTQgNDM3LTUzTDM2My00NkMzNTktNDYgMzU3LTQzIDM1Ny00MEwzNTctNkMzNTctMiAzNTkgMCAzNjMgMEMzOTYgMCA0NTYtMiA0OTEtMkM1MjItMiA1NTEgMCA1ODAgMEM1ODQgMCA1ODYtMiA1ODYtNkw1ODYtNDBDNTg2LTQ0IDU4NS00NSA1ODEtNDZaTTIwNi0yNzRMMjk2LTU5NEwzOTMtMjc0WlwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHZpZXdCb3g6IFwiMTQgLTY1NyA1NzIgNjU3XCIsXG4gICAgY2xhc3NOYW1lOiBcIm1vbm9zcGFjZVwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiTW9ub3NwYWNlQWxwaGFOdW1lcmljU1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJwYXRoIiwiZCIsIkFscGhhTnVtZXJpY1NWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwidmlld0JveCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7bUVBRk87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWIsSUFBQSxBQUFNQSx5Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLHFCQUVFLG9CQUFDQyx5QkFDQyxvQkFBQ0M7b0JBQUtDLEdBQUU7O1lBSWQ7OztXQVRtQko7RUFBaUNLLHFCQUFlO0FBV25FLGlCQVhtQkwsMEJBV1pNLHFCQUFvQjtJQUN6QkMsU0FBUztJQUNUQyxXQUFXO0FBQ2IifQ==