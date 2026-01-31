// Task 01
const btn1 = document.querySelector(".b-1");
const out1 = document.querySelector(".out-1");
btn1.onclick = fn1;
function fn1() {
  out1.textContent = 1;
}

// Task 02
const out2 = document.querySelector(".out-2");
const btn2 = document.querySelector(".b-2");
btn2.onclick = fn2;
function fn2() {
  out2.textContent = 2;
}

// Task 03
const out3 = document.querySelector(".out-3");
const btn3 = document.querySelector(".b-3");
btn3.onclick = fn3;
function fn3() {
  out3.textContent = 3;
}
// Task 04
const out4 = document.querySelector(".out-4");
const input4 = document.querySelector(".i-4");

const btn4 = document.querySelector(".b-4");
btn4.onclick = fn4;
function fn4() {
  // Властивість .checked повертає true або false автоматично
  out4.textContent = input4.checked;
}
// Task 05
const out5 = document.querySelector(".out-5");
const input5 = document.querySelector(".i-5");
const btn5 = document.querySelector(".b-5");
btn5.onclick = fn5;
function fn5() {
  out5.textContent = input5.checked ? input5.value : false;
}
// Task 06
const btn6 = document.querySelector("button.b-6");
const input6 = document.querySelector("input.i-6");
const out6 = document.querySelector("div.out-6");

btn6.onclick = () => {
  out6.textContent = input6.value;
};
// Task 07
const btn7 = document.querySelector("button.b-7");
const input7 = document.querySelector("input.i-7");
const out71 = document.querySelector("div.out-71");
const out72 = document.querySelector("div.out-72");
const fn7 = () => {
  out71.textContent = input7.value;
  if (input7.value.length >= 6) {
    out72.textContent = 1;
  } else {
    out72.textContent = 0;
  }
};
btn7.onclick = fn7;

// Task 08
const out8 = document.querySelector(".out-8");
const btn8 = document.querySelector(".b-8");
function fn8() {
  out8.innerHTML = '<div class="js2">new div</div>';
}

btn8.onclick = fn8;
// Task 09
const btn9 = document.querySelector(".b-9");
const out9 = document.querySelector(".out-9");
const radio9 = document.querySelector(".r-9");

function fn9() {
  if (radio9.checked) {
    out9.textContent = radio9.value;
  } else {
    out9.textContent = false;
  }
}

btn9.onclick = fn9;
// Task 10
const btn10 = document.querySelector(".b-10");
const input10 = document.querySelector(".i-10");
const out10 = document.querySelector(".out-10");
btn10.onclick = fn10;
function fn10() {
  const color = input10.value;
  out10.style.background = color;
}

// Task 11
const b11 = document.querySelector(".b-11");
const i111 = document.querySelector(".i-111");
const i112 = document.querySelector(".i-112");
b11.onclick = fn11;
function fn11() {
  i112.value = i111.value;
}

// Task 12

// const b12 = document.querySelector(".b-12");
// const i12 = document.querySelector(".i-12");
// const out12 = document.querySelector(".out-12");
// b12.onclick = fn12;
// function fn12() {
//   const data.value = i12.value;
// out12.innerHTML = data.value;
// }
function f12() {
  // Отримуємо значення дати з інпуту .i-12
  const dateValue = document.querySelector(".i-12").value;

  // Виводимо значення у блок .out-12
  document.querySelector(".out-12").innerHTML = dateValue;
}

// Призначаємо обробник події на кнопку .b-12
document.querySelector(".b-12").onclick = f12;
// Task 13
const slider = document.querySelector(".i-13");
const output = document.querySelector(".out-13");

slider.oninput = () => {
  output.textContent = slider.value;
};
// Task 14
document.querySelector(".b-14").onclick = () => {
  const text = document.querySelector(".t-14").value;
  document.querySelector(".out-14").textContent = text;
};
// Task 15
const btn15 = document.querySelector(".b-15");
const input15 = document.querySelector(".i-15");
const textarea15 = document.querySelector(".t-15");
const out15 = document.querySelector(".out-15");
btn15.onclick = fn15;
function fn15() {
  let inputValue = input15.value;
  textarea15.value = inputValue;
  out15.innerHTML = inputValue;
}
// Task 16
const btn16 = document.querySelector(".b-16");
const input16 = document.querySelector(".s-16");
const out16 = document.querySelector(".out-16");
btn16.onclick = fn16;
function fn16() {
  let inputValue = input16.value;
  out16.innerHTML = inputValue;
}
// Task 17
const btn17 = document.querySelector(".b-17");
const input17 = document.querySelector(".s-17");
const out17 = document.querySelector(".out-17");
btn17.onclick = fn17;
function fn17() {
  let inputValue = input17.value;
  out17.innerHTML = inputValue;
}
// Task 18

const is18 = document.querySelector(".s-18");
const ii18 = document.querySelector(".i-18");
is18.onchange = fn18;
function fn18() {
  ii18.value = is18.value;
  // ii18.innerHTML = ii18.value;
}
// Task 19
const btn19 = document.querySelector(".b-19");
const input19 = document.querySelector(".i-19");
const out19 = document.querySelector(".out-19");
btn19.onclick = fn19;
function fn19() {
  input19.value = out19.textContent;
  // out19.innerHTML = inputValue;
}
// Task 20
const is201 = document.querySelector(".s-201");
const is202 = document.querySelector(".s-202");
is201.onchange = fn20;
function fn20() {
  is202.value = is201.value;
}
