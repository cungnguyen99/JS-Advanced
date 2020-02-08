/**
 * SPREAD 2: Khi ta muốn có 2 obj giống nhau, mà thay đổi các giá trị của key mà obj bị gán k thay đổi giá trị
 * ta sẽ dùng shallow cloning bằng spread để làm
 */
//trc tiên hiểu thế nào là shallow cloning
const obj1 = {
    a:1,
    b:2,
    c:3
}
//nếu để let obj2=obj1 thì khi thay đổi obj2.b=4 thì obj1.b cũng bị thay đổi
let obj2={}
for (const key in obj1) {
    obj2[key]=obj1[key]
}
//khi ta thay đổi a thì obj1 không thay đổi
obj2.a=5
console.log({obj1, obj2})

//nhưng khi ta có 1 obj như sau
const obj3 = {
    a:1,
    b:2,
    c:3,
    d:{e:10}
}
let obj4={}
for (const key in obj3) {
    obj4[key]=obj3[key]
}
//khi ta thay đổi a thì obj3 vẫn sẽ bị thay đổi do trong vòng for khi đến key d thì obj4.d=obj3.d mà cả 2 đều là 1 obj
//chứ không phải là 1 số như ở trên nên khi thay đổi nó vẫn sẽ thay đổi obj gốc nó goi là SHALLOW CLONING
obj4.d.e=9
console.log({obj3, obj4})

//TA DÙNG SPREAD để làm shallow cloning
const obj5 = {
    ...obj3,
    z:10
}
console.log(obj5)

//Để muốn khi thay đổi obj5.d.e=6 và obj3 không thay đổi ta phải dùng deepclone 