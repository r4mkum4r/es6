// var obj = {

//   fn(){ console.log('fn'); },
//   get name(){console.log('name')}

// };

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _obj;

exports.User = User;

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var x = 12;

//an constant 'x' is already available in this scope therefore the below line throws an error when you are try to create a new x variable.
// const x = 13;

if (true) {
    //an constant 'x' is available in this scope but not defined in this scope therefore the below line will not throw error instead define a new "x" inside this scope.
    var _x = 13;

    //here 'y' is available inside this scope not outside this scope
    var _y = 11;
}

//here creating a new 'y' will not throw an error because no other 'y' is available in this scope(i.e., global scope)
var y = 12;

var propKey = 'foo';
var obj = (_obj = {}, _defineProperty(_obj, propKey, true), _defineProperty(_obj, 'b' + 'ar', 123), _obj);

var SteamEngine = Object.defineProperties({
    prop: 'blue',

    fn1: function fn1() {
        console.log('Hurry up!');
    },
    fn2: function fn2() {
        console.log('Screech...! That was close.');
    }
}, {
    name: {
        get: function get() {
            return 'Thomas';
        },
        configurable: true,
        enumerable: true
    }
});

list = Collection.map(function (e) {
    return e.data;
});

function today() {
    return { d: 6, m: 2, y: 2013 };
}

var _today = today();

var month = _today.m;
var year = _today.y;
var m = 3;
var d = 14;
var v = 1977;

function findElement(array, predicate) {
    for (var index = 0; index < array.length; index++) {
        var element = array[index];
        if (predicate(element)) {
            return { element: element, index: index };
        }
    }
    return { element: undefined, index: -1 };
}

Entries = function () {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var _ref$from = _ref.from;
    var from = _ref$from === undefined ? 0 : _ref$from;
    var _ref$to = _ref.to;
    var to = _ref$to === undefined ? this.length : _ref$to;
};

// Use `from` and `to`
var localVariable = 123; // not visible outside this file

function User(age) {
    this.age = age;
}

;

var Module = (function () {
    function Module(x, y) {
        _classCallCheck(this, Module);

        this.x = x;
        this.y = y;
    }

    _createClass(Module, [{
        key: 'fn',
        value: function fn() {
            return '(' + this.x + ', ' + this.y + ')';
        }
    }]);

    return Module;
})();

var instance = new Module();

var p1 = new Promise(function (resolve, reject) {
    return setTimeout(resolve, 400, "one");
});
var p2 = new Promise(function (resolve, reject) {
    return setTimeout(resolve, 200, "two");
});
Promise.all([p1, p2]).then(function (value) {
    console.log(value); //one, two
});

var SubClass = (function (_Module) {
    _inherits(SubClass, _Module);

    function SubClass() {
        _classCallCheck(this, SubClass);

        console.log('Im inherited');
        _get(Object.getPrototypeOf(SubClass.prototype), 'constructor', this).call(this, 1, 2);
    }

    _createClass(SubClass, [{
        key: 'fn',
        value: function fn() {
            _get(Object.getPrototypeOf(SubClass.prototype), 'fn', this).call(this);
        }
    }]);

    return SubClass;
})(Module);
