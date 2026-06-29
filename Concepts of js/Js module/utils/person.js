// only one can be exported as default. 
// Multiple element exported as default will cause an error.

export default class Person { 
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    info() {
        console.log(
            this.firstName,
            this.lastName,
            this.age,
        )
    }
}



export class Magician {
    constructor(name, skills, gender) {
        this.name = name;
        this.skills = skills;
        this.gender = gender;
    }
    show() { //method
        console.log(this.name, this.skills, this.gender)
    }
}