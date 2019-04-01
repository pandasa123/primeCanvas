var base = 1
var amount = 1
const diameter = 5
const space = 0.5
const margin = 50
var autoPlay = false

function setup () {
  canvas = createCanvas(
    windowWidth * 0.7,
    windowHeight
    // amount * (diameter + space) - space + 2 * margin,
    // amount * (diameter + space) - space + 2 * margin
  )
  canvas.parent('canvas')
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

// function windowResized () {
//   resizeCanvas(window.width * 0.8, window.height, true)
//   redraw()
// }

// function keyPressed () {
//   if (base < 12) {
//     base += 1
//     amount = base * base
//     let $input = $('#dimInput')
//     $input.val(base)
//     $input.change()
//     // console.log(base)
//     // console.log(amount)
//     redraw()
//   } else {
//     alert('Min Value: 12')
//   }
// }

function isPrime (num) {
  for (let i = 2; i <= sqrt(num); ++i) {
    if (num % i === 0) return false
  }
  return num !== 1 && num !== 0
}

$(document).ready(function () {
  $('.minus').click(function () {
    let $input = $('#dimInput')
    let inputVal = parseInt($input.val())
    if (inputVal > 1) {
      inputVal -= 1
      $input.val(inputVal)
      $input.change()
      base = inputVal
      amount = base * base
      redraw()
    } else {
      alert('Min Value: 1')
    }

    return false
  })
  $('.plus').click(function () {
    let $input = $('#dimInput')
    let inputVal = parseInt($input.val())
    if (inputVal < 12) {
      inputVal += 1
      $input.val(inputVal)
      $input.change()
      base = inputVal
      amount = base * base
      redraw()
    } else {
      alert('Max Value: 12')
      inputVal = 1
      $input.val(inputVal)
      $input.change()
      base = inputVal
    }
    return false
  })
  $('#playButton').click(() => {
    autoPlay = !autoPlay
    if (autoPlay) {
      $('#playButton').text('Pause')
      setInterval(() => {
        if (base < 12) {
          base += 1
          amount = base * base
          let $input = $('#dimInput')
          $input.val(base)
          $input.change()
          redraw()
        }
      }, 1000)
      autoPlay = false
    } else {
      $('#playButton').text('Play')
      clearInterval()
    }
  })
})
