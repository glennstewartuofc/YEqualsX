let times = 0
let count = 0
input.onButtonPressed(Button.A, function () {
    times = 2
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
