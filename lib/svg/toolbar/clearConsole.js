"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ClearConsoleToolbarSVG;
    }
});
var _toolbar = /*#__PURE__*/ _interop_require_default(require("../../svg/toolbar"));
var _common = require("../../scheme/common");
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
var ClearConsoleToolbarSVG = /*#__PURE__*/ function(ToolbarSVG) {
    _inherits(ClearConsoleToolbarSVG, ToolbarSVG);
    function ClearConsoleToolbarSVG() {
        _class_call_check(this, ClearConsoleToolbarSVG);
        return _call_super(this, ClearConsoleToolbarSVG, arguments);
    }
    _create_class(ClearConsoleToolbarSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", {
                    fill: "".concat(_common.clearConsoleFill),
                    transform: "translate(0, 0.25)"
                }, /*#__PURE__*/ React.createElement("path", {
                    d: "m 19.217262,5.7822765 a 9.4998945,9.4998942 0 0 0 -13.4349871,4.636e-4 9.4998945,9.4998942 0 0 0 5e-7,13.4345199 9.4998945,9.4998942 0 0 0 13.4349866,4.64e-4 9.4998945,9.4998942 0 0 0 0,-13.4354475 z m -0.977529,2.7696608 a 6.9665893,6.9665892 0 0 1 -0.813681,8.8745777 6.9665893,6.9665892 0 0 1 -8.8727273,0.81183 z M 16.446674,6.7616556 6.7616542,16.446675 A 6.9665893,6.9665892 0 0 1 7.5734829,7.5739474 6.9665893,6.9665892 0 0 1 16.446674,6.7616556 Z"
                }));
            }
        }
    ]);
    return ClearConsoleToolbarSVG;
}(_toolbar.default);
_define_property(ClearConsoleToolbarSVG, "defaultProperties", {
    className: "clear-console"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9jbGVhckNvbnNvbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb29sYmFyU1ZHIGZyb20gXCIuLi8uLi9zdmcvdG9vbGJhclwiO1xuXG5pbXBvcnQgeyBjbGVhckNvbnNvbGVGaWxsIH0gZnJvbSBcIi4uLy4uL3NjaGVtZS9jb21tb25cIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGVhckNvbnNvbGVUb29sYmFyU1ZHIGV4dGVuZHMgVG9vbGJhclNWRyB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGcgZmlsbD17YCR7Y2xlYXJDb25zb2xlRmlsbH1gfSB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCwgMC4yNSlcIj5cbiAgICAgICAgPHBhdGggZD1cIm0gMTkuMjE3MjYyLDUuNzgyMjc2NSBhIDkuNDk5ODk0NSw5LjQ5OTg5NDIgMCAwIDAgLTEzLjQzNDk4NzEsNC42MzZlLTQgOS40OTk4OTQ1LDkuNDk5ODk0MiAwIDAgMCA1ZS03LDEzLjQzNDUxOTkgOS40OTk4OTQ1LDkuNDk5ODk0MiAwIDAgMCAxMy40MzQ5ODY2LDQuNjRlLTQgOS40OTk4OTQ1LDkuNDk5ODk0MiAwIDAgMCAwLC0xMy40MzU0NDc1IHogbSAtMC45Nzc1MjksMi43Njk2NjA4IGEgNi45NjY1ODkzLDYuOTY2NTg5MiAwIDAgMSAtMC44MTM2ODEsOC44NzQ1Nzc3IDYuOTY2NTg5Myw2Ljk2NjU4OTIgMCAwIDEgLTguODcyNzI3MywwLjgxMTgzIHogTSAxNi40NDY2NzQsNi43NjE2NTU2IDYuNzYxNjU0MiwxNi40NDY2NzUgQSA2Ljk2NjU4OTMsNi45NjY1ODkyIDAgMCAxIDcuNTczNDgyOSw3LjU3Mzk0NzQgNi45NjY1ODkzLDYuOTY2NTg5MiAwIDAgMSAxNi40NDY2NzQsNi43NjE2NTU2IFpcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiY2xlYXItY29uc29sZVwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQ2xlYXJDb25zb2xlVG9vbGJhclNWRyIsImNoaWxkRWxlbWVudHMiLCJnIiwiZmlsbCIsImNsZWFyQ29uc29sZUZpbGwiLCJ0cmFuc2Zvcm0iLCJwYXRoIiwiZCIsIlRvb2xiYXJTVkciLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7OERBSkU7c0JBRVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxCLElBQUEsQUFBTUEsdUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxxQkFFRSxvQkFBQ0M7b0JBQUVDLE1BQU0sQUFBQyxHQUFtQixPQUFqQkMsd0JBQWdCO29CQUFJQyxXQUFVO2lDQUN4QyxvQkFBQ0M7b0JBQUtDLEdBQUU7O1lBSWQ7OztXQVRtQlA7RUFBK0JRLGdCQUFVO0FBVzVELGlCQVhtQlIsd0JBV1pTLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=