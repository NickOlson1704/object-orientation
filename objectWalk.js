const person = {
    firstName: "Peter",
    lastName: "Parker",
    age: 67,
    hometown: "Lehi",
    hobbies : ["fishing", "running", "camping"],
    favMovies: {
        name: "Spiderman",
        rating: 5,
        year: "2000"
    },
    faveFoods: [
        {
            name: "pizza",
            size: "large",
            topping: [ "pepperoni", "pineapple" ]
        },
        {
            name: "noodles",
            size: "large",
            topping: [ "cheese", "sausage" ]
        },
    ]
}

let {hometown, firstName} = person

//console.log(hometown)
//console.log(firstName)

person.favColor = ["red", "blue"]

delete person.age

person.faveFoods.splice(0, 1)





//console.log(person)

//console.log(person.lastName)
//console.log(person["lastName"])

//console.log(person.hobbies[2])
//console.log(person["hobbies"][2])

//console.log(person.favMovies.year)
//console.log(person.favMovies["year"])
//console.log(person["favMovies"]["year"])

//console.log(person.faveFoods[1].topping[0])


////--------------------CLASSES---------------//////

class Dog  {
    constructor(name, breed, age){
        this.name = name
        this.breed = breed
        this.age = age
    }

    greeting(){
        console.log(`Hello, my name is ${this.name}, I am ${this.breed}, I am ${this.age} years old.`)
    }
}

let dog1 = new Dog("Lassie", "Collie", 5)
let dog2 = new Dog("John", "Lab", 8)

//console.log(dog1)
//console.log(dog2)

//dog1.greeting()
//dog2.greeting()

for(let key in dog1){
    console.log(dog1[key])
}

for(let key in dog2){
    console.log(dog2[key])
}

class Puppy extends Dog {
    constructor(name, breed, age, trainingLevel){
        super(name, breed, age)

        this.trainingLevel = trainingLevel
    }

    levelUp(num){
        this.trainingLevel += num
        // this.trainingLevel = this.trainingLeve + num

    }
}

let puppy1 = new Puppy("Jane", "Husky", 3, 20)

puppy1.levelUp(5)

console.log(puppy1)

