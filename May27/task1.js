/*class classroom{
    constructor(a,b)
    {
        (this.name=a),
        (this.batch=b)
    }
}


const details=new classroom("praveen","5r")
const details1=new classroom("vijay","5r")
console.log(details)
console.log(details1)*/



class rectangle{
    constructor(height,width)
    {
        this.width=width
        this.height=height
    }

  area()
    {
      return (this.height)*(this.width)
        
    }

    
}
const  rect= new rectangle(10,20)
console.log(rect.area())