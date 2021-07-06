console.log('------------- # 4')

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
ask(
    "Вы согласны?",
    () => console.log("Вы согласились."),
    () => console.log("Вы отменили выполнение.")
);

console.log('------------- # 5')

let str = 'my-short-string';
let arr = str.split('-');
console.log(arr);

console.log('------------- # 6')

let arr2 = ['JavaScript', 2015];
let str2 = arr2.join(' ');
console.log(str2);

console.log('------------- # 7')

let users = [{id: 1, name: "Vic", age: 21}, {id: 2, name: "Petya", age: 30}, {id: 3, name: "Jon", age: 5}];
let youngUser = users.filter(item => item.age < 20);
console.log(youngUser);

console.log('------------- # 8')

let users1 = [{id: 1, name: "Vic", age: 21}, {id: 2, name: "Petya", age: 30}, {id: 3, name: "Jon", age: 5}];
let names = users1.map(item => item.name);
console.log(names);

console.log('------------- # 9')

function filterRangeInPlace(numbers, a, b) {

    for (let i = 0; i < numbers.length; i++) {
        let newNum = numbers[i];

        if (newNum < a || newNum > b) {
            numbers.splice(i, 1);
            i--;
        }
    }
}

let numbers = [1, 2, 3, 4, 5, 6];

filterRangeInPlace(numbers, 2, 5);
console.log(numbers);

console.log('------------- # 10')

function arrFrom(text, separator) {

    return text.split(separator);
}

const result = arrFrom('my-short-string', '-');
console.log(result);

console.log('------------- # 11')

let newArr = [1, 2, 3, 4, 5];
function slArray (newArr, startIndex, endIndex) {

    return newArr.slice(startIndex, endIndex);
}
const range = slArray(newArr, 2, 4);
console.log(range);
console.log(newArr);


console.log('------------- # 12')

function sum() {
    let result = 0;

    for (let i = 0; i < calc.length; i++) {
        result += calc[i];
    }

    return result;
}

let calc = [1, 2, 4, 7];

console.log(sum(...calc));



