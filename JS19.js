//value type vs reference type

let a1=1
let a2=1

console.log(a1===a2)//log ra true

let obj1={a:1}
let obj2={a:1}

/**
 * log ra false vì ta giả sử object {a:1} là một cái nhà mà khi ta khai báo một cái biến để lưu trữ obj ấy thì nó không
 * đủ khả năng để lưu lại cả cái nhà nên nó chỉ lưu số nhà. tương tự khi ta khai báo obj2 chứa {a:1} nó cũng chỉ lưu
 * tên số nhà của cái nhà đấy. Mặc dù nội thất bên trong giống nhau nhưng số nhà khác nhau mà khi so sánh 2 obj
 * nó sẽ so sánh số nhà nên 2 số nhà khác nhau sẽ ra false
 * TRONG ARRAY, FUNCTION CŨNG GIỐNG NHƯ OBJECT
 */
console.log(obj1===obj2)//log ra false


let a3=a2
a3=2
/**
 * log ra false vì a3 coppy giá trị từ a2 nên a2 vẫn giữ nguyên giá trị
 */
console.log(a3===a2)

let obj3=obj2
obj3.a=2
/**
 * log ra true vì khi ta gán obj2 cho obj3 thì thực chất nó đang gán 2 số nhà cho nhau nên obj3 và obj2 đều có 
 * chung số nhà, và khi đó giá trị của obj3 và obj2 đều là {a:2}
 */
console.log({obj3,obj2})
console.log(obj3===obj2)


//SO SÁNH TRONG FUNCTION
function log1(a1){
    a1=6
    console.log(a1)
}

/**
 * khi ta log lại biến a1 ở ngoài thì biến a1 đó vẫn giữ nguyên giá trị
 */
log1(a1)
console.log(a1)

function log2(x){
    x.b=2
}
log2(obj3)
/**
 * khi ta log ra thì obj3 sẽ bị thay đổi
 */
console.log(obj3)