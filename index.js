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
      return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        />        
        </head>
        <body>
          body>
          <section class="nav">
            <div class="header">
              <h1 class="teamname">${answer.TM}</h1>
            </div>
          </section>
          <section class="body">
            <div class="cardcontainer">
              <div class="card">
                <div class="cardheader">
                  <h1>${answer.TM1}</h1>
                  <h3>${answer.TM1Job}</h3>
                </div>
                <div class="cardbody">
                  <div class="tile"><p>ID: ${answer.TM1Job}</p></div>
                  <div class="tile">
                    Email:
                    <a href="mailto:${answer.TM1Email}" target="_blank">${answer.TM1Email}</a>
                  </div>
                  <div class="tile">
                    Github:
                    <a href="https://github.com/${answer.TM1Github}" target="_blank"
                      >${answer.TM1Github}</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="cardcontainer">
              <div class="card">
                <div class="cardheader">
                  <h1>${answer.TM2manager}</h1>
                  <h3>${answer.TM2Job}</h3>
                </div>
                <div class="cardbody">
                  <div class="tile"><p>ID: ${answer.TM2Id}</p></div>
                  <div class="tile">
                    Email:
                    <a href="mailto:${answer.TM2Email}" target="_blank">${answer.TM2Email}</a>
                  </div>
                  <div class="tile">
                    Github:
                    <a href="https://github.com/${answer.TM2Github}" target="_blank"
                      >${answer.TM2Github}</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="cardcontainer">
              <div class="card">
                <div class="cardheader">
                  <h1>${answer.TM3intern}</h1>
                  <h3>${answer.TM3Job}</h3>
                  <h4>${answer.school}</h4>
                </div>
                <div class="cardbody">
                  <div class="tile"><p>ID: ${answer.TM3Id}</p></div>
                  <div class="tile">
                    Email:
                    <a href="mailto:${answer.TM3Email}" target="_blank">${answer.TM3Email}</a>
                  </div>
                  <div class="tile">
                    Github:
                    <a href="https://github.com/${answer.TM3Github}" target="_blank"
                      >${answer.TM3Github}</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </section>
        </body>
      </html>`
      console.log(answer)
    })
    // .then((answer) => {
    //   const stringifiedTeam = JSON.stringify(answer)
    //   fs.writeFile('./dist/make.html', stringifiedTeam, (err) => {
    //     if (err) {
    //       console.log(err)
    //     } else {
    //       console.log('Successfully created !')
    //     }
    //   })
    // })
    .then((answer) => {
      fs.writeFile('./dist/index.html', answer, (err) => {
        if (err) {
          console.log(err)
        } else {
          console.log('Successfully created !')
        }
      })
    })
}

init()
