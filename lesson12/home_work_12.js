// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(value => {
        let mainDiv = document.createElement("div");
        mainDiv.style.display = "flex";
        mainDiv.style.flexWrap = "wrap";
        value.forEach(post => {

            let div = document.createElement("div");
            div.style.width = "17%";
            div.style.margin = "20px auto";
            div.style.border = "1px solid red";
            div.style.textAlign = "center"
            let postDiv = document.createElement("div");
            let idUser = document.createElement("div");
            idUser.innerText = post.userId;
            let id = document.createElement("div");
            id.innerText = post.id;
            let title = document.createElement("div");
            title.innerText = post.title;
            let body = document.createElement("div");
            body.innerText = post.body;
            postDiv.append(idUser, id, title, body);
            div.appendChild(postDiv);
            mainDiv.append(div);
            document.body.append(mainDiv);
        });
    })



//
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(value => {
        let mainDiv = document.createElement("div");
        mainDiv.style.display = "flex";
        mainDiv.style.flexWrap = "wrap";
        value.forEach(comment => {
            let div = document.createElement("div");
            div.style.width = "17%";
            div.style.margin = "20px auto";
            div.style.border = "1px solid black";
            div.style.textAlign = "center"
            let postDiv = document.createElement("div");
            let postId = document.createElement("div");
            postId.innerText = comment.postId;
            let id = document.createElement("div");
            id.innerText = comment.id;
            let name = document.createElement("div");
            name.innerText = comment.name;
            let email = document.createElement("div");
            email.innerText = comment.email;
            let body = document.createElement("div");
            body.innerText = comment.body;
            postDiv.append(postId, id, name, email, body);
            div.appendChild(postDiv);
            mainDiv.append(div);
            document.body.append(mainDiv);
        });
    })
