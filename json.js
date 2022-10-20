"use strict"

let room = {
    number: 23,
    toJSON() {
        return this.number;
    }
};

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null,
    room: room
};

let json = JSON.stringify(student)

console.log(json)

json = JSON.stringify(student, ["name", "age", "isAdmin", "room"], 5)
console.log(json)

let student2 = JSON.parse(json)

console.log(student2)

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

//second argument for JSON.parse(string, [reviver]);

//let obj1 = JSON.parse(str)
//console.log(obj1.date.getDate() // error, because date is not Date it is string

let obj1 = JSON.parse(str, function (key, value) {
   if(key == 'date') {
       return new Date(value)
   }
   return value
});

console.log(obj1)

// homework

let user = {
    name: "Василий Иванович",
    age: 35
};

let hwJson = JSON.stringify(user)

let vasiliy = JSON.parse(hwJson)

console.log(vasiliy)



room = {
    number: 23
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
    if (value == meetup && key != '') {
        return undefined
    } else {
        return value
    }
}));
