const User = require('./lib/User');

const craig = new User('Craig', 'male', 208, 14, 74, 25, 'sedentary', 6, 'intermediate', 'lose fat'); 

console.log(craig.getTargetCals());

console.log(craig.getMacros()); 

console.log(craig.getMaintCals());