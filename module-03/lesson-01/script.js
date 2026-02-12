// Task-1

const ar1 = ["Привіт", 2024, true, "JavaScript", 77, false];
const btn1 = document.querySelector(".b-1");
const out1 = document.querySelector(".out-1");
btn1.onclick = fn1;
function fn1() {
  out1.textContent = ar1.join(" ");
}

// Task-2
const ar2 = ["RomaRio", 2026, "GoIt"];
const btn2 = document.querySelector(".b-2");
const out2 = document.querySelector(".out-2");
btn2.onclick = fn2;
function fn2() {
  let result = "";
  for (let i = 0; i < ar2.length; i++) {
    result += ar2[i] + " ";
  }
  out2.textContent = result;
}

// Task-3
const arr3 = ["Cherkassy", 750, "Kiev", 1600];
// 2. Отримуємо елементи (кнопку та блок для виводу)
const btn3 = document.querySelector(".b-3");
const out3 = document.querySelector(".out-3");
btn3.onclick = fn3;
// 3. Функція для виведення довжини масиву
function fn3() {
  // Властивість .length повертає кількість елементів у масиві
  out3.textContent = arr3.length;
}

// Task-4

const ar4 = [
  "Cat",
  "pompa",
  "dog",
  "слива",
  "ананас",
  "перс",
  "ківі",
  2000,
  "кавун",
];
const btn4 = document.querySelector(".b-4");
const out4 = document.querySelector(".out-4");
btn4.onclick = fn4;
function fn4() {
  // Вибираємо елементи за індексами 0, 3 та 8
  let res = ar4[0] + " " + ar4[3] + " " + ar4[8];
  out4.textContent = res;
}

// Task-5
const ar5 = [
  "Cat",
  "pompa",
  "dog",
  "слива",
  "ананас",
  "перс",
  "ківі",
  2000,
  "кавун",
];
const btn5 = document.querySelector(".b-5");
const out5 = document.querySelector(".out-5");
btn5.onclick = fn5;
function fn5() {
  // Вибираємо елементи за індексами 0, 3 та 8
  let res = ar5[0] + " " + ar5[2] + " " + ar5[3];
  out5.textContent = res;
}
// Task-6
const ar6 = ["Roman", "Водолій", 11, "febrary"];
const btn6 = document.querySelector(".b-6");
const out6 = document.querySelector(".out-6");
btn6.onclick = fn6;
function fn6() {
  out6.textContent = ar6.join(" ");
}

// Task-7
const ar7 = []; // Припустимо, масив спочатку порожній
const btn7 = document.querySelector(".b-7");
const out7 = document.querySelector(".out-7");
btn7.onclick = f7;
function f7() {
  // Додаємо елементи за конкретними індексами
  ar7[5] = "italy";
  ar7[6] = "turkey";
  ar7[7] = "vietnam";

  // Виводимо масив у .out-7, розділяючи елементи пробілом
  out7.textContent = ar7.join(" ");
}

// Task-8
const ar8 = [];
const btn8 = document.querySelector(".b-8");
const out8 = document.querySelector(".out-8");
const out8_1 = document.querySelector(".out-8-1");
btn8.onclick = f8;
function f8() {
  // Додаємо елементи  вказаними індексами
  ar8[3] = 3.14;
  ar8[4] = 17;
  ar8[6] = 5;

  // Виводимо масив через дефіс
  out8.textContent = ar8.join("-");

  // Виводимо довжину масиву
  out8_1.textContent = ar8.length;
}

// Task-9
const ar9 = [10, 20, 30, 40, 50]; // Виправлено оголошення масиву
const btn9 = document.querySelector(".b-9");
const out9 = document.querySelector(".out-9");

btn9.onclick = f9;

function f9() {
  // Розраховуємо індекс останнього елемента: довжина масиву мінус 1
  const lastIndex = ar9.length - 1;

  // Отримуємо значення за цим індексом
  const lastElement = ar9[lastIndex];

  // Виводимо результат в блок out9
  out9.textContent = lastElement;
}
// Task-10
const ar10 = [100, 200, 300, 400, 700, 121];
const out10 = document.querySelector(".out-10");
const btn10 = document.querySelector(".b-10");
btn10.onclick = fn10;
function fn10() {
  // Обчислення суми: елемент з індексом 1 + останній елемент
  const sum = ar10[1] + ar10[ar10.length - 1];

  // Виведення результату
  out10.textContent = sum;
}

// Task-11
const ar11 = [10, 20, 30, 40, 50, 60, 70]; // Приклад масиву
const out11 = document.querySelector(".out-11");
const btn11 = document.querySelector(".b-11");
btn11.onclick = fn11;

function fn11() {
  // 1. Зберігаємо значення другого елемента (індекс 2) у тимчасову змінну
  let temp = ar11[2];

  // 2. Записуємо значення четвертого елемента (індекс 4) на місце другого
  ar11[2] = ar11[4];

  // 3. Записуємо значення з тимчасової змінної на місце четвертого
  ar11[4] = temp;

  // 4. Виводимо масив у блок out-11, об'єднавши елементи через пробіл
  out11.textContent = ar11.join(" ");
}
// Task-12
const ar12 = ["test", "west", "list", "class", "best"]; // Приклад масиву
const out12 = document.querySelector(".out-12");
const btn12 = document.querySelector(".b-12");
btn12.onclick = fn12;
function fn12() {
  // 1. Обчислюємо індекс останнього елемента
  let lastIndex = ar12.length - 1;

  // 2. Створюємо тимчасову змінну для зберігання нульового елемента
  let temp = ar12[0];

  // 3. Міняємо елементи місцями
  ar12[0] = ar12[lastIndex];
  ar12[lastIndex] = temp;

  // 4. Виводимо масив у блок out-12 з роздільником пробіл
  out12.textContent = ar12.join(" ");
}
// Task-13
const ar13 = ["test", "west", "list", "class", "best"];
const out13 = document.querySelector(".out-13");
const btn13 = document.querySelector(".b13-");
btn13.onclick = fn13;
function fn13() {
  let result = ""; // Створюємо змінну для накопичення рядка

  for (let i = 0; i < ar13.length; i++) {
    // Додаємо індекс, пробіл, значення та ще один пробіл
    result += i + " " + ar13[i] + " ";
  }

  // Виводимо фінальний рядок у блок out-13
  out13.textContent = result;
}

// Task-14
const ar14 = [1, 2, 3, "hello", 66];
const out14 = document.querySelector(".out-14");
const btn14 = document.querySelector(".b-14");
btn14.onclick = fn14;
function fn14() {
  let result = "";

  // Починаємо з останнього елемента (ar14.length - 1)
  // Продовжуємо, поки індекс не стане меншим за 0
  for (let i = ar14.length - 1; i >= 0; i--) {
    result += ar14[i] + " ";
  }
  out14.textContent = result;
}
// Task-15
const ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
const out15 = document.querySelector(".out-15");
const btn15 = document.querySelector(".b-15");
btn15.onclick = fn15;
function fn15() {
  let result = "";
  for (let i = 0; i < ar15.length; i++) {
    // Перевіряємо, чи елемент більший за нуль
    if (ar15[i] > 0) {
      result += ar15[i] + " ";
    }
    out15.textContent = result;
  }
}
// Task-16
let ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let ar16_odd = [];
let ar16_even = [];
const out16odd = document.querySelector(".out-16-odd");
const out16eve = document.querySelector(".out-16-even");
const btn16 = document.querySelector(".b-16");
btn16.onclick = fn16;
function fn16() {
  // 1. Очищення для повторного запуску
  ar16_odd = [];
  ar16_even = [];

  // Створюємо окремі лічильники індексів для нових масивів
  let countEven = 0;
  let countOdd = 0;

  // 2. Перебір масиву ar16
  for (let i = 0; i < ar16.length; i++) {
    if (ar16[i] % 2 === 0) {
      // Додаємо за індексом у парні
      ar16_even[countEven] = ar16[i];
      countEven++;
    } else {
      // Додаємо за індексом у непарні
      ar16_odd[countOdd] = ar16[i];
      countOdd++;
    }
  }
  out16eve.textContent = ar16_even.join(" ");
  out16odd.textContent = ar16_odd.join(" ");
}
// Task-17
const ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
const out17 = document.querySelector(".out-17");
const btn17 = document.querySelector(".b-17");
btn17.onclick = fn17;
function fn17() {
  // Створюємо змінну-лічильник
  let count = 0;

  // Проходимо циклом по масиву
  for (let i = 0; i < ar17.length; i++) {
    // Перевіряємо, чи значення елемента більше за 3
    if (ar17[i] > 3) {
      // Якщо умова виконується, збільшуємо лічильник на 1
      count++;
    }
  }

  // Виводимо підсумкову кількість у блок .out-17
  out17.textContent = count;
}

// Task-18
const ar18 = [15, 24, 13, 78, 21, 4, 45, 67];
const out18 = document.querySelector(".out-18");
const btn18 = document.querySelector(".b-18");
btn18.onclick = fn18;
function fn18() {
  // Припускаємо, що перший елемент масиву є максимальним
  let max = ar18[0];

  // Починаємо цикл з другого елемента (індекс 1)
  for (let i = 1; i < ar18.length; i++) {
    // Якщо поточний елемент більший за наш "макс", оновлюємо змінну
    if (ar18[i] > max) {
      max = ar18[i];
    }
  }

  // Виводимо результат
  out18.textContent = max;
}
// Task-19
const ar19 = [15, 424, 313, 78, 241, 4, 45, 67];
const out19 = document.querySelector(".out-19");
const btn19 = document.querySelector(".b-19");
btn19.onclick = fn19;
function fn19() {
  // Припускаємо, що мінімальний елемент знаходиться на 0-й позиції
  let minIndex = 0;

  // Починаємо перебір з першого індексу (другого елемента)
  for (let i = 1; i < ar19.length; i++) {
    // Якщо поточний елемент масиву менший за той, що під індексом minIndex
    if (ar19[i] < ar19[minIndex]) {
      // Оновлюємо мінімальний індекс
      minIndex = i;
    }
  }

  // Виводимо знайдений індекс у блок .out-19
  out19.textContent = minIndex;
}
// Task-20
const ar20 = [4, 5, 6, 7, 8, 9, 10];
const out20 = document.querySelector(".out-20");
const btn20 = document.querySelector(".b-20");
btn20.onclick = fn20;
function fn20() {
  // Створюємо змінну для накопичення суми
  let sum = 0;

  // Проходимо циклом по кожному елементу
  for (let i = 0; i < ar20.length; i++) {
    // Додаємо поточне значення до загальної суми
    sum += ar20[i];
  }

  // Виводимо фінальний результат у блок .out-20
  out20.textContent = sum;
}
