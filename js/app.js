
mouseoverEffect();
layoutChoice();

function initialLoad(){
  document.getElementById("layout").innerHTML = "Layout type: Grid";
  document.getElementById("grid-form").style.display = "none";
  document.getElementById("flex-form").style.display = "none";
}

//function to be loaded wher grid layout is selected
function gridLayoutProperties(){
  // let element = document.createElement("input");;
  // let div = document.getElementById("display").appendChild(element);
  // document.getElementById("display").innerHTML = "<div class='box'>Display:<input type='radio' name='display' value='grid' checked>Grid<input type='radio' name='display' value='flex'>Flex</div>";
  // div.style.border = "1px solid grey";
  // div.style.width = "10px";
  // div.style.height = "10px";
  document.getElementById("grid-form").style.display = "block";
  document.getElementById("flex-form").style.display = "none";
}

//function to be loaded wher flex layout is selected
function flexLayoutProperties(){
  document.getElementById("flex-form").style.display = "block";
  document.getElementById("grid-form").style.display = "none";
}

function layoutChoice(){
  // TODO:
    // -Aply only once depending on the active element
  document.getElementById("header-grid").addEventListener("click", function(){
      document.getElementById("layout").innerHTML = "Layout type: Grid";
      document.getElementById("header-grid").style.backgroundColor = "green";
      document.getElementById("header-flex").style.backgroundColor = "white";
      gridLayoutProperties();
      // "<div>Display: <input type='radio' name='display' value='grid' checked>Grid<input type='radio' name='display' value='flex'>Flex</div>"
  });

  document.getElementById("header-flex").addEventListener("click", function(){
      document.getElementById("layout").innerHTML = "Layout type: Flex";
      document.getElementById("header-flex").style.backgroundColor = "green";
      document.getElementById("header-grid").style.backgroundColor = "white";
      flexLayoutProperties();
  });
}

//Add/remove boxShadow of elements on mousever event
function mouseoverEffect(){
    let select = document.querySelectorAll(".box");
    select.forEach(function(currentVal, index, lisObjs){
        currentVal.addEventListener("mouseover", function() {
          currentVal.style.boxShadow = "1px 1px 0 3px hsl(0, 0%, 90%), 1px 1px 0 6px hsl(0, 0%, 60%), 1px 1px 0 10px hsl(0, 0%, 30%)";
          currentVal.style.cursor = "pointer";
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
