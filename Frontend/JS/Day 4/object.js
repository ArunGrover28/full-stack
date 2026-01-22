// object in js is data type non primitive(mutable)
// that mean we can change the value in object later

// const obj = {}
// declared by {}

// initialization
// const obj = {
//     name:"something",
//     age:12,
//     speak:()=>{
//         console.log("speak")
//     }
// }
// obj["speak"]()
// obj.speak();
// console.log(obj.name);
// console.log(obj.age);

// const empty = {};
// empty["name"] = "arun";
// empty.speak = function x(){
//     console.log("speain");
// }
// console.log(empty);

// function Person(a,b){
//     this.first   = a;
    
// }

// const l = prompt("enter last name");
// const fullName = new Person("arun",l); 

// alert(fullName.last);



const student = {
  "first name": "Arun",
  age: 21
};

// console.log(student["first name"]); // Arun
// console.log(student["age"]);        // 21

let key = "age";
console.log(student["key"]); // 21
