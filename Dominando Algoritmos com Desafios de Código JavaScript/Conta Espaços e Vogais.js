let str = gets();

let strSplit = str.toLowerCase().split('');


let whites;

let vogais;


vogais = strSplit.filter(vtVogais);

whites = strSplit.filter(vtWhites);


function vtVogais(str){

 if (str === "a" || str === "e" || str === "i" || str === "o" || str === "u")

 return true;

}


function vtWhites(str){

 if (str === " "){

   return true;

 }

}

console.log("Espacos em branco: " + whites.length + " Vogais: " + vogais.length)