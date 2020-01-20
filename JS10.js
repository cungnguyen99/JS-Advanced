//hàm apply 
/**
 * khác nhau giữa call và aplly
 * func.call(this, param1, param2....): biến đầu là biến đại diện cho this, các biến sau là tham số của hàm trc nó
 * func.apply(this, [param1, param2...]): biến sau là 1 arr đại diện cho các tham số của hàm trc nó
 */
function greeting(a,b){
    console.log(`Hi my name is ${this.name}. I am ${this.age}. ${a+b}`)
}
 var cat = {
     name: 'Tom',
     age: 12
 }

 greeting.apply(cat,[2,3])

 //Bài toán: tạo ra 2 hàm tính tổng và trung bình cộng. cả 2 hàm đều kb số lượng tham số đầu vào. Gọi hàm sum trong
 //TBC để tính trung bình cộng
 function sum(){
     const numbers=Array.from(arguments);
     return numbers.reduce((sum,num)=>sum+num,0)
 }

 function avg(){
     /**
      * Phải lấy sum.apply(null, arguments) vì ta không thể gọi trực tiếp là sum(1,2,3,5) do tham số sẽ được 
      * truyền vào hàm avg (ví dụ nếu ta truyền vào sum(1,2,3,5) ở dòng dưới nhưng khi ta gọi hàm avg ta lại
      * truyền là avg(2,3,4,5) thì sẽ sai.). Cũng không thể gọi sum.call(null, 3,5,6,6) do ta cũng kb chính xác
      * nhưng tham số nào sẽ được truyền vào hàm avg. Ta phải dùng sum.apply(null, arguments) do arguments
      * là một arr(đủ đk để làm tham số sau) và khi truyền tham số vào avg bất kể số lượng bao nh
      */
    //  const res=sum.apply(null, arguments)

    //  return res/arguments.length

    return sum(arguments)/arguments.length
 }

 console.log(avg(1,2,3,4))