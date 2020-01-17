//Template string
//Cộng chuỗi bình thường
function sayHi(name){
    console.log('my name is '+name)
}

sayHi('Cung')

//Sử dụng Template string

function greeting(name){
    console.log(`my name is ${name}`)
}

greeting('Cung')

//Có thể truyền bất kỳ một obj nào vào như 1 func, 1 biểu thức...
function greetingSum(a,b){
    console.log(`my name is ${a+b}`)
}
greetingSum(3,4)

function hello(name){
    return `My name is ${name}`
}
function greetingSay(func){
    console.log(`my name is ${func}`)
}
greetingSay(hello('Cung'))