function ID(nev) {

    return document.getElementById(nev);


}

function $(nev) {

    return document.querySelectorAll(nev);

}


var csonak = [];


function csonakba() {
    //3. feladat
    csonak.push(this.src);
    console.log(csonak);

    //7.feladat:
    this.style.display = "none";

    ID("csonak").innerHTML += '<img src="' + this.src + '" alt="utas" style="position: relative; top:130px; right: 0; width: 100px; height:100px; z-index: 5;">';
}
function csonakbolJobbra() {


}

function csonakbolBalra() {


}




function init() {
    
    
    
    
    

    for (var i = 0; i < $("aside img").length; i++) {

        $("#bal img")[i].addEventListener("click", csonakba);
    
      }





  
}






