import { expect } from 'chai'
import { ATMService } from '../../src/routes/atm/atm.service'

describe('unit->atm service', () => {
  let atm

  beforeEach(() => {
    atm = new ATMService()
  })

  it('should throw an InvalidArgumentException when amount is bellow 0', () => {
    expect(() => atm.withdraw(-130)).to.throw('InvalidArgumentException')
  })

  it('should throw a NoteUnavailableException when note not found', () => {
    expect(() => atm.withdraw(125)).to.throw('NoteUnavailableException')
  })

  it('should return an empty array if value is null/undefined', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(atm.withdraw(null)).to.be.empty
  })

  it('should deliver the lowest number of possible notes', () => {
    expect(atm.withdraw(30)).to.be.an('array').and.to.deep.equal([20, 10])
    expect(atm.withdraw(80)).to.be.an('array').and.to.deep.equal([50, 20, 10])
  })
})
