// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let f1 = document.forms.f1;
let lengthLocalStoreg = localStorage.length;
let id = lengthLocalStoreg;
f1.onsubmit = function (e) {
    e.preventDefault();
    let name = this.name.value;
    let quantity = this.quantity.value;
    let price = this.price.value;
    let img = this.img.value;
    id++;
    let temporaryArr = {name, quantity, price, img};
    let item = localStorage.getItem('user' + id);
    // console.log(JSON.stringify(temporaryArr));
    let parseArr = JSON.parse(item);
    if (parseArr === null) {
        arr  =[]

        localStorage.setItem('user' + id, JSON.stringify(temporaryArr));

    }else {
        localStorage.setItem('user' + id, JSON.stringify(temporaryArr));
    }
};
