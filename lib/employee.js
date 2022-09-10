class Employee {
  constructor(name, id, email) {
    this.name = name
    this.id = id
    this.email = email
    this.role = Employee
  }

  getName() {
    return this.name
  }
  getId() {
    return this.id
  }
  getEmail() {
    return this.email
  }
  getRole() {
    return this.role
  }

  // renderRegularHTML(input) {
  //   return `<div class='card'
  // <div class='card-inner'>
  // <div class='card-title'>${this.name}</div>
  // <div class='card-littletitle'>${this.posistion}</div>
  // <div class='card-text'>
  // <a href='mail me at: ${this.email}'>Email</a>
  // ${input}
  // </div>
  // </div>
  // </div>`
  // }
}

module.exports = Employee
