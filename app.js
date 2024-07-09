// // var, let, const
// // let name = "Muideen"
// // name= "Aptech"
// //console.log (name)



// // let kelvin
// // console.log(kelvin)
// // kelvin= 'john Doe'
// // console.log(kelvin)
// // kelvin ='steve smith'
// // console.log(kelvin)

// // data type (number, boolean, string, array, object)
// let a = 5;
// let b =6.7
// let isRainToday = true
// let college = "Aptech Osogbo"
// let fruits = ["Apple","Pawpaw", "mangoes", "Oranges", "Cucumber"]
// const person ={
//     name: "Kolawole Ridwan",
//     jobrole: "Mathematcian",
//     company: "Aptech Osogbo",
//     age: 56,
//     salary: 670000.00
// }
// console.log(a)
// console.log(b)
// console.log(isRainToday)
// console.log(college)
// console.log(fruits.[3])
// console.log(person.name)
// let res = person.jobrole
// console.log(res)
// document.body,innerHTML = `
// <h1>Details</h1>
// <b>Name: </b> ${person.name} <br>
// <b>Jobrole: </b>  ${person.jobrole} <br>
// <b>Company: </b>${person.company} <br>
// <b>Age: </b> ${person.age} <br>
// <b>Salary: </b> ${person.salary} <br>
// `


//casting

// let val = 5;
// let a = "a"
// console.log(val)
// console.log(val+5)
// console.log(typeof val)
// Number to string
//  val = string(5);
//   console.log(val); 
//   console.log(val+5);
//   console.log(val*5);
//   console.log(val*a);
//   console.log(val*a);
//   console.log(typeof val)


// let fruits = ["apple", "mango", "water melon", "pawpaw"]
// let numbers =[1,2,3,4,5,6,7,8,9]
//fruits[0] = "pineapple"
//methods in Array
// push() - add to the back of the array
//fruits.push("muyideen")
//unshift() - add to the front of an array
//fruits.unshift("Aptech")
//pop() - remove from the back
//fruits.pop()
//shift() - rove from the front
//fruits.shift()

//splice () -
//fruits.splice(1,2) 
// fruits.splice(2,0,"cucumber")
// numbers.splice(2,7)
// fruits.sort()
// fruits.reverse()
// console.log(fruits)
// console.log(numbers)

// // string methods 
// const firstname = 'william'
// const lastname = 'johnson'
// const str ='hello there my name is brad'
// const tags = 'web design, wed development programmimg'

// let val;
// //concatenation
// val = firstname + lastname;
// val = firstname + " " + lastname,

// //append
// val = 'brad'
// val += 'Traversy'  // meaning val = brad + traversy

// //length
// val = firstname.length;

// //concat()
// val= firstname.concat(' ',lastname);

// //upper case
// val = firstname.toUpperCase();

// //lower case
// val = firstname.tolowerCase();

// // indexof()
// val= firstname.indexOf('')


// let number = prompt("Enter your score in javascript")
//  number = parseFloat(number)
//  if(isNaN(number)){
//     alert("please enter a number")
//  }
//  else if(number > 100){
//     alert("please enter a number between 0 and 100 ")
//  }
//  else if(number >= 70){
//     alert(" Grade is A ")
//  }
//  else if(number >= 60){
//     alert(" Grade is B")
//  }
//  else if(number >= 50){
//     alert(" Grade is c ")
//  }
//  else if(number >= 45){
//     alert(" Grade is D")
//  }
//  else if(number >= 40){
//     alert(" Grade is E")
//  }
//  else{
//     alert("Carry over student")
//  }
//  console.log(number)

// for (let i = 1; i<=5; i++){
// if(i%2==0){
//     console.log(i)
// }
// }



// let a=10
// for (let i = 1; i<=a; i++){
//     console.log(`${a} x ${i} = ${a*i}`)
// }


let i =1;
while (i <= 5) {
    console.log(i);
    i++;