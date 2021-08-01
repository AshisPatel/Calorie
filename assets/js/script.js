const startBtnEl = document.querySelector("#start-btn"); 
const mainEl = document.querySelector("main");

let mainCalParameters = {height: "", weight: "", age: "", gender: ""}; 

const createNumberInput = function(properties,targetCol) {

    console.log(properties); 

    // Select the column that is currently being generated

    properties.forEach(function(property){
        const rowEl = document.createElement("div"); 
        rowEl.classList = "row mb-2"
        
        
        const labelEl = document.createElement("label");
        labelEl.classList = "col-sm-2 col-form-label";
        labelEl.setAttribute("for",property.name.toLowerCase());
        labelEl.textContent = `${property.name}: `
        
        rowEl.appendChild(labelEl);

        const inputWrapEl = document.createElement("div");
        inputWrapEl.classList = "col-sm-10";
        
        const inputGroupEl = document.createElement("div");
        inputGroupEl.classList = "input-group";

        for (let i=0; i < property.placeholder.length; i++) {
            const inputEl = document.createElement("input");
            inputEl.setAttribute("type","number");
            inputEl.setAttribute("label",property.name.toLowerCase());
            inputEl.setAttribute("placeholder",property.placeholder[i]);
            inputEl.classList = "w-25";
            
            const spanEl = document.createElement("span");
            spanEl.classList = "input-group-text";
            spanEl.textContent = property.unit[i];

            inputGroupEl.appendChild(inputEl);
            inputGroupEl.appendChild(spanEl);
        }

        inputWrapEl.appendChild(inputGroupEl);

        rowEl.appendChild(inputWrapEl); 

        targetCol.appendChild(rowEl); 
    });

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

    // const properties = [{name:["height-ft", "height-in"], unit: ["ft", "in"]}, {name: "Weight", unit: "pounds"}, {name: "Age", unit: "years"}]; 
    const properties = [{name: "Height", placeholder: ["5","10"], unit: ["ft", "in"]}, {name: "Weight", placeholder: ["150"], unit: ["pounds"]}, {name: "Age", placeholder: ["25"], unit: ["years"]}];  

    createNumberInput(properties,colEl); 
    
    fieldsetEl.appendChild(colEl);
    formEl.appendChild(fieldsetEl); 
    mainEl.appendChild(formEl); 
}

const startBtnHandler = function(event) {
    createMaintCalsForm();  
}

startBtnEl.addEventListener("click",startBtnHandler); 