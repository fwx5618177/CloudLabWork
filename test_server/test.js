const str = 'http://52.14.40.163:8999/calc?operand=-&numberone=3&numbertwo=3';
const end = str.split('?')[1].split('&');
let a = {}
for(let i of end) {
    let [key, value] = i.split('=');
    a[key] = value
}

console.log(a);