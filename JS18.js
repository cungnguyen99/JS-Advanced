//SPREAD
const manga=[1,2,3]
const mangb=[0,...manga,4]
const mangc=[0,manga,4]
//log ra de thay su khac nhau
console.log(mangb)
console.log(mangc)
/**
 * Sự khác nhau là mangb khi thêm ...manga nó sẽ trải các phần tử của manga vào mảng b
 * còn khi thêm manga vào mangc thì nó sẽ lồng manga vào mangc
 * 
 * SỰ KHÁC NHAU GIỮA REST VÀ SPREAD
 * khi ta khai báo một funtion sum(...manga) 
 */
function sumSpread(){
    var sum=0
    for (const val of arguments) {
        sum+=val
    }
    return sum
}

console.log(sumSpread(...manga))//tương đương với việc sum(1,2,3)

function sumRest(...rest){
    return rest.reduce((a,b)=>a+b,0)
}

console.log(sumRest(1,2,3))//tương đương với việc sum([1,2,3])