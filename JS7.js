//arguments
/**
 * arguments còn gọi là Array-like object tức là giống một mảng. Là một obj gồm key và value với các key là index 
 * của phần tử tương ứng trong mảng và phải có thuộc tính length là tổng số phần tử của mảng
 */

//Ví dụ khi ta tính tổng các phần tử trong mảng
const arr=[1,2,3,5,6]
let sum=0
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum)

//Dưới đây được gọi là một arguments mô phỏng mảng trên
const obj={
    0:1,
    1:2,
    2:3,
    3:5,
    4:6,
    length: 5
}
let sumObj=0
for (let i = 0; i < obj.length; i++) {
    sumObj += obj[i];  
}
console.log(sumObj)

/**
 * Bài toán đặt ra: khi ta viết một function tính tổng nhưng chỉ cho truyền vào 2 tham số mà lúc sau ta muốn truyền
 * vào 3 tham số, ta có thể vào func và sửa nhưng nếu muốn truyền vào 10 100 tham số nếu làm thế sẽ bất tiện
 * ==> sử dụng arguments
 * arguments tồn tại trong scope của một function, không tồn tại trong arrow func
 */
//Kiểm tra arguments
function argumentsCheck(){
    console.log(arguments)
    console.log(arguments.length)
}

//mặc dù không khai báo tham số nhưng khi log ra ta sẽ thấy nhưng tham số mà ta truyền vào dưới dạng obj
argumentsCheck(3,4,5,6,7)//log ra { '0': 3, '1': 4, '2': 5, '3': 6, '4': 7 } và 5=>nó có thuộc tính length

//tính tổng trong arguments c1
function sumArugments(){
    let sum=0;
    for (let i = 0; i < arguments.length; i++) {
        sum+=arguments[i]       
    }
    return sum;
}
//ta có thể truyền vào bất kỳ bao nhiêu tham số ta muốn
var sumArugments=sumArugments(1,2,3,4,5,6);
console.log(sumArugments)

//tính tổng trong arguments c2
function sumArugments2(){

    //Array.from nhận vào một array like obj rồi chuyển sang một array
    const number=Array.from(arguments);

    const res=number.reduce((sum,num)=>sum+num,0)

    return res
}
sumArugments2(2,3,4,5,7)
