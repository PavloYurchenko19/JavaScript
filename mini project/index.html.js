// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули

// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.

fetch("https://jsonplaceholder.typicode.com/users")
    .then(responce => responce.json())
    .then(users => {
        let mainDiv = document.createElement("div");
        mainDiv.style.display = "flex";
        mainDiv.style.flexWrap = "wrap";
        mainDiv.style.justifyContent = "center";

        users.forEach((user) => {
            let userDiv = document.createElement("div");
            userDiv.style.boxShadow = " 0 0 5px black";
            userDiv.style.boxSizing = "border-box";
            userDiv.style.textAlign = "center";
            userDiv.style.padding = "10px";
            userDiv.style.margin = "20px";
            userDiv.style.width = "40%";

            let btn = document.createElement("button");
            btn.innerText ="user-details"
            btn.onclick = (e) => {
                localStorage.setItem('user' , JSON.stringify(user));
                document.location = "user-details.html"

            };


            userDiv.innerHTML = `
            <h1>${user.id} </h1>
            <h2>${user.name}</h2>
            `
            userDiv.append(btn);
            mainDiv.append(userDiv)
        });
        document.body.appendChild(mainDiv);

});
