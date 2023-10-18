const A = document.getElementById("A");
const B = document.getElementById("B");
const button = document.getElementById("button");
let N = [];
let X = [];
let b = [];
function check() {
  for (let i1 = A.value; i1 <= B.value; i1++) {
    N.push(parseInt(i1));
  }
  for (let i2 = 0; i2 <= N.length; i2++) {
    
    for (let i3 = 2; i3 <= N[i2] - 1; i3++) {
      if (N[i2] % i3 == 0) {
        break;
      } else {
        X.push(N[i2]);
      }
    }
  }
}
console.log(X);
button.onclick = check;
