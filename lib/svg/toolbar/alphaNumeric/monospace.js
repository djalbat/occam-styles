"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MonospaceAlphaNumericToolbarSVG;
    }
});
var _alphaNumeric = /*#__PURE__*/ _interop_require_default(require("../../../svg/toolbar/alphaNumeric"));
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
var MonospaceAlphaNumericToolbarSVG = /*#__PURE__*/ function(AlphaNumericToolbarSVG) {
    _inherits(MonospaceAlphaNumericToolbarSVG, AlphaNumericToolbarSVG);
    function MonospaceAlphaNumericToolbarSVG() {
        _class_call_check(this, MonospaceAlphaNumericToolbarSVG);
        return _call_super(this, MonospaceAlphaNumericToolbarSVG, arguments);
    }
    _create_class(MonospaceAlphaNumericToolbarSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    d: "M581-46L542-52C526-54 523-61 519-74L343-650C342-655 340-657 333-657C313-657 277-655 242-655C209-655 178-657 162-657C158-657 156-655 156-651L156-617C156-614 158-611 162-611L219-605C235-603 239-600 237-591L84-69C81-60 77-54 67-53L20-46C16-45 14-43 14-40L14-6C14-2 16 0 20 0C53 0 83-2 116-2C147-2 206 0 235 0C239 0 241-2 241-6L241-40C241-44 240-46 236-46L161-53C154-54 147-61 149-69L192-223L408-223L449-87C456-63 451-54 437-53L363-46C359-46 357-43 357-40L357-6C357-2 359 0 363 0C396 0 456-2 491-2C522-2 551 0 580 0C584 0 586-2 586-6L586-40C586-44 585-45 581-46ZM206-274L296-594L393-274Z"
                }));
            }
        }
    ]);
    return MonospaceAlphaNumericToolbarSVG;
}(_alphaNumeric.default);
_define_property(MonospaceAlphaNumericToolbarSVG, "defaultProperties", {
    viewBox: "14 -657 572 657",
    className: "monospace"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9hbHBoYU51bWVyaWMvbW9ub3NwYWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQWxwaGFOdW1lcmljVG9vbGJhclNWRyBmcm9tIFwiLi4vLi4vLi4vc3ZnL3Rvb2xiYXIvYWxwaGFOdW1lcmljXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbm9zcGFjZUFscGhhTnVtZXJpY1Rvb2xiYXJTVkcgZXh0ZW5kcyBBbHBoYU51bWVyaWNUb29sYmFyU1ZHIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Zz5cbiAgICAgICAgPHBhdGggZD1cIk01ODEtNDZMNTQyLTUyQzUyNi01NCA1MjMtNjEgNTE5LTc0TDM0My02NTBDMzQyLTY1NSAzNDAtNjU3IDMzMy02NTdDMzEzLTY1NyAyNzctNjU1IDI0Mi02NTVDMjA5LTY1NSAxNzgtNjU3IDE2Mi02NTdDMTU4LTY1NyAxNTYtNjU1IDE1Ni02NTFMMTU2LTYxN0MxNTYtNjE0IDE1OC02MTEgMTYyLTYxMUwyMTktNjA1QzIzNS02MDMgMjM5LTYwMCAyMzctNTkxTDg0LTY5QzgxLTYwIDc3LTU0IDY3LTUzTDIwLTQ2QzE2LTQ1IDE0LTQzIDE0LTQwTDE0LTZDMTQtMiAxNiAwIDIwIDBDNTMgMCA4My0yIDExNi0yQzE0Ny0yIDIwNiAwIDIzNSAwQzIzOSAwIDI0MS0yIDI0MS02TDI0MS00MEMyNDEtNDQgMjQwLTQ2IDIzNi00NkwxNjEtNTNDMTU0LTU0IDE0Ny02MSAxNDktNjlMMTkyLTIyM0w0MDgtMjIzTDQ0OS04N0M0NTYtNjMgNDUxLTU0IDQzNy01M0wzNjMtNDZDMzU5LTQ2IDM1Ny00MyAzNTctNDBMMzU3LTZDMzU3LTIgMzU5IDAgMzYzIDBDMzk2IDAgNDU2LTIgNDkxLTJDNTIyLTIgNTUxIDAgNTgwIDBDNTg0IDAgNTg2LTIgNTg2LTZMNTg2LTQwQzU4Ni00NCA1ODUtNDUgNTgxLTQ2Wk0yMDYtMjc0TDI5Ni01OTRMMzkzLTI3NFpcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICB2aWV3Qm94OiBcIjE0IC02NTcgNTcyIDY1N1wiLFxuICAgIGNsYXNzTmFtZTogXCJtb25vc3BhY2VcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIk1vbm9zcGFjZUFscGhhTnVtZXJpY1Rvb2xiYXJTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInBhdGgiLCJkIiwiQWxwaGFOdW1lcmljVG9vbGJhclNWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwidmlld0JveCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7bUVBRmM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBCLElBQUEsQUFBTUEsZ0RBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxxQkFFRSxvQkFBQ0MseUJBQ0Msb0JBQUNDO29CQUFLQyxHQUFFOztZQUlkOzs7V0FUbUJKO0VBQXdDSyxxQkFBc0I7QUFXakYsaUJBWG1CTCxpQ0FXWk0scUJBQW9CO0lBQ3pCQyxTQUFTO0lBQ1RDLFdBQVc7QUFDYiJ9