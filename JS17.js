//KEY WORD REST: goi la phan thua cua nhung tham so ta truyen vao
function log(a){
    console.log(a)
}
//khi ta goi ham ma truyen nhieu hon 1 tham so thi ta se khong log ra duoc cac tham so con lai
log('se khong log ra duoc cac so sau so 1: '+1,2,3,4,5)

//khi muon log ra phan thua nhu vay ta su dung bien rest: no se log ra nhung phan tu con thua duoi dang mot mang

function logRest(a,...phanConThua){
    console.log(a)
    console.log(phanConThua)
}

logRest(1,2,3,4,5)

/**
 * gan giong voi arguments nhung cac phan  tu trong arguments log ra duoi dang cac obj duoc goi la arraylike
 * con rest tra ve mot mang luon
 */

function logRest1(a,...phanConThua){
    console.log(a)
    console.log(phanConThua)
    console.log(arguments)
}
logRest1(1,2,3,4,6)

//ung dung: tinh tong
function sum(...phanConThua){
    //neu ta dung argument ta phai them 1 buoc dua no ve array con dung rest thi khong can
    return phanConThua.reduce((a,b)=>a+b,0)
}
console.log(sum(1,2,3,4,5))