const User = require('./lib/User');

// const craig = new User('Craig', 'male', 208, 14, 74, 25, 'sedentary', 6, 'intermediate', 'lose fat'); 

// console.log(craig.getTargetCals());

// console.log(craig.getMacros()); 

// console.log(craig.getMaintCals());

const ashis = new User('Ashis', 'male', 150, 12, 66, 25, 'lightly active', 6, 'intermediate', 'lose fat');

const ashisTarget = ashis.getTargetCals();

console.log(ashis.getMacros(ashisTarget, 1.2, 20));

const amelia = new User('Amelia', 'female', 152, 23, 69, 25, 'sedentary', 5, 'beginner', 'lose fat'); 

//console.log(amelia.getTargetCals(), amelia.getMacros(), amelia.getMaintCals()); 