
describe('POST users request with signup', () => {
  test('it should return the user created with the correct fields', () => {

    const userData = { name: 'Charlie', email: 'charlie@email.com', password: 'charlie123', confirmPassword: 'charlie123' }

    expect(userData.body);
  });
});