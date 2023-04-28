const userData = { email: 'charlie@email.com', password: 'charlie123' }

describe('POST users request with signin', () => {
  test('it should return the user created with the correct fields', () => {

    const expected = [
        { id: 7,
        name: "Charlie",
        email: "charlie@email.com",
        admin: false,
        iat: 1682604760,
        exp: 1682863960,
        token: "NFso*273rn8¨DBisp"
        }];

    expect.arrayContaining(userData);
  });
});