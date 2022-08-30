const inquirer = require('inquirer')
const fs = require('fs')
const Employee = require('./lib/employee')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')
const Groop = require('./lib/groop')

let groop = new Groop()

function getNext(option) {
  if (option === 'addEmployee') {
    addEmployee()
  }
  if (option === 'addEngineer') {
    addEngineer()
  }
  if (option === 'addIntern') {
    addIntern()
  }
  if (option === 'addManager') {
    addManager()
  }
  if (option === 'finish') {
    groop.saveFile()
  }
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'Employee',
        message: 'Who is the Employee you want?',
        choices: ['Manager', 'Engineer', 'Intern', 'Employee'],
      },
      {
        type: 'input',
        name: 'employeeEmail',
        message: 'Email address of the employee?',
      },
      {
        type: 'input',
        name: 'employeeId',
        messages: 'what is the id for this employee',
      },
      {
        type: 'list',
        name: 'addMore',
        choices: [
          {
            value: 'addEmployee',
            name: 'add employee',
          },
          {
            value: 'addEngineer',
            name: 'add engineer',
          },
          {
            value: 'addIntern',
            name: 'add intern',
          },
          {
            value: 'finish',
            name: 'Finish',
          },
        ],
      },
    ])
    .then((answers) => {
      const employee = new Employee(
        answers.employeeId,
        answers.employeeName,
        answers.employeeEmail,
      )
      groop.addPerson(employee)
      getNext(answers.addMore)
    })
}
function generateHTML() {
  const stringifiedGroop = JSON.stringify(Groop)

  fs.writeFile('groop.txt', stringifiedGroop, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('Successfully created index.html!')
    }
  })
}
