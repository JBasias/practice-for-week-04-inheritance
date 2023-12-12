const Person = require('./person');

// Your code here

class Student extends Person{

  constructor(firstName, lastName, age, GPA, major) {
    super(firstName, lastName, age);
    this.GPA = GPA;
    this.major = major; // This line is moved after calling super()
  }

  static compareGPA(S1, S2)
  {
    //console.log(S1.major);
    if(S1.GPA === S2.GPA)
    {
          console.log("Both students have the same GPA.");
    }
    else if(S1.GPA > S2.GPA)
    {
      console.log(` ${S1.firstName} ${S1.lastName} has the higher GPA.`);
    }
    else
    {
      console.log(` ${S2.firstName} ${S2.lastName} has the higher GPA.`);
    }
  }

}


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
