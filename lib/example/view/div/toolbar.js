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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  margin-bottom: 2rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ToolbarDiv = /*#__PURE__*/ function(Element) {
    _inherits(ToolbarDiv, Element);
    function ToolbarDiv() {
        _class_call_check(this, ToolbarDiv);
        return _call_super(this, ToolbarDiv, arguments);
    }
    _create_class(ToolbarDiv, [
        {
            key: "childElements",
            value: function childElements() {
                var ToolbarSVGs = [
                    _index.JoinSessionToolbarSVG,
                    _index.ShowReleasesToolbarSVG,
                    _index.HideReleasesToolbarSVG,
                    _index.LeaveSessionToolbarSVG,
                    _index.ClearConsoleToolbarSVG,
                    _index.CreateSessionToolbarSVG,
                    _index.OpenRubbishBinToolbarSVG,
                    _index.CopySessionKeyToolbarSVG,
                    _index.ClosedRubbishBinToolbarSVG,
                    _index.SynchroniseDocumentToolbarSVG,
                    _index.FindInActiveDocumentToolbarSVG,
                    _index.ExportCustomGrammarsToolbarSVG,
                    _index.CreateProjectsFilePathToolbarSVG,
                    _index.FindInProjectsAndReleasesToolbarSVG,
                    _index.ReloadProjectsAndReleasesToolbarSVG,
                    _index.RenameSelectedProjectsPathToolbarSVG,
                    _index.CreateProjectsDirectoryPathToolbarSVG,
                    _index.CancelCharacterMapToolbarSVG,
                    _index.ScriptCharacterMapToolbarSVG,
                    _index.FrakturCharacterMapToolbarSVG,
                    _index.SansSerifCharacterMapToolbarSVG,
                    _index.MonospaceCharacterMapToolbarSVG,
                    _index.SerifBoldCharacterMapToolbarSVG,
                    _index.SerifItalicCharacterMapToolbarSVG,
                    _index.DoubleStruckCharacterMapToolbarSVG,
                    _index.SansSerifBoldCharacterMapToolbarSVG,
                    _index.SerifBoldItalicCharacterMapToolbarSVG,
                    _index.SansSerifItalicCharacterMapToolbarSVG,
                    _index.SansSerifBoldItalicCharacterMapToolbarSVG
                ], childElements = ToolbarSVGs.map(function(ToolbarSVG) {
                    return /*#__PURE__*/ React.createElement(_div.default, null, /*#__PURE__*/ React.createElement(ToolbarSVG, null));
                });
                return childElements;
            }
        }
    ]);
    return ToolbarDiv;
}(_wrap_native_super(_easy.Element));
_define_property(ToolbarDiv, "tagName", "div");
_define_property(ToolbarDiv, "defaultProperties", {
    className: "toolbar"
});
var _default = (0, _easywithstyle.default)(ToolbarDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L3Rvb2xiYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgRGl2IGZyb20gXCIuLi9kaXZcIjtcblxuaW1wb3J0IHsgSm9pblNlc3Npb25Ub29sYmFyU1ZHLFxuICAgICAgICAgU2hvd1JlbGVhc2VzVG9vbGJhclNWRyxcbiAgICAgICAgIEhpZGVSZWxlYXNlc1Rvb2xiYXJTVkcsXG4gICAgICAgICBMZWF2ZVNlc3Npb25Ub29sYmFyU1ZHLFxuICAgICAgICAgQ2xlYXJDb25zb2xlVG9vbGJhclNWRyxcbiAgICAgICAgIENyZWF0ZVNlc3Npb25Ub29sYmFyU1ZHLFxuICAgICAgICAgT3BlblJ1YmJpc2hCaW5Ub29sYmFyU1ZHLFxuICAgICAgICAgQ29weVNlc3Npb25LZXlUb29sYmFyU1ZHLFxuICAgICAgICAgQ2xvc2VkUnViYmlzaEJpblRvb2xiYXJTVkcsXG4gICAgICAgICBTeW5jaHJvbmlzZURvY3VtZW50VG9vbGJhclNWRyxcbiAgICAgICAgIEZpbmRJbkFjdGl2ZURvY3VtZW50VG9vbGJhclNWRyxcbiAgICAgICAgIEV4cG9ydEN1c3RvbUdyYW1tYXJzVG9vbGJhclNWRyxcbiAgICAgICAgIENyZWF0ZVByb2plY3RzRmlsZVBhdGhUb29sYmFyU1ZHLFxuICAgICAgICAgRmluZEluUHJvamVjdHNBbmRSZWxlYXNlc1Rvb2xiYXJTVkcsXG4gICAgICAgICBSZWxvYWRQcm9qZWN0c0FuZFJlbGVhc2VzVG9vbGJhclNWRyxcbiAgICAgICAgIFJlbmFtZVNlbGVjdGVkUHJvamVjdHNQYXRoVG9vbGJhclNWRyxcbiAgICAgICAgIENyZWF0ZVByb2plY3RzRGlyZWN0b3J5UGF0aFRvb2xiYXJTVkcsXG4gICAgICAgICBDYW5jZWxDaGFyYWN0ZXJNYXBUb29sYmFyU1ZHLFxuICAgICAgICAgU2NyaXB0Q2hhcmFjdGVyTWFwVG9vbGJhclNWRyxcbiAgICAgICAgIEZyYWt0dXJDaGFyYWN0ZXJNYXBUb29sYmFyU1ZHLFxuICAgICAgICAgU2Fuc1NlcmlmQ2hhcmFjdGVyTWFwVG9vbGJhclNWRyxcbiAgICAgICAgIE1vbm9zcGFjZUNoYXJhY3Rlck1hcFRvb2xiYXJTVkcsXG4gICAgICAgICBTZXJpZkJvbGRDaGFyYWN0ZXJNYXBUb29sYmFyU1ZHLFxuICAgICAgICAgU2VyaWZJdGFsaWNDaGFyYWN0ZXJNYXBUb29sYmFyU1ZHLFxuICAgICAgICAgRG91YmxlU3RydWNrQ2hhcmFjdGVyTWFwVG9vbGJhclNWRyxcbiAgICAgICAgIFNhbnNTZXJpZkJvbGRDaGFyYWN0ZXJNYXBUb29sYmFyU1ZHLFxuICAgICAgICAgU2VyaWZCb2xkSXRhbGljQ2hhcmFjdGVyTWFwVG9vbGJhclNWRyxcbiAgICAgICAgIFNhbnNTZXJpZkl0YWxpY0NoYXJhY3Rlck1hcFRvb2xiYXJTVkcsXG4gICAgICAgICBTYW5zU2VyaWZCb2xkSXRhbGljQ2hhcmFjdGVyTWFwVG9vbGJhclNWRyB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuY2xhc3MgVG9vbGJhckRpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IFRvb2xiYXJTVkdzID0gW1xuICAgICAgICAgICAgSm9pblNlc3Npb25Ub29sYmFyU1ZHLFxuICAgICAgICAgICAgU2hvd1JlbGVhc2VzVG9vbGJhclNWRyxcbiAgICAgICAgICAgIEhpZGVSZWxlYXNlc1Rvb2xiYXJTVkcsXG4gICAgICAgICAgICBMZWF2ZVNlc3Npb25Ub29sYmFyU1ZHLFxuICAgICAgICAgICAgQ2xlYXJDb25zb2xlVG9vbGJhclNWRyxcbiAgICAgICAgICAgIENyZWF0ZVNlc3Npb25Ub29sYmFyU1ZHLFxuICAgICAgICAgICAgT3BlblJ1YmJpc2hCaW5Ub29sYmFyU1ZHLFxuICAgICAgICAgICAgQ29weVNlc3Npb25LZXlUb29sYmFyU1ZHLFxuICAgICAgICAgICAgQ2xvc2VkUnViYmlzaEJpblRvb2xiYXJTVkcsXG4gICAgICAgICAgICBTeW5jaHJvbmlzZURvY3VtZW50VG9vbGJhclNWRyxcbiAgICAgICAgICAgIEZpbmRJbkFjdGl2ZURvY3VtZW50VG9vbGJhclNWRyxcbiAgICAgICAgICAgIEV4cG9ydEN1c3RvbUdyYW1tYXJzVG9vbGJhclNWRyxcbiAgICAgICAgICAgIENyZWF0ZVByb2plY3RzRmlsZVBhdGhUb29sYmFyU1ZHLFxuICAgICAgICAgICAgRmluZEluUHJvamVjdHNBbmRSZWxlYXNlc1Rvb2xiYXJTVkcsXG4gICAgICAgICAgICBSZWxvYWRQcm9qZWN0c0FuZFJlbGVhc2VzVG9vbGJhclNWRyxcbiAgICAgICAgICAgIFJlbmFtZVNlbGVjdGVkUHJvamVjdHNQYXRoVG9vbGJhclNWRyxcbiAgICAgICAgICAgIENyZWF0ZVByb2plY3RzRGlyZWN0b3J5UGF0aFRvb2xiYXJTVkcsXG4gICAgICAgICAgICBDYW5jZWxDaGFyYWN0ZXJNYXBUb29sYmFyU1ZHLFxuICAgICAgICAgICAgU2NyaXB0Q2hhcmFjdGVyTWFwVG9vbGJhclNWRyxcbiAgICAgICAgICAgIEZyYWt0dXJDaGFyYWN0ZXJNYXBUb29sYmFyU1ZHLFxuICAgICAgICAgICAgU2Fuc1NlcmlmQ2hhcmFjdGVyTWFwVG9vbGJhclNWRyxcbiAgICAgICAgICAgIE1vbm9zcGFjZUNoYXJhY3Rlck1hcFRvb2xiYXJTVkcsXG4gICAgICAgICAgICBTZXJpZkJvbGRDaGFyYWN0ZXJNYXBUb29sYmFyU1ZHLFxuICAgICAgICAgICAgU2VyaWZJdGFsaWNDaGFyYWN0ZXJNYXBUb29sYmFyU1ZHLFxuICAgICAgICAgICAgRG91YmxlU3RydWNrQ2hhcmFjdGVyTWFwVG9vbGJhclNWRyxcbiAgICAgICAgICAgIFNhbnNTZXJpZkJvbGRDaGFyYWN0ZXJNYXBUb29sYmFyU1ZHLFxuICAgICAgICAgICAgU2VyaWZCb2xkSXRhbGljQ2hhcmFjdGVyTWFwVG9vbGJhclNWRyxcbiAgICAgICAgICAgIFNhbnNTZXJpZkl0YWxpY0NoYXJhY3Rlck1hcFRvb2xiYXJTVkcsXG4gICAgICAgICAgICBTYW5zU2VyaWZCb2xkSXRhbGljQ2hhcmFjdGVyTWFwVG9vbGJhclNWR1xuICAgICAgICAgIF0sXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IFRvb2xiYXJTVkdzLm1hcCgoVG9vbGJhclNWRykgPT5cblxuICAgICAgICAgICAgPERpdj5cbiAgICAgICAgICAgICAgPFRvb2xiYXJTVkcgLz5cbiAgICAgICAgICAgIDwvRGl2PlxuXG4gICAgICAgICAgKTtcblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidG9vbGJhclwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShUb29sYmFyRGl2KWBcblxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiVG9vbGJhckRpdiIsImNoaWxkRWxlbWVudHMiLCJUb29sYmFyU1ZHcyIsIkpvaW5TZXNzaW9uVG9vbGJhclNWRyIsIlNob3dSZWxlYXNlc1Rvb2xiYXJTVkciLCJIaWRlUmVsZWFzZXNUb29sYmFyU1ZHIiwiTGVhdmVTZXNzaW9uVG9vbGJhclNWRyIsIkNsZWFyQ29uc29sZVRvb2xiYXJTVkciLCJDcmVhdGVTZXNzaW9uVG9vbGJhclNWRyIsIk9wZW5SdWJiaXNoQmluVG9vbGJhclNWRyIsIkNvcHlTZXNzaW9uS2V5VG9vbGJhclNWRyIsIkNsb3NlZFJ1YmJpc2hCaW5Ub29sYmFyU1ZHIiwiU3luY2hyb25pc2VEb2N1bWVudFRvb2xiYXJTVkciLCJGaW5kSW5BY3RpdmVEb2N1bWVudFRvb2xiYXJTVkciLCJFeHBvcnRDdXN0b21HcmFtbWFyc1Rvb2xiYXJTVkciLCJDcmVhdGVQcm9qZWN0c0ZpbGVQYXRoVG9vbGJhclNWRyIsIkZpbmRJblByb2plY3RzQW5kUmVsZWFzZXNUb29sYmFyU1ZHIiwiUmVsb2FkUHJvamVjdHNBbmRSZWxlYXNlc1Rvb2xiYXJTVkciLCJSZW5hbWVTZWxlY3RlZFByb2plY3RzUGF0aFRvb2xiYXJTVkciLCJDcmVhdGVQcm9qZWN0c0RpcmVjdG9yeVBhdGhUb29sYmFyU1ZHIiwiQ2FuY2VsQ2hhcmFjdGVyTWFwVG9vbGJhclNWRyIsIlNjcmlwdENoYXJhY3Rlck1hcFRvb2xiYXJTVkciLCJGcmFrdHVyQ2hhcmFjdGVyTWFwVG9vbGJhclNWRyIsIlNhbnNTZXJpZkNoYXJhY3Rlck1hcFRvb2xiYXJTVkciLCJNb25vc3BhY2VDaGFyYWN0ZXJNYXBUb29sYmFyU1ZHIiwiU2VyaWZCb2xkQ2hhcmFjdGVyTWFwVG9vbGJhclNWRyIsIlNlcmlmSXRhbGljQ2hhcmFjdGVyTWFwVG9vbGJhclNWRyIsIkRvdWJsZVN0cnVja0NoYXJhY3Rlck1hcFRvb2xiYXJTVkciLCJTYW5zU2VyaWZCb2xkQ2hhcmFjdGVyTWFwVG9vbGJhclNWRyIsIlNlcmlmQm9sZEl0YWxpY0NoYXJhY3Rlck1hcFRvb2xiYXJTVkciLCJTYW5zU2VyaWZJdGFsaWNDaGFyYWN0ZXJNYXBUb29sYmFyU1ZHIiwiU2Fuc1NlcmlmQm9sZEl0YWxpY0NoYXJhY3Rlck1hcFRvb2xiYXJTVkciLCJtYXAiLCJUb29sYmFyU1ZHIiwiRGl2IiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBeUZBOzs7ZUFBQTs7O29FQXZGc0I7b0JBRUU7MERBRVI7cUJBOEIwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxRCxJQUFBLEFBQU1BLDJCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxjQUFjO29CQUNaQyw0QkFBcUI7b0JBQ3JCQyw2QkFBc0I7b0JBQ3RCQyw2QkFBc0I7b0JBQ3RCQyw2QkFBc0I7b0JBQ3RCQyw2QkFBc0I7b0JBQ3RCQyw4QkFBdUI7b0JBQ3ZCQywrQkFBd0I7b0JBQ3hCQywrQkFBd0I7b0JBQ3hCQyxpQ0FBMEI7b0JBQzFCQyxvQ0FBNkI7b0JBQzdCQyxxQ0FBOEI7b0JBQzlCQyxxQ0FBOEI7b0JBQzlCQyx1Q0FBZ0M7b0JBQ2hDQywwQ0FBbUM7b0JBQ25DQywwQ0FBbUM7b0JBQ25DQywyQ0FBb0M7b0JBQ3BDQyw0Q0FBcUM7b0JBQ3JDQyxtQ0FBNEI7b0JBQzVCQyxtQ0FBNEI7b0JBQzVCQyxvQ0FBNkI7b0JBQzdCQyxzQ0FBK0I7b0JBQy9CQyxzQ0FBK0I7b0JBQy9CQyxzQ0FBK0I7b0JBQy9CQyx3Q0FBaUM7b0JBQ2pDQyx5Q0FBa0M7b0JBQ2xDQywwQ0FBbUM7b0JBQ25DQyw0Q0FBcUM7b0JBQ3JDQyw0Q0FBcUM7b0JBQ3JDQyxnREFBeUM7aUJBQzFDLEVBQ0Q5QixnQkFBZ0JDLFlBQVk4QixHQUFHLENBQUMsU0FBQ0M7eUNBRS9CLG9CQUFDQyxZQUFHLHNCQUNGLG9CQUFDRDs7Z0JBS1gsT0FBT2hDO1lBQ1Q7OztXQTFDSUQ7cUJBQW1CbUMsYUFBTztBQTRDOUIsaUJBNUNJbkMsWUE0Q0dvQyxXQUFVO0FBRWpCLGlCQTlDSXBDLFlBOENHcUMscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDdkMifQ==