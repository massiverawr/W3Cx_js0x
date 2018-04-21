var divElem;

function init () {
    console.log("page loaded and DOM is ready");
    divElem = document.querySelector("#theDiv");
}

function changeStyle () {
    divElem.style.border = "5px dashed purple";
    divElem.style.padding = "10px";
    divElem.style.backgroundColor = "lightGreen";
    document.body.innerHTML += "<div>voila!</div>"; 
}

