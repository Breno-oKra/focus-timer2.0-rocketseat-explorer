import states from "./states.js";
import * as timer from "./time.js";
import * as el from './elements.js'
import * as sounds from './sounds.js'
export function toggleRunning(){   
    document.documentElement.classList.add('running')
    states.isRunning = true
    timer.countdown()
    sounds.buttonPressAudio.play()
}
export function togglePause(){
    document.documentElement.classList.remove('running')
    states.isRunning = false
    timer.countdown()
    sounds.buttonPressAudio.play()
    
}
export function reset() {
    states.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function toggleMusic(music){
    states.isMute = document.documentElement.classList.toggle('music-on')
    if(states.isMute){
        sounds[music].play()
        return
    }
    sounds.bgAudio.pause()
}
export function add(){
    let minutes = states.minutes + 5
    let time = minutes >= 60? 60 : minutes
    states.minutes = time
    reset()
}
export function remove(){
    let minutes = states.minutes - 5
    let time = minutes <= 0? 0 : minutes
    states.minutes = time
    reset()
}