let r = document.getElementById("resultat");
document.getElementById("egale").addEventListener("click", resultat);
let valeur1 = "", valeur2 = "", signe = "";


function affectation (valeur) {
 if (valeur1 == "") {
    valeur1 =  parseInt(valeur);
 }
 else{
    valeur2 =  parseInt(valeur);;
 }
 console.log(valeur1 + " " + valeur2)
}


function operation(s){
 signe = s
 console.log(signe);
}
function resultat () {
    if (valeur2 != "") {
        if (signe == "+") {
            r.innerHTML = valeur1 + valeur2;
            
        }
        if (signe == "-") {
            r.innerHTML = valeur1 - valeur2;
            
        }
        if (signe == "*") {
            r.innerHTML = valeur1 * valeur2;
            
        }

        if (signe == "/") {
            r.innerHTML = valeur1 / valeur2;
            
        }
        if (signe == "%") {
            r.innerHTML = valeur1 % valeur2;
            
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