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

Birds.prototype.run=function(){
    console.log(`${this.name} is running...`)
}

function Parrot(name,age){
    //nếu chỉ có mỗi tham số name thì k cần viết dòng this.age=age
    Birds.apply(this, arguments)
    this.age=age
}
Parrot.prototype = Object.create(Birds.prototype)
Parrot.prototype.constructor = Parrot;
Parrot.prototype.flying = function () {
    console.log(`${this.name} is flying! I am ${this.age}`);
}

const parrot=new Parrot('Birds',12)

parrot.flying()
parrot.run()