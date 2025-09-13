"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ScriptAlphaNumericSVG;
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
var ScriptAlphaNumericSVG = /*#__PURE__*/ function(AlphaNumericSVG) {
    _inherits(ScriptAlphaNumericSVG, AlphaNumericSVG);
    function ScriptAlphaNumericSVG() {
        _class_call_check(this, ScriptAlphaNumericSVG);
        return _call_super(this, ScriptAlphaNumericSVG, arguments);
    }
    _create_class(ScriptAlphaNumericSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    d: "M57 8C175 8 257-122 316-226L525-226C517-191 499-105 499-60C499-6 525 12 564 12C620 12 683-26 731-76L713-99C685-77 653-52 628-52C602-52 593-79 593-114C593-148 602-192 609-226L687-613C691-631 711-643 734-651L734-673C588-658 491-624 400-496C291-342 176-34 86-34C37-34 83-125 20-125C-16-125-32-97-32-66C-32-26-3 8 57 8ZM337-266C411-413 433-456 455-490C490-547 534-599 600-614L603-609L533-266Z"
                }));
            }
        }
    ]);
    return ScriptAlphaNumericSVG;
}(_alphaNumeric.default);
_define_property(ScriptAlphaNumericSVG, "defaultProperties", {
    viewBox: "-32 -673 766 685",
    className: "script"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvYWxwaGFOdW1lcmljL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEFscGhhTnVtZXJpY1NWRyBmcm9tIFwiLi4vLi4vc3ZnL2FscGhhTnVtZXJpY1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JpcHRBbHBoYU51bWVyaWNTVkcgZXh0ZW5kcyBBbHBoYU51bWVyaWNTVkcge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aCBkPVwiTTU3IDhDMTc1IDggMjU3LTEyMiAzMTYtMjI2TDUyNS0yMjZDNTE3LTE5MSA0OTktMTA1IDQ5OS02MEM0OTktNiA1MjUgMTIgNTY0IDEyQzYyMCAxMiA2ODMtMjYgNzMxLTc2TDcxMy05OUM2ODUtNzcgNjUzLTUyIDYyOC01MkM2MDItNTIgNTkzLTc5IDU5My0xMTRDNTkzLTE0OCA2MDItMTkyIDYwOS0yMjZMNjg3LTYxM0M2OTEtNjMxIDcxMS02NDMgNzM0LTY1MUw3MzQtNjczQzU4OC02NTggNDkxLTYyNCA0MDAtNDk2QzI5MS0zNDIgMTc2LTM0IDg2LTM0QzM3LTM0IDgzLTEyNSAyMC0xMjVDLTE2LTEyNS0zMi05Ny0zMi02NkMtMzItMjYtMyA4IDU3IDhaTTMzNy0yNjZDNDExLTQxMyA0MzMtNDU2IDQ1NS00OTBDNDkwLTU0NyA1MzQtNTk5IDYwMC02MTRMNjAzLTYwOUw1MzMtMjY2WlwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHZpZXdCb3g6IFwiLTMyIC02NzMgNzY2IDY4NVwiLFxuICAgIGNsYXNzTmFtZTogXCJzY3JpcHRcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlNjcmlwdEFscGhhTnVtZXJpY1NWRyIsImNoaWxkRWxlbWVudHMiLCJnIiwicGF0aCIsImQiLCJBbHBoYU51bWVyaWNTVkciLCJkZWZhdWx0UHJvcGVydGllcyIsInZpZXdCb3giLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O21FQUZPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUViLElBQUEsQUFBTUEsc0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxxQkFFRSxvQkFBQ0MseUJBQ0Msb0JBQUNDO29CQUFLQyxHQUFFOztZQUlkOzs7V0FUbUJKO0VBQThCSyxxQkFBZTtBQVdoRSxpQkFYbUJMLHVCQVdaTSxxQkFBb0I7SUFDekJDLFNBQVM7SUFDVEMsV0FBVztBQUNiIn0=