let times = 0
let count = 0
input.onButtonPressed(Button.A, function () {
    times = pin()
    y_equals_x(times)
})
function y_equals_x (num: number) {
    for (let index = 0; index < num; index++) {
        count = 0
        for (let index = 0; index < 5; index++) {
            led.plot(count, 4 - count)
            basic.pause(200)
            led.unplot(count, 4 - count)
            count += 1
        }
    }
}
function pin () {
    while (true) {
        if (input.pinIsPressed(TouchPin.P0)) {
            return 1
        } else {
            if (input.pinIsPressed(TouchPin.P1)) {
                return 2
            } else {
                if (input.pinIsPressed(TouchPin.P2)) {
                    return 3
                }
            }
        }
    }
}
basic.forever(function () {
    serial.writeValue("Celcius", input.temperature())
    basic.pause(1000)
})
