import Component from '@ember/component';


let answer = '';

export default Component.extend({
  actions: {
    calculate() {
      answer = eval(this.$("#answer").val());
      this.$("#answer").val(answer);
    }
  }
});
