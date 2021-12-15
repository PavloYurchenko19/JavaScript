// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при к ліку на яку з лс видаляється конкретний обраний  товар
let f1 = document.forms.f1;
let arr = [];
localStorage.setItem('users',JSON.stringify(arr))
let item = localStorage.getItem('users');
let parseArr = JSON.parse(item);
f1.onsubmit = function (e) {

    e.preventDefault();
    let data = new Date()
    let id =data.getTime() ;
    let name = this.name.value;
    let quantity = this.quantity.value;
    let price = this.price.value;
    let img = this.img.value;
    let temporaryArr = {id,name, quantity, price, img};
    if (parseArr === null) {

        arr.push(temporaryArr)
        localStorage.setItem('users' , JSON.stringify(arr));

    }else {

        arr.push(temporaryArr)
        localStorage.setItem('users' , JSON.stringify(arr));
    }

};