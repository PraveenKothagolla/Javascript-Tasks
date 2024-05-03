currentdate=new Date();
var currentYear=currentdate.getFullYear();
var age=(date)=>{
   birthDate=new Date(date);
   birthYear=birthDate.getFullYear();
   console.log(currentYear-birthYear);
}
age('2000-07-03');