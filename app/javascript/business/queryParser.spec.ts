import queryParser from "./queryParser";

describe('queryParser', () => {
  test('should throw an error if SELECT is missing', () => {
    const query = "FROM users WHERE age > 18";
    expect(() => queryParser(query)).toThrow("INVALID QUERY: MISSING SELECT CLAUSE");
  });

  test('should throw an error if FROM is missing', () => {
    const query = "SELECT age";
    expect(() => queryParser(query)).toThrow("INVALID QUERY: MISSING FROM CLAUSE");
  });

  test('should return SELECT attrs', () => {
    const query = 'SELECT name, age FROM users';
    expect(queryParser(query).select).toEqual(['name,', 'age'])
  });

  test('should return FROM attrs', () => {
    const query = 'SELECT name, age FROM users WHERE age > 18';
    expect(queryParser(query).from).toEqual(['users'])
  });

  test('should return WHERE attrs', () => {
    const query = "SELECT name, age FROM users WHERE name = 'Leonardo'";
    expect(queryParser(query).where).toEqual(['name', '=', "'Leonardo'"])
  });

  test('should parse a valid query with SELECT, FROM, and WHERE', () => {
    const query = "SELECT name, age FROM users WHERE age > 18";
    const expected = {
      select: ['name,', 'age'],
      from: ['users'],
      where: ['age', '>', '18']
    }
    expect(queryParser(query)).toEqual(expected);
  });
});