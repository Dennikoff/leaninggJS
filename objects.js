"use strict"

const user = {
    name: "Vadik",
    role: "student",
    mark: 4.7
}

user.fault = false

delete user.fault

console.log(user)



for (let key in user) {
    console.log(key)
}

console.log(isEmpty(user))
console.log(isEmpty({}))

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for(let key in salaries) {
    sum += salaries[key]
}

console.log(sum)

function isEmpty(obj) {
    let count = 0
    for (let key in obj) {
        count++
    }
    return count === 0
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(obj) {
    for (let key in obj) {
        if(typeof obj[key] == "number") {
            obj[key] *= 2
        }
    }
}

console.log(menu)


// OBJECT METHODS

let calculator = {
    read() {
        this.a = +prompt("Enter a","0");
        this.b = +prompt("Enter b","0");
    },

    sum() {
      return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
}

//calculator.read()
//console.log(calculator.sum(), calculator.mul())

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert(this.step)
        return this
    }
}

//ladder.up().up().down().showStep().down().showStep();

function User() {
    return {
        name: "John",
        age: 10
    }
}

let user1 = new User; //User() the same

user1.name = "Pavel";

user1["name"] = "Denis";

console.log(user1.name, user1["name"] = "Maria")

//tasks for constructors

// task1

let obj = {}

function A() {return obj;}
function B() {return obj;}


let a = new A;
let b = new B;

alert(a == b)

// task2

function Calculator() {
    return {
        read() {
            this.a = +prompt("A", "0");
            this.b = +prompt("B", "0");
            return this
        },
        sum() {
            return this.a + this.b;
        },
        mul() {
            return this.a * this.b;
        }
    }
}

let calculator2 = new Calculator();
calculator2.read();
alert(calculator2.sum());
alert(calculator2.mul());


//task3

function Accumulator(startingValue){
    this.value = startingValue;

    this.read = function(){
        return this.value += +prompt("Enter new value", "0")
    }
}

let acc = new Accumulator(1);

alert(acc.read())
alert(acc.read())
