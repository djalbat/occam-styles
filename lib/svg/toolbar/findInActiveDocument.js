"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FindInActiveDocumentToolbarSVG;
    }
});
var _toolbar = /*#__PURE__*/ _interop_require_default(require("../../svg/toolbar"));
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
var FindInActiveDocumentToolbarSVG = /*#__PURE__*/ function(ToolbarSVG) {
    _inherits(FindInActiveDocumentToolbarSVG, ToolbarSVG);
    function FindInActiveDocumentToolbarSVG() {
        _class_call_check(this, FindInActiveDocumentToolbarSVG);
        return _call_super(this, FindInActiveDocumentToolbarSVG, arguments);
    }
    _create_class(FindInActiveDocumentToolbarSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", {
                    transform: "translate(0, 1)"
                }, /*#__PURE__*/ React.createElement("path", {
                    d: "m 13.462926,16.048775 a 7.4999181,7.4999995 0 0 1 -0.659553,0.754567 7.4999181,7.4999995 0 0 1 -0.756751,0.657368 l 1.463806,1.463823 1.414113,-1.414128 z m 5.704212,4.29006 -2.828589,2.82862 a 1.9995924,1.9999889 43.43161 0 0 2.828309,8.6e-5 1.9995924,1.9999889 43.43161 0 0 2.8e-4,-2.828706 z m -3.535496,-3.535534 3.535495,3.535534 -2.828395,2.828426 -3.535496,-3.535533 z M 12.803105,6.1965584 a 7.4999181,7.4999995 0 0 0 -10.606205,0 7.4999181,7.4999995 0 0 0 -3.66e-4,10.6066846 7.4999181,7.4999995 0 0 0 10.606936,0 7.4999181,7.4999995 0 0 0 -3.65e-4,-10.6066846 z m -1.414112,1.4141272 a 5.4999398,5.4999995 0 0 1 3.65e-4,7.7784294 5.4999398,5.4999995 0 0 1 -7.778712,0 5.4999398,5.4999995 0 0 1 3.65e-4,-7.7784294 5.4999398,5.4999995 0 0 1 7.777982,0 z"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "M 9.000001,10.000001 H 14 V 13 H 9.000001 Z m 9e-7,-4.0000005 H 12.000002 V 12 H 9.0000019 Z M 15.5,1.3478702e-6 19.999998,4.4999996 H 15.5 Z M 11.000001,5.3335864e-7 H 15.5 V 2.0000006 H 11.000001 Z M 11.000002,2.0000006 h 1.999999 v 4.9999988 h -1.999999 z m 6.999999,2.4999999 H 20 v 4.499999 h -1.999999 z m -4,4.4999999 H 20 V 11 h -5.999999 z"
                }));
            }
        }
    ]);
    return FindInActiveDocumentToolbarSVG;
}(_toolbar.default);
_define_property(FindInActiveDocumentToolbarSVG, "defaultProperties", {
    className: "find-in-active-document"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9maW5kSW5BY3RpdmVEb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRvb2xiYXJTVkcgZnJvbSBcIi4uLy4uL3N2Zy90b29sYmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbmRJbkFjdGl2ZURvY3VtZW50VG9vbGJhclNWRyBleHRlbmRzIFRvb2xiYXJTVkcge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLCAxKVwiPlxuICAgICAgICA8cGF0aCBkPVwibSAxMy40NjI5MjYsMTYuMDQ4Nzc1IGEgNy40OTk5MTgxLDcuNDk5OTk5NSAwIDAgMSAtMC42NTk1NTMsMC43NTQ1NjcgNy40OTk5MTgxLDcuNDk5OTk5NSAwIDAgMSAtMC43NTY3NTEsMC42NTczNjggbCAxLjQ2MzgwNiwxLjQ2MzgyMyAxLjQxNDExMywtMS40MTQxMjggeiBtIDUuNzA0MjEyLDQuMjkwMDYgLTIuODI4NTg5LDIuODI4NjIgYSAxLjk5OTU5MjQsMS45OTk5ODg5IDQzLjQzMTYxIDAgMCAyLjgyODMwOSw4LjZlLTUgMS45OTk1OTI0LDEuOTk5OTg4OSA0My40MzE2MSAwIDAgMi44ZS00LC0yLjgyODcwNiB6IG0gLTMuNTM1NDk2LC0zLjUzNTUzNCAzLjUzNTQ5NSwzLjUzNTUzNCAtMi44MjgzOTUsMi44Mjg0MjYgLTMuNTM1NDk2LC0zLjUzNTUzMyB6IE0gMTIuODAzMTA1LDYuMTk2NTU4NCBhIDcuNDk5OTE4MSw3LjQ5OTk5OTUgMCAwIDAgLTEwLjYwNjIwNSwwIDcuNDk5OTE4MSw3LjQ5OTk5OTUgMCAwIDAgLTMuNjZlLTQsMTAuNjA2Njg0NiA3LjQ5OTkxODEsNy40OTk5OTk1IDAgMCAwIDEwLjYwNjkzNiwwIDcuNDk5OTE4MSw3LjQ5OTk5OTUgMCAwIDAgLTMuNjVlLTQsLTEwLjYwNjY4NDYgeiBtIC0xLjQxNDExMiwxLjQxNDEyNzIgYSA1LjQ5OTkzOTgsNS40OTk5OTk1IDAgMCAxIDMuNjVlLTQsNy43Nzg0Mjk0IDUuNDk5OTM5OCw1LjQ5OTk5OTUgMCAwIDEgLTcuNzc4NzEyLDAgNS40OTk5Mzk4LDUuNDk5OTk5NSAwIDAgMSAzLjY1ZS00LC03Ljc3ODQyOTQgNS40OTk5Mzk4LDUuNDk5OTk5NSAwIDAgMSA3Ljc3Nzk4MiwwIHpcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTSA5LjAwMDAwMSwxMC4wMDAwMDEgSCAxNCBWIDEzIEggOS4wMDAwMDEgWiBtIDllLTcsLTQuMDAwMDAwNSBIIDEyLjAwMDAwMiBWIDEyIEggOS4wMDAwMDE5IFogTSAxNS41LDEuMzQ3ODcwMmUtNiAxOS45OTk5OTgsNC40OTk5OTk2IEggMTUuNSBaIE0gMTEuMDAwMDAxLDUuMzMzNTg2NGUtNyBIIDE1LjUgViAyLjAwMDAwMDYgSCAxMS4wMDAwMDEgWiBNIDExLjAwMDAwMiwyLjAwMDAwMDYgaCAxLjk5OTk5OSB2IDQuOTk5OTk4OCBoIC0xLjk5OTk5OSB6IG0gNi45OTk5OTksMi40OTk5OTk5IEggMjAgdiA0LjQ5OTk5OSBoIC0xLjk5OTk5OSB6IG0gLTQsNC40OTk5OTk5IEggMjAgViAxMSBoIC01Ljk5OTk5OSB6XCIgLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZpbmQtaW4tYWN0aXZlLWRvY3VtZW50XCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJGaW5kSW5BY3RpdmVEb2N1bWVudFRvb2xiYXJTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInRyYW5zZm9ybSIsInBhdGgiLCJkIiwiVG9vbGJhclNWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozs4REFGRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUixJQUFBLEFBQU1BLCtDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UscUJBRUUsb0JBQUNDO29CQUFFQyxXQUFVO2lDQUNYLG9CQUFDQztvQkFBS0MsR0FBRTtrQ0FDUixvQkFBQ0Q7b0JBQUtDLEdBQUU7O1lBSWQ7OztXQVZtQkw7RUFBdUNNLGdCQUFVO0FBWXBFLGlCQVptQk4sZ0NBWVpPLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=