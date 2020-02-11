/**
 * Hàm higher-order (higher-order function) là hàm có hoạt động dựa trên 1 hàm khác, 
 * tức là: nó có thể nhận hàm (function) làm tham số đầu vào, hoặc sẽ return ra 1 hàm khác. 
 * Một trong 2 điều kiện đó xảy ra thì được gọi là hàm higher-order.
 */

/**
 * VD ham nhan dau vao la mot tham so
 */
function waitAndRun(ms,func){
    setTimeout(func, ms)
}

function run(){
    console.log('Runing...')
}

//phai truyen vao run chu khong phai run()
waitAndRun(400, run)

/**
 * Vi du ham tra ve mot ham
 */
function makeMultiplier( multNum ) {
    return function( num ) { return multNum * num };
}

const doubler = makeMultiplier(2); 
const three_2=doubler(3)

console.log(three_2)