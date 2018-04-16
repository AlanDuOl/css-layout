
let select = document.querySelectorAll(".mouseEffects");
//if flex-prop or grid-prop
//Get the parent node
let parentNode = document.querySelectorAll(".properties-div");
let layoutBox = document.getElementById("layout-container");

mouseoverEffect();
layoutChoice();

function initialLoad(){
    document.getElementById("grid-prop").style.display = "none";
    document.getElementById("flex-prop").style.display = "none";
}

//function to be loaded wher grid layout is selected
function gridLayoutProperties(){
    document.getElementById("grid-prop").style.display = "block";
    document.getElementById("flex-prop").style.display = "none";
    layoutBox.style.display = "grid";
}

//function to be loaded wher flex layout is selected
function flexLayoutProperties(){
    document.getElementById("grid-prop").style.display = "none";
    document.getElementById("flex-prop").style.display = "block";
    layoutBox.style.display = "flex";
}

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
            propertiesChoice(currentVal);
            setColor();
            clearColor();
        });
    });
}

function propertiesChoice(val){
    //loop through the node and get the childs of each element in the node
    parentNode.forEach(function(currentVal, index, lisObjs){
        if(currentVal.children[1] == val){
            currentVal.children[2].style.value = "inactive";
        }
        else if(currentVal.children[2] == val){
            currentVal.children[1].style.value = "inactive"
        }
        if(currentVal.children[1].style.value == "active"){
            // layoutBox.style.currentVal.name = currentVal.id;
            layoutBox.style.flexWrap = "wrap";
            console.log(layoutBox.style.flexWrap);
        }
    });
}

function setColor(){

    select.forEach(function(currentVal, index, lisObjs){
        if(currentVal.style.value == "active"){
            currentVal.style.backgroundColor = "green";
            currentVal.style.backgroundClip = "content-box";
        }
    });
}

function clearColor(){

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
