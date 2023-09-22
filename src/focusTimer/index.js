import state from "./states.js";
import * as events from "./events.js";
import * as timer from "./time.js";
export function start(minutes, seconds) {
  state.minutes = minutes;
  state.seconds = seconds;

  timer.updateDisplay(0, 6);
  events.registerControls();

  document
    .querySelector(".container-b")
    .addEventListener("click", (event) => {
      //verificar se um button foi clicado
      if(event.target.dataset.sound == undefined){
        return
      }
      //verificar se ha alguma musica ativada
      let camp = state.campMusic
      if (state.music != "") {
        if( state.campMusic == event.target){
          
          camp.style.backgroundImage = `url("../../assets/icons/${camp.dataset.sound}.svg")`;

          const sound = camp.dataset.sound;
          events.toggleMusics(sound);
          state.music = ""
          state.campMusic = null
          return
        }
        camp.style.backgroundImage = `url("../../assets/icons/${camp.dataset.sound}.svg")`;
        events.toggleMusics(camp.dataset.sound);

        //acionando novo campo
        camp = event.target
        camp.style.backgroundImage = `url("../../assets/icons/active/${camp.dataset.sound}.svg")`;
        events.toggleMusics(camp.dataset.sound);
        state.music = camp.dataset.sound
        state.campMusic = camp
        return
      }
      event.target.style.backgroundImage = `url("../../assets/icons/active/${event.target.dataset.sound}.svg")`;
      const sound = event.target.dataset.sound;
      state.campMusic = event.target
      events.toggleMusics(sound);
    });
}
