const Manager = require('../lib/manager')

test('with managers officeNumber', () => {
  const d = new Manager('hank', 225, 'test@test.com', 6669)

  expect(d.officeNumber).toBe(6669)
})

test('getRole manager', () => {
  const d = new Manager('hank', 225, 'test@test.com', 6669)

  expect(d.getRole()).toBe('Manager')
})
