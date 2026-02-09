class App {
  constructor() {
    this.serverName = 'localhost';

    document
      .querySelector('button')
      .addEventListener('click', this.getServerName.bind(this));
  }

  getServerName() {
    console.log(this.serverName);
  }
}

const app = new App();

// inside the constructor, "this" keyword is actually equal to the instantion of the the App class which is "app"
// so in here, "this.getServerName.bind(this)" this is actually app. like "this === app" instance
// like => this.getServerName.bind(this) is the same as this.getServerName.bind(app)

// https://chatgpt.com/share/698a229d-026c-8000-8f2f-91b8698604f3
