const startBtnEl = document.querySelector("#start-btn"); 
const mainEl = document.querySelector("main");

let mainCalParameters = {height: "", weight: "", age: "", gender: ""}; 

const createNumberInput = function(properties,targetCol) {

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

        const numItems = property.placeholder.length; 

        for (let i=0; i < numItems; i++) {
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

const createRadioInput = function(properties,targetCol,legendName) {
    const fieldsetEl = document.createElement("fieldset");
    fieldsetEl.classList = "row";

    const legendEl = document.createElement("legend"); 
    legendEl.setAttribute("for",properties.name);
    legendEl.classList = "col-form-label col-sm-2";
    legendEl.textContent = `${legendName}:`

    fieldsetEl.appendChild(legendEl); 

    const radioBtnColEl = document.createElement("div");
    radioBtnColEl.classList = "col-sm-10"; 

    const radioBtnsWrapperEl = document.createElement("div");
    radioBtnsWrapperEl.classList = "form-check ps-3";
    
    numRadioBtns = properties.val.length; 

    for(let i=0; i < numRadioBtns; i++) {
        const radioBtnWrapperEl = document.createElement("div");
        radioBtnWrapperEl.classList = "form-check form-check-inline";
        
        const radioBtnEl = document.createElement("input");
        radioBtnEl.classList = "form-check-input";
        radioBtnEl.setAttribute("type","radio");
        radioBtnEl.setAttribute("name", properties.name);
        radioBtnEl.setAttribute("id",properties.identity[i].toLowerCase());
        radioBtnEl.setAttribute("value", properties.val[i]); 

        const labelEl = document.createElement("label");
        labelEl.classList = "form-check-label";
        labelEl.setAttribute("for", properties.identity[i].toLowerCase());
        labelEl.textContent = properties.identity[i]; 

        radioBtnWrapperEl.appendChild(radioBtnEl);
        radioBtnWrapperEl.appendChild(labelEl); 

        radioBtnsWrapperEl.appendChild(radioBtnWrapperEl); 
    }

    radioBtnColEl.appendChild(radioBtnsWrapperEl); 

    fieldsetEl.appendChild(radioBtnColEl); 

    targetCol.appendChild(fieldsetEl); 
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

    const propertiesNum = [{name: "Height", placeholder: ["5","10"], unit: ["ft", "in"]}, {name: "Weight", placeholder: ["150"], unit: ["pounds"]}, {name: "Age", placeholder: ["25"], unit: ["years"]}];  
    createNumberInput(propertiesNum,colEl); 

    const propertiesRadio = {name: "gender", identity: ["Male", "Female"], val: ["m", "f"]};
    createRadioInput(propertiesRadio,colEl,"Biological Gender"); 

    const calcBtnWrapperEl = document.createElement("div");
    calcBtnWrapperEl.classList = "row"; 

    const calcBtnEl = document.createElement("button");
    calcBtnEl.setAttribute("type", "click");
    calcBtnEl.setAttribute("id","cal-calc-btn");
    calcBtnEl.classList = "btn btn-success w-50";
    calcBtnEl.textContent = "Calculate Calories"; 

    calcBtnWrapperEl.appendChild(calcBtnEl);
    colEl.appendChild(calcBtnWrapperEl); 

    const pWrapperEl = document.createElement("div");
    pWrapperEl.classList = "row"; 

    const pEl = document.createElement("p");
    pEl.textContent = "Calculated Calories: "

    const numCalWrapperEl = document.createElement("span");
    numCalWrapperEl.setAttribute("id","maint-cals");
    let temp = 2000;
    numCalWrapperEl.textContent = temp; 

    pEl.appendChild(numCalWrapperEl);
    pWrapperEl.appendChild(pEl);
    colEl.appendChild(pWrapperEl); 
   
    fieldsetEl.appendChild(colEl);
    formEl.appendChild(fieldsetEl); 
    mainEl.appendChild(formEl); // Replace this with a modal 

}

const startBtnHandler = function(event) {
    createMaintCalsForm();  
}

startBtnEl.addEventListener("click",startBtnHandler); 