function ID(nev) {

  return document.getElementById(nev);


}

function $(nev) {

  return document.querySelectorAll(nev);

}

var tomb=[];
var csonak=[];
//function kattTombbe(){
//    this.style.display="none";
//    
//    tomb.push(this.src);
//    console.log(tomb);
//    
//    
//    
//}

function csonakba () {
    csonak.push(this.src);
    tomb.push(this.src);
    console.log(tomb);
    this.style.display="none";
    
    ID("csonak").innerHTML +='<img src="'+this.src+'" alt="utas" style="position: relative; top:130px; right: 0; width: 100px; height:100px; z-index: 5;">';
}
function csonakbolJobbra(){
    
    
}

function csonakbolBalra(){
    
    
}




function init() {
    
    
    
    
    
    

for (var i = 0; i <= $("aside img").length; i++) {

    $("#bal img")[i].addEventListener("click", csonakba);
    
    

  }





  ;
}





window.addEventListener("load", init, false);
