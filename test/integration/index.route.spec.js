import { expect } from 'chai'
import supertest from 'supertest'
import { app, server } from '../../src'

describe('integration->index route', () => {
  afterEach(async () => {
    await server.close()
  })

  it('should return status 404 when accessing an unknown endpoint', (done) => {
    supertest(app)
      .get('/somewhere')
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(res.status).to.be.equal(404)
          done()
        }
      })
  })

  it('should return status 200 when accessing /api', (done) => {
    supertest(app)
      .get('/api')
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(res.status).to.be.equal(200)
          expect(res.body).have.property('online', true)
          done()
        }
      })
  })
})
