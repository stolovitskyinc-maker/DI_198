function displayStudentInfo(objUser){
    const { first, last } = objUser;

    return `Your full name is ${first} ${last}`;
}

const result = displayStudentInfo({first: 'Elie', last:'Schoppik'});
console.log(result); 
// Output: 'Your full name is Elie Schoppik'
