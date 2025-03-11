let non = 0
let oui = 0
let vote = 0
basic.forever(function () {
    basic.showString("" + (vote))
    basic.showString("" + (non))
    basic.showString("" + (oui))
})
basic.forever(function () {
    music.play(music.createSoundExpression(WaveShape.Noise, 500, 499, 255, 0, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    while (true) {
        radio.setGroup(0)
        radio.sendNumber(randint(0, 10))
        vote = randint(1, 2)
        if (vote == 1) {
            basic.showIcon(IconNames.Yes)
            oui += 1
            vote += 1
        }
        if (vote == 2) {
            basic.showIcon(IconNames.No)
            non += 1
            vote += 1
        }
        if (vote == 100) {
            music.play(music.builtinPlayableSoundEffect(soundExpression.mysterious), music.PlaybackMode.UntilDone)
            basic.showString("" + (vote))
            break;
        }
        if (oui == 10) {
            basic.showString("" + (oui))
            music.play(music.createSoundExpression(WaveShape.Sine, 1154, 5000, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        }
        if (non == 10) {
            music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 5000, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
            basic.showString("" + (non))
        }
    }
})
