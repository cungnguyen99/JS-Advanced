/**
 * Function context & bind
 */

 var mouse={
     name: 'mickey',
     sayHi: function(){
         console.log('My name is'+ this.name)
     }
 }
 //Khi ta chạy dòng 12 nó sẽ log ra My name is mickey do this trong func sayHi ám chỉ mouse
 mouse.sayHi();
 //nhưng khi ta gán như thế này nó log ra My name is undefine
 /**
  * var say=mouse.sayHi;
  * Nó tương tự như ta viết như sau:
  * var say=function(){
  *     console.log('My name is'+ this.name) mà this ở đây nó không biết là gì và nó cũng k có biến nào tên là name
  *  nên sẽ log ra undefine còn ở trên thì this nó là mouse
  * }
  */
 var say=mouse.sayHi;

//Nếu muốn nó hiện ra My name is mickey ta phải dùng hàm bind trong js với đối số truyền vào là
//một obj để nó biết đó chính là this trong hàm ta đã khai báo
var sayAgain=mouse.sayHi.bind(mouse)//khi đó this ở đây sẽ là mouse

//Nhưng khi ta thêm obj có tên là cat
var cat={
    name: 'tom'
}

var sayCat=mouse.sayHi.bind(cat) //thì lúc này this ở đây chính là cat nên sẽ log ra My name is tom