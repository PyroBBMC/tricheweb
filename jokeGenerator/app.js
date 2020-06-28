// Init Joke
const joke = new Joke();

// Init UI
const ui = new UI();

// Generates a joke when the page is loaded
document.addEventListener("DOMContentLoad", getJoke());

// Event listner for new joke 
document.getElementById('new-joke').addEventListener('click', newJoke);

function getJoke() {
  joke.getJoke()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}

function newJoke() {
  location.reload();
}