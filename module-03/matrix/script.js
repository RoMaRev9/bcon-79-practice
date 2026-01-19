// Task 1

const out1 = document.querySelector(".out-1");
const btn1 = document.querySelector(".b-1");
btn1.onclick = fn1;
function fn1() {
  //
  let result = "";

  // Зовнішній цикл відповідає за 3 повторення блоків
  for (let i = 0; i < 3; i++) {
    // Внутрішній цикл малює зірочки (від 0 до 3, тобто 3 ітерації)
    for (let j = 0; j < 3; j++) {
      result += "*";
    }

    // Зовнішній цикл додає підкреслення після зірочок
    result += "_";
  }
  out1.innerHTML = result;
}
// Task 2
const out2 = document.querySelector(".out-2");
const btn2 = document.querySelector(".b-2");
btn2.onclick = fn2;
function fn2() {
  let result = "";
  for (let i = 1; i <= 3; i++) {
    result += i + "<br />";
    for (let j = 0; j < 3; j++) {
      result += "*_";
    }
    result += "<br />";
  }
  out2.innerHTML = result;
}
// Task 3
const out3 = document.querySelector(".out-3");
const btn3 = document.querySelector(".b-3");
btn3.onclick = fn3;
function fn3() {
  let result = "";
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      result += "*_";
    }
    result += "<br />";
  }
  out3.innerHTML = result;
}
// Task 4
const out4 = document.querySelector(".out-4");
const btn4 = document.querySelector(".b-4");
btn4.onclick = fn4;
function fn4() {
  let sum = "";
  for (let i = 1; i < 4; i++) {
    sum += ` ${i}_ `;
    // sum += i + `_ `;
    for (let j = 1; j < 5; j++) {
      sum += ` ${j}*`;
      // sum += j + `*`;
    }
  }
  out4.innerHTML = sum;
}
// Task 5
const out5 = document.querySelector(".out-5");
const btn5 = document.querySelector(".b-5");
btn5.onclick = fn5;
function fn5() {
  let result = "";
  for (let i = 0; i < 3; i++) {
    result += "<br />";
    for (let j = 0; j < 6; j++) {
      if (j % 2 === 0) {
        result += "1";
      } else {
        result += "0";
      }
    }
    result += "<br />";
  }
  out5.innerHTML = result;
}
// Task 6
const btn6 = document.querySelector(".b-6");
const out6 = document.querySelector(".out-6");
btn6.onclick = fn6;
function fn6() {
  let result = "";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 1; j++) {
      result += `10x01x`;
    }
    result += "<br />";
  }
  out6.innerHTML = result;
}

// Task 7
const btn7 = document.querySelector(".b-7");
const out7 = document.querySelector(".out-7");
btn7.onclick = fn7;
function fn7() {
  let result = "";
  for (let i = 1; i < 5; i++) {
    for (let j = 1; j <= i; j++) {
      result += `*`;
    }
    result += "<br />";
  }
  out7.innerHTML = result;
}

// Task 8
const btn8 = document.querySelector(".b-8");
const out8 = document.querySelector(".out-8");
btn8.onclick = fn8;
function fn8() {
  let result = "";
  for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      result += `*`;
    }
    result += "<br />";
  }
  out8.innerHTML = result;
}
// Task 9
const btn9 = document.querySelector(".b-9");
const out9 = document.querySelector(".out-9");
btn9.onclick = fn9;
function fn9() {
  let result = "";
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      result += `${j}_`;
    }
    result += "<br />";
  }
  out9.innerHTML = result;
}
// Task 10
const btn10 = document.querySelector(".b-10");
const out10 = document.querySelector(".out-10");
btn10.onclick = fn10;
function fn10() {
  let result = "";
  let counter = 1;
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
      let formattedNumber = String(counter).padStart(2, "0");
      result += formattedNumber + "_";
      counter++;
    }
    result += "<br />";
  }
  out10.innerHTML = result;
}
