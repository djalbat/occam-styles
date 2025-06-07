"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MenuDiv;
    }
});
var _easy = require("easy");
var _div = /*#__PURE__*/ _interop_require_default(require("../div"));
var _index = require("../../../index");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var MenuDiv = /*#__PURE__*/ function(Element) {
    _inherits(MenuDiv, Element);
    function MenuDiv() {
        _class_call_check(this, MenuDiv);
        return _call_super(this, MenuDiv, arguments);
    }
    _create_class(MenuDiv, [
        {
            key: "childElements",
            value: function childElements() {
                var ToolbarSVGs = [
                    _index.FlipMenuSVG,
                    _index.EmbeddedModeMenuSVG,
                    _index.PresentationModeMenuSVG,
                    _index.IncreaseFontSizeMenuSVG,
                    _index.DecreaseFontSizeMenuSVG,
                    _index.TogglePreviewPaneOnlyMenuSVG,
                    _index.TogglePreviewPaneSplitMenuSVG,
                    _index.TogglePrettyPrinterOnlyMenuSVG,
                    _index.TogglePrettyPrinterSplitMenuSVG
                ], childElements = ToolbarSVGs.map(function(ToolbarSVG) {
                    return /*#__PURE__*/ React.createElement(_div.default, null, /*#__PURE__*/ React.createElement(ToolbarSVG, null));
                });
                return childElements;
            }
        }
    ]);
    return MenuDiv;
}(_wrap_native_super(_easy.Element));
_define_property(MenuDiv, "tagName", "div");
_define_property(MenuDiv, "defaultProperties", {
    className: "menu"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgRGl2IGZyb20gXCIuLi9kaXZcIjtcblxuaW1wb3J0IHsgRmxpcE1lbnVTVkcsXG4gICAgICAgICBFbWJlZGRlZE1vZGVNZW51U1ZHLFxuICAgICAgICAgSW5jcmVhc2VGb250U2l6ZU1lbnVTVkcsXG4gICAgICAgICBEZWNyZWFzZUZvbnRTaXplTWVudVNWRyxcbiAgICAgICAgIFByZXNlbnRhdGlvbk1vZGVNZW51U1ZHLFxuICAgICAgICAgVG9nZ2xlUHJldmlld1BhbmVPbmx5TWVudVNWRyxcbiAgICAgICAgIFRvZ2dsZVByZXZpZXdQYW5lU3BsaXRNZW51U1ZHLFxuICAgICAgICAgVG9nZ2xlUHJldHR5UHJpbnRlck9ubHlNZW51U1ZHLFxuICAgICAgICAgVG9nZ2xlUHJldHR5UHJpbnRlclNwbGl0TWVudVNWRyB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51RGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgVG9vbGJhclNWR3MgPSBbXG4gICAgICAgICAgICBGbGlwTWVudVNWRyxcbiAgICAgICAgICAgIEVtYmVkZGVkTW9kZU1lbnVTVkcsXG4gICAgICAgICAgICBQcmVzZW50YXRpb25Nb2RlTWVudVNWRyxcbiAgICAgICAgICAgIEluY3JlYXNlRm9udFNpemVNZW51U1ZHLFxuICAgICAgICAgICAgRGVjcmVhc2VGb250U2l6ZU1lbnVTVkcsXG4gICAgICAgICAgICBUb2dnbGVQcmV2aWV3UGFuZU9ubHlNZW51U1ZHLFxuICAgICAgICAgICAgVG9nZ2xlUHJldmlld1BhbmVTcGxpdE1lbnVTVkcsXG4gICAgICAgICAgICBUb2dnbGVQcmV0dHlQcmludGVyT25seU1lbnVTVkcsXG4gICAgICAgICAgICBUb2dnbGVQcmV0dHlQcmludGVyU3BsaXRNZW51U1ZHXG4gICAgICAgICAgXSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gVG9vbGJhclNWR3MubWFwKChUb29sYmFyU1ZHKSA9PlxuXG4gICAgICAgICAgICA8RGl2PlxuICAgICAgICAgICAgICA8VG9vbGJhclNWRyAvPlxuICAgICAgICAgICAgPC9EaXY+XG5cbiAgICAgICAgICApO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJtZW51XCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJNZW51RGl2IiwiY2hpbGRFbGVtZW50cyIsIlRvb2xiYXJTVkdzIiwiRmxpcE1lbnVTVkciLCJFbWJlZGRlZE1vZGVNZW51U1ZHIiwiUHJlc2VudGF0aW9uTW9kZU1lbnVTVkciLCJJbmNyZWFzZUZvbnRTaXplTWVudVNWRyIsIkRlY3JlYXNlRm9udFNpemVNZW51U1ZHIiwiVG9nZ2xlUHJldmlld1BhbmVPbmx5TWVudVNWRyIsIlRvZ2dsZVByZXZpZXdQYW5lU3BsaXRNZW51U1ZHIiwiVG9nZ2xlUHJldHR5UHJpbnRlck9ubHlNZW51U1ZHIiwiVG9nZ2xlUHJldHR5UHJpbnRlclNwbGl0TWVudVNWRyIsIm1hcCIsIlRvb2xiYXJTVkciLCJEaXYiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWlCcUJBOzs7b0JBZkc7MERBRVI7cUJBVWdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHakMsSUFBQSxBQUFNQSx3QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGNBQWM7b0JBQ1pDLGtCQUFXO29CQUNYQywwQkFBbUI7b0JBQ25CQyw4QkFBdUI7b0JBQ3ZCQyw4QkFBdUI7b0JBQ3ZCQyw4QkFBdUI7b0JBQ3ZCQyxtQ0FBNEI7b0JBQzVCQyxvQ0FBNkI7b0JBQzdCQyxxQ0FBOEI7b0JBQzlCQyxzQ0FBK0I7aUJBQ2hDLEVBQ0RWLGdCQUFnQkMsWUFBWVUsR0FBRyxDQUFDLFNBQUNDO3lDQUUvQixvQkFBQ0MsWUFBRyxzQkFDRixvQkFBQ0Q7O2dCQUtYLE9BQU9aO1lBQ1Q7OztXQXRCbUJEO3FCQUFnQmUsYUFBTztBQXdCMUMsaUJBeEJtQmYsU0F3QlpnQixXQUFVO0FBRWpCLGlCQTFCbUJoQixTQTBCWmlCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=