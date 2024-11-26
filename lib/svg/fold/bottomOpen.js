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
        "\n\n  top: unset;\n  bottom: 0;\n   \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var BottomOpenFoldSVG = /*#__PURE__*/ function(FoldSVG) {
    _inherits(BottomOpenFoldSVG, FoldSVG);
    function BottomOpenFoldSVG() {
        _class_call_check(this, BottomOpenFoldSVG);
        return _call_super(this, BottomOpenFoldSVG, arguments);
    }
    _create_class(BottomOpenFoldSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    d: "M 7.9999971,2.8436987 2.04215,8.6171677 c 0,0 0,5.7734703 0,5.7734703 H 13.957849 V 8.6171677 Z",
                    style: "stroke-width:4;paint-order:markers stroke fill;stroke-linejoin: round;"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "m 4,11 h 8",
                    style: "stroke-width:3"
                }));
            }
        }
    ]);
    return BottomOpenFoldSVG;
}(_fold.default);
_define_property(BottomOpenFoldSVG, "defaultProperties", {
    viewBox: "0 0 16 16",
    className: "bottom-open"
});
var _default = (0, _easywithstyle.default)(BottomOpenFoldSVG)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvZm9sZC9ib3R0b21PcGVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgRm9sZFNWRyBmcm9tIFwiLi4vLi4vc3ZnL2ZvbGRcIjtcblxuY2xhc3MgQm90dG9tT3BlbkZvbGRTVkcgZXh0ZW5kcyBGb2xkU1ZHIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Zz5cbiAgICAgICAgPHBhdGggZD1cIk0gNy45OTk5OTcxLDIuODQzNjk4NyAyLjA0MjE1LDguNjE3MTY3NyBjIDAsMCAwLDUuNzczNDcwMyAwLDUuNzczNDcwMyBIIDEzLjk1Nzg0OSBWIDguNjE3MTY3NyBaXCIgc3R5bGU9XCJzdHJva2Utd2lkdGg6NDtwYWludC1vcmRlcjptYXJrZXJzIHN0cm9rZSBmaWxsO3N0cm9rZS1saW5lam9pbjogcm91bmQ7XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIm0gNCwxMSBoIDhcIiBzdHlsZT1cInN0cm9rZS13aWR0aDozXCIgLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgdmlld0JveDogXCIwIDAgMTYgMTZcIixcbiAgICBjbGFzc05hbWU6IFwiYm90dG9tLW9wZW5cIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQm90dG9tT3BlbkZvbGRTVkcpYFxuXG4gIHRvcDogdW5zZXQ7XG4gIGJvdHRvbTogMDtcbiAgIFxuYDtcbiJdLCJuYW1lcyI6WyJCb3R0b21PcGVuRm9sZFNWRyIsImNoaWxkRWxlbWVudHMiLCJnIiwicGF0aCIsImQiLCJzdHlsZSIsIkZvbGRTVkciLCJkZWZhdWx0UHJvcGVydGllcyIsInZpZXdCb3giLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdCQTs7O2VBQUE7OztvRUF0QnNCOzJEQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEIsSUFBQSxBQUFNQSxrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLHFCQUVFLG9CQUFDQyx5QkFDQyxvQkFBQ0M7b0JBQUtDLEdBQUU7b0JBQWtHQyxPQUFNO2tDQUNoSCxvQkFBQ0Y7b0JBQUtDLEdBQUU7b0JBQWFDLE9BQU07O1lBSWpDOzs7V0FWSUw7RUFBMEJNLGFBQU87QUFZckMsaUJBWklOLG1CQVlHTyxxQkFBb0I7SUFDekJDLFNBQVM7SUFDVEMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ1YifQ==