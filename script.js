// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "en",
//     get fullName() {
//       return this.firstName + ' ' + this.lastName;
//     }
//   };
//   console.log(person.fullName);

//   ...set keyword...

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: " ",
//     set lang(lang) {
//          this.language = lang
//     }
//   };
//   person.lang= 'bn';
//   console.log(person);

//  ... outside add ...

// const person = {
//     firstName: "John",
//     lastName: "Doe",
// };
//     Object.defineProperty(person, "fullName", {
//         get : function () {
//             return this.firstName + ' ' + this.lastName;
//         }
      
//     });
//   person.age = 35;
//   console.log(person);

// class 67...

// function Person(first, last, age) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.fullName = function(){
//       return  this.firstName + " " + this.lastName
//     }
//   }
//   const sohel = new Person('sohel', 'hossain', 22);
//   const sunny = new Person('Sunny', 'alom', 45);
//   const rokey = new Person('rokey', 'joy', 12);

//   sohel.country = "Bangladesh";

//   console.log(sohel.fullName());

//   class 68..
function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function(){
      return  this.firstName + " " + this.lastName
    }
  }
  const sohel = new Person('sohel', 'hossain', 22);
  const sunny = new Person('Sunny', 'alom', 45);
  const rokey = new Person('rokey', 'joy', 12);

  Person.prototype.country = 'Bangladesh';
  console.log(sohel.country);