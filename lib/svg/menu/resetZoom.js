"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ResetZoomMenuSVG;
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
var ResetZoomMenuSVG = /*#__PURE__*/ function(MenuSVG) {
    _inherits(ResetZoomMenuSVG, MenuSVG);
    function ResetZoomMenuSVG() {
        _class_call_check(this, ResetZoomMenuSVG);
        return _call_super(this, ResetZoomMenuSVG, arguments);
    }
    _create_class(ResetZoomMenuSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", {
                    transform: "translate(1, 1) scale(0.9, 0.9)"
                }, /*#__PURE__*/ React.createElement("path", {
                    d: "M 7.4130386,23.478239 H 2.0000028 l 0.1521737,-0.826086 q 0.3913038,-0.217391 0.8260858,-0.369564 0.434782,-0.173913 0.869564,-0.26087 L 12.45651,8.0000002 h 1.586954 l 2.456518,14.0217188 q 0.413043,0.08696 0.804347,0.26087 0.413043,0.173912 0.695651,0.369564 l -0.173913,0.826086 h -6.695642 l 0.152173,-0.826086 q 0.456521,-0.217391 0.956521,-0.369564 0.521738,-0.173913 0.978259,-0.26087 L 12.69564,18.565203 H 7.8912988 l -2.0652145,3.456516 q 0.4565211,0.06522 0.9130422,0.23913 0.4565211,0.152174 0.8260858,0.391304 z m 1.2173896,-6.326078 h 3.8912988 l -0.608695,-4.152168 v -1.869562 h -0.04348 l -0.826086,1.91304 z"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "8",
                    x: "18",
                    y: "2"
                }));
            }
        }
    ]);
    return ResetZoomMenuSVG;
}(_menu.default);
_define_property(ResetZoomMenuSVG, "defaultProperties", {
    className: "reset-zoom"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvbWVudS9yZXNldFpvb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNZW51U1ZHIGZyb20gXCIuLi8uLi9zdmcvbWVudVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNldFpvb21NZW51U1ZHIGV4dGVuZHMgTWVudVNWRyB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEsIDEpIHNjYWxlKDAuOSwgMC45KVwiPlxuICAgICAgICA8cGF0aCBkPVwiTSA3LjQxMzAzODYsMjMuNDc4MjM5IEggMi4wMDAwMDI4IGwgMC4xNTIxNzM3LC0wLjgyNjA4NiBxIDAuMzkxMzAzOCwtMC4yMTczOTEgMC44MjYwODU4LC0wLjM2OTU2NCAwLjQzNDc4MiwtMC4xNzM5MTMgMC44Njk1NjQsLTAuMjYwODcgTCAxMi40NTY1MSw4LjAwMDAwMDIgaCAxLjU4Njk1NCBsIDIuNDU2NTE4LDE0LjAyMTcxODggcSAwLjQxMzA0MywwLjA4Njk2IDAuODA0MzQ3LDAuMjYwODcgMC40MTMwNDMsMC4xNzM5MTIgMC42OTU2NTEsMC4zNjk1NjQgbCAtMC4xNzM5MTMsMC44MjYwODYgaCAtNi42OTU2NDIgbCAwLjE1MjE3MywtMC44MjYwODYgcSAwLjQ1NjUyMSwtMC4yMTczOTEgMC45NTY1MjEsLTAuMzY5NTY0IDAuNTIxNzM4LC0wLjE3MzkxMyAwLjk3ODI1OSwtMC4yNjA4NyBMIDEyLjY5NTY0LDE4LjU2NTIwMyBIIDcuODkxMjk4OCBsIC0yLjA2NTIxNDUsMy40NTY1MTYgcSAwLjQ1NjUyMTEsMC4wNjUyMiAwLjkxMzA0MjIsMC4yMzkxMyAwLjQ1NjUyMTEsMC4xNTIxNzQgMC44MjYwODU4LDAuMzkxMzA0IHogbSAxLjIxNzM4OTYsLTYuMzI2MDc4IGggMy44OTEyOTg4IGwgLTAuNjA4Njk1LC00LjE1MjE2OCB2IC0xLjg2OTU2MiBoIC0wLjA0MzQ4IGwgLTAuODI2MDg2LDEuOTEzMDQgelwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjhcIiB4PVwiMThcIiB5PVwiMlwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJyZXNldC16b29tXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJSZXNldFpvb21NZW51U1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJ0cmFuc2Zvcm0iLCJwYXRoIiwiZCIsInJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJ5IiwiTWVudVNWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzsyREFGRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTCxJQUFBLEFBQU1BLGlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UscUJBRUUsb0JBQUNDO29CQUFFQyxXQUFVO2lDQUNYLG9CQUFDQztvQkFBS0MsR0FBRTtrQ0FDUixvQkFBQ0M7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUtDLEdBQUU7O1lBSTFDOzs7V0FWbUJWO0VBQXlCVyxhQUFPO0FBWW5ELGlCQVptQlgsa0JBWVpZLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=