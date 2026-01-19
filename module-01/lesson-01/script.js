//1
const myName = "Anastasia";
console.log("🚀 ~ myName:", myName);

//2
const birthdayMonth = 12;
console.log("🚀 ~ birthdayMonth:", birthdayMonth);

//3
const str = "Ласкаво " + "просимо " + "на курс";
console.log("🚀 ~ str:", str);

//4
// alert(2019);

//5
const operation = 2019 - 200;
console.log("🚀 ~ operation:", operation);
// console.log(2019 - 200);

//6 
const containerEl = document.getElementById("six");
console.log("🚀 ~ containerEl:", containerEl);
containerEl.textContent = "Hello world";

//7
const wrapperEl = document.getElementById("seven");
console.log("🚀 ~ wrapperEl:", typeof wrapperEl);
wrapperEl.textContent = 12 * 12;

//8
const out8 = document.querySelector(".out-8");
console.log("🚀 ~ out8:", out8);
out8.textContent = "task-8";

//9
const out9 = document.querySelector(".out-9");
console.log("🚀 ~ out9:", out9);
out9.textContent = "World";
// out9.textContent = "";

//10
const elementOut10 = document.querySelector(".out-10");
console.log("🚀 ~ elementOut10:", elementOut10);
elementOut10.innerHTML = '<h2>Hi</h2>';

//11
const elementOut11 = document.querySelector(".out-11");
console.log("🚀 ~ elementOut11:", elementOut11);
elementOut11.innerHTML = "123";
elementOut11.innerHTML += "456";

// elementOut11.innerHTML = elementOut11.innerHTML + "456";

//12
const a = document.querySelector(".out-12");
console.log("🚀 ~ a:", a);
a.innerHTML = 3.1415;

//13
const out13 = document.querySelector(".out-13");
console.log("🚀 ~ out13:", out13);
out13.innerHTML = '<img src="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a" alt="js" width="400" >';

//14
const z1 = 6;
const z2 = 3;
const out14 = document.querySelector(".out-14");
const result = z1 * z2;
console.log("🚀 ~ result:", result);
out14.innerHTML = result;

//15
const y1 = 6;
const y2 = 3;
const out15 = document.querySelector(".out-15");
const res = y1 / y2;
console.log("🚀 ~ res:", res);
out15.innerHTML = res;

//16
const x1 = "hello";
const x2 = 5;
const out16 = document.querySelector(".out-16");
const result3 = x1 + x2;
console.log("🚀 ~ result3:", result3);
out16.innerHTML = result3;

//17
const out17 = document.querySelector(".out-17");
console.log("🚀 ~ out17:", out17);
console.dir(out17);

//18
let out18 = document.querySelector(".out18");
console.log("🚀 ~ out18:", out18);
out18 = 5;
console.log("🚀 ~ out18:", out18);

//19
let out19 = document.querySelector(".out-19");
console.log("🚀 ~ out19:", out19);
out19 = document.querySelector("out-19-test");

//20
const out20 = document.querySelector(".out-20");
console.log("🚀 ~ out20:", out20);
out20.textContent = '<h2>Hi</h2>';
