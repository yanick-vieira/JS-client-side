var meu = {
nome: "Paulo",
codenome: "Yok",
numero: 933998884,
slogan: function(){
    console.log("Why always me? Is all about " + this.nome);
},
numero2: function(){
    this.numero += 1;
    return this.numero;
}

};
console.log("Before was :");
console.log(meu.numero);
console.log("Now my number is :");
meu.numero2();




if(meu.nome != "Yanick"){
    console.log("That´s not my name, data denied!");
}else{
    console.log("My data is: " + meu.codenome + ", " + meu.numero );
};