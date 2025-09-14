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
                    _index.CancelAlphaNumericToolbarSVG,
                    _index.FrakturAlphaNumericToolbarSVG,
                    _index.SansSerifAlphaNumericToolbarSVG,
                    _index.MonospaceAlphaNumericToolbarSVG,
                    _index.SerifBoldAlphaNumericToolbarSVG,
                    _index.SerifItalicAlphaNumericToolbarSVG,
                    _index.DoubleStruckAlphaNumericToolbarSVG,
                    _index.SansSerifBoldAlphaNumericToolbarSVG,
                    _index.SerifBoldItalicAlphaNumericToolbarSVG,
                    _index.SansSerifItalicAlphaNumericToolbarSVG,
                    _index.SansSerifBoldItalicAlphaNumericToolbarSVG
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L3Rvb2xiYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgRGl2IGZyb20gXCIuLi9kaXZcIjtcblxuaW1wb3J0IHsgSm9pblNlc3Npb25Ub29sYmFyU1ZHLFxuICAgICAgICAgU2hvd1JlbGVhc2VzVG9vbGJhclNWRyxcbiAgICAgICAgIEhpZGVSZWxlYXNlc1Rvb2xiYXJTVkcsXG4gICAgICAgICBMZWF2ZVNlc3Npb25Ub29sYmFyU1ZHLFxuICAgICAgICAgQ2xlYXJDb25zb2xlVG9vbGJhclNWRyxcbiAgICAgICAgIENyZWF0ZVNlc3Npb25Ub29sYmFyU1ZHLFxuICAgICAgICAgT3BlblJ1YmJpc2hCaW5Ub29sYmFyU1ZHLFxuICAgICAgICAgQ29weVNlc3Npb25LZXlUb29sYmFyU1ZHLFxuICAgICAgICAgQ2xvc2VkUnViYmlzaEJpblRvb2xiYXJTVkcsXG4gICAgICAgICBTeW5jaHJvbmlzZURvY3VtZW50VG9vbGJhclNWRyxcbiAgICAgICAgIEZpbmRJbkFjdGl2ZURvY3VtZW50VG9vbGJhclNWRyxcbiAgICAgICAgIEV4cG9ydEN1c3RvbUdyYW1tYXJzVG9vbGJhclNWRyxcbiAgICAgICAgIENyZWF0ZVByb2plY3RzRmlsZVBhdGhUb29sYmFyU1ZHLFxuICAgICAgICAgRmluZEluUHJvamVjdHNBbmRSZWxlYXNlc1Rvb2xiYXJTVkcsXG4gICAgICAgICBSZWxvYWRQcm9qZWN0c0FuZFJlbGVhc2VzVG9vbGJhclNWRyxcbiAgICAgICAgIFJlbmFtZVNlbGVjdGVkUHJvamVjdHNQYXRoVG9vbGJhclNWRyxcbiAgICAgICAgIENyZWF0ZVByb2plY3RzRGlyZWN0b3J5UGF0aFRvb2xiYXJTVkcsXG4gICAgICAgICBDYW5jZWxBbHBoYU51bWVyaWNUb29sYmFyU1ZHLFxuICAgICAgICAgRnJha3R1ckFscGhhTnVtZXJpY1Rvb2xiYXJTVkcsXG4gICAgICAgICBTYW5zU2VyaWZBbHBoYU51bWVyaWNUb29sYmFyU1ZHLFxuICAgICAgICAgTW9ub3NwYWNlQWxwaGFOdW1lcmljVG9vbGJhclNWRyxcbiAgICAgICAgIFNlcmlmQm9sZEFscGhhTnVtZXJpY1Rvb2xiYXJTVkcsXG4gICAgICAgICBTZXJpZkl0YWxpY0FscGhhTnVtZXJpY1Rvb2xiYXJTVkcsXG4gICAgICAgICBEb3VibGVTdHJ1Y2tBbHBoYU51bWVyaWNUb29sYmFyU1ZHLFxuICAgICAgICAgU2Fuc1NlcmlmQm9sZEFscGhhTnVtZXJpY1Rvb2xiYXJTVkcsXG4gICAgICAgICBTZXJpZkJvbGRJdGFsaWNBbHBoYU51bWVyaWNUb29sYmFyU1ZHLFxuICAgICAgICAgU2Fuc1NlcmlmSXRhbGljQWxwaGFOdW1lcmljVG9vbGJhclNWRyxcbiAgICAgICAgIFNhbnNTZXJpZkJvbGRJdGFsaWNBbHBoYU51bWVyaWNUb29sYmFyU1ZHIH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7IC8vL1xuXG5jbGFzcyBUb29sYmFyRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgVG9vbGJhclNWR3MgPSBbXG4gICAgICAgICAgICBKb2luU2Vzc2lvblRvb2xiYXJTVkcsXG4gICAgICAgICAgICBTaG93UmVsZWFzZXNUb29sYmFyU1ZHLFxuICAgICAgICAgICAgSGlkZVJlbGVhc2VzVG9vbGJhclNWRyxcbiAgICAgICAgICAgIExlYXZlU2Vzc2lvblRvb2xiYXJTVkcsXG4gICAgICAgICAgICBDbGVhckNvbnNvbGVUb29sYmFyU1ZHLFxuICAgICAgICAgICAgQ3JlYXRlU2Vzc2lvblRvb2xiYXJTVkcsXG4gICAgICAgICAgICBPcGVuUnViYmlzaEJpblRvb2xiYXJTVkcsXG4gICAgICAgICAgICBDb3B5U2Vzc2lvbktleVRvb2xiYXJTVkcsXG4gICAgICAgICAgICBDbG9zZWRSdWJiaXNoQmluVG9vbGJhclNWRyxcbiAgICAgICAgICAgIFN5bmNocm9uaXNlRG9jdW1lbnRUb29sYmFyU1ZHLFxuICAgICAgICAgICAgRmluZEluQWN0aXZlRG9jdW1lbnRUb29sYmFyU1ZHLFxuICAgICAgICAgICAgRXhwb3J0Q3VzdG9tR3JhbW1hcnNUb29sYmFyU1ZHLFxuICAgICAgICAgICAgQ3JlYXRlUHJvamVjdHNGaWxlUGF0aFRvb2xiYXJTVkcsXG4gICAgICAgICAgICBGaW5kSW5Qcm9qZWN0c0FuZFJlbGVhc2VzVG9vbGJhclNWRyxcbiAgICAgICAgICAgIFJlbG9hZFByb2plY3RzQW5kUmVsZWFzZXNUb29sYmFyU1ZHLFxuICAgICAgICAgICAgUmVuYW1lU2VsZWN0ZWRQcm9qZWN0c1BhdGhUb29sYmFyU1ZHLFxuICAgICAgICAgICAgQ3JlYXRlUHJvamVjdHNEaXJlY3RvcnlQYXRoVG9vbGJhclNWRyxcbiAgICAgICAgICAgIENhbmNlbEFscGhhTnVtZXJpY1Rvb2xiYXJTVkcsXG4gICAgICAgICAgICBGcmFrdHVyQWxwaGFOdW1lcmljVG9vbGJhclNWRyxcbiAgICAgICAgICAgIFNhbnNTZXJpZkFscGhhTnVtZXJpY1Rvb2xiYXJTVkcsXG4gICAgICAgICAgICBNb25vc3BhY2VBbHBoYU51bWVyaWNUb29sYmFyU1ZHLFxuICAgICAgICAgICAgU2VyaWZCb2xkQWxwaGFOdW1lcmljVG9vbGJhclNWRyxcbiAgICAgICAgICAgIFNlcmlmSXRhbGljQWxwaGFOdW1lcmljVG9vbGJhclNWRyxcbiAgICAgICAgICAgIERvdWJsZVN0cnVja0FscGhhTnVtZXJpY1Rvb2xiYXJTVkcsXG4gICAgICAgICAgICBTYW5zU2VyaWZCb2xkQWxwaGFOdW1lcmljVG9vbGJhclNWRyxcbiAgICAgICAgICAgIFNlcmlmQm9sZEl0YWxpY0FscGhhTnVtZXJpY1Rvb2xiYXJTVkcsXG4gICAgICAgICAgICBTYW5zU2VyaWZJdGFsaWNBbHBoYU51bWVyaWNUb29sYmFyU1ZHLFxuICAgICAgICAgICAgU2Fuc1NlcmlmQm9sZEl0YWxpY0FscGhhTnVtZXJpY1Rvb2xiYXJTVkdcbiAgICAgICAgICBdLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBUb29sYmFyU1ZHcy5tYXAoKFRvb2xiYXJTVkcpID0+XG5cbiAgICAgICAgICAgIDxEaXY+XG4gICAgICAgICAgICAgIDxUb29sYmFyU1ZHIC8+XG4gICAgICAgICAgICA8L0Rpdj5cblxuICAgICAgICAgICk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInRvb2xiYXJcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVG9vbGJhckRpdilgXG5cbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIlRvb2xiYXJEaXYiLCJjaGlsZEVsZW1lbnRzIiwiVG9vbGJhclNWR3MiLCJKb2luU2Vzc2lvblRvb2xiYXJTVkciLCJTaG93UmVsZWFzZXNUb29sYmFyU1ZHIiwiSGlkZVJlbGVhc2VzVG9vbGJhclNWRyIsIkxlYXZlU2Vzc2lvblRvb2xiYXJTVkciLCJDbGVhckNvbnNvbGVUb29sYmFyU1ZHIiwiQ3JlYXRlU2Vzc2lvblRvb2xiYXJTVkciLCJPcGVuUnViYmlzaEJpblRvb2xiYXJTVkciLCJDb3B5U2Vzc2lvbktleVRvb2xiYXJTVkciLCJDbG9zZWRSdWJiaXNoQmluVG9vbGJhclNWRyIsIlN5bmNocm9uaXNlRG9jdW1lbnRUb29sYmFyU1ZHIiwiRmluZEluQWN0aXZlRG9jdW1lbnRUb29sYmFyU1ZHIiwiRXhwb3J0Q3VzdG9tR3JhbW1hcnNUb29sYmFyU1ZHIiwiQ3JlYXRlUHJvamVjdHNGaWxlUGF0aFRvb2xiYXJTVkciLCJGaW5kSW5Qcm9qZWN0c0FuZFJlbGVhc2VzVG9vbGJhclNWRyIsIlJlbG9hZFByb2plY3RzQW5kUmVsZWFzZXNUb29sYmFyU1ZHIiwiUmVuYW1lU2VsZWN0ZWRQcm9qZWN0c1BhdGhUb29sYmFyU1ZHIiwiQ3JlYXRlUHJvamVjdHNEaXJlY3RvcnlQYXRoVG9vbGJhclNWRyIsIkNhbmNlbEFscGhhTnVtZXJpY1Rvb2xiYXJTVkciLCJGcmFrdHVyQWxwaGFOdW1lcmljVG9vbGJhclNWRyIsIlNhbnNTZXJpZkFscGhhTnVtZXJpY1Rvb2xiYXJTVkciLCJNb25vc3BhY2VBbHBoYU51bWVyaWNUb29sYmFyU1ZHIiwiU2VyaWZCb2xkQWxwaGFOdW1lcmljVG9vbGJhclNWRyIsIlNlcmlmSXRhbGljQWxwaGFOdW1lcmljVG9vbGJhclNWRyIsIkRvdWJsZVN0cnVja0FscGhhTnVtZXJpY1Rvb2xiYXJTVkciLCJTYW5zU2VyaWZCb2xkQWxwaGFOdW1lcmljVG9vbGJhclNWRyIsIlNlcmlmQm9sZEl0YWxpY0FscGhhTnVtZXJpY1Rvb2xiYXJTVkciLCJTYW5zU2VyaWZJdGFsaWNBbHBoYU51bWVyaWNUb29sYmFyU1ZHIiwiU2Fuc1NlcmlmQm9sZEl0YWxpY0FscGhhTnVtZXJpY1Rvb2xiYXJTVkciLCJtYXAiLCJUb29sYmFyU1ZHIiwiRGl2IiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBdUZBOzs7ZUFBQTs7O29FQXJGc0I7b0JBRUU7MERBRVI7cUJBNkIwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxRCxJQUFBLEFBQU1BLDJCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxjQUFjO29CQUNaQyw0QkFBcUI7b0JBQ3JCQyw2QkFBc0I7b0JBQ3RCQyw2QkFBc0I7b0JBQ3RCQyw2QkFBc0I7b0JBQ3RCQyw2QkFBc0I7b0JBQ3RCQyw4QkFBdUI7b0JBQ3ZCQywrQkFBd0I7b0JBQ3hCQywrQkFBd0I7b0JBQ3hCQyxpQ0FBMEI7b0JBQzFCQyxvQ0FBNkI7b0JBQzdCQyxxQ0FBOEI7b0JBQzlCQyxxQ0FBOEI7b0JBQzlCQyx1Q0FBZ0M7b0JBQ2hDQywwQ0FBbUM7b0JBQ25DQywwQ0FBbUM7b0JBQ25DQywyQ0FBb0M7b0JBQ3BDQyw0Q0FBcUM7b0JBQ3JDQyxtQ0FBNEI7b0JBQzVCQyxvQ0FBNkI7b0JBQzdCQyxzQ0FBK0I7b0JBQy9CQyxzQ0FBK0I7b0JBQy9CQyxzQ0FBK0I7b0JBQy9CQyx3Q0FBaUM7b0JBQ2pDQyx5Q0FBa0M7b0JBQ2xDQywwQ0FBbUM7b0JBQ25DQyw0Q0FBcUM7b0JBQ3JDQyw0Q0FBcUM7b0JBQ3JDQyxnREFBeUM7aUJBQzFDLEVBQ0Q3QixnQkFBZ0JDLFlBQVk2QixHQUFHLENBQUMsU0FBQ0M7eUNBRS9CLG9CQUFDQyxZQUFHLHNCQUNGLG9CQUFDRDs7Z0JBS1gsT0FBTy9CO1lBQ1Q7OztXQXpDSUQ7cUJBQW1Ca0MsYUFBTztBQTJDOUIsaUJBM0NJbEMsWUEyQ0dtQyxXQUFVO0FBRWpCLGlCQTdDSW5DLFlBNkNHb0MscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDdEMifQ==