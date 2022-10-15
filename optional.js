"use strict"

const user1 = {
    name: "John",
    age: 10,
    sayHello() {
        alert("hello")
    }
}

let user2 = {};

alert(user1?.name);
alert(user2?.name);

user1.sayHello?.();
user2.sayHello?.();

let kek = Symbol.for("id");
user1[kek] = "1";
user2[kek] = "2";
console.log(user1)
alert(Symbol.keyFor(kek));
