//1.  nothing

// 2. 

console.log('Hey there')

// 3. Hey there, new line, goodbye

console.log('Hey there')
console.log('Goodbye')

// 4. Goodbye, Hey there

function sayHello () {
  console.log('Hey there')
}

console.log('goodbye')
sayHello()

// 5. Tyson

var bestFriend = 'Tyson'

function sayNameOfFriend() {
  console.log(bestFriend)
} 

sayNameOfFriend()

// 5. Hussain

var bestFriend = 'Tyson'

function sayNameOfFriend() {
  bestFriend = 'Hussain'
  console.log(bestFriend)
} 

sayNameOfFriend()

// 6. Tyson, Hussain

var bestFriend = 'Tyson'

function sayNameOfFriend() {
  bestFriend = 'Hussain'
  console.log(bestFriend)
} 

console.log(bestFriend)
sayNameOfFriend()

// 6. Tyson, Hussain, Hussain || Tyson, Hussain, Tyson ? 

var bestFriend = 'Tyson'

function sayNameOfFriend() {
  var bestFriend = 'Hussain'
  console.log(bestFriend)
} 

console.log(bestFriend)
sayNameOfFriend()
console.log(bestFriend)


