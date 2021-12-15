// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.

//     Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)

let post = localStorage.getItem("post");
let parsePost = JSON.parse(post);
let mainDiv = document.createElement("div");
let postDiv = document.createElement("div");
postDiv.style.boxShadow = " 0 0 10px black"
postDiv.style.textAlign = " center"
postDiv.style.padding = " 20px"
postDiv.style.margin = " 20px 0"
postDiv.innerHTML = `
<h1>Post ${parsePost.id}</h1>
<h2>User ${parsePost.userId}</h2>
<h2>${parsePost.title}</h2>
<p>${parsePost.body}</p>
`;
mainDiv.append(postDiv);
document.body.append(mainDiv);

fetch(`https://jsonplaceholder.typicode.com/posts/${parsePost.id}/comments`)
    .then(responce => responce.json())
    .then((coments) => {
        let mainDiv = document.createElement("div");
        mainDiv.style.display = "flex";
        mainDiv.style.flexWrap = "wrap";
        mainDiv.style.background = "silver";
        coments.forEach((commet) => {
            let commentDiv = document.createElement("div");
            commentDiv.style.width = "18%";
            commentDiv.style.background = " yellow"
            commentDiv.style.margin = "20px auto"
            commentDiv.style.padding = "20px "
            commentDiv.style.boxSizing = "border-box "
            commentDiv.innerHTML = `
                    <h2> Commet for post ${commet.postId}</h2>
                    <h2> Commet number ${commet.id}</h2>
                    <p>Name <strong>${commet.name}</strong></p>
                    <p>Email <b>${commet.email}</b></p>
                    <p>${commet.body}</p>
        `;
            mainDiv.append(commentDiv);
            document.body.append(mainDiv);

        });

    })
;

