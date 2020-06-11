const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btnMul = document.getElementById("btnMul");
const btnDiv = document.getElementById("btnDiv");
const btnEql = document.getElementById("btnEql");
const btnSum = document.getElementById("btnSum");
const btnSub = document.getElementById("btnSub");
const btnClr = document.getElementById("btnClr");
const res = document.getElementById("res");

btn0.addEventListener("click", uiZero);
btn1.addEventListener("click", uiOne);
btnClr.addEventListener("click", Clear);
btnMul.addEventListener("click", Multiply);
btnDiv.addEventListener("click", Divide);
btnSum.addEventListener("click", Sum);
btnSub.addEventListener("click", Subtract);
btnEql.addEventListener("click", ShowRes);

let operandsInt;
let operation;

function uiZero() {
  res.innerHTML += "0";
}

function uiOne() {
  res.innerHTML += "1";
}

function Clear() {
  res.innerHTML = "";
}

function Multiply() {
  res.innerHTML += "*";
  operation = "mul";
}

function Divide() {
  res.innerHTML += "/";
  operation = "div";
}

function Sum() {
  res.innerHTML += "+";
  operation = "sum";
}

function Subtract() {
  res.innerHTML += "-";
  operation = "sub";
}

function GetOperands() {
  const resStr = res.innerHTML;
  const re = /[-+*\/]/;
  const operands = resStr.split(re);

  let operand1 = operands[0];
  let operand2 = operands[1];

  let operand1Int = 0;
  let operand2Int = 0;
  for (let i = operand1.length - 1; i >= 0; i--) {
    let ch = operand1[i];
    operand1Int += parseInt(ch) * Math.pow(2, operand1.length - 1 - i);
  }
  for (let i = operand2.length - 1; i >= 0; i--) {
    let ch = operand2[i];
    operand2Int += parseInt(ch) * Math.pow(2, operand2.length - 1 - i);
  }
  return {
    operand1Int,
    operand2Int,
  };
}

function ShowRes() {
  operandsInt = GetOperands();
  let resInt;
  switch (operation) {
    case "mul":
      resInt = operandsInt.operand1Int * operandsInt.operand2Int;
      break;
    case "div":
      resInt = operandsInt.operand1Int / operandsInt.operand2Int;
      break;
    case "sub":
      resInt = operandsInt.operand1Int - operandsInt.operand2Int;
      break;
    case "sum":
      resInt = operandsInt.operand1Int + operandsInt.operand2Int;
      break;
  }

  resInt = Math.floor(resInt);

  const resStr = dec_to_b(resInt);

  res.innerHTML = resStr;
}

dec_to_b = function (n) {
  return parseInt(n, 10).toString(2);
};
