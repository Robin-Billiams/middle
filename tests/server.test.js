const app = require('../server/index.js')
const supertest = require('supertest')
const request = supertest(app)

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  })
});

describe('Test the root path', () => {
  test('It should respond to GET request with status code 200', () => { return
    request
      .get('/')
      .then( (res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});

describe('Test the /middle endpoint', () => {
  test('It should respond to a GET request with status code 200', () => {
    return request
      .get('/middle/0')
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});
