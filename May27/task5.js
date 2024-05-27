/*5. Create a class called Student with properties name, grade, and gpa.
 Add a method called passes that returns a boolean indicating whether the student has passed (GPA > 2.0).
 */

 class student{
    constructor(name,grade,gpa)
    {
        this.name=name
        this.grade=grade
        this.gpa=gpa
    }
     passes()
     {
        return this.gpa>2.0}
                   
            
    
 }

 let praveen=new student("praveen","A",9.7)
 console.log(praveen.passes())