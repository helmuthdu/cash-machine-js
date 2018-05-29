import { expect } from 'chai'
import supertest from 'supertest'
import { app, server } from '../../src'

describe('atm route', () => {
  afterEach(async () => {
    await server.close()
  })

  it('should return notes', (done) => {
    supertest(app)
      .get('/api/atm/withdraw/240')
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(res.status).to.be.equal(200)
          expect(res.body).to.be.an('array').and.to.deep.equal([100, 100, 20, 20])
          done()
        }
      })
  })
})
