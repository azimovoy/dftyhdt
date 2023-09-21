//let number = +prompt("Введите число");
//let power = +prompt("Введите степень");
//let sum = 1;
//for (let i = 0; i < power; i++) {
  // sum = sum * number;
//}

//alert(sum);

let synvol = prompt('Введите символ');
let edge = prompt('Введите конец');
let number = prompt('Сколько')
let res = ''
let end = 0;
for(let i = 0; i < number; i++){
  res += synvol
  end = res + edge
  console.log(end);
}