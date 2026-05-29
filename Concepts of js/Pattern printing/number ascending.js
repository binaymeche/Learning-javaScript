// Pattern to print

//1
/*
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
*/


for(let i = 1; i <= 5; i++) {
  let row = "";
  for(let j = 1; j <= i; j++){
    row += `${i} `;
  }
  // console.log(row);
}


//2
/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

for(let i = 1; i<= 5; i++) {
  let row = "";
  for(let j = 1; j<= i; j++){
    row += j + " ";
  }
  // console.log(row)
}


//3
/*
5
5 4
5 4 3
5 4 3 2
5 4 3 2 1
*/

for (let i = 5; i >= 1; i--) {
  let row = "";
  for (let j = 5; j>=i; j--) {
    row += j + " ";
  }
  // console.log(row)
}



//4
/*
    *
   * *
  * * *
 * * * *
* * * * *
*/

for (let i = 1; i <= 5; i++) {
  let row = "";
 
  for(let s = 1; s <= 5 - i; s++){
    row += " "
  }

  for (let j = 1; j <=i; j++) {
    row += "* ";
  }
  console.log(row)
}