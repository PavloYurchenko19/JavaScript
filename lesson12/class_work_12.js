// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(value1 => {
            let mainDiv = document.createElement("div");
            mainDiv.style.display = "flex";
            mainDiv.style.flexWrap = "wrap";
            value1.forEach(post => {

                let div = document.createElement("div");
                div.style.width = "17%";
                div.style.margin = "20px auto";
                div.style.border = "1px solid red";
                div.style.textAlign = "center"
                let postDiv = document.createElement("div");
                postDiv.style.position = "relative";
                let idUser = document.createElement("div");
                idUser.innerText = post.userId;
                let id = document.createElement("div");
                id.innerText = post.id;
                id.id = "id";
                let title = document.createElement("div");
                title.innerText = post.title;
                let body = document.createElement("div");
                body.innerText = post.body;
                let btn = document.createElement("button");
                btn.innerText = 'comment';
                btn.style.padding = "10px";
                btn.style.margin = "10px";

                btn.onclick = () => {

                    let y = scrollY ;
                    y += 250;

                    for (let i = 0; i <= value1.length; i++) {
                        if (i === post.id) {
                            fetch('https://jsonplaceholder.typicode.com/comments')
                                .then(response => response.json())
                                .then(value => {
                                    value.forEach(coment => {
                                        if (i === coment.id) {
                                            let popupDiv = document.createElement("div");
                                            popupDiv.style.width = "400px";
                                            popupDiv.style.height = "auto";
                                            popupDiv.style.border = "2px solid blue";
                                            popupDiv.style.position = "absolute";
                                            popupDiv.style.top =y+ "px";
                                            popupDiv.style.background = 'gray';
                                            popupDiv.style.padding = "50px 20px";
                                            popupDiv.style.right = "43%" ;
                                            popupDiv.style.textAlign = "center";
                                            let idDiv = document.createElement("div");
                                            idDiv.innerText = coment.id;
                                            let name = document.createElement("div");
                                            name.innerText = coment.name;
                                            let body = document.createElement("div");
                                            body.innerText = coment.body;
                                            btn.onmouseleave = () => {
                                                popupDiv.classList.toggle('hidden');
                                            };

                                            popupDiv.append(idDiv, name, body);

                                            document.body.append(popupDiv);

                                        }

                                    });
                                });

                        }
                    }
                };

                postDiv.append(idUser, id, title, body, btn);
                div.appendChild(postDiv);
                mainDiv.append(div);
                document.body.append(mainDiv);
            });

    });

