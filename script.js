let r = document.getElementById("resultat");
document.getElementById("egale").addEventListener("click", resultat);
let valeur1 = "", valeur2 = "0", signe = "";


function affectation (valeur) {
 if (signe == "") {
 
    valeur1 = valeur1 + valeur
    
 }
 if ((signe != "") && (valeur1 != "") ){
    valeur2 =  valeur2 + valeur;
  
 }

}


function operation(s){
 signe = s

}
function resultat () {
    
    let valeur1Float = parseFloat(valeur1);
    let valeur2Float = parseFloat(valeur2);
    if (valeur2 != "") {
        if (signe == "+") {
            r.innerHTML = valeur1Float + valeur2Float;
           
            
        }
        if (signe == "-") {
            r.innerHTML = valeur1Float - valeur2Float;
            
        }
        if (signe == "*") {
            r.innerHTML = valeur1Float * valeur2Float;
            
        }

        if (signe == "/") {
            r.innerHTML = valeur1Float / valeur2Float;
            
        }
        if (signe == "%") {
            r.innerHTML = valeur1Float % valeur2Float;
            
        }
        
    }

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