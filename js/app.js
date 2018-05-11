
let select = document.querySelectorAll(".mouseEffects");
//if flex-prop or grid-prop
//Get the parent node
let parentNode = document.querySelectorAll(".properties-div");
let layoutBox = document.getElementById("layout-container");

mouseoverEffect();
layoutChoice();
addBox();
debug();

function addBox(){
    let btn = document.getElementById("addButton");
    btn.addEventListener("click", function(){
        let container = document.getElementById("layout-container");
        let element = document.createElement("div");
        let child = container.appendChild(element);
        child.classList.toggle("initial-box");
    });
}

//Turn on and off the properties
function menuOption(val){
    //
    let menu = document.querySelectorAll(".dropdown-content");
    menu.forEach(function(currentVal, indx, lisObjs){
            for(let index = 0; index < currentVal.children.length; index++){
                if(currentVal.children[index] != val){
                    currentVal.children[index].style.value = "inactive";
                    //document.getElementById(currentVal.id+"-select").textContent = currentVal[currentVal.id+"-select"];
                }else {
                    layoutBox.style[currentVal.id] = currentVal.children[index].textContent;
                    document.getElementById(currentVal.id+"-select").textContent = currentVal.children[index].textContent;
                }
            }
    });
}

function debug(){

}

//Function to be loaded on strat
function initialLoad(){
    document.getElementById("grid-prop").style.display = "none";
    document.getElementById("flex-prop").style.display = "none";
    document.getElementById("layout-container").style.display = "block";
}

//function to be loaded wher grid layout is selected
function gridLayoutProperties(){
    document.getElementById("grid-prop").style.display = "grid";
    document.getElementById("flex-prop").style.display = "none";
    layoutBox.style.display = "grid";
}

//function to be loaded wher flex layout is selected
function flexLayoutProperties(){
    document.getElementById("grid-prop").style.display = "none";
    document.getElementById("flex-prop").style.display = "grid";
    layoutBox.style.display = "flex";
}

//Choose the layout type on click
function layoutChoice(){

    let grid = document.getElementById("header-grid");
    let flex = document.getElementById("header-flex");

    select.forEach(function(currentVal, index, lisObjs){
        currentVal.addEventListener("click", function(){
            currentVal.style.value = "active";
            if(currentVal.id == "header-grid"){
                gridLayoutProperties();
                flex.style.value = "inactive";
            }
            if(currentVal.id == "header-flex"){
                flexLayoutProperties();
                grid.style.value = "inactive";
            }
            menuOption(currentVal);
            setColor();
            clearColor();
        });
    });
}

//Set a background color for the clicked element
function setColor(){
    //Loop through the clickeble elements and set its background color to green (only the content area)
    //if the element is active
    select.forEach(function(currentVal, index, lisObjs){
        if(currentVal.style.value == "active"){
            currentVal.style.backgroundColor = "green";
            currentVal.style.backgroundClip = "content-box";
        }
    });
}
//Clear the background color of inactive elements
function clearColor(){
    //Loop through the clickeble elements and set its background color to white
    //if the element is inactive
    select.forEach(function(currentVal, index, lisObjs){
        if(currentVal.style.value == "inactive"){
            currentVal.style.backgroundColor = "rgb(255,255,255)";
        }
    });
}

//Add/remove boxShadow of elements on mousever event
function mouseoverEffect(){

    select.forEach(function(currentVal, index, lisObjs){
        currentVal.addEventListener("mouseover", function() {
            //currentVal.style.boxShadow = "1px 1px 0 3px hsl(0, 0%, 90%), 1px 1px 0 6px hsl(0, 0%, 60%), 1px 1px 0 10px hsl(0, 0%, 30%)";
            currentVal.style.transform = "scale(1) translate3d(-2px,0,0)";
            currentVal.style.boxShadow = "2px 2px gray";
            currentVal.style.cursor = "pointer";
            if(currentVal.style.backgroundColor != "green"){
                currentVal.style.backgroundColor = "rgb(58,231,88)";
            }
        });
        currentVal.addEventListener("mouseout", function() {
            currentVal.style.transform = "scale(1) translate3d(0,0,0)";
            currentVal.style.boxShadow = "0px 0px 0px #000";
            if(currentVal.style.backgroundColor != "green"){
                currentVal.style.backgroundColor = "rgb(255,255,255)";
            }
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

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction(parm) {
    document.getElementById(parm).classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
