const calCalcBtnEl = document.querySelector("#cal-calc-btn");
const userInfo = {heightFeet: "", heightInches: "", weight: "", age: "", gender: "", maintCals: ""};

const saveUserInfo = function() {
    localStorage.setItem('userInfo', JSON.stringify(userInfo)); 
}


const calculateMaintCals = function(user) {
    const maintCalsSpanEl = document.querySelector("#maint-cals");
    maintCalsSpanEl.textContent = ""; 
    // Check gender to determine which version of the Mifflin-St Jeor Equation to use
    console.log(userInfo); 
    if (user.gender === "m") {
        user.maintCals = 4.536*(parseInt(user.weight)) + 15.88*(12*(parseInt(userInfo.heightFeet)) + parseInt(userInfo.heightInches)) - 5*(parseInt(user.age)) + 5; 
      
    }

    if (user.gender === "f") {
        user.maintCals = 4.536*(parseInt(user.weight)) + 15.88*(12*(parseInt(userInfo.heightFeet)) + parseInt(userInfo.heightInches)) - 5*(parseInt(user.age)) - 161; 
    }
    maintCalsSpanEl.textContent = user.maintCals; 
    saveUserInfo(); 
}

const validateForm = function(form) {
    const inputs = form.elements; 
    const warningEl = form.querySelector(".warning");
    const radioButtonGroups = [];
    warningEl.textContent = ""; 
    console.log(inputs); 
    for(let i=0; i< inputs.length; i++) {
        // Check to make sure all number inputs have been filled out
        if(inputs[i].type==="number" && inputs[i].value === "") {
            warningEl.textContent = `Please enter a value for your ${inputs[i].name}`;
            return; 
        }
        // Check to see if there are any groups of radio buttons on the specific form 
        if (inputs[i].type==="radio" && !radioButtonGroups.includes(inputs[i].name)) {
            radioButtonGroups.push(inputs[i].name); 
        }   

        // Collect user-input data to store in object from NON-RADIO BUTTONS
        if(inputs[i].name in userInfo && inputs[i].type != "radio") {
            userInfo[inputs[i].name] = inputs[i].value.trim(); 
            saveUserInfo(); 
        }

    }

    

    // Check to see if all radio button groups have been specified
  
    for(let i=0; i < radioButtonGroups.length; i++) {
        const groupCheck = document.getElementsByName(radioButtonGroups[i]);
        for(z=0; z <groupCheck.length; z++)
        {
            if (groupCheck[z].checked){
                warningEl.textContent = ""; 
                // Check to see if RADIO BUTTON has to do with a userInfo and store it if it does
                if(groupCheck[z].name in userInfo) {
                    userInfo[groupCheck[z].name] = groupCheck[z].value.trim(); 
                    saveUserInfo(); 
                }
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
    calculateMaintCals(userInfo); 
}



calCalcBtnEl.addEventListener("click", calCalcBtnHandler);