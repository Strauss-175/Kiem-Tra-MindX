const numberOneTriangle = parseInt(prompt("nhap so tam giac"));
const t1 = document.getElementById("t1");
const t2 = document.getElementById("t2");
const t3 = document.getElementById("t3");
const t4 = document.getElementById("t4");
const t5 = document.getElementById("t5");
const t6 = document.getElementById("t6");
const t7 = document.getElementById("t7");
const t8 = document.getElementById("t8");
const t9 = document.getElementById("t9");
const t10 = document.getElementById("t10");

const n = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10];
console.log(n);
for (var i = 0; i <= numberOneTriangle-1; i++) {
  n[i].style.display = "block";
}