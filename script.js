console.log('------------- # 4')

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
// ask(
//     "Вы согласны?",
//     () => console.log("Вы согласились."),
//     () => console.log("Вы отменили выполнение.")
// );

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
        let val = numbers[i];

        if (val < a || val > b) {
            numbers.splice(i, 1);
            i--;
        }
    }
}

let numbers = [1, 2, 3, 4, 5, 6];

filterRangeInPlace(numbers, 2, 5);
console.log(numbers);

console.log('------------- # 10')
console.log('------------- # 11')
console.log('------------- # 12')