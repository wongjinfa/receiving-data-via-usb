radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, value)
})
radio.setGroup(15)
loops.everyInterval(500, function () {
    serial.writeValue("Light level", input.lightLevel())
    radio.sendValue("light", input.lightLevel())
})
