class UI {
  constructor() {
    this.setup = document.getElementById('setup');
    this.punchline = document.getElementById('punchline');
  }

  paint(joke) {
    this.setup.textContent = joke.setup;
    this.punchline.textContent = joke.punchline;
  }
}