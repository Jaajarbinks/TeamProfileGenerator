const Intern = require('../lib/intern')

test('make intern', () => {
  const c = new Intern('David', 224, 'test@test.com', USC)

  expect(c.school).tobe('USC')
})

test('getRole for intern', () => {
  const c = new Intern('David', 224, 'test@test.com', 'USC')

  expect(c.getRole()).tobe('Intern')
})

test('getSchool', () => {
  const c = new Intern('David', 224, 'test@test.com', 'USC')

  expect(b.getSchool()).tobe('USC')
})
