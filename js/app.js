
addBoxShadow();

function addBoxShadow(){
    let select = document.querySelectorAll(".styles");
    select.forEach(function(currentVal, index, lisObjs){
        // console.log(currentVal +" "+ index +" "+ lisObjs);
        currentVal.addEventListener("mouseover", function() {
          //alert(event);
          currentVal.style.boxShadow = "10px 10px 5px #d3d3d3";
        });
        currentVal.addEventListener("mouseout", function() {
          //alert(event);
          currentVal.style.boxShadow = "0px 0px 0px #000";
        });
    });
}
