class Poop {
  toString() {
    return "Poop"
  }
}
const poop = new Poop()

function Cake() {
  return {
    type: 'cake',
    toString() {
      return "Cake"
    }
  }
}
const cake1 = new Cake()
const cake2 = Cake()