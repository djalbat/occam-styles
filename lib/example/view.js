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
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _logo = /*#__PURE__*/ _interopRequireDefault(require("../svg/logo"));
var _closed = /*#__PURE__*/ _interopRequireDefault(require("./../svg/fold/closed"));
var _topOpen = /*#__PURE__*/ _interopRequireDefault(require("./../svg/fold/topOpen"));
var _bottomOpen = /*#__PURE__*/ _interopRequireDefault(require("./../svg/fold/bottomOpen"));
var _joinSession = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/joinSession"));
var _copySessionKey = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/copySessionKey"));
var _exportCustomGrammars = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/exportCustomGrammars"));
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
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
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _isNativeReflectConstruct() {
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
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  display: flex;\n  flex-direction: column;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _createSuper(View);
    function View() {
        _classCallCheck(this, View);
        return _super.apply(this, arguments);
    }
    _createClass(View, [
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_logo.default, null),
                    /*#__PURE__*/ React.createElement(_closed.default, null),
                    /*#__PURE__*/ React.createElement(_topOpen.default, null),
                    /*#__PURE__*/ React.createElement(_bottomOpen.default, null),
                    /*#__PURE__*/ React.createElement(_joinSession.default, null),
                    /*#__PURE__*/ React.createElement(_copySessionKey.default, null),
                    /*#__PURE__*/ React.createElement(_exportCustomGrammars.default, null)
                ];
            }
        }
    ]);
    return View;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(View, "tagName", "div");
_defineProperty(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easyWithStyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgTG9nb1NWRyBmcm9tIFwiLi4vc3ZnL2xvZ29cIjtcbmltcG9ydCBDbG9zZWRGb2xkU1ZHIGZyb20gXCIuLy4uL3N2Zy9mb2xkL2Nsb3NlZFwiO1xuaW1wb3J0IFRvcE9wZW5Gb2xkU1ZHIGZyb20gXCIuLy4uL3N2Zy9mb2xkL3RvcE9wZW5cIjtcbmltcG9ydCBCb3R0b21PcGVuRm9sZFNWRyBmcm9tIFwiLi8uLi9zdmcvZm9sZC9ib3R0b21PcGVuXCI7XG5pbXBvcnQgSm9pblNlc3Npb25Ub29sYmFyU1ZHIGZyb20gXCIuL3N2Zy90b29sYmFyL2pvaW5TZXNzaW9uXCI7XG5pbXBvcnQgQ29weVNlc3Npb25LZXlUb29sYmFyU1ZHIGZyb20gXCIuL3N2Zy90b29sYmFyL2NvcHlTZXNzaW9uS2V5XCI7XG5pbXBvcnQgRXhwb3J0Q3VzdG9tR3JhbW1hcnNUb29sYmFyU1ZHIGZyb20gXCIuL3N2Zy90b29sYmFyL2V4cG9ydEN1c3RvbUdyYW1tYXJzXCI7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPExvZ29TVkcvPixcbiAgICAgIDxDbG9zZWRGb2xkU1ZHLz4sXG4gICAgICA8VG9wT3BlbkZvbGRTVkcvPixcbiAgICAgIDxCb3R0b21PcGVuRm9sZFNWRy8+LFxuICAgICAgPEpvaW5TZXNzaW9uVG9vbGJhclNWRy8+LFxuICAgICAgPENvcHlTZXNzaW9uS2V5VG9vbGJhclNWRy8+LFxuICAgICAgPEV4cG9ydEN1c3RvbUdyYW1tYXJzVG9vbGJhclNWRy8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgXG5gOyJdLCJuYW1lcyI6WyJWaWV3IiwiY2hpbGRFbGVtZW50cyIsIkxvZ29TVkciLCJDbG9zZWRGb2xkU1ZHIiwiVG9wT3BlbkZvbGRTVkciLCJCb3R0b21PcGVuRm9sZFNWRyIsIkpvaW5TZXNzaW9uVG9vbGJhclNWRyIsIkNvcHlTZXNzaW9uS2V5VG9vbGJhclNWRyIsIkV4cG9ydEN1c3RvbUdyYW1tYXJzVG9vbGJhclNWRyIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW9DQTs7O2VBQUE7OztrRUFsQ3NCO29CQUVFO3lEQUVKOzJEQUNNOzREQUNDOytEQUNHO2dFQUNJO21FQUNHO3lFQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsSUFBQSxBQUFNQSxxQkFzQkgsQUF0Qkg7Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxPQUFRO2tDQUVOLG9CQUFDQyxhQUFPO2tDQUNSLG9CQUFDQyxlQUFhO2tDQUNkLG9CQUFDQyxnQkFBYztrQ0FDZixvQkFBQ0MsbUJBQWlCO2tDQUNsQixvQkFBQ0Msb0JBQXFCO2tDQUN0QixvQkFBQ0MsdUJBQXdCO2tDQUN6QixvQkFBQ0MsNkJBQThCO2lCQUVoQztZQUNIOzs7V0FiSVI7bUJBQWFTLGFBQU87QUFleEIsZ0JBZklULE1BZUdVLFdBQVU7QUFFakIsZ0JBakJJVixNQWlCR1cscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDYiJ9