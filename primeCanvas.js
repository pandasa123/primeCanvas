var base = 1
var amount = 1
const diameter = 5
const space = 0.5
const margin = 50

function setup () {
  createCanvas(
    windowWidth,
    windowHeight
    // amount * (diameter + space) - space + 2 * margin,
    // amount * (diameter + space) - space + 2 * margin
  )
}

function draw () {
  background(255)
  fill(0, 0, 0)
  stroke(255, 255, 255)
  let number = 1
  for (let y = 0; y < amount; y++) {
    for (let x = 0; x < amount; x++) {
      if (isPrime(number)) {
        xCord = margin + x * (diameter + space)
        yCord = margin + y * (diameter + space)
        ellipse(xCord, yCord, diameter)
      }
      number++
    }
  }
}

function keyPressed () {
  // if (amount < 144) {
    // setInterval((amount *= amount), 1000)
  // }
  if (base < 12) {
    base += 1
    amount = base*base
    console.log(amount)
    redraw()
  }
}

function isPrime (num) {
  for (let i = 2; i <= sqrt(num); ++i) {
    if (num % i === 0) return false
  }
  return num !== 1 && num !== 0
}
