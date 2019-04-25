
// 1
const add = function (num1)
{
   var res = 0;

  for (var i = 1; i <= num1; i++) {
    res = res + i;
  } 

  return res;
}

console.log(add(3) );

// 2
let num2 = 5;
for (let i = 0; i < num2; i++)
 if (i % 2 === 0)
   {
     console.log(i);
   }
else 
  console.log(i +" odd");
  


//3
const grades = [8, 2, 2, 4, ];

  const getAvg = function (grades){
  const total = grades.reduce((acc, c) => acc + c, 0);
  return total / grades.length;
}
const average = getAvg(grades);
console.log(average);

//4
const arr4 = function (num4){
    var chars = num4.split("");
    var length = chars.length;
    var half = length / 2;
    for (var a = 0; a < half; a++) {
      var temp = chars[a];
      var mirror = length - a - 1;
      chars[a] = chars[mirror];
      chars[mirror] = temp;
    }
    return chars.join("");
  }
  console.log(arr4("caterpillar"));

  //5
  const arr5 = ["omar","yousif","mohammed","ibrahim"];
  let arr = arr5.join("-");
  console.log(arr);

  //6
  const gnum = function (num6)
{
  for (let i = 1; i <= num6; i++)
    {
      console.log(i);
    }
}

console.log(gnum(6));

//7



  



