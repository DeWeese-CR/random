let number = 0
input.onGesture(Gesture.Shake, function () {
    number = randint(0, 3)
    if (number == 0) {
        basic.showString("0")
    }
    if (number == 1) {
        basic.showString("1")
    }
    if (number == 2) {
        basic.showString("2")
    }
    if (number == 3) {
        basic.showString("3")
    }
})
basic.forever(function () {
	
})
