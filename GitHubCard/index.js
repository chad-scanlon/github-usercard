/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


const cardCreator = (objectData) => {
    const newCard = document.createElement("div")
    const profileImage = document.createElement("img")
    const cardInfo = document.createElement("div")
    const name = document.createElement("h3")
    const userName = document.createElement("p")
    const userLocation = document.createElement("p")
    const profile = document.createElement("p")
    const link = document.createElement("a");
    const followers = document.createElement("p")
    const following = document.createElement("p")
    const bio = document.createElement("p")

    newCard.appendChild(profileImage)
    newCard.appendChild(cardInfo)
    cardInfo.appendChild(name)
    cardInfo.appendChild(userName)
    cardInfo.appendChild(userLocation)
    cardInfo.appendChild(profile)
    profile.appendChild(link);
    cardInfo.appendChild(followers)
    cardInfo.appendChild(following)
    cardInfo.appendChild(bio)

    newCard.classList.add("card")
        // profileImage.classList.add("card", "img")
        // name.classList.add("card", "name")
    userLocation.classList.add("p")
    userName.classList.add("username")
    profile.classList.add("p")
    followers.classList.add("p")
    following.classList.add("p")
    bio.classList.add("p")

    profileImage.src = objectData.avatar_url
    name.textContent = objectData.name
    userName.textContent = objectData.login
    userLocation.textContent = objectData.location
    link.href = objectData.url
    followers.textContent = `${objectData.login} has ${objectData.followers} followers`
    following.textContent = `${objectData.login} is following ${objectData.followers} `
    bio.textContent = `Bio: ${objectData.bio}`

    return newCard
}

const studentCard = document.querySelector(".cards")
    // studentCard.appendChild(cardCreator())



axios.get("https://api.github.com/users/chad-scanlon")

.then(response => {
    studentCard.prepend(cardCreator(response.data))
})

const user = axios.get("https://api.github.com/users/tetondan")
    .then(response => {
        followersArray.forEach(user => {
            cardCreator(response.data)
        })
        studentCard.appendChild(cardCreator(response.data))
    })
const user2 = axios.get("https://api.github.com/users/dustinmyers")
    .then(response => {
        followersArray.forEach(user => {
            cardCreator(response.data)
        })
        studentCard.appendChild(cardCreator(response.data))
    })
const user3 = axios.get("https://api.github.com/users/justsml")
    .then(response => {
        followersArray.forEach(user => {
            cardCreator(response.data)
        })
        studentCard.appendChild(cardCreator(response.data))
    })
const user4 = axios.get("https://api.github.com/users/luishrd")
    .then(response => {
        followersArray.forEach(user => {
            cardCreator(response.data)
        })
        studentCard.appendChild(cardCreator(response.data))
    })
const user5 = axios.get("https://api.github.com/users/bigknell")
    .then(response => {
        followersArray.forEach(user => {
            cardCreator(response.data)
        })
        studentCard.appendChild(cardCreator(response.data))
    })