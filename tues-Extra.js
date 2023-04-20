let arr = [1, 4, 11, 2, 37, -4]

// we can create a new empty array that will store the number that will be printed.
let smallestNum = []

// or we can have a var and init to 0
let smallest = arr[0]
let largest = arr[0]


for(let i = 0; i < arr.length; i++){
  if(arr[i] < smallest){
    smallest = arr[i]
  } else if(largest < arr[i]){
    largest = arr[i]
  }
}


console.log(smallest, largest)


class Dog {

  }
  
  class Puppy extends Dog {
    constructor(name, color, trainingLevel) {
      super(name, color)
  
      this.trainingLevel = trainingLevel
    }
  
    levelUp(num) {
      this.trainingLevel += num
    }
  }