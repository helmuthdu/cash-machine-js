import { expect } from 'chai'
import supertest from 'supertest'
import { app, server } from '../../src'

describe('integration->atm route', () => {
  afterEach(async () => {
    await server.close()
  })

  it('should return an array of values', (done) => {
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

  it('should return not found status with an empty array', (done) => {
    supertest(app)
      .get('/api/atm/withdraw/0')
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(res.status).to.be.equal(404)
          // eslint-disable-next-line no-unused-expressions
          expect(res.body).to.be.an('array').and.to.be.empty
          done()
        }
      })
  })

  it('should return bad request status with InvalidArgumentException message', (done) => {
    supertest(app)
      .get('/api/atm/withdraw/-240')
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(res.status).to.be.equal(400)
          expect(res.body).have.property('message', 'InvalidArgumentException')
          done()
        }
      })
  })

  it('should return bad request status with NoteUnavailableException message', (done) => {
    supertest(app)
      .get('/api/atm/withdraw/242')
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          expect(res.status).to.be.equal(400)
          expect(res.body).have.property('message', 'NoteUnavailableException')
          done()
        }
      })
  })
})
