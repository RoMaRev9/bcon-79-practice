// 1
const a = 7;
const b = 9;
const result1 = a * b;
console.log("🚀 ~ result1:", result1);
// 2

const c = 7;
const d = 9;
const out2 = document.querySelector(".out-2");
console.log("🚀 ~ out2:", out2);
out2.textContent = c / d;
// 3
const e = 3;
const f = 5;
const out3 = document.querySelector(".out-3");
console.log("🚀 ~ out3:", out3);
out3.textContent = e + f;
// 4
const el = "3";
const f1 = 5;
const out4 = document.querySelector(".out-4");
console.log("🚀 ~ out4:", out4);
out4.textContent = el + f1;
// 5
const e2 = 3;
const f2 = 0;
const out5 = document.querySelector(".out-5");
console.log("🚀 ~ out5:", out5);
out5.textContent = e2 / f2;
// 6
const e3 = 3;
const f3 = "Hello";
const out6 = document.querySelector(".out-6");
console.log("🚀 ~ out6:", out6);
out6.textContent = e3 + f3;
// 7
const e4 = 3;
const f4 = "Hello";
const out7 = document.querySelector(".out-7");
console.log("🚀 ~ out7:", out7);
out7.textContent = e4 * f4;
// 8

const btn8 = document.querySelector(".b-8");
const input8 = document.querySelector(".i-8");
const out8 = document.querySelector(".out-8");
btn8.onclick = fn8;
function fn8() {
  const userInput = input8.value;
  out8.textContent = userInput;
  // input8.value = "";
}
// 9
const btn9 = document.querySelector(".b-9");
const input9 = document.querySelector(".i-9");
const out9 = document.querySelector(".out-9");
btn9.onclick = t9;

function t9() {
  const userInput9 = input9.value;
  out9.textContent = userInput9;
  input9.value = "";
  // очищення input після натискання кнопки
}
// 10
const btn10 = document.querySelector(".b-10");
const input10 = document.querySelector(".i-10");
const out10 = document.querySelector(".out-10");
btn10.onclick = t10;
function t10() {
  const userInput10 = input10.value;
  out10.textContent = userInput10 * 20;
}
// 11
const btn11 = document.querySelector(".b-11");
const input11 = document.querySelector(".i-11");
const out11 = document.querySelector(".out-11");
btn11.onclick = t11;
function t11() {
  userInput11 = input11.value;
  out11.textContent = userInput11 + 55;
}
// 12
const input121 = document.querySelector(".i-12-1");
const input122 = document.querySelector(".i-12-2");
const btn12 = document.querySelector(".b-12");
const out12 = document.querySelector(".out-12");
btn12.onclick = fn12;
function fn12() {
  const userinput121 = input121.value;
  const userinput122 = input122.value;
  console.log("🚀 ~ fn12 ~ userinput122:", userinput122);
  out12.textContent = `Hello ${userinput121} ${userinput122}`;
}
// 13
const input131 = document.querySelector(".i-13-1");
const input132 = document.querySelector(".i-13-2");
const btn13 = document.querySelector(".b-13");
const out13 = document.querySelector(".out-13");
btn13.onclick = fn13;
function fn13() {
  // const userInput131 = input131.value;
  let a = input131.value;
  // const userInput132 = input132.value;
  let b = input132.value;
  out13.textContent = +a + +b;
}
// 14
const input14 = document.querySelector(".i-14");
const btn14 = document.querySelector(".b-14");
btn14.onclick = fn14;
function fn14() {
  input14.value = `Go`;
}
// 15
const input15 = document.querySelector(".i-15");
const btn15 = document.querySelector(".b-15");
btn15.onclick = fn15;
function fn15() {
  input15.style.border = "4px solid red";
}

// 16
// const input161 = document.querySelector(".i-16-1");
// const input162 = document.querySelector(".i-16-2");
// const btn16 = document.querySelector(".b-16");
// const out16 = document.querySelector(".out-16");
// btn16.onclick = fn16;
// function fn16() {
//   const userInput161 = input161.velue;
//   const userInput162 = input162.velue;
//   // out16.innerHTML = input161 + input162;
//   out16.innerHTML = userInput161 + userInput162;
// }
function t16() {
  // Получаем значения из инпутов
  const val1 = document.querySelector(".i-16-1").value;
  const val2 = document.querySelector(".i-16-2").value;

  // Выводим результат в .out-16
  // Поскольку мы не переводим в числа, оператор + выполнит конкатенацию строк
  document.querySelector(".out-16").innerHTML = val1 + val2;
}

// Слушатель события для кнопки
document.querySelector(".b-16").onclick = t16;

//  17
const input17 = document.querySelector(".i-17");
const out171 = document.querySelector(".out-17-1");
const out172 = document.querySelector(".out-17-2");
const out173 = document.querySelector(".out-17-3");
const btn17 = document.querySelector(".b-17");
btn17.onclick = fn17;
function fn17() {
  let userinput17 = input17.value;
  console.log("🚀 ~ fn17 ~ userinput17:", userinput17);
  // console.log("🚀 ~ fn17 ~ userinput17:", userinput17);
  out171.innerHTML = Number.parseFloat(userinput17);
  out172.innerHTML = parseInt(userinput17);
  out173.innerHTML = parseFloat(userinput17);
}
// let data = document.querySelector('.i-17').value;

//     document.querySelector('.out-17-1').innerHTML = parseInt(data);
//     document.querySelector('.out-17-2').innerHTML = parseFloat(data);
//     document.querySelector('.out-17-3').innerHTML = +data; =

// task 18
const btn18 = document.querySelector(".b-18");
const input18 = document.querySelector(".i-18");
const out18 = document.querySelector(".out-18");
btn18.onclick = f18;
function f18() {
  const a = Number.parseFloat(input18.value);
  out18.textContent = parseFloat(a);
  input18.value = "";
}

// task 19
const input191 = document.querySelector(".i-19-1");
const input192 = document.querySelector(".i-19-2");
const btn19 = document.querySelector(".b-19");
const out191 = document.querySelector(".out-19");
console.log("🚀 ~ out191:", out191);
btn19.onclick = fn19;
function fn19() {
  // const userInput131 = input131.value;
  // let a = input191.value;
  // const userInput132 = input132.value;
  // let b = input192.value;
  out191.textContent =
    Number.parseInt(input191.value) + Number.parseInt(input192.value);
  input191.value = "";
  input192.value = "";
}

// Task 20
// 1. Отримуємо елементи
const btn20 = document.querySelector(".b-20");
const out20 = document.querySelector(".out-20");
btn20.onclick = fn20;
// 2. Створюємо змінну-лічильник
let count = 0;

// 3. Функція для обробки кліку
function fn20() {
  count = count + 1; // Збільшуємо на 1
  out20.textContent = count; // Виводимо в блок
}
