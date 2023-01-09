//Function call
/*
function tutorial() {
    console.log("Frist tutorial taken today");

};

tutorial();
*/

//function and array
/*
function primeiro() {
    var arr = ["yok","pok","elvis",25, {n1:"keiks",n2:"ja"}];

   for(var i = 0 ; i <= arr.length ; i++){
        console.log(arr[i]);
   };
};

primeiro();
*/

//function argument
/*
function myage(age, age2){
    console.log("My age is " + age);
    console.log("And your age is " + age2);
};

myage(25 , 30);

var age3 = 40;

myage(age3 , 12);
*/

//function return

function calculus(x, y){

    var res = x - y;
    return res;  


};

var conta = calculus(2,5);
console.log(conta);

var conta2 = calculus(10,137);
console.log(conta2);

console.log(calculus(1,9));