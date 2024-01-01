"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectoryNameSVG;
    }
});
var _name = /*#__PURE__*/ _interop_require_default(require("../../svg/name"));
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
var DirectoryNameSVG = /*#__PURE__*/ function(NameSVG) {
    _inherits(DirectoryNameSVG, NameSVG);
    var _super = _create_super(DirectoryNameSVG);
    function DirectoryNameSVG() {
        _class_call_check(this, DirectoryNameSVG);
        return _super.apply(this, arguments);
    }
    _create_class(DirectoryNameSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("rect", {
                    width: "16",
                    height: "2",
                    x: "0",
                    y: "16"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "7",
                    x: "14",
                    y: "9"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "7",
                    x: "0",
                    y: "9"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "16",
                    height: "2",
                    x: "0",
                    y: "7"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "7",
                    height: "3",
                    x: "0",
                    y: "4"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "m 7,4 3,3 H 7 Z"
                }));
            }
        }
    ]);
    return DirectoryNameSVG;
}(_name.default);
_define_property(DirectoryNameSVG, "defaultProperties", {
    className: "directory"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvbmFtZS9kaXJlY3RvcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOYW1lU1ZHIGZyb20gXCIuLi8uLi9zdmcvbmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RvcnlOYW1lU1ZHIGV4dGVuZHMgTmFtZVNWRyB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGc+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIyXCIgeD1cIjBcIiB5PVwiMTZcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjJcIiBoZWlnaHQ9XCI3XCIgeD1cIjE0XCIgeT1cIjlcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjJcIiBoZWlnaHQ9XCI3XCIgeD1cIjBcIiB5PVwiOVwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIyXCIgeD1cIjBcIiB5PVwiN1wiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiN1wiIGhlaWdodD1cIjNcIiB4PVwiMFwiIHk9XCI0XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIm0gNyw0IDMsMyBIIDcgWlwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkaXJlY3RvcnlcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkRpcmVjdG9yeU5hbWVTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJ5IiwicGF0aCIsImQiLCJOYW1lU1ZHIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzJEQUZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVMLElBQUEsQUFBTUEsaUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLHFCQUVFLG9CQUFDQyx5QkFDQyxvQkFBQ0M7b0JBQUtDLE9BQU07b0JBQUtDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUlDLEdBQUU7a0NBQ3BDLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBSUMsR0FBRTtvQkFBS0MsR0FBRTtrQ0FDcEMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFJQyxHQUFFO29CQUFJQyxHQUFFO2tDQUNuQyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQUtDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUlDLEdBQUU7a0NBQ3BDLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBSUMsR0FBRTtvQkFBSUMsR0FBRTtrQ0FDbkMsb0JBQUNDO29CQUFLQyxHQUFFOztZQUlkOzs7V0FkbUJUO0VBQXlCVSxhQUFPO0FBZ0JuRCxpQkFoQm1CVixrQkFnQlpXLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=