// Task-1
const ar1 = [1, " ", true];
const btn1 = document.querySelector(".b-1");
const out1 = document.querySelector(".out-1");
// document.querySelector(".b-1").onclick = function () {
//   document.querySelector(".out-1").textContent = ar1;
// };
btn1.onclick = fn1;
function fn1() {
  out1.textContent = ar1;
}
// Task-2
const btn2 = document.querySelector(".b-2");
const ar2 = ["random", true, 2, 15, -5];
btn2.onclick = fn2;
function fn2() {
const out2 = document.querySelector(".out-2");
out2.textContent = `[${ar1}]`;

}


const btn2 = document.querySelector(".b-2");
const ar2 = ["random", true, 2, 15, -5];

btn2.onclick = fn2;

function fn2() {
  const out2 = document.querySelector(".out-2");
  let result = "";
  for (const item of ar2) {
    result += `${item}`;
  }
  out2.textContent = result;
}

// Task-3
const btn3 = document.querySelector(".b-3");
const ar3 = ["random", true, 2, 15, -5];

btn3.onclick = fn3;

function fn3() {
const out3 = document.querySelector(".out-3");

out3.textContent = ar3.length;
}

const btn3 = document.querySelector(".b-3");
const ar3 = ["random", true, 2, 15, -5];

btn3.onclick = fn3;

function fn3() {
  const out3 = document.querySelector(".out-3");

  out3.textContent = ar3.length;
}

// Task-4
const btn4 = document.querySelector(".b-4");
const ar4 = Array.from(Array(10).keys(), x => x + 1);
// the same as Array.from(Array(10).keys(), x => x + 1);      const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

btn4.onclick = fn4;

function fn4() {
const out4 = document.querySelector(".out-4");

out4.textContent = `${ar4[0]} ${ar4[3]} ${ar4[8]}`;
}


const btn4 = document.querySelector(".b-4");
const ar4 = Array.from(Array(10).keys(), x => x + 1);

btn4.onclick = fn4;

function fn4() {
  const out4 = document.querySelector(".out-4");
  
  out4.textContent = `${ar4[0]}${ar4[3]}${ar4[8]}`;
}

// Task-5
const btn5 = document.querySelector(".b-5");
const ar5 = Array.from(Array(10).keys(), x => (x + 1)*10);

btn5.onclick = fn5;

function fn5() {
const out5 = document.querySelector(".out-5");

out5.textContent = `${ar5[0]} ${ar5[2]} ${ar5[3]}`;
}



const btn5 = document.querySelector(".b-5");
const ar5 = Array.from(Array(10).keys(), x => (x + 1) * 10);

btn5.onclick = fn5;

function fn5() {
  const out5 = document.querySelector(".out-5");
  
  out5.textContent = ar5[0] + ar5[2] + ar5[3];
}


// Task-6

const btn6 = document.querySelector(".b-6");
const ar6 = ["Olexy", "Teresy", "Monday", "April"];

btn6.onclick = fn6;

function fn6() {
const out6 = document.querySelector(".out-6");
let result = "";
// for (const item of ar6) {
// let result += item + "";
// }

 out6.textContent = ar6.join(" ");
}
// Task-7 задача прописати через цикл for( of )
const btn7 = document.querySelector(".b-7");
const ar7 = [];

btn7.onclick = f7;

function f7() {
const out7 = document.querySelector(".out-7");
let result = "";
ar7[7] = "vietnam";
ar7[6] = "turkey";
ar7[5] = "italy"

for (const item of ar7) {
  result += item + " ";
}
out7.textContent = result;
}  //видаватиме  indefined на перші 4 елементи. Слід прописати цикл тільки для 5-7 елемент без  of

// Task-8 
// const btn8 = document.querySelector(".b-8");
// const arr8 = [];

// btn8.onclick = fn8;

// function fn8() {
// const out8 = document.querySelector(".out-8");
// const out81 = document.querySelector(".out-8-1");
// let result = "";
// TO FINISH-no screen
// arr7[3] = "";
// arr7[4] = "";
// arr7[5] = ""

// for (const item of arr7) {
//   result += item + "";
// }
// out7.textContent = result;
// }

const btn8 = document.querySelector(".b-8");
const ar8 = [];

btn8.onclick = fn8;

function fn8() {
  const out8 = document.querySelector(".out-8");
  const out81 = document.querySelector(".out-8-1");
  
  let result = "";
  ar8[3] = 3.14;
  ar8[4] = 17;
  ar8[6] = 5;

  for (const item of ar8) {
    result += `${item}-`;
  }
out8.textContent = result;
out81.textContent = ar8.length;
}

// Task-9


const btn9 = document.querySelector(".b-9");
const ar9 = document.querySelector(".out-9");
const out9 = document.querySelector(".out-9");

// const arr8 = [];

// btn8.onclick = fn8;

 function fn9() {
const last
// }
// Task-10



function f10() {
  const lastI = ar10.length - 1;
  const out11 = document.querySelector
}
// Task-11

const ar11 = [2, 3, 4, 5, 6, 7];
const btn11 = document.querySelector(".b-11");
const out11 = document.querySelector(".out-11");

btn12.onclick = f11;


function f11() {
  
}
// Task-12

const ar12 = ["test", "west", "list", "class", "best"];
const btn12 = document.querySelector(".b-12");
const out12 = document.querySelector(".out-12");

btn12.onclick = f12;


function f12() {

let result = "";

const firstEl = ar12.at(0);
const lastEl = ar12.at(-1);
ar12[0] = lastEl;
ar12[ar12.length - 1] = firstEl;




// const a1 = ar12[0];
// const lastI = ar12.length - 1;
// ar12[0] = lastI;
// ar12[lastI] = a1;

for (let i = 0; i < ar12.length; i++) {
  result += ar12[i] + " ";
  
}
out12.textContent = result;
}

// Task-13
const ar13 = ["test", "west", "list", "class", "best"];
const btn13 = document.querySelector(".b-13");
const out13 = document.querySelector(".out-13");

btn13.onclick = f13;

function f13() {

  let result = "";
  for (let i = 0; i < ar13.length; i++) {
    result += i + " " + ar13[i] + " ";

    
  }

out13.textContent = result;
}

// Task-14

const ar14 = ["test", "west", "list", "class", "best"];
const btn14 = document.querySelector(".b-14");
const out14 = document.querySelector(".out-14");

btn14.onclick = f14;

function f14() {

  let result = "";
  for (let i = ar14.length - 1; i >= 0; i--) {
    result += ar14[i] + " ";

    
  }

out14.textContent = result;
}


// Task-15

const ar15 = ["test", "west", "list", "class", "best"];
const btn15 = document.querySelector(".b-15");
const out15 = document.querySelector(".out-15");

btn14.onclick = f15;

function f15() {

  let result = "";
  for (let i = 0; i < ar15.length; i++) {
    if (ar15[i] > 0) {
      result += ar15[i] + " ";
    }
  }

out15.textContent = result;
}

// Task-16

const ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
const btn16 = document.querySelector(".b-16");
const out161 = document.querySelector(".out-16-odd");
const out162 = document.querySelector(".out-16-even");

btn16.onclick = f16;

function f16() {
  let ar16_odd = [];
  let ar16_even = [];

// ar16_even[3] = 222 reminde
let oddCounter = 0;
let evenCounter = 0;

  for (let i = 0; i < ar16.length; i++) {

    if (ar16[i] % 2 === 0) {
      ar16_even[evenCounter] = ar16[i];
      evenCounter += 1; //++
    //2 ------   ar16_even.push(ar16[i]);
    } else {
      ar16_odd[oddCounter] = ar16[i];
      oddCounter += 1;
    // 2------  ar16_odd.push(ar16[i]);
    // }
   
  }

// 2-----out161.textContent = ar16_even;
// 2------out162.textContent = ar16_odd;
}

// Task-17

const ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0]];
const btn17 = document.querySelector(".b-17");
const out17 = document.querySelector(".out-17");

btn17.onclick = f17;

function f17() {

  // 2 -------  let counter = 0;
  let filteredar17 = [];
  for (let i = 0; i < ar17.length; i++) {
    if (ar17[i] > 3) {
      // counter++ 
      filteredar17.push(ar17[i]);
    }
  }

// out17.textContent = counter;
out17.textContent = filteredar17.length;
}
// 3     17.filter(n => n > 3).length

// Task-18

// Task-19

// Task-20
