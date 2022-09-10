const inquirer = require('inquirer')
const makeHTML = require('./make.html')

const makeHTML = ({
  TM,
  TM1,
  TM1Job,
  TM1Id,
  TM1Email,
  TM1Github,
  TM2manager,
  TM2Job,
  TM2Id,
  TM2Email,
  TM2Github,
  ManagersOfficeNumber,
  TM3intern,
  TM3Id,
  TM3Email,
  TM3Github,
  school,
}) =>
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    body>
    <section class="nav">
      <div class="header">
        <h1 class="teamname">${TM}</h1>
      </div>
    </section>
    <section class="body">
      <div class="cardcontainer">
        <div class="card">
          <div class="cardheader">
            <h1>${TM1}</h1>
            <h3>${TM1Job}</h3>
          </div>
          <div class="cardbody">
            <div class="tile"><p>ID: ${TM1Job}</p></div>
            <div class="tile">
              Email:
              <a href="mailto:${TM1Email}" target="_blank">${TM1Email}</a>
            </div>
            <div class="tile">
              Github:
              <a href="https://github.com/${TM1Github}" target="_blank"
                >${TM1Github}</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="cardcontainer">
        <div class="card">
          <div class="cardheader">
            <h1>${TM2manager}</h1>
            <h3>${TM2Job}</h3>
          </div>
          <div class="cardbody">
            <div class="tile"><p>ID: ${TM2Id}</p></div>
            <div class="tile">
              Email:
              <a href="mailto:${TM2Email}" target="_blank">${TM2Email}</a>
            </div>
            <div class="tile">
              Github:
              <a href="https://github.com/${TM2Github}" target="_blank"
                >${TM2Github}</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="cardcontainer">
        <div class="card">
          <div class="cardheader">
            <h1>${TM3intern}</h1>
            <h3>${TM3Jobtitle}</h3>
            <h4>${school}</h4>
          </div>
          <div class="cardbody">
            <div class="tile"><p>ID: ${TM3Id}</p></div>
            <div class="tile">
              Email:
              <a href="mailto:${TM3Email}" target="_blank">${TM3Email}</a>
            </div>
            <div class="tile">
              Github:
              <a href="https://github.com/${TM3Github}" target="_blank"
                >${TM3Github}</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
</html>`

module.exports = makeHTML
