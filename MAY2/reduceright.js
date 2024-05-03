// It is same as reduce but only change is this method iterates an array in right to left order.
let arr=[10,20,30,40,50]
let sum=arr.reduceRight((acc,v)=>{
    console.log(`For ever iteration n value ${acc}, v value${v}`)
    return acc+v;

},10)
console.log(sum);