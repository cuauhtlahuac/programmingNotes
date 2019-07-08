// Lower case count in string

let vowelsCount = 0;
let vowels = ["a","e", "i", "o"," u"];

let str = "Today is the best day of my life";
let strObj = new String('Im an Object');
console.log(strObj)
// write code here
console.log(vowels.indexOf("i"))
//console.log(vowels.include("o"))
for(let i = 0;i < str.length;i++){
	if(vowels.indexOf(str[i]) >=0)  { vowelsCount++;}
}
console.log(vowels.includes("a"))
for( let char of str){
   if(vowels.includes(char)){
   	vowelsCount++
   }
}

console.log('total:' + vowelsCount)
