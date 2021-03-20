This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Get Started

- Install [NodeJS](https://nodejs.org/en/) & [Git](https://git-scm.com/)
- Optional - Install yarn globally `npm  install -g yarn`
- Clone the project `git clone https://github.com/batchu/elysian-web` and `cd elysian-web`
- Run the command in candor-web folder `npm install`
- Start the project 'npm run start`, open http://localhost:3000 on your browser


## Essential GIT commands

- Add, Commit & Push - `git add -am "message" && git push`
- Reset git reset

## Debugging in VsCode with Chrome
Click on the Debug icon on the left strip, Click on the settings icon to open up launch.json. Add the following to your launch.json. Click on the Green arrow to begin debugging.
`{
    "version": "0.2.0",
    "configurations": [
      {
        "type": "chrome",
        "request": "launch",
        "name": "Launch Chrome against localhost",
        "url": "http://localhost:3000",
        "webRoot": "${workspaceFolder}",
        "userDataDir": false
      }
    ]
  }`

### State

`
{
  "user": {
    "user": {
      "googleId": "102006247468931289975",
      "imageUrl": "https://lh6.googleusercontent.com/-0UkrovuhtAU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclJvh2ywYgGVgSSpFxLaxm2eBJNxg/s96-c/photo.jpg",
      "email": "user@gmail.com",
      "name": "User A",
      "givenName": "User",
      "familyName": "A",
      "type": "google"
    }
  },
  "settings": {},
  "history": {
    "length": 1,
    "action": "POP",
    "location": {
      "pathname": "/",
      "search": "",
      "hash": ""
    }
  }
}
`