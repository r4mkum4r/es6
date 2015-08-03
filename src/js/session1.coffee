a = ->
  setTimeout ->
    console.log 2
  , 0

console.log 1
a()
console.log 3
