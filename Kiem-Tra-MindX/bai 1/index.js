const A = parseInt(document.getElementById("A"));
const B = parseInt(document.getElementById("B"));
const button = document.getElementById("button");
let N = [];
let a = [];
let b = [];
function check() {
  for (let i1 = A; i1 <= B; i1++) {
    N.push(i1);
  }
  for (let i2 = A; i2 < A - 1; i2++) {
    if (A % i2 !== 0) {
      a.push(i2);
    }
  }
  for (let i3 = 0; i3 < B - 1; i3++) {
    if (B % i3 !== 0) {
      B.push(i3);
    }
  }
}
button.onclick = check;
