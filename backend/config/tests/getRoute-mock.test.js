const userData = [{ id: 1, name: 'Alice', email: 'alice@email.com', admin: 'false'}, { id: 2, name: 'Bob', email: 'bob@email.com', admin: 'false' }, { id: 3, name: 'Charlie', email: 'charlie@email.com', admin: 'true' }]

describe('GET users request', () => {
  test('it should return a list of users', () => {

    const expected = [
      { id: 1, name: 'Alice', email: 'alice@email.com', admin: 'false' },
      { id: 2, name: 'Bob', email: 'bob@email.com', admin: 'false' },
      { id: 3, name: 'Charlie', email: 'charlie@email.com', admin: 'true' }
    ];

    expect(userData).toEqual(expected);
  });
});