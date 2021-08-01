const calCalcBtnEl = document.querySelector("#cal-calc-btn")


const validateForm = function(form) {
    const inputs = form.elements; 
    const warningEl = form.querySelector(".warning");
    const radioButtonGroups = [];
    let value = ""; 
    warningEl.textContent = ""; 
    
    for(let i=0; i< inputs.length; i++) {
        // Check to make sure all number inputs have been filled out
        if(inputs[i].type==="number" && inputs[i].value === "") {
            warningEl.textContent = `Please enter a value for your ${inputs[i].name}`;
            return; 
        }
        // Check to see if there are any groups of radio buttons 
        if (inputs[i].type==="radio" && !radioButtonGroups.includes(inputs[i].name)) {
            radioButtonGroups.push(inputs[i].name); 
        }   
    }

    

    // Check to see if all radio button groups have been specified
  
    for(let i=0; i < radioButtonGroups.length; i++) {

        const groupCheck = document.getElementsByName(radioButtonGroups[i]);
        console.log(groupCheck[0].checked); 
        for(z=0; z <groupCheck.length; z++)
        {
            if (groupCheck[z].checked){
                value = groupCheck[z].value.trim(); 
                warningEl.textContent = ""; 
                return; 
            }
            else {
                warningEl.textContent = `Please select a value for ${radioButtonGroups[i]}`;
            }
        }
    }

}

const calCalcBtnHandler = function(event) {
    validateForm(event.target.form);
}



calCalcBtnEl.addEventListener("click", calCalcBtnHandler);