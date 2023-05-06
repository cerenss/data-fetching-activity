/* 
1- Create a program that fetches 10 users from the jsonplaceholderAPI

2- Using the data you just fetched, create 10 user cards and show them on the screen.

3- They might appear directly on the screen, or you can fetch the data with a button click, its your choice.

PS: You definitely dont need to use all the data coming from the API, design and style your user cards to your hearts desire!

BONUS: Do a POST request to the https://jsonplaceholder.typicode.com/posts endpoint adding a new post there, and console log the result.


*/

const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");
document.body.prepend(cardContainer);

const titleContainer = document.createElement("div");
titleContainer.classList.add("title-container");
//titleContainer.innerHTML = "<p>Ceren's users</p>"
titleContainer.innerHTML = '<img class="title-img" src="./icon/welcome-back.png" alt=""/>';
document.body.prepend(titleContainer);



async function fetchData () {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);

    for (let i=0; i<data.length; i++) {
        const user = data[i];
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");
        userCard.innerHTML = `<div class="title"><h2>${user.name}</h2> <p class="id">${user.id}</p></div>  
        <p><span class="label">Username: </span>${user.username}</p>
        <p><span class="label">Email: </span>${user.email}</p>
        <p><span class="label">Website: </span>${user.website}</p>
        <p><span class="label">Phone: </span>${user.phone}</p>`;
        cardContainer.appendChild(userCard);
    }

   }

   fetchData();
