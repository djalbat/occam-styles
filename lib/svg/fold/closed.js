"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ClosedFoldSVG;
    }
});
var _fold = /*#__PURE__*/ _interop_require_default(require("../../svg/fold"));
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
var ClosedFoldSVG = /*#__PURE__*/ function(FoldSVG) {
    _inherits(ClosedFoldSVG, FoldSVG);
    function ClosedFoldSVG() {
        _class_call_check(this, ClosedFoldSVG);
        return _call_super(this, ClosedFoldSVG, arguments);
    }
    _create_class(ClosedFoldSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    d: "M 2.04651,2.04651 H 13.953488 V 13.953487 H 2.04651 Z",
                    style: "stroke-width:4;paint-order:markers stroke fill;stroke-linejoin:round;"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "M 7.9999998,3.9999999 V 12",
                    style: "stroke-width:3"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "M 3.9999999,7.9999998 H 12",
                    style: "stroke-width:3"
                }));
            }
        }
    ]);
    return ClosedFoldSVG;
}(_fold.default);
_define_property(ClosedFoldSVG, "defaultProperties", {
    viewBox: "0 0 16 16",
    className: "closed"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvZm9sZC9jbG9zZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGb2xkU1ZHIGZyb20gXCIuLi8uLi9zdmcvZm9sZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9zZWRGb2xkU1ZHIGV4dGVuZHMgRm9sZFNWRyB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGc+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDIuMDQ2NTEsMi4wNDY1MSBIIDEzLjk1MzQ4OCBWIDEzLjk1MzQ4NyBIIDIuMDQ2NTEgWlwiIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjQ7cGFpbnQtb3JkZXI6bWFya2VycyBzdHJva2UgZmlsbDtzdHJva2UtbGluZWpvaW46cm91bmQ7XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0gNy45OTk5OTk4LDMuOTk5OTk5OSBWIDEyXCIgc3R5bGU9XCJzdHJva2Utd2lkdGg6M1wiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDMuOTk5OTk5OSw3Ljk5OTk5OTggSCAxMlwiIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjNcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICB2aWV3Qm94OiBcIjAgMCAxNiAxNlwiLFxuICAgIGNsYXNzTmFtZTogXCJjbG9zZWRcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkNsb3NlZEZvbGRTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInBhdGgiLCJkIiwic3R5bGUiLCJGb2xkU1ZHIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ2aWV3Qm94IiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzsyREFGRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTCxJQUFBLEFBQU1BLDhCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLHFCQUVFLG9CQUFDQyx5QkFDQyxvQkFBQ0M7b0JBQUtDLEdBQUU7b0JBQXdEQyxPQUFNO2tDQUN0RSxvQkFBQ0Y7b0JBQUtDLEdBQUU7b0JBQTZCQyxPQUFNO2tDQUMzQyxvQkFBQ0Y7b0JBQUtDLEdBQUU7b0JBQTZCQyxPQUFNOztZQUlqRDs7O1dBWG1CTDtFQUFzQk0sYUFBTztBQWFoRCxpQkFibUJOLGVBYVpPLHFCQUFvQjtJQUN6QkMsU0FBUztJQUNUQyxXQUFXO0FBQ2IifQ==