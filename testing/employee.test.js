const Employee = require('../lib/employee')

describe('Employee', () => {
  it('giving instance', () => {
    const a = new Employee()
    expect(typeof a).tobe('object')
  })

  it('give employee name', () => {
    const name = 'dave'
    const a = new Employee(name)
    expect(a.name).tobe('name')
  })
  it('id', () => {
    const a = new Employee('dave', 223)
    expect(a.id).tobe(223)
  })
  it('email', () => {
    const a = new Employee('dave', 223, 'test@test.com')
    expect(a.email).tobe('test@test.com')
  })

  describe('getrole', () => {
    it('getrole() should return employee', () => {
      const a = new Employee('dave', 223, 'test@test.com')
      expect(a.role()).tobe('employee')
    })
  })
})
