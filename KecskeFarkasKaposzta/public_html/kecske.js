window.addEventListener("load", init, false);
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

function kepKiemel(){
    this.classList.add("kiemel");
}

function kepSima(){
    this.classList.remove("kiemel");
}


function init() {
    
    for (var i = 0; i < $("img").length; i++) {

    $("img")[i].addEventListener("mouseover",kepKiemel);
    $("img")[i].addEventListener("mouseout",kepSima);
    
  }    

    

    for (var i = 0; i < $("aside img").length; i++) {

        $("#bal img")[i].addEventListener("click", csonakba);
    
      }


}






