const fs = require('fs')
const Employee = require('./employee')

class Groop {
  constructor() {
    this.person = []
  }

  addPerson(person) {
    this.person.push(person)
  }

  renderPersonHTML() {
    return this.person.map((person) => Employee.renderSpecialHTML()).join('')
  }

  renderExampleHTML() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
      ${this.renderPersonHTML()}
    </body>
    </html>`
  }

  saveFile() {
    fs.writeFile('./dist/index.html', this.renderExampleHTML(), (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Successfully generateHTML')
      }
    })
  }
}
module.exports = Groop
