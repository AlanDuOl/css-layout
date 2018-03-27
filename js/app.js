
addBoxShadow();

function addBoxShadow(){
    let select = document.querySelectorAll(".box");
    select.forEach(function(currentVal, index, lisObjs){
        currentVal.addEventListener("mouseover", function() {
          currentVal.style.boxShadow = "0 0 0 3px hsl(0, 0%, 30%), 0 0 0 7px hsl(0, 0%, 50%), 0 0 0 12px hsl(0, 0%, 70%)";
        });
        currentVal.addEventListener("mouseout", function() {
          currentVal.style.boxShadow = "0px 0px 0px #000";
        });
    });
}
