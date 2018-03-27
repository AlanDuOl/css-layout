
addBoxShadow();

function addBoxShadow(){
    let select = document.querySelectorAll(".box");
    select.forEach(function(currentVal, index, lisObjs){
        currentVal.addEventListener("mouseover", function() {
          currentVal.style.boxShadow = "1px 1px 0 3px hsl(0, 0%, 90%), 1px 1px 0 6px hsl(0, 0%, 60%), 1px 1px 0 10px hsl(0, 0%, 30%)";
        });
        currentVal.addEventListener("mouseout", function() {
          currentVal.style.boxShadow = "0px 0px 0px #000";
        });
    });
}
