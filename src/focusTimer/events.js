import { controls } from "./elements.js";
import * as actions from './actions.js'
import * as el from './elements.js'
import states from "./states.js";
import { updateDisplay } from "./time.js";
import * as sounds from "./sounds.js"
export function registerControls(){
    controls.addEventListener('click', event =>{
        // taget é todo click em elemtnetos dentro de controls
        const action = event.target.dataset.action
        if(typeof actions[action] != 'function'){
            return
        }
        
        actions[action]()
    })
}


export function toggleMusics(music){
    states.isMute = document.documentElement.classList.toggle('music-on')
    if(states.isMute){
        states.music = music
        sounds[music].play()
        return
    }
    sounds[states.music].pause()
}
