// Task 1
const btn1 = document.querySelector(".b-1");
const out1 = document.querySelector(".out-1");
btn1.onclick = fn1;
function fn1() {
  out1.textContent = obj1.one;
}
const obj1 = {
  one: 15,
  two: 16,
  five: 20,
};

// Task 2

const btn2 = document.querySelector(".b-2");
const out2 = document.querySelector(".out-2");
btn2.onclick = fn2;
function fn2() {
  out2.textContent = obj2.five;
}

const obj2 = {
  one: "hello",
  two: "mahai",
  five: "hi",
};

// Task 3
const obj3 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix",
};
const btn3 = document.querySelector(".b-3");
const out3 = document.querySelector(".out-3");
btn3.onclick = fn3;
function fn3() {
  let result = [];

  // Перебираємо ключі в об'єкті
  for (let key in obj3) {
    // Перевіряємо, чи значення дорівнює "hi"
    if (obj3[key] === "hi") {
      result.push(obj3[key]);
      break;
    }
  }

  // Перетворюємо масив у рядок із пробілом
  const finalString = result.join(" ");

  out3.textContent = finalString;
}

// Task 4
const obj4 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix",
};
const btn4 = document.querySelector(".b-4");
const out4 = document.querySelector(".out-4");
btn4.onclick = fn4;
function fn4() {
  let result = " ";
  for (const key in obj4) {
    result += `${key} ${obj4[key]} <br>`;
  }
  out4.innerHTML = result;
}
// Task 5
const obj5 = {
  one: 1,
  two: 2,
};
const btn5 = document.querySelector(".b-5");
const out5 = document.querySelector(".out-5");

btn5.onclick = function () {
  fn5(obj5, out5);
};
function fn5(object, selector) {
  let str = "";
  for (const key in object) {
    const value = object[key];
    str += `${key} : ${value} <br/>`;

    selector.innerHTML = str;
  }
}

// Task 6
const obj6 = {
  b: 17,
  e: 22,
};
const input61 = document.querySelector(".i-61");
const input62 = document.querySelector(".i-62");
const out6 = document.querySelector(".out-6");
const btn6 = document.querySelector(".b-6");
btn6.onclick = fn6;
function fn6() {
  const key = input61.value;
  const value = input62.value;
  obj6[key] = value;
  fn5(obj6, out6);
}
// Task 7
const input7 = document.querySelector(".i-7");
const btn7 = document.querySelector(".b-7");
const out7 = document.querySelector(".out-7");
btn7.onclick = fn7;
const obj7 = {
  b: 17,
  e: 22,
};
function fn7() {
  let result = 0;
  const searchKey = input7.value;
  for (const key in obj7) {
    if (searchKey === key) {
      result = 1;
      break;
    }
  }
  out7.innerHTML = result;
}
// Task 8
const input8 = document.querySelector(".i-8");
const btn8 = document.querySelector(".b-8");
const out8 = document.querySelector(".out-8");
const obj8 = {
  b: 17,
  e: 22,
};
btn8.onclick = fn8;
function fn8() {
  let result = 0;
  const searchKey = input8.value;
  for (const key in obj8) {
    if (searchKey === key) {
      result = obj8[key];
      break;
    }
  }
  out8.innerHTML = result;
}
// Task 9
const obj9 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};
const input9 = document.querySelector(".i-9");
const btn9 = document.querySelector(".b-9");
const out9 = document.querySelector(".out-9");
btn9.onclick = fn9;
function fn9() {
  const searchValue = Number(input9.value);
  let result = "";
  for (const key in obj9) {
    obj9[key] === searchValue;
    if (obj9[key] === searchValue) {
      result += `${key} `;
    }
  }
  out9.innerHTML = result;
}
// Task 10
const obj10 = {
  k: 22,
  d: 54,
  m: 22,
};
const test10 = 22;
const out10 = document.querySelector(".out-10");
const btn10 = document.querySelector(".b-10");
btn10.onclick = fn10;
function fn10() {
  for (const key in obj10) {
    if (test10 === obj10[key]) {
      out10.innerHTML = true;
      return;
    }
  }
  out10.innerHTML = false;
}

// TODO: Значення для перевірки 22
// TODO: Виклик fn10(a10, 22)

// Task 11
const obj11 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};
const input11 = document.querySelector(".i-11");
const btn11 = document.querySelector(".b-11");
const out11 = document.querySelector(".out-11");
btn11.onclick = fn11;
function fn11() {
  for (const key in obj11) {
    if (key === input11.value) delete obj11[key];
  }
  fn5(obj11, out11);
}
// Task 12
const obj12 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 17,
};
const input12 = document.querySelector(".i-12");
const btn12 = document.querySelector(".b-12");
const out12 = document.querySelector(".out-12");
btn12.onclick = fn12;
function fn12() {
  const value = Number(lnput12.value);
  for (const key in obj12) {
    if (value === obj12[key]) delete obj12[key];
  }
  fn5(obj12, out12);
}
// Task 13
const obj13 = {
  prim: "hello",
  one: 4,
  testt: "vodolii",
  mango: "6",
};

// Task 14
const obj14 = {
  prim: [1, 2, 23],
  one: [3, 4, 5],
  test: [6, 7, 8],
  mango: [9, 10],
};

// Task 15
const obj15 = {
  prim: [1, 2, 23],
  one: [3, 5],
  testt: [6, 7, 8],
  mango: [9, 10],
};

// Task 16
const obj16 = {
  iis8sj: {
    name: "Ivan",
    age: 27,
  },
  iiss7j: {
    name: "Petr",
    age: 26,
  },
  s3s8sj: {
    name: "Serg",
    age: 47,
  },
};

// Task 17
const obj17 = {
  iis8sj: {
    name: "Mango",
    age: 27,
  },
  iiss7j: {
    name: "Poly",
    age: 26,
  },
  s3s8sj: {
    name: "Ajax",
    age: 47,
  },
};
const out17 = document.querySelector(".out-17");
const btn17 = document.querySelector(".b-17");
btn17.onclick = fn17;
function fn17() {
  let result = "";
  for (const key in obj17) {
    for (const innerKey in obj17[key]) {
      innerKey;
      if (obj17[key][innerKey] > 30) result += `${obj17[key].name}`;
    }
  }
  out17.innerHTML = result;
}
// Task 18
const obj18 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};
// function fn18() {
//   let result = "";
//   for (const key in obj1) {
//     if (!Object.hasOwn(object, key)) continue;

//     const element = object[key];
//   }
//   result =
// };
// Task 19
const obj19 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};

// Task 20
const obj20 = {
  red: [
    ["Akademmistechko", 1],
    ["Nyvky", 0],
    ["Universytet", 3],
    ["Lisova", 1],
  ],
  blue: [
    ["Minska", 1],
    ["Obolon", 0],
    ["Pochaina", 2],
    ["Holosiivska", 0],
  ],
  green: [
    ["Syrets", 1],
    ["Zoloti Vorota", 2],
    ["Klovska", 0],
    ["Vidubichi", 1],
  ],
};
