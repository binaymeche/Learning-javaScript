import { age } from "./utils/age.js";
import { firstName, firstName as nam} from "./utils/name.js";


import Person from "./utils/person.js";
// you can give it any name to Person if using the default to export
// no need of braces if the export is done using default


import { Magician } from "./utils/person.js";


// for person
const person1 = new Person(firstName, "Meche", age);
person1.info()


// for magician
const magician1 = new Magician("Klein", "Air bullet", "Male");
magician1.show();

// console.log(nam,age)