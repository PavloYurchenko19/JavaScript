// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.

let someUser = localStorage.getItem("user");
let parseUser = JSON.parse(someUser);
let id = parseUser.id
let mainDiv = document.createElement("div");
document.body.style.background = "silver";
mainDiv.style.padding = "20px";
document.body.style.margin = "0";
let userDiv = document.createElement("div");
userDiv.style.boxShadow = " 0 0 10px black";
userDiv.style.width = " 30%";
userDiv.style.margin = "auto";
userDiv.style.padding = "20px";

userDiv.innerHTML = `
<h2>id ${parseUser.id}</h2> 
<h3>${parseUser.name} </h3>
<p>username ${parseUser.username}</p>


<p>email ${parseUser.email}</p>

<ul>address:
<li>street ${parseUser.address.street}</li>
<li>suite ${parseUser.address.suite}</li>
<li> city ${parseUser.address.city}</li>
<li> zipcode ${parseUser.address.zipcode}</li>
</ul>
<ul> geo : 
<ol>lat ${parseUser.address.geo.lat}</ol>
<ol>lng ${parseUser.address.geo.lng}</ol>
</ul>
</ul>
<p>phone ${parseUser.phone}</p>
<p>website ${parseUser.website}</p>
<ul>company :
    <li>name ${parseUser.company.name} </li>            
    <li>catchPhrase ${parseUser.company.catchPhrase} </li>            
    <li>bs ${parseUser.company.bs} </li>            

</ul>
`;

let postBtn = document.createElement("button");
postBtn.style.width = "80%";
postBtn.style.display = "block";
postBtn.style.margin = " 20px auto";
postBtn.style.boxSizing = " border-box";
postBtn.style.height = " 35px ";

mainDiv.append(userDiv,postBtn)
postBtn.innerText = "posts of current user";
document.body.append(mainDiv);

// блоки с краткой информацией про post - в ряд по 5 объектов.

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(responce => responce.json())
    .then(posts => {
        postBtn.onclick = () => {
            let mainH2Div = document.createElement("div");
            mainH2Div.style.background = " cornflowerblue";
            mainH2Div.style.boxShadow = " 0 0 10px black";
            mainH2Div.style.display = "flex";
            mainH2Div.style.padding = "20px";
            mainH2Div.style.flexWrap = "wrap";
            mainH2Div.style.textAlign = "center";
            posts.forEach((post) => {

                let h2Div = document.createElement("div");
                h2Div.style.width = "19%";
                h2Div.style.background = "green";
                h2Div.style.border = "1px solid black";
                h2Div.style.boxSizing = "border-box";
                h2Div.style.padding = "10px";
                h2Div.style.margin = "5px auto";

                let h2 = document.createElement("h2");
                h2.innerText = ` post ${post.id} \n ${post.title}`;
                let commentBtn = document.createElement("button");
                commentBtn.innerText = "Open comment to this post ";
                commentBtn.onclick = () => {
                    localStorage.setItem('post' , JSON.stringify(post));
                    document.location = "post-details.html";

                };
                h2Div.append(h2,commentBtn);

                mainH2Div.append(h2Div);

            });
            document.body.append(mainH2Div);

        };


    });