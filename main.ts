let strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
strip.setBrightness(128)
basic.forever(function () {
    strip.show()
    strip.rotate(1)
    basic.pause(500)
})
