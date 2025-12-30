/**
In this example, we have a closure where one function returns another function.
The inner function maintains access to the variable person, defined in the lexical scope of the outer function.
Even after the execution of the outer function, the reference to the lexical scope is preserved,
allowing the inner function to continue accessing and modifying the person object.
*/

function closure () {
    let person = {};

    return function () {
    
        person = {
            name: "John",
            age: 20
        }
        
        return person;
    }   

}

const getPerson = closure();
const person = getPerson();
console.log(person)