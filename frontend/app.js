// console.log(mahi);
// var mahi1={
//     firstname:"bukke",
//     middlename:"mahendra",
//     lastname:"naik",
//     address:{
//         street:"bandala veedhi",
//         village:"jillellamanda",
//         pin:"517214"
//     }
// };
// var nari="my hero";
// console.log(mahi1);
// console.log(nari);
// //new object model//
// var person=new Object();
// console.log(person);
// person.firstname="bukke",
// person.secondname="mahendra"
// console.log(person);
// function a() {
//     function b() {
//         console.log(myvar);
        
//     }
//     b();
// }
// var myvar=12134556789;
// a();
// var c={
//     greeting:"good mrng"
// };
// var d;
// d=c;
// console.log(c);
// c.greeting="hello";
// console.log(c);
// // console.log(d);


// equals operator sets up newn memory location

//  function greeting3() {
//     let message="hello";
//     console.log(message);
//    let sayhi=function hi(){       
//         let message="hi every one"
//         console.log(message);
//     }
//     sayhi();
//         console.log(message);

// function greeting3();
// let name1="mahi"
// if (name1==="mahi") {
//     let name1="nari";
    
// }
// console.log(name1);

// var a="1";
// function add() {
// var a=3
// console.log(a);
// function sum() {
//     console.log(a);
    
// }
// sum();

// }
//     console.log(a);

// // add();



// let greetings = () => {
//     return "hello good evng";
// }



// let message = greetings();

// console.log(message);


// let greetings = function greetings(a,b) {
//     return "hello mahi" + a  
//     console.log(a);
//     console.log(b);
// }

// console.log(typeof greetings);

// let message = greetings("mahi","nari");

// console.log(message);




// arrow functions

// let greet = (a) =>{
// return "hello" + ""+a;

// }
// let msg =greet("mahi")
// console.log(msg);



// function sum(num1,num2){
//     return num1+num2;
// }

// let total =sum(34,526);


// console.log(total);


// behaviour of this key word





// console.log("testing js");
// console.log(10+20);

// function test(a,b) {
//     console.log(a+b);
    
// }



// test(10,4);

// let employdetails = {
//     name:"mahendra",
//     lastname:"naik",
//     id:123345,
//     role:"learner",

// }
// function getemploydetails(x) {

//     console.log(x);
//     console.log(x.name);
//     console.log(x.lastname);
//     console.log(x.id);
//     console.log(x.role);

//     return x.name +""+ x.lastname+x.id +x.role;
// }
// getemploydetails(employdetails);

    
// console.log(employdetails);

//     // var,letand const diff

//     var greeter="hey hi";
//     function newfunction() {
//         var hello="hello";
        
//     }

// var tester ="hey hi";
// function newfunction() {
//     var hello ="hello";
    
// }


// console.log(hello);
//problems with var

// var greeter;
// console.log(greeter);

// greeter="hello nari";

// var greater ='hero cmng';
// var times =4;

// if(times>3){
//     var greater ="hello nanna";
// }

// console.log(greater);

// function b() {
//     console.log("called b!");
    
// }

// b();
// console.log(a);
// var a ="hello world";
// console.log(a);

// function b() {
//     var myvar;
//     console.log(myvar);
    
// }
// function a() {
//     var myvar =2;
//     console.log(myvar);
//     b();
    
// }

// var myvar =1;
// console.log(myvar);
// a();


// function b() {
//     console.log("called b!");
    
// }
// b();

// console.log(a);

// var a = "hello world";

// console.log(a);


// var person =new object;

// person["firstname"]="mahendra";
// person["lastname"]="naik";
// person["vehicleno"]="ap5050";

// console.log(person);
// newobject();
// person.address = new object();

// console.log(person);

// person.address.street="jillelamanda";
// person.address.city="pileru";
// person.address.state="ap";

// console.log(person);

// arrays


// var a=10
// function f() {
//     console.log(a);
// }

// f();
// console.log(a);


//var key word is the global scoped or function scoped.// 

//variables defined outside the function can be accessed globally,//

// var a=10
// function mahi(){
//     console.log(a);
// }
// mahi();
// console.log(a);            //global scoped//

//variables defined inside a particular function can be accessed within the function//

// function b(){

//     var a=10;
//     console.log(a);
// }
// b();
// console.log(a);         //function scoped//

// //by using var variables  can be re-declare and updated//

// //->the scope of a let variable is only block scoped. it can't accessible outside the particular block.

// let d=10;

// function f() {
// let e=9
// console.log(e);
// console.log(d);

    
// }
// f();


// let a=10;
// function f(){
//     if (true){
//         let b=8
//         console.log(b);
//     }
//     console.log(b);
// }
// f();
// console.log(a);


// //let cannot re-declare

// let a=2
// let a=3

// //user can declare the variable with the same name in different blocks using the let key word

// let a=10
// if (true){
//     let a=9
//     console.log(a);
// }
// console.log(a);

// // const is block scoped. when users declare a const variable,need to initialize it,otherwise,it returns an error
// // cannot update the const variable once it is declared.

// const a=298
// function f(){
//     a=23
//     console.log(a);
// }
// f();

















    
