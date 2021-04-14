function ID(nev) {

  return document.getElementById(nev);


}

function $(nev) {

  return document.querySelectorAll(nev);

}

var tomb=[];
var csonak=[];
function kattTombbe(){
    this.style.display="none";
    
    tomb.push(this.src);
    console.log(tomb);
    
    
    
}

function csonakba () {
    csonak.push(this.src);
    tomb.push(this.src);
    console.log(tomb);
    this.style.display="none";
    ID("csonak").innerHTML +='<img src="'+this.src+'" alt="utas" style="position: relative;top: 200px;  right: 0; width: 50px; height:50px; z-index: 5;">';//style="position: relative;top: 0px;  right: 0; width: 50px; height:50px; z-index: 5;"
}
function csonakbolJobbra(){
    
    
}

function csonakbolBalra(){
    
    
}


function alapAllas(){
    
     ID("bal").innerHTML +='<img src="kepek/kecske2.png" alt="kecske">';
     ID("bal").innerHTML +='<img src="kepek/kaposzta.png" alt="kaposzta">';
     ID("bal").innerHTML +='<img src="kepek/farkas.png" alt="farkas">';
     ID("kozep").innerHTML +='<div id="csonak"><img src="kepek/csonak.png" alt="csonak" style="z-index: -1;"></div>';
    
}


function init() {
    
    alapAllas();
    
    
    
    

for (i = 0; i <= $("aside img").length; i++) {

    $("#bal img")[i].addEventListener("click", csonakba);
    
    

  }





  ;
}





window.addEventListener("load", init, false);
