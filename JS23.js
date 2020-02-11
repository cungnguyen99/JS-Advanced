/**
 *  Destructuring: dỡ bỏ cấu trúc trong arr và obj. Khi ta muốn khai báo các phần tử rồi gán cho nó thì ta thường viết
 * var a=3, var b=4
 */
const arr=[1,2,3,4,5]

const [a,b,c,d,e]=arr

console.log(a,b,c,d,e)//se ra 1,2,3,4,5

const [a1,d1]=arr

console.log(a1,d1)//se ra 1,2

//bo hai bien ở giữa lấy biến ở vtri 1 và 4
const [a2, , , d2]=arr

console.log(a2,d2)//se ra 1,4

//dùng rest
const [a3,...d3]=arr

console.log(a3,d3)//se ra 1 [2,3,4,5]

//dùng kiểu gán mặc định
const [a4,d4=10]=arr

console.log(a4,d4)//se ra 1 10

const obj={
    e:1,
    d:2,
    f:3
}

// const {e:x, d:y, f:z}=obj

// console.log(x,y,z) //log ra 1,2,3

//ta cũng có thể dùng biến trùng tên luôn
// const {e: e, d: d, f: f}=obj

// console.log(e,d,f) //log ra 1,2,3

//do biến trùng tên mà ta đã học ở bài 11 dùng Enhanced viet lai nhu sau

const {e, d, f}=obj

console.log(e,d,f) //log ra 1,2,3

//dung rest
const {a,...c}=obj
console.log(a,c)