const userId = 3

describe('GET user by id request', () => {
  test('it should return the user with the respective id', () => {

    const expected = [
      { id: 3, name: 'Charlie', email: 'charlie@email.com', admin: 'true' }
    ];

    expect.arrayContaining(userId);
  });
});