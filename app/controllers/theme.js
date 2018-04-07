import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    select(value) {
      this.store.findRecord('user', 0)
        .then((user) =>{
          user.set('theme', value);
          this.transitionToRoute('calculator');
        })
    }
  }

});
