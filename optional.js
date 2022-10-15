"use strict"

const user1 = {
    name: "John",
    age: 10,
    sayHello() {
        alert("hello")
    }
}

let user2 = null

alert(user1?.name)
alert(user2?.name)

user1.sayHello?.()
user2.sayHello?.()
