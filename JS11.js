//Enhanced object literals
                

//Cách khai báo 1 obj theo cách khởi tạo hàm tạo
function Mouse(name,age){
    this.name=name
    this.age=age
}

//khai báo method run
Mouse.prototype.run=function(){
    console.log(`My name is ${this.name}. I am ${this.age}`)
}

const mouse=new Mouse('Mickey', 12)
mouse.run()

                



//Khai báo obj theo kiểu object literals
var dog={
    name: 'GoGo',
    age: 12,
    run: function(){
        console.log(`My name is ${this.name}. I am ${this.age}`)
    }
}

dog.run()

   





//Khai báo theo kiểu Enhanced object literals
//giả sử có một biến name
const name='Cooku'

//khi ta khai báo 1 obj theo kiểu literal
var bird={
    name: name,
    run: function(){
        console.log(`My name is ${this.name}. I am ${this.age}`)
    }
}

//nhưng nếu sử dụng kiểu Enhanced mà có key và value trùng tên như kia (name: name) ta có thể làm như sau:

const name_cat='Tom'
var cat={
    name,
    run(){
        console.log(`My name is ${this.name}. I am ${this.age}`)
    }
}