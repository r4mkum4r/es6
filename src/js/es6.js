// var obj = {

//   fn(){ console.log('fn'); },
//   get name(){console.log('name')}

// };

const x = 12;

//an constant 'x' is already available in this scope therefore the below line throws an error when you are try to create a new x variable.
// const x = 13;

if(true)
{
    //an constant 'x' is available in this scope but not defined in this scope therefore the below line will not throw error instead define a new "x" inside this scope.
    const x = 13;
    
    //here 'y' is available inside this scope not outside this scope
    const y = 11;
}

//here creating a new 'y' will not throw an error because no other 'y' is available in this scope(i.e., global scope)
const y = 12;

let propKey = 'foo';
let obj = {
    [propKey]: true,
    ['b'+'ar']: 123
};

var SteamEngine = {
  prop: 'blue',
  get name() { return 'Thomas' },
  fn1() { console.log('Hurry up!'); },
  fn2() { console.log('Screech...! That was close.'); }
};

list = Collection.map(e => e.data);

function today() { return { d: 6, m: 2, y: 2013 }; }
var { m: month, y: year } = today(); 

var [m, d, v] = [3, 14, 1977];

function findElement(array, predicate) {
    for (var index=0; index < array.length; index++) {
        var element = array[index];
        if (predicate(element)) {
            return { element: element, index: index };
        }
    }
    return { element: undefined, index: -1 };
}

Entries = function (
    { from = 0, to = this.length } = {}) {

// Use `from` and `to`
};


var localVariable = 123;  // not visible outside this file

export function User(age) {
  this.age = age;
}; 

class Module {
  constructor(x, y) {
      this.x = x;
      this.y = y;
  }
  fn() {
      return '(' + this.x + ', ' + this.y + ')';
  }
}

var instance = new Module();

var p1 = new Promise((resolve, reject) => setTimeout(resolve, 400, "one"));
var p2 = new Promise((resolve, reject) => setTimeout(resolve, 200, "two"));
Promise.all([p1, p2]).then(function(value) {
    console.log(value); //one, two
});

class SubClass extends Module{
    constructor() {
     console.log('Im inherited');
     super(1,2);
    }

    fn() {
      super.fn();
    }
}