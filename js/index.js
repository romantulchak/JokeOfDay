let jokeText = document.getElementById('jokeText');

window.onload = function(){
    getJoke();
}



function getJoke(event){
    if(event != undefined){
        event.classList.add('loader');
        event.innerHTML = "";
        event.classList.remove('new__joke');
    }
  fetch("https://icanhazdadjoke.com/", {
        method: "get",
        headers: {
            "Accept": "application/json ",
        },
    }).then( json => {
        return json.json();
    })
    .then( (joke) => {
       setTimeout(() => {
        if(event != null){
            event.classList.remove('loader');
            event.classList.add('new__joke');
            event.innerHTML = "Get new Joke";
        }

        jokeText.innerHTML = joke.joke;
       }, 1000);
    });
}
