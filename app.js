const url ="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political"
const joke = document.getElementById("joke");
const btn = document.getElementById("btn");

let getJoke=()=>{
fetch(url)
.then(data =>data.json())
.then(item =>//console.log(item)
{
    console.log(item)
joke.textContent=`${item.joke}`
}
);
}
btn.addEventListener("click", getJoke());
getJoke();