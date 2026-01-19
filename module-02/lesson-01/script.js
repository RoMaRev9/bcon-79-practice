// // Task 1
// // При натисканні кнопки .b-1 спрацьовує функція f1. Функція повинна прочитати вміст .i-1 і порівняти його з числом 4 (порівняння ==). Результат порівняння - true або false виведіть у .out-1.
// const btn1 = document.querySelector(".b-1");
// const input1 = document.querySelector(".i-1");
// const out1 = document.querySelector(".out-1");

// btn1.onclick = f1;

// function f1() {
//   const test = input1.value;
//   out1.textContent = test == 4;
// }

// // Task 2
// // Дані дві змінні a21 і a22. При натисканні кнопки .b-2, запускається функція f2. Функція повинна порівняти змінні за допомогою if else і вивести в .out-2 число, яке більше. Варіант рівності змінних не розглядаємо.

// let a21 = 45;
// let a22 = 32;

// const btn2 = document.querySelector(".b-2");
// const out2 = document.querySelector(".out-2");
// btn2.onclick = f2;

// function f2() {
//   if (a21 > a22) {
//     out2.textContent = a21;
//   } else {
//     out2.textContent = a22;
//   }
// }

// // Task 3
// // Дані 2 input - .i-31 і .i-32, обидва - input[type=number]. При натисканні кнопки .b-3 спрацьовує функція f3. Функція повинна порівняти числа з input, вивести в .out-3 більше число.
// // Проведіть самостійний тест роботи, введіть пари чисел 4 і 9, 9 і 22, 5 і 111.
// const btn3 = document.querySelector(".b-3");
// const input31 = document.querySelector(".i-31");
// const input32 = document.querySelector(".i-32");
// const out3 = document.querySelector(".out-3");

// btn3.onclick = f3;

// function f3() {
//   if (+input31.value > +input32.value) {
//     out3.textContent = +input31.value;
//   } else {
//     out3.textContent = +input32.value;
//   }
// }

// // Task 4.
// // Користувач вводить в .i-4 рік свого народження. Є кнопка .b-4, яка запускає функцію f4. Функція повинна вивести в .out-4 число 1, якщо користувачеві більше або дорівнює 18 років, і 0, якщо менше.
// const btn4 = document.querySelector(".b-4");
// const input4 = document.querySelector(".i-4");
// const out4 = document.querySelector(".out-4");

// btn4.onclick = f4;

// function f4() {
//   if (2026 - +input4.value >= 18) {
//     out4.textContent = 1;
//   } else {
//     out4.textContent = 0;
//   }
// }

// // Task 5.
// // На сторінці є input з класом i-5, куди користувач може ввести число. Є кнопка b-5, яка запускає функцію f5. Функція повинна вивести в .out-5 символ 'm' - якщо число менше нуля, 0 - якщо число дорівнює нулю, і число 1 - якщо більше.
// const btn5 = document.querySelector(".b-5");
// const input5 = document.querySelector(".i-5");
// const out5 = document.querySelector(".out-5");

// btn5.onclick = f5;

// function f5() {
//   if (+input5.value < 0) {
//     out5.textContent = "m";
//   } else if (+input5.value === 0) {
//     out5.textContent = 0;
//   } else {
//     out5.textContent = 1;
//   }
// }

// // Task 6.
// // На сторінці є input з класом i-6, куди користувач може ввести число. Є кнопка .b-6, яка запускає функцію f6. Функція повинна вивести в .out-6 слово even, якщо число парне, і odd, якщо непарне. Для перевірки парності використовується цілочисельна остача від ділення на 2 (оператор %). Якщо остача дорівнює нулю - парне, ні - непарне.
// const btn6 = document.querySelector(".b-6");
// const input6 = document.querySelector(".i-6");
// const out6 = document.querySelector(".out-6");

// btn6.onclick = f6;

// function f6() {
//   let result = null;
//   const num = +input6.value;
//   if (num % 2 === 0) {
//     result = "Even";
//   } else {
//     result = "Odd";
//   }
//   out6.textContent = result;
// }

// // Task 7.
// // Дані 2 input - .i-71 і .i-72, обидва - input[type=number]. При натисканні кнопки .b-7 спрацьовує функція f7. Функція повинна число з .i-71 піднести до степеня .i-72, вивести результат в .out-7. Для піднесення до степеня можна використовувати **, або Math.pow.
// const btn7 = document.querySelector(".b-7");
// const input71 = document.querySelector(".i-71");
// const input72 = document.querySelector(".i-72");
// const out7 = document.querySelector(".out-7");

// btn7.onclick = f7;

// function f7() {
//   const num1 = +input71.value;
//   const num2 = +input72.value;

//   out7.textContent = num1 ** num2;
// }

// // Task 8.
// // Дано select s-8, який містить 3 значення: 1, 2, 3. Дана кнопка b-8. При її натисканні спрацьовує функція f8. Функція повинна отримати обране в select число, потім за допомогою switch case порівняти його по черзі з 1, 2, 3. І якщо вибрано число 1, то вивести в .out-8 рядок one, якщо 2 - two, якщо 3 - three. Нагадую - це програмування. Як зазначено в завданні - так і виводимо. Тобто Three з великої літери - помилка!
// const btn8 = document.querySelector(".b-8");
// const sel8 = document.querySelector(".s-8");
// const out8 = document.querySelector(".out-8");

// btn8.onclick = f8;

// function f8() {
//   const numSwitch = +sel8.value;
//   switch (numSwitch) {
//     case 1:
//       out8.textContent = "one";
//       break;
//     case 2:
//       out8.textContent = "two";
//       break;
//     case 3:
//       out8.textContent = "three";
//       break;
//   }
// }

// // Task 9
// // Є input з класом .i-9, куди користувач може ввести номер квартири. Є кнопка .b-9, яка запускає функцію f9. Функція повинна вивести в .out-9 номер під'їзду, в якому знаходиться квартира.
// //  якщо від 1 включно до 32 включно - то вивести цифру 1
// //  якщо від 33 (включно) до 43 (включно) - то вивести 2
// //  якщо від 44 (включно) до 64 (включно) - то 3.
// //  В іншому випадку, вивести 0.
// const btn9 = document.querySelector(".b-9");
// const input9 = document.querySelector(".i-9");
// const out9 = document.querySelector(".out-9");

// btn9.onclick = f9;

// function f9() {
//   const value = Number(input9.value);
//   if (value >= 1 && value <= 32) {
//     out9.textContent = 1;
//   } else if (value >= 33 && value <= 43) {
//     out9.textContent = 2;
//   } else if (value >= 44 && value <= 64) {
//     out9.textContent = 3;
//   } else {
//     out9.textContent = 0;
//   }
// }

// // Task 10
// // Дано select .s-100. Після натискання кнопки, виведіть value обраного option в .out-10.
// const btn10 = document.querySelector(".b-10");
// const sel100 = document.querySelector(".s-100");
// const out10 = document.querySelector(".out-10");

// btn10.onclick = f10;

// function f10() {
//   switch (sel100.value) {
//     case "6":
//       out10.textContent = 6;
//       break;
//     case "7":
//       out10.textContent = 7;
//       break;
//     case "11":
//       out10.textContent = 11;
//       break;
//     case "9":
//       out10.textContent = 9;
//       break;
//   }
// }

// // function f10() {
// //     let numSw = sel100.value;
// //     if (numSw === "six") {
// //         out10.textContent = "six";
// //     } else if (numSw === "seven") {
// //         out10.textContent = "seven";
// //     } else if (numSw === "eleven"){
// //         out10.textContent = "eleven";
// //     } else if (numSw === "nine"){
// //         out10.textContent = "nine";
// //     }

// // Task 11
// // Дано select .s-110. При зміні стану select (подія onchange) виведіть value обраного option в .out-11.
// const sel110 = document.querySelector(".s-110");
// const out11 = document.querySelector(".out-11");

// sel110.onchange = f11;

// function f11() {
//   out11.textContent = sel110.value;
// }

// // Task 12
// // Дано input .i-120. Після натискання кнопки отримайте значення з input в змінну, а потім виведіть в .out-12 typeof отриманої змінної. Typeof дозволяє визначити тип даних.
// const btn12 = document.querySelector(".b-12");
// const input12 = document.querySelector(".i-120");
// const out12 = document.querySelector(".out-12");

// btn1.onclick = f12;

// function f12() {
//   const a120 = input12.value;
//   out12.textContent = typeof a120;
// }
// // Task 13
// // Дано input i-130. На відміну від попереднього завдання - input[type="number"]. Після натискання кнопки отримайте значення з input в змінну, а потім виведіть в out-13 typeof отриманої змінної. Typeof дозволяє визначити тип даних. Якщо ви правильно все зробили - то дивно, але тип даних буде string! Подумайте чому так?
// const btn13 = document.querySelector(".b-13");
// const input13 = document.querySelector(".i-130");
// const out13 = document.querySelector(".out-13");

// btn1.onclick = f13;

// function f13() {
//   const b130 = input13.value;
//   out13.textContent = typeof b130;
// }

// // Task 14
// // Дано input .i-141 і .i-142, [type=number]. Дано select .s-143, який містить чотири операції - +, -, *, / . Дана кнопка b-14, при натисканні на яку спрацьовує функція f14. Функція виводить в .out-14 результат операцій, обраних в 3-му select, до чисел, введених в першому і другому input. Наприклад вибрано 1 13 +, потрібно вивести результат операції 1+13 тобто 14.
// const input141 = document.querySelector(".i-141");
// const input142 = document.querySelector(".i-142");
// const sel14 = document.querySelector(".s-143");
// const btn14 = document.querySelector(".b-14");
// const out14 = document.querySelector(".out-14");

// btn14.onclick = f14;

// function f14() {
//   const num141 = +input141.value;
//   const num142 = +input142.value;
//   let res145;

//   switch (sel14.value) {
//     case "+":
//       res145 = num141 + num142;
//       break;
//     case "-":
//       res145 = num141 - num142;
//       break;
//     case "*":
//       res145 = num141 * num142;
//       break;
//     case "/":
//       res145 = num141 / num142;
//       break;
//   }
// out14.textContent = res145;
// }

// // Task 15
// // Дано select .s-151 і .s-152, кожен з яких містить 1 і 0. Дано select .s-153, який містить дві операції - && і || . Дана кнопка .b-15, при натисканні на яку спрацьовує функція f15. Функція виводить в .out-15 результат логічних операцій, обраних в 3 select, до чисел, обраних в першому і другому select. Наприклад, вибрано 1 1 &&, потрібно вивести результат операції 1&&1 тобто 1 або 0.
// const sel151 = document.querySelector(".s-151");
// const sel152 = document.querySelector(".s-152");
// const sel153 = document.querySelector(".s-153");
// const btn15 = document.querySelector(".b-15");
// const out15 = document.querySelector(".out-15");

// btn15.onclick = f15;

// function f15() {
//   const res151 = sel151.value;
//   const res152 = sel152.value;
//   let res15;

//   if (sel153.value === "&&") {
//     res15 = +res151 && +res152;
//   } else if (sel153.value === "||") {
//     res15 = +res151 || +res152;
//   }

// out15.textContent = res15;
// }