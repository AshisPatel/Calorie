const { test, expect } = require('@jest/globals');
const User = require('../lib/User');

test('creates a user object', () => {
    const user = new User('Ashis', 'male', 150, 15, 66, 25, 'lightly active', 6, 'intermediate','cut');

    expect(user.name).toEqual(expect.any(String));
    expect(user.gender).toEqual(expect.any(String));
    expect(user.weight).toEqual(expect.any(Number)); 
    expect(user.bodyFat).toEqual(expect.any(Number));
    expect(user.height).toEqual(expect.any(Number));
    expect(user.age).toEqual(expect.any(Number)); 
    expect(user.activity).toEqual(expect.any(String));
    expect(user.frequency).toEqual(expect.any(Number));
    expect(user.experience).toEqual(expect.any(String)); 
    expect(user.goal).toEqual(expect.any(String));
    
});

test("calculates users BMR", () => {
    const user = new User('Ashis', 'male', 150, 15, 66, 25, 'lightly active', 6, 'intermediate','cut');
    const userF = new User('Angela', 'female', 150, 15, 66, 25, 'lightly active', 6, 'intermediate','cut');

    expect(user.getBMR()).toBe(1608); 
    expect(userF.getBMR()).toBe(1442);   
});

test('calculates users maintenance calories', () => {
    const user = new User('Ashis', 'male', 150, 15, 66, 25, 'lightly active', 6, 'intermediate','cut');

    expect(user.getMaintCals()).toBe(2894); 
});

test('calculates users target calories', () => {
    const user = new User('Ashis', 'male', 150, 15, 66, 25, 'lightly active', 6, 'intermediate','lose fat');
   

    expect(user.getTargetCals()).toBe(2315);
});

test('calculates user macro breakdown', () => {
    const user = new User('Ashis', 'male', 150, 15, 66, 25, 'lightly active', 6, 'intermediate','lose fat');

    expect(user.getMacros().protein).toBe(191);
    expect(user.getMacros().fat).toBe(51);
    expect(user.getMacros().carbs).toBe(273);  
})