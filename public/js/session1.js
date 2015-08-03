var a;

a = function() {
  return setTimeout(function() {
    return console.log(2);
  }, 0);
};

console.log(1);

a();

console.log(3);
