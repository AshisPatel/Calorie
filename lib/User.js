
class User {
    // user will take in 
    constructor(name, gender, weight, bodyFat, height, age, activity, frequency, experience, goal) {

        this.name = name;

        this.gender = gender;

        this.weight = weight;

        this.bodyFat = bodyFat;

        this.height = height;

        this.age = age;

        this.activity = activity;

        this.frequency = frequency;

        this.experience = experience;

        this.goal = goal;

    }

    getBMR() {
        let BMR = Math.floor(4.536 * this.weight + 15.88 * this.height - 5 * this.age);
        // Units: weight (lbs) height (inches) age (years)
        if (this.gender === 'male') {
            BMR = BMR + 5;
        }

        if (this.gender === 'female') {
            BMR = BMR - 161;
        }
        return BMR;

    }

    getMaintCals() {

        let multiplier = 1.0;

        if (this.activity === 'sedentary') {
            multiplier += 0.2;
        }

        if (this.activity === 'lightly active') {
            multiplier += 0.5;
        }

        if (this.activity === 'moderately active') {
            multiplier += 0.8;
        }

        if (this.activity === 'highly active') {
            mutliplier += 1;
        }
        // Adjust multiplier for training frequency 
        multiplier += this.frequency * 0.05;
        return Math.floor(this.getBMR() * multiplier);
    }

    getTargetCals() {

        let multiplier;

        if (this.goal === 'lose fat') {
            multiplier = 0.8; 
        }

        if (this.goal === 'build muscle') {
            if (this.experience === 'beginner') {
                multiplier = 1.25;
            }

            if (this.experience === 'intermediate') {
                multiplier = 1.175; 
            }

            if (this.experience === 'advanced') {
                multiplier = 1.125; 
            }
        }

        if (this.goal === 'lose fat & build muscle equally') {
            multiplier = 1; 
        }

        return Math.floor(this.getMaintCals()*multiplier); 

    }

    getMacros(calories, proteinRatio, fatPercent) {

        const leanBodyMass = this.weight*(1-this.bodyFat/100); 

        const proteinG = Math.floor(leanBodyMass*proteinRatio); 

        const fatG = Math.floor(calories*(fatPercent/100)/9);

        const carbsG = Math.floor((calories - 9*fatG - 4*proteinG)/4);

        const macros = {protein: proteinG, fat: fatG, carbs: carbsG};

        return macros; 
    }
}

module.exports = User;