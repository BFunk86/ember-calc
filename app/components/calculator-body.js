import Component from '@ember/component';
import { inject as service } from '@ember/service';

// The calculation to be performed
let calculation = '';
// The answer to the calculation
let answer = '';
// Instantiate all Audio objects
const sound1 = new Audio('/sound/keyboard_key1.mp3');
const sound2 = new Audio('/sound/keyboard_key2.mp3');
const sound3 = new Audio('/sound/keyboard_key3.mp3');
// Add them to an array to be called
const sounds = [sound1, sound2, sound3];

export default Component.extend({
  theme: service('themes'),
  actions: {
    input(value) {
      // Generate random number between 0 and 2 in order to play a sound when button is clicked
      let randomSound = sounds[Math.floor(Math.random() * 3)];
      randomSound.play();
      // Perform action based on button pressed
      switch(value) {
        case "enter":
          // Calculate the answer
          answer = eval(calculation);
          calculation = answer;
          this.$("#answer").val(answer);
          break;
        case "clear":
          calculation = '';
          this.$("#answer").val(calculation);
          break;
        default:
          calculation += value;
          this.$("#answer").val(calculation);
      }
    }
  }
});
