class Joke {
  constructor() {
    this.lead = document.getElementById('setup');
    this.punchline = document.getElementById('punchline');
  }

  // Fetch joke from API
  async getJoke() {
    const response = await fetch(`https://official-joke-api.appspot.com/random_joke`)

    const responseData = await response.json();
    return responseData;
  }

}


