import Component from '@ember/component';
// The calculation to be performed
let calculation = '';
// The answer to the calculation
let answer = '';

export default Component.extend({

  actions: {
    input(value) {
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
