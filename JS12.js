//CLASS
//Để khai báo một obj theo kiểu giống hướng đối tượng ngày trc ta làm như vầy:
function Mouse(name){
    this.name=name
}

Mouse.prototype.run=function(){
    console.log(`${this.name} is running...`)
}

const mouse=new Mouse('Mickey')

mouse.run();

//Sử dụng từ khóa class để khai báo

class Cat {
    constructor(name){
        this.name=name
    }

    run(){
        console.log(`${this.name} is running...`)
    }
}

const cat=new Cat('Tom')

cat.run()