//class inheritance: kế thừa trong class
class Animal{
    constructor(name){
        this.name=name
    }

    run(){
        console.log(`${this.name} is running....`)
    }

}

class Bird extends Animal{
    constructor(name,age){
        super(name)
        this.age=age
    }
    fly(){
        console.log(`${this.name} is flying....`)
    }
}

const bird =new Bird('Mickey',12)

bird.run()
bird.fly()

//Nếu sử dụng kiểu khai báo constructor function
function Birds(name){
    this.name=name
}

Bird.prototype.run=function(){
    console.log(`${this.name} is running...`)
}

function Parrot(name){
    Animal.apply(this, arguments)
}
Birds.prototype=new Animal()