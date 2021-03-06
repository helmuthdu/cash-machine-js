class NoteUnavailableException extends Error {
  message = 'NoteUnavailableException'
}

class InvalidArgumentException extends Error {
  message = 'InvalidArgumentException'
}

export class ATMService {
  notes = [100, 50, 20, 10]

  withdraw (amount) {
    this._checkWithdrawAmount(amount)

    return this.notes.reduce((acc, note) => {
      if (amount >= note) {
        const total = Math.floor(amount / note)
        amount -= (total * note)
        return acc.concat(new Array(total).fill(note))
      }
      return acc
    }, [])
  }

  _checkWithdrawAmount (amount) {
    if (!this.notes.some(n => amount % n === 0)) {
      throw new NoteUnavailableException()
    } else if (amount < 0) {
      throw new InvalidArgumentException()
    }
  }
}

export const atmService = new ATMService()
