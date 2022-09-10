const inquirer = require('inquirer')
const fs = require('fs')
const baseHtml = require('./dist/baseHTML.js')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

const team = []

init = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'TM',
        message: 'what is the name of this project?',
      },
      {
        type: 'input',
        name: 'TM1',
        message: 'what is the name?',
      },
      {
        type: 'list',
        name: 'TM1Job',
        message: 'what do they make?',
        choices: ['Engineer', 'Intern', 'Manager'],
      },
      {
        type: 'input',
        name: 'TM1Id',
        message: 'what is the id',
      },
      {
        type: 'input',
        name: 'TM1Email',
        message: 'what is the email',
      },
      {
        type: 'input',
        name: 'TM1Github',
        message: 'what is the github',
      },
      {
        type: 'input',
        name: 'TM2manager',
        message: 'what is the name?',
      },
      {
        type: 'list',
        name: 'TM2Job',
        message: 'who do they manage?',
        choices: ['Engineer', 'Intern', 'Manager'],
      },
      {
        type: 'input',
        name: 'TM2Id',
        message: 'what is the id',
      },
      {
        type: 'input',
        name: 'TM2Email',
        message: 'what is the email',
      },
      {
        type: 'input',
        name: 'TM2Github',
        message: 'what is the github',
      },
      {
        type: 'input',
        name: 'managersOfficeNumber',
        message: 'whats the officeNumber?',
      },
      {
        type: 'input',
        name: 'TM3intern',
        message: 'what is the name?',
      },
      {
        type: 'list',
        name: 'TM3Job',
        message: 'what is the school?',
        choices: ['Engineer', 'Intern', 'Manager'],
      },
      {
        type: 'input',
        name: 'TM3Id',
        message: 'what is the id',
      },
      {
        type: 'input',
        name: 'TM3Email',
        message: 'what is the email',
      },
      {
        type: 'input',
        name: 'TM3Github',
        message: 'what is the github',
      },
      {
        type: 'list',
        name: 'school',
        message: 'what school did you go to?',
        choices: ['DU', 'MIT', 'USC'],
      },
    ])
    .then((answer) => {
      const stringifiedTeam = JSON.stringify(answer)
      fs.writeFile('./dist/make.html', stringifiedTeam, 'uft-8', (err) => {
        if (err) {
          console.log(err)
        } else {
          console.log('Successfully created index.html!')
        }
      })
    })
}

init()
