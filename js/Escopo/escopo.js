
//escopo global
var x = 1;
var w = 3;

console.log(w);

function conta(){
   
    //escopo local
     var z = 13;
    
    console.log(z);

}

if(!true){
    conta();
    
}else if(true){
 console.log("It´s false disguised in true!");
};

