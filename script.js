let r = document.getElementById("resultat");
document.getElementById("egale").addEventListener("click", resultat);
let valeur1 = "", valeur2 = "", signe = "";


function affectation (valeur) {
 if (signe == "") {
 
    valeur1 = valeur1 + valeur
     console.log("one" + valeur1)
 }
 if ((signe != "") && (valeur1 != "") ){
    valeur2 =  valeur2 + valeur;
     console.log("two" +valeur2)
 }

}


function operation(s){
 signe = s
 console.log(signe);
}
function resultat () {
    let valeur1Int = parseInt(valeur1);
    let valeur2Int = parseInt(valeur2);
    if (valeur2 != "") {
        if (signe == "+") {
            r.innerHTML = valeur1Int + valeur2Int;
            
        }
        if (signe == "-") {
            r.innerHTML = valeur1Int - valeur2Int;
            
        }
        if (signe == "*") {
            r.innerHTML = valeur1Int * valeur2Int;
            
        }

        if (signe == "/") {
            r.innerHTML = valeur1Int / valeur2Int;
            
        }
        if (signe == "%") {
            r.innerHTML = valeur1Int % valeur2Int;
            
        }
        
    }
  console.log(signe);
}
function reset() {
    valeur1 = "";
    valeur2 = "";
    signe = "";
    r.innerHTML = "0"
}
function  designer(){
    if (document.getElementsByClassName("b")[0].style.backgroundColor == "white") {
        document.getElementsByClassName("b")[0].style.backgroundColor = "black"
        document.getElementsByClassName("resultat")[0].style.color = "white"
    }
    else{
        document.getElementsByClassName("b")[0].style.backgroundColor = "white"
        document.getElementsByClassName("resultat")[0].style.color = "black"
    }
  
   
}