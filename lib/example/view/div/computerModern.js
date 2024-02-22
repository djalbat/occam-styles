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
var _easy = require("easy");
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  font-size: 4rem;\n  margin-bottom: 2rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ComputerModernDiv = /*#__PURE__*/ function(Element) {
    _inherits(ComputerModernDiv, Element);
    var _super = _create_super(ComputerModernDiv);
    function ComputerModernDiv() {
        _class_call_check(this, ComputerModernDiv);
        return _super.apply(this, arguments);
    }
    _create_class(ComputerModernDiv, [
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement("p", {
                        style: {
                            fontFamily: "Computer Modern Serif",
                            fontWeight: "normal",
                            fontStyle: "normal"
                        }
                    }, "Computer Modern Serif"),
                    /*#__PURE__*/ React.createElement("p", {
                        style: {
                            fontFamily: "Computer Modern Serif",
                            fontWeight: "normal",
                            fontStyle: "italic"
                        }
                    }, "Computer Modern Serif Italic"),
                    /*#__PURE__*/ React.createElement("p", {
                        style: {
                            fontFamily: "Computer Modern Serif",
                            fontWeight: "bold",
                            fontStyle: "normal"
                        }
                    }, "Computer Modern Serif Bold"),
                    /*#__PURE__*/ React.createElement("p", {
                        style: {
                            fontFamily: "Computer Modern Serif",
                            fontWeight: "bold",
                            fontStyle: "italic"
                        }
                    }, "Computer Modern Serif Bold Italic"),
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement("p", {
                        style: {
                            fontFamily: "Computer Modern Sans",
                            fontWeight: "normal",
                            fontStyle: "normal"
                        }
                    }, "Computer Modern Sans"),
                    /*#__PURE__*/ React.createElement("p", {
                        style: {
                            fontFamily: "Computer Modern Sans",
                            fontWeight: "normal",
                            fontStyle: "italic"
                        }
                    }, "Computer Modern Sans Italic"),
                    /*#__PURE__*/ React.createElement("p", {
                        style: {
                            fontFamily: "Computer Modern Sans",
                            fontWeight: "bold",
                            fontStyle: "normal"
                        }
                    }, "Computer Modern Sans Bold"),
                    /*#__PURE__*/ React.createElement("p", {
                        style: {
                            fontFamily: "Computer Modern Sans",
                            fontWeight: "bold",
                            fontStyle: "italic"
                        }
                    }, "Computer Modern Sans Bold Italic"),
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement("p", {
                        style: {
                            fontFamily: "Computer Modern Typewriter",
                            fontWeight: "normal",
                            fontStyle: "normal"
                        }
                    }, "Computer Modern Typewriter"),
                    /*#__PURE__*/ React.createElement("p", {
                        style: {
                            fontFamily: "Computer Modern Typewriter",
                            fontWeight: "normal",
                            fontStyle: "italic"
                        }
                    }, "Computer Modern Typewriter Italic"),
                    /*#__PURE__*/ React.createElement("p", {
                        style: {
                            fontFamily: "Computer Modern Typewriter",
                            fontWeight: "bold",
                            fontStyle: "normal"
                        }
                    }, "Computer Modern Typewriter Bold"),
                    /*#__PURE__*/ React.createElement("p", {
                        style: {
                            fontFamily: "Computer Modern Typewriter",
                            fontWeight: "bold",
                            fontStyle: "italic"
                        }
                    }, "Computer Modern Typewriter Bold Italic"),
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement("p", {
                        style: {
                            fontFamily: "Computer Modern Bright",
                            fontWeight: "normal",
                            fontStyle: "normal"
                        }
                    }, "Computer Modern Bright"),
                    /*#__PURE__*/ React.createElement("p", {
                        style: {
                            fontFamily: "Computer Modern Bright",
                            fontWeight: "normal",
                            fontStyle: "italic"
                        }
                    }, "Computer Modern Bright Italic"),
                    /*#__PURE__*/ React.createElement("p", {
                        style: {
                            fontFamily: "Computer Modern Bright",
                            fontWeight: "bold",
                            fontStyle: "normal"
                        }
                    }, "Computer Modern Bright Bold"),
                    /*#__PURE__*/ React.createElement("p", {
                        style: {
                            fontFamily: "Computer Modern Bright",
                            fontWeight: "bold",
                            fontStyle: "italic"
                        }
                    }, "Computer Modern Bright Bold Italic"),
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement("p", {
                        style: {
                            fontFamily: "Computer Modern Concrete",
                            fontWeight: "normal",
                            fontStyle: "normal"
                        }
                    }, "Computer Modern Concrete"),
                    /*#__PURE__*/ React.createElement("p", {
                        style: {
                            fontFamily: "Computer Modern Concrete",
                            fontWeight: "normal",
                            fontStyle: "italic"
                        }
                    }, "Computer Modern Concrete Italic"),
                    /*#__PURE__*/ React.createElement("p", {
                        style: {
                            fontFamily: "Computer Modern Concrete",
                            fontWeight: "bold",
                            fontStyle: "normal"
                        }
                    }, "Computer Modern Concrete Bold"),
                    /*#__PURE__*/ React.createElement("p", {
                        style: {
                            fontFamily: "Computer Modern Concrete",
                            fontWeight: "bold",
                            fontStyle: "italic"
                        }
                    }, "Computer Modern Concrete Bold Italic")
                ];
            }
        }
    ]);
    return ComputerModernDiv;
}(_wrap_native_super(_easy.Element));
_define_property(ComputerModernDiv, "tagName", "div");
_define_property(ComputerModernDiv, "defaultProperties", {
    className: "computer-modern"
});
var _default = (0, _easywithstyle.default)(ComputerModernDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L2NvbXB1dGVyTW9kZXJuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5jbGFzcyBDb21wdXRlck1vZGVybkRpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8cCBzdHlsZT17e1xuICAgICAgICBmb250RmFtaWx5OiBcIkNvbXB1dGVyIE1vZGVybiBTZXJpZlwiLFxuICAgICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgICAgICBmb250U3R5bGU6IFwibm9ybWFsXCJcbiAgICAgIH19PlxuICAgICAgICBDb21wdXRlciBNb2Rlcm4gU2VyaWZcbiAgICAgIDwvcD4sXG5cbiAgICAgIDxwIHN0eWxlPXt7XG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQ29tcHV0ZXIgTW9kZXJuIFNlcmlmXCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXG4gICAgICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIlxuICAgICAgfX0+XG4gICAgICAgIENvbXB1dGVyIE1vZGVybiBTZXJpZiBJdGFsaWNcbiAgICAgIDwvcD4sXG5cbiAgICAgIDxwIHN0eWxlPXt7XG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQ29tcHV0ZXIgTW9kZXJuIFNlcmlmXCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICBmb250U3R5bGU6IFwibm9ybWFsXCJcbiAgICAgIH19PlxuICAgICAgICBDb21wdXRlciBNb2Rlcm4gU2VyaWYgQm9sZFxuICAgICAgPC9wPixcblxuICAgICAgPHAgc3R5bGU9e3tcbiAgICAgICAgZm9udEZhbWlseTogXCJDb21wdXRlciBNb2Rlcm4gU2VyaWZcIixcbiAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIlxuICAgICAgfX0+XG4gICAgICAgIENvbXB1dGVyIE1vZGVybiBTZXJpZiBCb2xkIEl0YWxpY1xuICAgICAgPC9wPixcblxuICAgICAgPGJyLz4sXG5cbiAgICAgIDxwIHN0eWxlPXt7XG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQ29tcHV0ZXIgTW9kZXJuIFNhbnNcIixcbiAgICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiXG4gICAgICB9fT5cbiAgICAgICAgQ29tcHV0ZXIgTW9kZXJuIFNhbnNcbiAgICAgIDwvcD4sXG5cbiAgICAgIDxwIHN0eWxlPXt7XG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQ29tcHV0ZXIgTW9kZXJuIFNhbnNcIixcbiAgICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgZm9udFN0eWxlOiBcIml0YWxpY1wiXG4gICAgICB9fT5cbiAgICAgICAgQ29tcHV0ZXIgTW9kZXJuIFNhbnMgSXRhbGljXG4gICAgICA8L3A+LFxuXG4gICAgICA8cCBzdHlsZT17e1xuICAgICAgICBmb250RmFtaWx5OiBcIkNvbXB1dGVyIE1vZGVybiBTYW5zXCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICBmb250U3R5bGU6IFwibm9ybWFsXCJcbiAgICAgIH19PlxuICAgICAgICBDb21wdXRlciBNb2Rlcm4gU2FucyBCb2xkXG4gICAgICA8L3A+LFxuXG4gICAgICA8cCBzdHlsZT17e1xuICAgICAgICBmb250RmFtaWx5OiBcIkNvbXB1dGVyIE1vZGVybiBTYW5zXCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICBmb250U3R5bGU6IFwiaXRhbGljXCJcbiAgICAgIH19PlxuICAgICAgICBDb21wdXRlciBNb2Rlcm4gU2FucyBCb2xkIEl0YWxpY1xuICAgICAgPC9wPixcblxuICAgICAgPGJyLz4sXG5cbiAgICAgIDxwIHN0eWxlPXt7XG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQ29tcHV0ZXIgTW9kZXJuIFR5cGV3cml0ZXJcIixcbiAgICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiXG4gICAgICB9fT5cbiAgICAgICAgQ29tcHV0ZXIgTW9kZXJuIFR5cGV3cml0ZXJcbiAgICAgIDwvcD4sXG5cbiAgICAgIDxwIHN0eWxlPXt7XG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQ29tcHV0ZXIgTW9kZXJuIFR5cGV3cml0ZXJcIixcbiAgICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgZm9udFN0eWxlOiBcIml0YWxpY1wiXG4gICAgICB9fT5cbiAgICAgICAgQ29tcHV0ZXIgTW9kZXJuIFR5cGV3cml0ZXIgSXRhbGljXG4gICAgICA8L3A+LFxuXG4gICAgICA8cCBzdHlsZT17e1xuICAgICAgICBmb250RmFtaWx5OiBcIkNvbXB1dGVyIE1vZGVybiBUeXBld3JpdGVyXCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICBmb250U3R5bGU6IFwibm9ybWFsXCJcbiAgICAgIH19PlxuICAgICAgICBDb21wdXRlciBNb2Rlcm4gVHlwZXdyaXRlciBCb2xkXG4gICAgICA8L3A+LFxuXG4gICAgICA8cCBzdHlsZT17e1xuICAgICAgICBmb250RmFtaWx5OiBcIkNvbXB1dGVyIE1vZGVybiBUeXBld3JpdGVyXCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICBmb250U3R5bGU6IFwiaXRhbGljXCJcbiAgICAgIH19PlxuICAgICAgICBDb21wdXRlciBNb2Rlcm4gVHlwZXdyaXRlciBCb2xkIEl0YWxpY1xuICAgICAgPC9wPixcblxuICAgICAgPGJyLz4sXG5cbiAgICAgIDxwIHN0eWxlPXt7XG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQ29tcHV0ZXIgTW9kZXJuIEJyaWdodFwiLFxuICAgICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgICAgICBmb250U3R5bGU6IFwibm9ybWFsXCJcbiAgICAgIH19PlxuICAgICAgICBDb21wdXRlciBNb2Rlcm4gQnJpZ2h0XG4gICAgICA8L3A+LFxuXG4gICAgICA8cCBzdHlsZT17e1xuICAgICAgICBmb250RmFtaWx5OiBcIkNvbXB1dGVyIE1vZGVybiBCcmlnaHRcIixcbiAgICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgZm9udFN0eWxlOiBcIml0YWxpY1wiXG4gICAgICB9fT5cbiAgICAgICAgQ29tcHV0ZXIgTW9kZXJuIEJyaWdodCBJdGFsaWNcbiAgICAgIDwvcD4sXG5cbiAgICAgIDxwIHN0eWxlPXt7XG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQ29tcHV0ZXIgTW9kZXJuIEJyaWdodFwiLFxuICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiXG4gICAgICB9fT5cbiAgICAgICAgQ29tcHV0ZXIgTW9kZXJuIEJyaWdodCBCb2xkXG4gICAgICA8L3A+LFxuXG4gICAgICA8cCBzdHlsZT17e1xuICAgICAgICBmb250RmFtaWx5OiBcIkNvbXB1dGVyIE1vZGVybiBCcmlnaHRcIixcbiAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIlxuICAgICAgfX0+XG4gICAgICAgIENvbXB1dGVyIE1vZGVybiBCcmlnaHQgQm9sZCBJdGFsaWNcbiAgICAgIDwvcD4sXG5cbiAgICAgIDxici8+LFxuXG4gICAgICA8cCBzdHlsZT17e1xuICAgICAgICBmb250RmFtaWx5OiBcIkNvbXB1dGVyIE1vZGVybiBDb25jcmV0ZVwiLFxuICAgICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgICAgICBmb250U3R5bGU6IFwibm9ybWFsXCJcbiAgICAgIH19PlxuICAgICAgICBDb21wdXRlciBNb2Rlcm4gQ29uY3JldGVcbiAgICAgIDwvcD4sXG5cbiAgICAgIDxwIHN0eWxlPXt7XG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQ29tcHV0ZXIgTW9kZXJuIENvbmNyZXRlXCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXG4gICAgICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIlxuICAgICAgfX0+XG4gICAgICAgIENvbXB1dGVyIE1vZGVybiBDb25jcmV0ZSBJdGFsaWNcbiAgICAgIDwvcD4sXG5cbiAgICAgIDxwIHN0eWxlPXt7XG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQ29tcHV0ZXIgTW9kZXJuIENvbmNyZXRlXCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICBmb250U3R5bGU6IFwibm9ybWFsXCJcbiAgICAgIH19PlxuICAgICAgICBDb21wdXRlciBNb2Rlcm4gQ29uY3JldGUgQm9sZFxuICAgICAgPC9wPixcblxuICAgICAgPHAgc3R5bGU9e3tcbiAgICAgICAgZm9udEZhbWlseTogXCJDb21wdXRlciBNb2Rlcm4gQ29uY3JldGVcIixcbiAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIlxuICAgICAgfX0+XG4gICAgICAgIENvbXB1dGVyIE1vZGVybiBDb25jcmV0ZSBCb2xkIEl0YWxpY1xuICAgICAgPC9wPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCJcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImNvbXB1dGVyLW1vZGVyblwiXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKENvbXB1dGVyTW9kZXJuRGl2KWBcblxuICBmb250LXNpemU6IDRyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJDb21wdXRlck1vZGVybkRpdiIsImNoaWxkRWxlbWVudHMiLCJwIiwic3R5bGUiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImZvbnRTdHlsZSIsImJyIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNExBOzs7ZUFBQTs7O29FQTFMc0I7b0JBRUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEIsSUFBQSxBQUFNQSxrQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFRO2tDQUVOLG9CQUFDQzt3QkFBRUMsT0FBTzs0QkFDUkMsWUFBWTs0QkFDWkMsWUFBWTs0QkFDWkMsV0FBVzt3QkFDYjt1QkFBRztrQ0FJSCxvQkFBQ0o7d0JBQUVDLE9BQU87NEJBQ1JDLFlBQVk7NEJBQ1pDLFlBQVk7NEJBQ1pDLFdBQVc7d0JBQ2I7dUJBQUc7a0NBSUgsb0JBQUNKO3dCQUFFQyxPQUFPOzRCQUNSQyxZQUFZOzRCQUNaQyxZQUFZOzRCQUNaQyxXQUFXO3dCQUNiO3VCQUFHO2tDQUlILG9CQUFDSjt3QkFBRUMsT0FBTzs0QkFDUkMsWUFBWTs0QkFDWkMsWUFBWTs0QkFDWkMsV0FBVzt3QkFDYjt1QkFBRztrQ0FJSCxvQkFBQ0M7a0NBRUQsb0JBQUNMO3dCQUFFQyxPQUFPOzRCQUNSQyxZQUFZOzRCQUNaQyxZQUFZOzRCQUNaQyxXQUFXO3dCQUNiO3VCQUFHO2tDQUlILG9CQUFDSjt3QkFBRUMsT0FBTzs0QkFDUkMsWUFBWTs0QkFDWkMsWUFBWTs0QkFDWkMsV0FBVzt3QkFDYjt1QkFBRztrQ0FJSCxvQkFBQ0o7d0JBQUVDLE9BQU87NEJBQ1JDLFlBQVk7NEJBQ1pDLFlBQVk7NEJBQ1pDLFdBQVc7d0JBQ2I7dUJBQUc7a0NBSUgsb0JBQUNKO3dCQUFFQyxPQUFPOzRCQUNSQyxZQUFZOzRCQUNaQyxZQUFZOzRCQUNaQyxXQUFXO3dCQUNiO3VCQUFHO2tDQUlILG9CQUFDQztrQ0FFRCxvQkFBQ0w7d0JBQUVDLE9BQU87NEJBQ1JDLFlBQVk7NEJBQ1pDLFlBQVk7NEJBQ1pDLFdBQVc7d0JBQ2I7dUJBQUc7a0NBSUgsb0JBQUNKO3dCQUFFQyxPQUFPOzRCQUNSQyxZQUFZOzRCQUNaQyxZQUFZOzRCQUNaQyxXQUFXO3dCQUNiO3VCQUFHO2tDQUlILG9CQUFDSjt3QkFBRUMsT0FBTzs0QkFDUkMsWUFBWTs0QkFDWkMsWUFBWTs0QkFDWkMsV0FBVzt3QkFDYjt1QkFBRztrQ0FJSCxvQkFBQ0o7d0JBQUVDLE9BQU87NEJBQ1JDLFlBQVk7NEJBQ1pDLFlBQVk7NEJBQ1pDLFdBQVc7d0JBQ2I7dUJBQUc7a0NBSUgsb0JBQUNDO2tDQUVELG9CQUFDTDt3QkFBRUMsT0FBTzs0QkFDUkMsWUFBWTs0QkFDWkMsWUFBWTs0QkFDWkMsV0FBVzt3QkFDYjt1QkFBRztrQ0FJSCxvQkFBQ0o7d0JBQUVDLE9BQU87NEJBQ1JDLFlBQVk7NEJBQ1pDLFlBQVk7NEJBQ1pDLFdBQVc7d0JBQ2I7dUJBQUc7a0NBSUgsb0JBQUNKO3dCQUFFQyxPQUFPOzRCQUNSQyxZQUFZOzRCQUNaQyxZQUFZOzRCQUNaQyxXQUFXO3dCQUNiO3VCQUFHO2tDQUlILG9CQUFDSjt3QkFBRUMsT0FBTzs0QkFDUkMsWUFBWTs0QkFDWkMsWUFBWTs0QkFDWkMsV0FBVzt3QkFDYjt1QkFBRztrQ0FJSCxvQkFBQ0M7a0NBRUQsb0JBQUNMO3dCQUFFQyxPQUFPOzRCQUNSQyxZQUFZOzRCQUNaQyxZQUFZOzRCQUNaQyxXQUFXO3dCQUNiO3VCQUFHO2tDQUlILG9CQUFDSjt3QkFBRUMsT0FBTzs0QkFDUkMsWUFBWTs0QkFDWkMsWUFBWTs0QkFDWkMsV0FBVzt3QkFDYjt1QkFBRztrQ0FJSCxvQkFBQ0o7d0JBQUVDLE9BQU87NEJBQ1JDLFlBQVk7NEJBQ1pDLFlBQVk7NEJBQ1pDLFdBQVc7d0JBQ2I7dUJBQUc7a0NBSUgsb0JBQUNKO3dCQUFFQyxPQUFPOzRCQUNSQyxZQUFZOzRCQUNaQyxZQUFZOzRCQUNaQyxXQUFXO3dCQUNiO3VCQUFHO2lCQUlKO1lBQ0g7OztXQTdLSU47cUJBQTBCUSxhQUFPO0FBK0tyQyxpQkEvS0lSLG1CQStLR1MsV0FBVTtBQUVqQixpQkFqTElULG1CQWlMR1UscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDWiJ9