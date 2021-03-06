var base = 1
var amount = 1
const diameter = 5
const space = 0.5
const margin = 50
var currPlaying = false
var controlDisabled = false

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
  $('#dimInput').change(function () {
    let $input = $('#dimInput')
    let inputVal = parseInt($input.val())
    if (inputVal > 0 && inputVal < 13) {
      base = inputVal
      amount = base * base
      $('#numDisplayed').text(amount * amount)
      redraw()
    } else {
      alert('Input must be 1 - 12')
    }
  })

  $('#dimInputMinus').click(function () {
    if (controlDisabled) {
      let $input = $('#dimInput')
      let inputVal = parseInt($input.val())
      if (inputVal > 1) {
        inputVal -= 1
        $input.val(inputVal)
        $input.change()
        base = inputVal
        amount = base * base
        $('#numDisplayed').text(amount * amount)
        redraw()
      }
    }
    return false
  })
  $('#dimInputPlus').click(function () {
    if (controlDisabled) {
      let $input = $('#dimInput')
      let inputVal = parseInt($input.val())
      if (inputVal < 12) {
        inputVal += 1
        $input.val(inputVal)
        $input.change()
        base = inputVal
        amount = base * base
        $('#numDisplayed').text(amount * amount)
        redraw()
      }
    }
    return false
  })
  $('#playButton').click(() => {
    console.log(currPlaying)
    if (!currPlaying) {
      currPlaying = true
      disableAll(true)
      window.timer = setInterval(() => {
        if (base < 12) {
          base += 1
          amount = base * base
          $('#numDisplayed').text(amount * amount)
          let $input = $('#dimInput')
          $input.val(base)
          $input.change()
          redraw()
        } else {
          disableAll(false)
          clearInterval(window.timer)
        }
      }, 900)
      currPlaying = false
    }
  })
  $('#resetButton').click(() => {
    clearInterval(window.timer)
    base = 1
    amount = 1
    currPlaying = false
    $('#numDisplayed').text(amount * amount)
    let $input = $('#dimInput')
    $input.val(base)
    $input.change()
  })
  $('#saveCanvasButton').click(() => {
    saveCanvas('myCanvas' + base, 'png')
  })
})

function disableAll (val) {
  controlDisabled = !val
  $('#playButton').attr('disabled', val)
  $('#dimInputMinus').attr('disabled', val)
  $('#dimInputPlus').attr('disabled', val)
  $('#dimInput').attr('disabled', val)
}
