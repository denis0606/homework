const user = {
    name: 'Denis',
    age: 29,
    isAdmin: false,
    sayHello (name) {
        console.log(`Hello ${name}`)
    }
}

user.sayHello('Denis')



const users = [
    {
        name: 'Alex',
        age: 23,
        isAdmin: false
    },
    {
        name: 'John',
        age: 30,
        isAdmin: true
    },
    {
        name: 'Ivan',
        age: 31,
        isAdmin: false
    }
]

let simpleUsers = 0;
for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === false) {
        simpleUsers++
    }
}
console.log(simpleUsers)
