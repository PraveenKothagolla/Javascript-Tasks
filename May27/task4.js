/*Create a class called Car with properties make, model, and year.
 Add a method called toString that returns a string representation of the car.*/

 class car{
    constructor(brand,model,year)
    {
       this.brand=brand
       this.model=model
       this.year=year
    }

    toString()
    {
        console.log(`${this.brand}:${this.model}:${this.year}`)
    }
 }

 let isuzu=new car("ISUZU","D-MAX",2024)
 isuzu.toString()