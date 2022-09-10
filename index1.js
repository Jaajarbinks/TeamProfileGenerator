const inquirer = require('inquirer')
const fs = require('fs')
const Employee = require('./lib/employee')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')
const Groop = require('./lib/groop')

const newTeam = []

const questions = () => {
  const answer = inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'what is the name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'what is the id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'what is the email?',
    },
    {
      type: 'list',
      name: 'role',
      message: 'what kind of role do you want',
      choices: ['Engineer', 'Intern', 'Manager'],
    },
  ])

  if (answer.role === 'Engineer') {
    const githubs = inquirer.prompt([
      {
        type: 'input',
        name: 'github',
        message: 'what is your github?',
      },
    ])
    const newEngineer = new Engineer(
      answer.name,
      answer.id,
      answer.email,
      githubs.github,
    )
    newTeam(newEngineer)
  } else if (answer.role === 'Manager') {
    const managers = inquirer.prompt([
      {
        type: 'input',
        name: 'officeNumber',
        message: 'whats the office number?',
      },
    ])
    const newManager = new Manager(
      answer.name,
      answer.id,
      answer.email,
      managers.officeNumber,
    )
    newTeam(newManager)
  } else if (answer.role === 'Intern') {
    const interns = inquirer.prompt([
      {
        type: 'input',
        name: 'school',
        message: 'what school did you go to?',
        choices: ['Denver University', 'MIT', 'USC'],
      },
    ])
    const newIntern = new Intern(
      answer.name,
      answer.id,
      answer.email,
      interns.school,
    )
    newTeam(newIntern)
  }
}

function promptQuestions() {
  questions()

  const addMembers = inquirer.prompt([
    {
      type: 'list',
      name: 'addMember',
      message: 'what do you wanna do next?',
      choices: ['add a new member', 'generateHTML'],
    },
  ])
  if (addMembers.addMember === 'add a new member') {
    return promptQuestions()
  }
  return generateHTML()
}

promptQuestions()

// const addEngineer = () => {
//   return
//   inquirer
//     .prompt([
//       {
//         type: 'list',
//         name: 'Engineer',
//         message: 'Who is the engineer you want?',
//         choices: ['Manager', 'Engineer', 'Intern', 'Employee'],
//       },
//       {
//         type: 'input',
//         name: 'engineerEmail',
//         message: 'Email address of the employee?',
//       },
//       {
//         type: 'input',
//         name: 'engineerId',
//         messages: 'what is the id for this employee',
//       },
//       {
//         type: 'list',
//         name: 'addPerson',
//         message: 'who do you want to add',
//         choices: [
//           {
//             value: 'addEngineer',
//             name: 'add engineer',
//           },
//           {
//             value: 'addIntern',
//             name: 'add intern',
//           },
//           {
//             value: 'finish',
//             name: 'Finish',
//           },
//         ],
//       },
//     ])
//     .then((answers) => {
//       const engineer = new Engineer(
//         answers.engineerId,
//         answers.engineerName,
//         answers.engineerEmail,
//       )
//       groop.push(engineer)
//       addPrompt()
//     })
// }

// const addPrompt = () => {
//   return inquirer
//     .prompt([
//       {
//         type: 'list',
//         name: 'prompt',
//         message: 'select who you want next',
//         choices: ['engineer', 'intern', 'manager', 'finish'],
//       },
//     ])
//     .then((choice) => {
//       switch (choice.prompt) {
//         case 'engineer':
//           promptEngineer()
//           break
//         case 'intern':
//           promptIntern()
//           break
//         case 'manager':
//           promptManager()
//       }
//     })
// }
// const addIntern = () => {
//   return inquirer
//     .prompt([
//       {
//         type: 'list',
//         name: 'Intern',
//         message: 'Who is the Intern you want?',
//         choices: ['Manager', 'Engineer', 'Intern', 'Employee'],
//       },
//       {
//         type: 'input',
//         name: 'InternEmail',
//         message: 'Email address of the Intern?',
//       },
//       {
//         type: 'input',
//         name: 'InternId',
//         messages: 'what is the id for this employee',
//       },
//       {
//         type: 'list',
//         name: 'addPerson',
//         message: 'who do you want to add',
//         choices: [
//           {
//             value: 'addEngineer',
//             name: 'add engineer',
//           },
//           {
//             value: 'addIntern',
//             name: 'add intern',
//           },
//           {
//             value: 'finish',
//             name: 'Finish',
//           },
//         ],
//       },
//     ])
//     .then((answers) => {
//       const engineer = new Intern(
//         answers.InternId,
//         answers.InternName,
//         answers.InternEmail,
//       )
//       groop.push(engineer)
//       addPrompt()
//     })
// }

// const addManager = () => {
//   return inquirer
//     .prompt([
//       {
//         type: 'list',
//         name: 'Intern',
//         message: 'Who is the Manager you want?',
//         choices: ['Manager', 'Engineer', 'Intern', 'Employee'],
//       },
//       {
//         type: 'input',
//         name: 'ManagerEmail',
//         message: 'Email address of the Manager?',
//       },
//       {
//         type: 'input',
//         name: 'ManagerId',
//         messages: 'what is the id for this employee',
//       },
//       {
//         type: 'list',
//         name: 'addPerson',
//         message: 'who do you want to add',
//         choices: [
//           {
//             value: 'addEngineer',
//             name: 'add engineer',
//           },
//           {
//             value: 'addIntern',
//             name: 'add intern',
//           },
//           {
//             value: 'finish',
//             name: 'Finish',
//           },
//         ],
//       },
//     ])
//     .then((answers) => {
//       const Manager = new Manager(
//         answers.ManagerId,
//         answers.ManagerName,
//         answers.ManagerEmail,
//       )
//       groop.push()
//       addPrompt()
//     })
// }

function generateHTML() {
  const stringifiedNewTeam = JSON.stringify(newTeam)

  fs.writeFile('groop.txt', stringifiedNewTeam, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('Successfully created index.html!')
    }
  })
}
