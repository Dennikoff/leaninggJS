let user = {
    name: "John",
    age: 20,
    toString() {
        return `name = ${this.name}`;
    },
    valueOf() {
      return this.age;
    }
}


alert(user);
alert(+user);
alert(user + 100);


let user2 = {
    name: "Denis",
    age: 20,
    [Symbol.toPrimitive] (hint) {
        return hint === "string" ? `name = ${this.name}`: this.age;
    }
}

alert(user2);
alert(+user2);
alert(user2 = 100);
