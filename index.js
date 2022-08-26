const inquirer = require('inquirer')
const fs = require('fs')
const Employee = require('./lib/employee')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

const manager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'manager',
      message: 'Who is the manager?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'what is the GitHub',
    },
    {
      type: 'input',
      name: 'email',
      message: 'what is the email',
    },
  ])
}
addEmployee = () => {
  return inquirer.prompt([])
}

const generateHTML = ({ name, location, github, linkedin }) =>
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${name}</h1>
      <p class="lead">I am from ${location}.</p>
      <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${github}</li>
        <li class="list-group-item">LinkedIn: ${linkedin}</li>
      </ul>
    </div>
  </div>
  </body>
  </html>`

const init = () => {
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err))
}

init()
