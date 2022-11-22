"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EditEntryToolbarSVG;
    }
});
var _toolbar = /*#__PURE__*/ _interopRequireDefault(require("../../svg/toolbar"));
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
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
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
var EditEntryToolbarSVG = /*#__PURE__*/ function(ToolbarSVG) {
    _inherits(EditEntryToolbarSVG, ToolbarSVG);
    var _super = _createSuper(EditEntryToolbarSVG);
    function EditEntryToolbarSVG() {
        _classCallCheck(this, EditEntryToolbarSVG);
        return _super.apply(this, arguments);
    }
    _createClass(EditEntryToolbarSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", {
                    transform: "matrix(0.78501283,-0.78501283,0.78501283,0.78501283,-5.90466,13.24565)"
                }, /*#__PURE__*/ React.createElement("path", {
                    style: "stroke:none",
                    d: "M 6,8.7257576 2,11.225756 6,13.725758 Z"
                }), /*#__PURE__*/ React.createElement("rect", {
                    style: "fill:none;stroke-width:1.41364",
                    width: "10.586364",
                    height: "4.0863643",
                    x: "7.70682",
                    y: "9.2068176"
                }), /*#__PURE__*/ React.createElement("rect", {
                    style: "fill:none;stroke-width:1.41364",
                    width: "0.81444442",
                    height: "4.3144417",
                    x: "18.87048",
                    y: "9.0927782"
                }));
            }
        }
    ]);
    return EditEntryToolbarSVG;
}(_toolbar.default);
_defineProperty(EditEntryToolbarSVG, "defaultProperties", {
    className: "edit-entry"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9lZGl0RW50cnkuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb29sYmFyU1ZHIGZyb20gXCIuLi8uLi9zdmcvdG9vbGJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0RW50cnlUb29sYmFyU1ZHIGV4dGVuZHMgVG9vbGJhclNWRyB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDAuNzg1MDEyODMsLTAuNzg1MDEyODMsMC43ODUwMTI4MywwLjc4NTAxMjgzLC01LjkwNDY2LDEzLjI0NTY1KVwiPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZTpub25lXCIgZD1cIk0gNiw4LjcyNTc1NzYgMiwxMS4yMjU3NTYgNiwxMy43MjU3NTggWlwiIC8+XG4gICAgICAgIDxyZWN0IHN0eWxlPVwiZmlsbDpub25lO3N0cm9rZS13aWR0aDoxLjQxMzY0XCIgd2lkdGg9XCIxMC41ODYzNjRcIiBoZWlnaHQ9XCI0LjA4NjM2NDNcIiB4PVwiNy43MDY4MlwiIHk9XCI5LjIwNjgxNzZcIiAvPlxuICAgICAgICA8cmVjdCBzdHlsZT1cImZpbGw6bm9uZTtzdHJva2Utd2lkdGg6MS40MTM2NFwiIHdpZHRoPVwiMC44MTQ0NDQ0MlwiIGhlaWdodD1cIjQuMzE0NDQxN1wiIHg9XCIxOC44NzA0OFwiIHk9XCI5LjA5Mjc3ODJcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZWRpdC1lbnRyeVwiXG4gIH07XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkVkaXRFbnRyeVRvb2xiYXJTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInRyYW5zZm9ybSIsInBhdGgiLCJzdHlsZSIsImQiLCJyZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwieSIsIlRvb2xiYXJTVkciLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7NERBRkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVIsSUFBQSxBQUFNQSxvQ0FBTjtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7aUJBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxxQkFFRSxvQkFBQ0M7b0JBQUVDLFdBQVU7aUNBQ1gsb0JBQUNDO29CQUFLQyxPQUFNO29CQUFjQyxHQUFFO2tDQUM1QixvQkFBQ0M7b0JBQUtGLE9BQU07b0JBQWlDRyxPQUFNO29CQUFZQyxRQUFPO29CQUFZQyxHQUFFO29CQUFVQyxHQUFFO2tDQUNoRyxvQkFBQ0o7b0JBQUtGLE9BQU07b0JBQWlDRyxPQUFNO29CQUFhQyxRQUFPO29CQUFZQyxHQUFFO29CQUFXQyxHQUFFOztZQUl4Rzs7O1dBWG1CWDtFQUE0QlksZ0JBQVU7QUFhekQsZ0JBYm1CWixxQkFhWmEscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==