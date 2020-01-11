/**
 * Khác nhau giữa var let và const
 */

 //1.Khai báo biến
 var a=1
 let b=2
 const c=3
//dòng lệnh này sẽ chạy ra ket quả 1,2,3
 console.log(a,b,c)

//var cho phép khai báo biến lại
 var a=4
 console.log(a,b,c) //ra 4,2,3

 //do let và const không cho phép khai báo lại nên ta không thể làm như dưới
 let b=3
 const c=5 //sẽ báo lỗi và không chạy được chương trình.


 //2. khai báo không gán giá trị
 //var và let cho phép khai báo như này
 var x
 let y
 const z=7 //nhưng const không được phép. nếu khai báo phải gán giá  trị luôn

 //3. Block scope
 //Mỗi dấu {} được gọi là một block scope
 /**
  * var không tuần thủ theo block scope. nghĩa là khi ta khai báo một biến kiểu var trong {} ta vẫn dùng biến
  * đó ở ngoài
  */
 if(true){
     var o=10
 }

 console.log(o) //kết quả sẽ ra 10.

 //let và const tuân theo block scope. chỉ có tác dụng trong 1 {}

 if(false){
     let v=2
     const s=1
 }

 console.log(v,s) //sẽ báo lỗi do nó chỉ có tác dụng trong câu lệnh if{} thôi

 //trong vòng for ta có thể sủ dụng lại biến i được do nó chỉ có td trong 1 {}
 for (let index = 0; index < 5; index++) {
    console.log(index)
     
 }

 //dưới đay ta vẫn có thể dùng lại biến let i trong vòng for do đến đây biến index đó k còn gtri nữa
 for (let index = 0; index < array.length; index++) {
    console.log(index)     
 }

 //nhưng nếu dùng var ta sẽ phải khai báo 2 biến khác nhau trong mỗi vòng for do biến var k tuân thủ block scope
 for (var  index = 0; index < 5; index++) {
    console.log(index)
     
 }
 for (var j = 0; j < 5; j++) {
    console.log(j)     
 }

