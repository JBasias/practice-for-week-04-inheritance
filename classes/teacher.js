const Person = require('./person');

class Teacher extends Person{

  constructor(firstName, lastName, age, yearsOfExperience, subject) {
    super(firstName, lastName, age);
    this.yearsOfExperience = yearsOfExperience; // This line is moved after calling super()
    this.subject = subject;
  }

  static combinedYearsOfExperience(Teach)
  {
     let ret=0;
     Teach.forEach(ele => {
      ret += ele.yearsOfExperience;
     });

     return(ret);

  }

}


// Your code here

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
