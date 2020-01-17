//Default parameters
//Khi ta muốn nếu ng dùng không muốn truyền tham số thì tham số đó sẽ được gán mặc định. Trc đây sẽ làm như này
function sayHi(name){
    if(name===undefined){
        name='Friend'
    }

    return `Hi ${name}`
}
console.log(sayHi())

console.log(sayHi('Cung'))

//ta có thể truyền vào theo kiểu tham số mặc định như sau
function sayHello(name='friend', country='england'){
    return `Hi ${name}, welcome to ${country}`
}
console.log(sayHello('Cung'))