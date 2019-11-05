const res= [1,2,3,4].map(x=>[x,x*2])
console.log(res)//pecati u format edno pod drugo


const res= [1,2,3,4].flatMap(x=>[x,x*2])
console.log(res)//pecati u format edno do drugo