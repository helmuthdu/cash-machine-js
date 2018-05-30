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
        const n = Math.floor(amount / note)
        amount -= (n * note)
        return acc.concat(new Array(n).fill(note))
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
