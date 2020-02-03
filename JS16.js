//STATIC
class Foo{
    static someMethod(){
        console.log('This is some method')
    }

    anotherMethod(){
        console.log('This is another method')
    }

}

//Voi nhung ham co key word method thi khi goi ta khong can phai tao instance cua obj cha ro goi den
//chi can lay ten class de cham
Foo.someMethod()

//Neu su dung tu khoa static trong kieu tao obj bang viec khoi tao ham tao thi lam nhu sau

function Foo1(){

}
//tuong ung voi kieu k co tu khoa static
Foo1.prototype.anotherMethod1=function(){
    console.log('This is another method1')
}
//tuong ung voi kieu co tu khoa static

Foo1.someMethod1=function(){
    console.log('This is some method1')

}

const foo1=new Foo1()

foo1.anotherMethod1()

Foo1.someMethod1()