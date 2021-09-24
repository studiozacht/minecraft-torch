function twinkle () {
    light.setPixelColor(randint(0, 10), light.hsv(randint(15, 30), 255, randint(225, 255)))
    light.setPixelColor(randint(0, 10), light.hsv(randint(5, 20), 255, randint(225, 255)))
    light.setPixelColor(randint(0, 10), 0x000000)
    pause(randint(25, 500))
}
input.touchA2.onEvent(ButtonEvent.Click, function () {
    mode += 1
    if (mode > numModes) {
        mode = 0
    }
})
let numModes = 0
let mode = 0
mode = 0
numModes = 2
light.setBrightness(255)
forever(function () {
    if (mode == 0) {
        light.setAll(0x000000)
        pins.A1.digitalWrite(true)
    } else if (mode == 1) {
        twinkle()
        pins.A1.digitalWrite(true)
    } else if (mode == 2) {
        light.setAll(0x000000)
        pins.A1.digitalWrite(false)
    } else {
        mode = 0
    }
})
