const app = require('../server/index.js')
const supertest = require('supertest')
const request = supertest(app)

it('Gets the /middle endpoint', async done => {
  // Sends GET Request to /middle endpoint
  const res = await request.get('/FECmiddle')
  expect(res.status).toBe(200) //makes sure 200 status code was sent
  expect(res.body.length).toBe(100) //makes sure that 100 docs were pulled from DB
  done()
})
