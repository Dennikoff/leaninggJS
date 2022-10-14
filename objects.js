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

calculator.read()
console.log(calculator.sum(), calculator.mul())

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

ladder.up().up().down().showStep().down().showStep();

