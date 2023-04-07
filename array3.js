// Write a function that accepts an array of strings and console.logs each element using a for loop.
function numbers(num){
for(let r=0; r<num.length;r++){
  
   console.log(num[r]);
   }
}
   let num=["pineapple","orange","watermelon"];
   numbers(num)
// Write a function that accepts an array of numbers and uses the forEach() method to console.
// log each number multiplied by 2.

const number = [2,4,6,8,10,12];
number.forEach(myFunction)

function myFunction(number, index) {
  number[index] = number * 2;
  console.log(number*2)
}


// // // Write a function that takes in an array of numbers and consoles the first 
// four items multiplied by 8 and the last two added by 5. Console the array with the new values
function arrNu(loop){
for (i =0; i <4; i++){
   loop[i] *=8
 }
 for(let i=loop.length -2;i<loop.length ; i++) {
   loop[i] +=5
 }
 console.log(loop)
}
let loop=[20,30,78,98,90,78]
arrNu(loop)


// // Write a function that takes in the following array and use a while loop to 
// iterate and break when the item is equal to the fourth index
function numm(){
let z=0;
while(z<arrNum.length){   

if(z===4){
   break;
}
console.log(arrNum[z])
z++
}
}
let arrNum = [1,2,3,4,5,6,7,8,9];
numm(arrNum)
// // // Write a function that takes in a an array of strings and use a continue statement 
// when the item is at the second index
 function types(fruits){
   for(let p=0; p<num.length;p++){
      if(p===1){
       continue;
      }
      console.log("continue",fruits[p]);
      p++
   }
 }
let fruits= ['apple','plum','banana','strawberries','kiwi']
types(fruits)