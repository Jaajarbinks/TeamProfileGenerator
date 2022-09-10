const Engineer = require('../lib/engineer')

test('make engineer', () => {
  const b = new Engineer('David', 224, 'test@test.com', davidj)

  expect(b.engineer.github).toEqual(expect.any(string))
})

test('engineer github', () => {
  const b = new Engineer('David', 224, 'test@test.com', davidj)

  expect(b.github()).toEqual(expect.stringContaining(b.github.tostring()))
})

test('engineer role', () => {
  const b = new Engineer('David', 224, 'test@test.com', davidj)

  expect(b.getRole()).toEqual('Engineer')
})
