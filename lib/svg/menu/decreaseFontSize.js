"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DecreaseFontSizeMenuSVG;
    }
});
var _menu = /*#__PURE__*/ _interop_require_default(require("../../svg/menu"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var DecreaseFontSizeMenuSVG = /*#__PURE__*/ function(MenuSVG) {
    _inherits(DecreaseFontSizeMenuSVG, MenuSVG);
    var _super = _create_super(DecreaseFontSizeMenuSVG);
    function DecreaseFontSizeMenuSVG() {
        _class_call_check(this, DecreaseFontSizeMenuSVG);
        return _super.apply(this, arguments);
    }
    _create_class(DecreaseFontSizeMenuSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    d: "M 7.4130386,23.478239 H 2.0000028 l 0.1521737,-0.826086 q 0.3913038,-0.217391 0.8260858,-0.369564 0.434782,-0.173913 0.869564,-0.26087 L 12.45651,8.0000002 h 1.586954 l 2.456518,14.0217188 q 0.413043,0.08696 0.804347,0.26087 0.413043,0.173912 0.695651,0.369564 l -0.173913,0.826086 h -6.695642 l 0.152173,-0.826086 q 0.456521,-0.217391 0.956521,-0.369564 0.521738,-0.173913 0.978259,-0.26087 L 12.69564,18.565203 H 7.8912988 l -2.0652145,3.456516 q 0.4565211,0.06522 0.9130422,0.23913 0.4565211,0.152174 0.8260858,0.391304 z m 1.2173896,-6.326078 h 3.8912988 l -0.608695,-4.152168 v -1.869562 h -0.04348 l -0.826086,1.91304 z"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "8",
                    height: "2",
                    x: "15",
                    y: "5"
                }));
            }
        }
    ]);
    return DecreaseFontSizeMenuSVG;
}(_menu.default);
_define_property(DecreaseFontSizeMenuSVG, "defaultProperties", {
    className: "decrease-font-size"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvbWVudS9kZWNyZWFzZUZvbnRTaXplLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWVudVNWRyBmcm9tIFwiLi4vLi4vc3ZnL21lbnVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjcmVhc2VGb250U2l6ZU1lbnVTVkcgZXh0ZW5kcyBNZW51U1ZHIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Zz5cbiAgICAgICAgPHBhdGggZD1cIk0gNy40MTMwMzg2LDIzLjQ3ODIzOSBIIDIuMDAwMDAyOCBsIDAuMTUyMTczNywtMC44MjYwODYgcSAwLjM5MTMwMzgsLTAuMjE3MzkxIDAuODI2MDg1OCwtMC4zNjk1NjQgMC40MzQ3ODIsLTAuMTczOTEzIDAuODY5NTY0LC0wLjI2MDg3IEwgMTIuNDU2NTEsOC4wMDAwMDAyIGggMS41ODY5NTQgbCAyLjQ1NjUxOCwxNC4wMjE3MTg4IHEgMC40MTMwNDMsMC4wODY5NiAwLjgwNDM0NywwLjI2MDg3IDAuNDEzMDQzLDAuMTczOTEyIDAuNjk1NjUxLDAuMzY5NTY0IGwgLTAuMTczOTEzLDAuODI2MDg2IGggLTYuNjk1NjQyIGwgMC4xNTIxNzMsLTAuODI2MDg2IHEgMC40NTY1MjEsLTAuMjE3MzkxIDAuOTU2NTIxLC0wLjM2OTU2NCAwLjUyMTczOCwtMC4xNzM5MTMgMC45NzgyNTksLTAuMjYwODcgTCAxMi42OTU2NCwxOC41NjUyMDMgSCA3Ljg5MTI5ODggbCAtMi4wNjUyMTQ1LDMuNDU2NTE2IHEgMC40NTY1MjExLDAuMDY1MjIgMC45MTMwNDIyLDAuMjM5MTMgMC40NTY1MjExLDAuMTUyMTc0IDAuODI2MDg1OCwwLjM5MTMwNCB6IG0gMS4yMTczODk2LC02LjMyNjA3OCBoIDMuODkxMjk4OCBsIC0wLjYwODY5NSwtNC4xNTIxNjggdiAtMS44Njk1NjIgaCAtMC4wNDM0OCBsIC0wLjgyNjA4NiwxLjkxMzA0IHpcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjhcIiBoZWlnaHQ9XCIyXCIgeD1cIjE1XCIgeT1cIjVcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZGVjcmVhc2UtZm9udC1zaXplXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJEZWNyZWFzZUZvbnRTaXplTWVudVNWRyIsImNoaWxkRWxlbWVudHMiLCJnIiwicGF0aCIsImQiLCJyZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwieSIsIk1lbnVTVkciLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkRBRkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUwsSUFBQSxBQUFNQSx3Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UscUJBRUUsb0JBQUNDLHlCQUNDLG9CQUFDQztvQkFBS0MsR0FBRTtrQ0FDUixvQkFBQ0M7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUtDLEdBQUU7O1lBSTFDOzs7V0FWbUJUO0VBQWdDVSxhQUFPO0FBWTFELGlCQVptQlYseUJBWVpXLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=