//Khác nhau giữa arr function và function bình thường
var a={
    name:'aaa',
    run: function(){
        console.log(this.name)
    }
}
//khi chạy dòng dưới sẽ log ra 'aaa'
a.run();

//nhưng khi ta khai báo 1 obj như này 
var b={
    name:'aaa',
    run: function(){
        var run2=function(){
            console.log(this.name)
        }
        run2()
    }
}
/**
 * Chạy dòng ở dưới sẽ log ra undefine. Khi ta chạy hàm run nó sẽ vào trong và thấy dòng khai báo run2
 * nên ta sẽ nghĩ nó chạy run2 và log ra 'aaa' vì khi đấy this nó là của hàm run2 chứ không phải của hàm run nữa.
 * run2 chỉ là một hàm bình thường như khi ta khai báo nó ở ngoài và gọi nó như này
 * var run2=function(){ console.log(this.name) }
 * run2()
 */
b.run()

//Để khắc phục ta có 2 cách: dùng bind hoặc arr function

var c={
    name:'aaa',
    run: function(){
        var run2=function(){
            console.log(this.name)
        }
        //cũng có thể viết là var run3=run2.bind(c); run3();
        run2.bind(c)()
        var run3=run2.bind(c)
        run3()
    }
}
c.run()

var d={
    name:'aaa',
    age: 12,
    run: function(){
        //ở obj a khi ta log ra this.name trong chính function run thì this ở đây chính là obj mà ta khai báo 
        //nên khi ta dùng this trong run ta vẫn chấm đến được các thuộc tính trong obj
        console.log(this.age)
        //nên ta có thể viết ngay bind(this) sau phần khai báo run2 luôn để khi thay đổi tên obj sẽ k ảnh hưởng
        var run2=function(){
            console.log(this.name)
        }.bind(this)

        run2()
    }
}
d.run()

/**
 * Dùng arrow function 
 * Trong arr function thì biến this sử dụng trong arr func sẽ là biến this của context của hàm gần nhất
 * nên có thể viết
 */
var e={
    name:'aaa',
    age: 12,
    run: function(){
        //hàm gần nhất của arr func là hàm run mà trong this trong arr func run2 là biến this của run nên 
        //sẽ log ra được this.name
        var run2=()=>{  console.log(this.name)  }

        run2()
    }
}
e.run()

//Bài tập: sửa để log ra bar
var f={
    foo: 'bar',
    run: function(){
        setTimeout(function(){
            console.log(this.foo)
        },2000)
    }
}
//Làm
var g={
    foo: 'bar',
    run: function(){
        setTimeout(function(){
            console.log(this.foo)
        }.bind(this),2000)
    }
}
g.run()

var h={
    foo: 'bar',
    run: function(){
        setTimeout(()=>{
            console.log(this.foo)
        },2000)
    }
}
h.run()