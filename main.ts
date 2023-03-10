let times = 0
let count = 0
input.onButtonPressed(Button.A, function () {
    times = pin()
    if (times == 1) {
        y_equals_x(times, true)
    } else {
        if (times == 2) {
            y_equals_x(times, true)
        } else {
            if (times == 3) {
                y_equals_x(times, true)
            }
        }
    }
})
function y_equals_x (num: number, bool: boolean) {
    for (let index = 0; index < num; index++) {
        count = 0
        for (let index = 0; index < 5; index++) {
            if (bool) {
                led.plot(count, 4 - count)
                basic.pause(200)
                led.unplot(count, 4 - count)
                count += 1
            } else {
                led.plot(4 - count, count)
                basic.pause(200)
                led.unplot(4 - count, count)
                count += 1
            }
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
    led.toggle(4, 4)
    basic.pause(500)
})
