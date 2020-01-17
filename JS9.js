function greeting(name, age){

    console.log(`My name is ${name}. I am ${age}`)

}

//hàm call truyền vào bao nhiêu tham số cũng được nhưng tham số đầu tiên phải là tham số đại diện cho this mà func
//trước nó gọi đến hàm call
//do func trên k có this nên ta truyền null
greeting.call(null, 'Cung', 20)

//Viết lại hàm và truyền this vào
function greetingCall(){

    console.log(`My name is ${this.name}. I am ${this.age}`)

}

var obj={
    name: 'Cung',
    age: 20,
    sayHi: function(){
        console.log('My name is',this.name)
    }
}
greetingCall.call(obj)
//nếu dùng bind sẽ phải viết thêm ()
greetingCall.bind(obj)()

//nếu gọi hàm trong một obj
obj.sayHi.bind(obj)()
obj.sayHi.call(obj)

