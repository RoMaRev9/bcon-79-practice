// Task 1
const btn1 = document.querySelector(".b-1");
const out1 = document.querySelector(".out-1");
btn1.onclick = fn1;
function fn1() {
  console.log("🚀 ~ fn1 ~ fn1:", fn1);
  let result = "";
  for (let i = 1; i <= 50; i++) {
    result += i + "_";
  }
  out1.textContent = result;
}
// Task 2
const btn2 = document.querySelector(".b-2");
const out2 = document.querySelector(".out-2");
btn2.onclick = fn2;
function fn2() {
  let result = "";
  for (let i = 2; i <= 46; i += 2) {
    result += i + "_";
  }
  out2.textContent = result;
}

// Task 3

// Task 4

// Task 5

// Task 6

// Task 7

// Task 8

// Task 9

// Task 10

// Task 11

// Task 12

// Task 13

// Task 14

// Task 15
