//ARROW FUNCTION
function sum1(a,b){
    return a+b
}
sum1(1,2)
var sum2=function(a,b){
    return a+b
}
sum2(1,2)
//khi sử dụng arrow function sẽ bỏ chữ function thêm mũi tên sau (a,b)
var sum3=(a,b)=>{
    return a+b
}
sum3(1,2)

//khi chỉ có một dòng lệnh ta có thể bỏ dấu {} và phải bỏ luôn chữ return do "=>" đã có nghĩa là return rồi
var sum4=(a,b)=>a+b

//nếu có 1 biến thì k cần ()
var square=x=>x*x

//bình phương một mảng
var arr=[2,3,4,5]
arr.map(x=>x*x)//log ra mảng [4,6,8,10]

