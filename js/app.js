
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
}

//function to be loaded wher flex layout is selected
function flexLayoutProperties(){
    document.getElementById("grid-prop").style.display = "none";
    document.getElementById("flex-prop").style.display = "block";
}

function layoutChoice(){
  // TODO:
  let select = document.querySelectorAll(".mouseEffects");
  select.forEach(function(currentVal, index, lisObjs){
      currentVal.addEventListener("click", function(){
          currentVal.style.backgroundColor = "green";
          currentVal.style.backgroundClip = "content-box";
          console.log(currentVal.style.backgroundColor);
          if(currentVal.id == "header-grid"){
              gridLayoutProperties();
          }
          if(currentVal.id == "header-flex"){
              flexLayoutProperties();
          }
      });
  });
}

//Add/remove boxShadow of elements on mousever event
function mouseoverEffect(){
    let select = document.querySelectorAll(".mouseEffects");
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
