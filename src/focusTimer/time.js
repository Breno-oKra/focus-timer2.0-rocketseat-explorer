import states from "./states.js"
import * as el from "./elements.js"
import { reset } from "./actions.js"
import { kichenTimer } from "./sounds.js"
export function updateDisplay(minutes,seconds){
    // ?? significa que caso minutes seja null, ele vai pegar states.minutes
    minutes = minutes ?? states.minutes
    seconds = seconds ?? 0

    //pad significa preencher, (quero ver 2 caractes, caracter 0)
    el.minutes.textContent = String(minutes).padStart(2,'0')
    el.seconds.textContent = String(seconds).padStart(2,'0')
}

export function countdown(){
    clearTimeout(states.countdownId)
    if(!states.isRunning){
        return
    }
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--
    if(seconds < 0){
        seconds = 59
        minutes--
    }
    if(minutes < 0){
        reset()
        kichenTimer.play()
        return
    }
    updateDisplay(minutes,seconds)
    states.countdownId = setTimeout(() => countdown(),1000)

    
}