"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return InvertColoursMenuSVG;
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
var InvertColoursMenuSVG = /*#__PURE__*/ function(MenuSVG) {
    _inherits(InvertColoursMenuSVG, MenuSVG);
    function InvertColoursMenuSVG() {
        _class_call_check(this, InvertColoursMenuSVG);
        return _call_super(this, InvertColoursMenuSVG, arguments);
    }
    _create_class(InvertColoursMenuSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    d: "M 12.5 4 A 8.5 8.5 0 1 1 12.5 21 A 8.5 8.5 0 1 1 12.5 4 M 12.5 6.5 A 6 6 0 1 0 12.5 18.5 A 6 6 0 1 0 12.5 6.5 Z"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "M 12.5 6.5 A 6 6 0 0 1 12.5 18.5 Z"
                }));
            }
        }
    ]);
    return InvertColoursMenuSVG;
}(_menu.default);
_define_property(InvertColoursMenuSVG, "defaultProperties", {
    className: "invert-colours"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvbWVudS9pbnZlcnRDb2xvdWlycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1lbnVTVkcgZnJvbSBcIi4uLy4uL3N2Zy9tZW51XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludmVydENvbG91cnNNZW51U1ZHIGV4dGVuZHMgTWVudVNWRyB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGc+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDEyLjUgNCBBIDguNSA4LjUgMCAxIDEgMTIuNSAyMSBBIDguNSA4LjUgMCAxIDEgMTIuNSA0IE0gMTIuNSA2LjUgQSA2IDYgMCAxIDAgMTIuNSAxOC41IEEgNiA2IDAgMSAwIDEyLjUgNi41IFpcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTSAxMi41IDYuNSBBIDYgNiAwIDAgMSAxMi41IDE4LjUgWlwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJpbnZlcnQtY29sb3Vyc1wiLFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkludmVydENvbG91cnNNZW51U1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJwYXRoIiwiZCIsIk1lbnVTVkciLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkRBRkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUwsSUFBQSxBQUFNQSxxQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLHFCQUVFLG9CQUFDQyx5QkFDQyxvQkFBQ0M7b0JBQUtDLEdBQUU7a0NBQ1Isb0JBQUNEO29CQUFLQyxHQUFFOztZQUlkOzs7V0FWbUJKO0VBQTZCSyxhQUFPO0FBWXZELGlCQVptQkwsc0JBWVpNLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=