let sum = "";
function buildSum(char) {
  sum += char;
  document.getElementById("display").innerHTML = sum;
}
function calculate() {
  sum = eval(sum);
  document.getElementById("display").innerHTML = sum;
}
function reset() {
  sum = "";
  document.getElementById("display").innerHTML = sum;
}
