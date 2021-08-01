const startBtnEl = document.querySelector("#start-btn"); 
const mainEl = document.querySelector("main");

let mainCalParameters = {height: "", weight: "", age: "", gender: ""}; 

const createNumberInput = function(properties,targetCol) {

    console.log(properties); 

    // Select the column that is currently being generated

    const rowEl = document.createElement("div"); 
    rowEl.classList = "row"
    rowEl.textContent = "This is an optimistic test! :)"; 

    targetCol.appendChild(rowEl); 
    console.log(targetCol); 

    return(targetCol); 
    properties.forEach(function(property){
        
    })
}

const createMaintCalsForm= function() {

    const formEl = document.createElement("form")
    formEl.setAttribute("id","maint-calorie-form");
    formEl.classList = "container"; 

    const fieldsetEl = document.createElement("fieldset");
    fieldsetEl.classlist = "row w-100 bg bg-info"

    const legendEl = document.createElement("Legend");
    legendEl.innerHTML = "<h6>Maintenance Calorie Inputs</h6>"

    fieldsetEl.appendChild(legendEl); 

    const colEl = document.createElement("div"); 
    colEl.classList = "col";

    const properties = [{name:["height-ft", "height-in"], unit: ["ft", "in"]}, {name: "Weight", unit: "pounds"}, {name: "Age", unit: "years"}];  

    createNumberInput(properties,colEl); 
    
    fieldsetEl.appendChild(colEl);
    formEl.appendChild(fieldsetEl); 
    mainEl.appendChild(formEl); 
}

const startBtnHandler = function(event) {
    createMaintCalsForm();  
}

startBtnEl.addEventListener("click",startBtnHandler); 