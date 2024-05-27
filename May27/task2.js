/*2. Create a class called Person with properties name and age.
 Add a method called greet that returns a greeting message.*/


 class person{
    constructor(name,age)
    {
        this.name=name
        this.age=age
    }
    greet()
    {
        console.log(`Hi ${this.name},Good evening`)
    }
 }
 
 let praveen= new person("praveen",23)
 praveen.greet()