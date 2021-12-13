// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then((users) => {
        let maineDiv = document.createElement("div");
        maineDiv.classList.add("wrap");
        for (let user of users) {
            let userDiv = document.createElement("div");
            userDiv.classList.add("userDiv");

            userDiv.innerHTML = `
               <h2>id ${user.id}</h2> 
                <h3>${user.name} </h3>
                <p>username ${user.username}</p>
                <p>email ${user.email}</p>
                
                <ul>address:
                <li>street ${user.address.street}</li>
                <li>suite ${user.address.suite}</li>
                <li> city ${user.address.city}</li>
                <li> zipcode ${user.address.zipcode}</li>
                </ul>
                <ul> geo : 
                <ol>lat ${user.address.geo.lat}</ol>
                <ol>lng ${user.address.geo.lng}</ol>
                </ul>
                </ul>
                <p>phone ${user.phone}</p>
                <p>website ${user.website}</p>
                <ul>company :
                    <li>name ${user.company.name} </li>            
                    <li>catchPhrase ${user.company.catchPhrase} </li>            
                    <li>bs ${user.company.bs} </li>            
                
     
                </ul>

                    
                
            `
            let button = document.createElement("button");
            button.innerText = "open";
            button.id = user.id
            button.classList.add("btn");
            button.onclick = (e) => {
                let target = e.target;

                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then((post) => {
                        let pop = document.createElement("div");
                        pop.classList.add("pop")
                        let hiddenBtn = document.createElement("button");
                        hiddenBtn.innerText = "go back";
                        hiddenBtn.style.marginLeft = "40px";

                        post.forEach((post) => {

                            if (+target.id === post.userId) {
                                let maineDivP = document.createElement("div");
                                let postDiv = document.createElement("div");
                                postDiv.innerHTML = `
                                <h2>post ${post.id}</h2>    
                                <h2>${post.title}</h2>
                                <p>${post.body}</p>
                                `
                                maineDivP.append(postDiv);
                                button.onclick = () => {
                                    pop.classList.toggle("hidden")
                                };
                                let button2 = document.createElement("button");
                                button2.innerText = "open comment";

                                hiddenBtn.onclick = () => {
                                    pop.classList.toggle("hidden")
                                };
                                postDiv.append(button2, hiddenBtn)


                                pop.append(maineDivP)
                                document.body.append(pop);
                                button2.onclick = (e) => {
                                    fetch('https://jsonplaceholder.typicode.com/comments')
                                        .then(response => response.json())
                                        .then(comments => {
                                            let commentDiv = document.createElement("div");
                                            commentDiv.classList.add("comment")
                                            let hiddenBtn = document.createElement("button");
                                            hiddenBtn.innerText = "go back";
                                            commentDiv.append(hiddenBtn);

                                            comments.forEach((comment) => {
                                                if (comment.postId === post.id) {
                                                    let commentD = document.createElement("div");
                                                    commentD.innerHTML = `
                                                    <h2>comment ${comment.id} to post ${post.id}</h2>
                                                    <h2>${comment.name}</h2>
                                                    <p>${comment.email}</p>                                                   
                                                    <p>${comment.body}</p>                                                   
                                                    `
                                                    commentDiv.append(commentD);

                                                    button2.onclick = () => {
                                                        commentDiv.classList.toggle("hidden")
                                                    };
                                                    hiddenBtn.onclick = () => {
                                                        commentDiv.classList.toggle("hidden")
                                                    };
                                                }
                                                document.body.append(commentDiv);
                                            });
                                        });
                                };

                            }
                        });
                    });
            };

            userDiv.append(button);

            let idUser = user.id;

            console.log(idUser);


            maineDiv.appendChild(userDiv);
        }


        document.body.appendChild(maineDiv);


        // console.log(value);
    });
