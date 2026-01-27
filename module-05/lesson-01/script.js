//TODO: Join, Split, ForEach
// Task 1
const arr1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
const out1 = document.querySelector(".out-1");
const btn1 = document.querySelector(".b-1");
btn1.onclick = fn1;

function fn1() {
  const arr1_res = [];
  arr1.forEach(el1 => {
    arr1_res.push(el1 * 2);
  });
  console.log("🚀 ~ fn1 ~ arr1_res:", arr1_res);
  out1.innerHTML = arr1_res;
}
// Task 2
const arr2 = [2, 3, 4, 5, 10, 11, 12];
const out2 = document.querySelector(".out-2");
const btn2 = document.querySelector(".b-2");
btn2.onclick = fn2;

function fn2() {
  const arr2_res = [];

  arr2.forEach(el2 => {
    arr2_res.push(el2 / 2);
  });
  console.log("🚀 ~ fn2 ~ arr2_res:", arr2_res);
  out2.innerHTML = arr2_res;
}
// Task 3
const arr3 = [2, "hello", 3, "hi", 4, "Mazai"];
const out3 = document.querySelector(".out-3");
const btn3 = document.querySelector(".b-3");
btn3.onclick = fn3;

function fn3() {
  const arr3_res = [];

  arr3.forEach(el3 => {
    if (typeof el3 === "number") {
      arr3_res.push(el3);
    }
  });
  out3.textContent = arr3_res.join(" - ");
}
// Task 4
const out4 = document.querySelector(".out-4");
fn4();
function fn4() {
  const arr4_res = [];
  const spans = document.querySelectorAll(".task-4");
  spans.forEach(span => {
    console.log(span.dataset.value);
    arr4_res.push(span.dataset.value);
  });
  out4.textContent = arr4_res;
}

// const out4 = document.querySelector(".out-4");

// function fn4() {
//   const arr4_res = [];
//   // Используем querySelectorAll, чтобы получить все элементы
//   const spans = document.querySelectorAll(".task-4");

//   spans.forEach(span => {
//     console.log(span.dataset.value);
//     arr4_res.push(span.dataset.value);
//   });

//   out4.textContent = arr4_res.join(", "); // Добавлен join для красивого вывода
// }

// fn4();

// Task 5
const arr5_res = [];

// Task 6
const str6 = "helloworld";
const btn6 = document.querySelector(".b-6");
const out6 = document.querySelector(".out-6");
const fn6 = () => {
  // Перетворюємо рядок на масив
  const arr6_res = str6.split("");
  console.log("🚀 ~ fn6 ~ arr6_res:", arr6_res);

  // Виводимо результат на сторінку (наприклад, у консоль або в елемент)
  // console.log(arr6_res);
  out6.innerHTML = arr6_res.join("_");
};
btn6.onclick = fn6;
// Task 7
const str7 = "hello world hi mazai";

// Task 8
const arr8 = [1, 2, 66, 77, 15];

// Task 9
const arr9 = [
  ["hi", "mahai"],
  ["test", "best"],
];

// Task 10
const arr10 = { name: "ivan", age: 15, sex: 1, id: 45 };

//TODO: MAP FILTER
// Task 11
const arr11 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];

// Task 12
const arr12 = [2, 3, 4, 5, 10, 11, 12];

// Task 13
const arr13 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];

// Task 14
const arr14 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];

// Task 15
const arr15 = [3, 14, 15, 92, "6"];

// Task 16
const arr16 = [3, 14, 15, 92, "6", "5", "hello", 32];

// Task 17
const arr17 = [
  "Alto`s Adventure",
  "Angry Birds 2",
  "Anno 2205",
  "Assassin`s Creed Chronicles",
];

// Task 18
const arr18 = [3, 14, 15, 92, 7, 32, 59];

// Task 19
const arr19 = [
  "Quantum Break",
  "Gears of War 4",
  "Mass Effect: Andromeda",
  "Far Cry Primal",
];

// Task 20
const arr20 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
// const btn20 = document.querySelector(".b-20");
// const out20 = document.querySelector(".out-20");
function fn20() {
  arr20.forEach((element, index) => {
    if (element < 0) {
      arr20[index] = 0;
    }
  });
  return arr20;
}
// Task 21
const arr21 = [2, 13, 14, -7, 9, 5, 0, -2, 14];

const arr21_res = arr21.filter((element, index) => {
  return index % 2 === 0;
});

// console.log(arr21_res);
// Task 22
const arr22 = [2, 13, 14, -7, 9, 5, 0, -2, 14];

// Task 23
const arr23 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
const arr23_num = 9;

// Task 24
const arr24 = ["c", "C", "d", "e", "E"];
const arr14_sum = "e";

// Task 25
const arr25 = [
  {
    name: "Mango",
    pnum: "tr7862",
  },
  {
    name: "Poly",
    pnum: "",
  },
  {
    name: "Ajax",
    pnum: "im7961",
  },
  {
    name: "Didi",
    pnum: "tr786259",
  },
];

//? RESULT:
// [
//   {
//     name: "Mango",
//     pnum: "tr7862",
//   },
//   {
//     name: "Ajax",
//     pnum: "im7961",
//   },
// ];
