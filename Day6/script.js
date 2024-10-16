//MAP
// let arr=[1,2,23,3,3,3,33,1];
// let newary=arr.map((x) => x * 2);
// console.log(newary);
//Filter
// let even =arr.filter((x) => x % 2 == 0);
// console.log(even);

//Reduce

// let sum = arr.reduce((x,y) => x+y, 0);
// console.log(sum);
let arr=[1,2,3,4,5,60];
let sumOfEvenNo =arr
.filter(num => num%2 == 0)
.reduce((sum,num)=> sum +num,0);
console.log(sumOfEvenNo);
