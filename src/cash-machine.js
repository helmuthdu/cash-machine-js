class NoteUnavailableException extends Error {
  message = 'NoteUnavailableException'
}

class InvalidArgumentException extends Error {
  message = 'InvalidArgumentException'
}

export class ATM {
  notes = [100, 50, 20, 10]

  setNotes (notes) {
    if (notes) { this.notes = notes }
  }

  withdraw (value) {
    if (!value) {
      return []
    } else if (value % 10 !== 0) {
      throw new NoteUnavailableException()
    } else if (value < 0) {
      throw new InvalidArgumentException()
    }

    return this.notes.reduce((acc, note) => {
      if (value >= note) {
        const n = Math.floor(value / note)
        acc = acc.concat(new Array(n).fill(note))
        value -= (n * note)
      }
      return acc
    }, [])
  }
}
