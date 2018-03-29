let layoutType = "Layout type: Grid";

printLayoutType();
addBoxShadow();

function printLayoutType(){
  document.getElementById("layout").innerHTML = layoutType;
}

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

//This function has been taken from stackoverflow under the link:https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// <div>
//   Display:
//   <input type="radio" name="display" value="grid" checked>Grid
//   <input type="radio" name="display" value="flex">Flex
// </div>
// <div>
//   flex-direction:
//   <input type="radio" name="flex-direction" value="row">row
//   <input type="radio" name="flex-direction" value="column">column
// </div>
//   flex-wrap:
//   <input type="radio" name="flex-wrap" value="nowrap">nowrap
//   <input type="radio" name="flex-wrap" value="wrap">wrap
// </div>
// <div>
//   flex-grow:
//   <input type="radio" name="flex-grow" value="nowrap">nowrap
//   <input type="radio" name="flex-grow" value="wrap">wrap
// </div>
// <div>
//   flex-shrink:
//   <input type="radio" name="flex-shrink" value="nowrap">nowrap
//   <input type="radio" name="flex-shrink" value="wrap">wrap
// </div>
// <div>
//   flex-basis:
//   <input type="radio" name="flex-basis" value="auto">auto
//   <input type="radio" name="flex-basis" value="auto">auto
// </div>
// <div>
