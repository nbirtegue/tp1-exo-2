input.onButtonPressed(Button.A, function () {
    led.unplot(x, y)
    x += -1
    led.plot(x, y)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    x += 1
    led.plot(x, y)
})
let x = 0
let y = 0
y = 0
x = 0
let Dir = 1
led.plot(0, y)
basic.forever(function () {
    led.plot(x, y)
    basic.pause(1000)
    led.unplot(x, y)
    y += Dir
    if (y == 4) {
        Dir = -1
    } else if (y == 0) {
        Dir = 1
    }
    if (x == 5) {
        x = 0
    }
    if (x == -1) {
        x = 4
    }
})
