const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
    rows.push(character);
};
let result = [""];
console.log(result);
for (const row of rows) {
    result = result + "\n" + row;
    character.repeat(i + 1);
}
function padRow(name){
    return name;
}
padRow();
const call = padRow("Rune");
console.log(call);
function addTwoNumbers(num1, num2){
    return num1 + num2;
  }
  let sum = addTwoNumbers(5, 10);
  console.log(sum);