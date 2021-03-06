function modracervena () {
    strip.show()
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Blue))
}
function cervenamodra () {
    strip.show()
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Red))
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
basic.forever(function () {
    cervenamodra()
    basic.pause(500)
    modracervena()
    basic.pause(500)
})
