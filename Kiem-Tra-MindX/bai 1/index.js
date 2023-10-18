const A = parseInt(document.getElementById("A"));
const B = parseInt(document.getElementById("B"));
const button = document.getElementById("button");
let a = [];
let b = [];
function check() {
  for (let i1 = 2; i1 < A - 1; i1++) {
    if (A % i1 !== 0) {
      a.push(i);
    }
  }
  for (let i2 = 0; i2 < B -1 ; i2++) {
    if (B % i2 !== 0){
        B.push(i2);
    }
}
}
button.onclick = check;

