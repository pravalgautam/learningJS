/* # javascript and classes

## OOP

## Object
- collection of properties and methods
- toLowerCase

## why use OOP

## parts of OOP
Object literal 

- Constructor function
- Prototypes
- Classes
- Instances (new, this)

## 4 pillars
Abstraction
Encapsulation
Inheritance
Polymorphism
*/


const user = {
    username: "gg",

    userdetails() {
        console.log(`usernamew${this.username}`);
                console.log(`usernamew${this}`);
    }
}
console.log(user)
console.log(user.userdetails())