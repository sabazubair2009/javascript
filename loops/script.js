// ==FOR LOOP==
for (let a = 1; a < 10; a++) {
  console.log("Saba");
}
// console.count is used to count how many times a particular function has been executed
for (let a = 1; a < 10; a++) {
  console.count("Saba");
}
// Calculating the sum
let num = 0;
for (let i = 1; i <= 5; i++) {
  num = num + i;
  //the loop is working like this 0+1+2+3+4+5= 15
}
console.log("num =", num);

// ==WHILE LOOP==
// initialization
let i = 1;
// condition
while (i <= 6) {
  console.log("i=", i);
  // updation
  i++;
}

// ==DO_WHILE LOOP==
let i=15;
do{
  console.log("loops");
  i++;
}while (i<=8);
// Do-while loop runs atleast one time even if the condition is not true.