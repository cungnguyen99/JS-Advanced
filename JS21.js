/**
 * Closure là một hàm được tạo ra từ bên trong một hàm khác (hàm cha), nó có thể sử dụng các biến toàn cục,
 * biến cục bộ của hàm cha và biến cục bộ của chính nó. 
 */
//vi du
function sum(a,b){
    const c=a+b
    return function(){
        console.log(c)
    }
}
//de chay ham tren ta lam sum(1,2)() phai co them () vi ham sum tra ve mot func ma muon chay thi ta phai them ()
sum(1,2)()

//di vao vi du thuc te
// Bước 1: Tạo hàm closure
function showMessage(message)
{
    return function(str){
        console.log(`[bien message: ${message}], ${str}`)
    };
}
 
/**
 * Bước 2: khởi tạo hàm closure
 * dòng dưới ta gọi showMessage('Xin chào các bạn') thì như ở trên nó sẽ trả về một func và messageFunc 
 * sẽ được gán vs func đó và biến message ở đây sẽ là 'Xin chào các bạn'
 */
const messageFunc = showMessage('Xin chào các bạn');
 
/**
 * Bước 3: Chạy hàm closure
 * Khi hàm messageFunc được gọi thì ta sẽ truyền một biến nữa vào là biến str trong hàm showMessage
 * khi return về một func ở trên
 */
messageFunc('Error 404');