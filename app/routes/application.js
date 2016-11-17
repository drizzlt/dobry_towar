import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (this.get('session.isAuthenticated')) {
      console.log('Authenticated');
      return; // Already authenticated
    }
    //return this.get('session').fetch();
      return this.get('session').fetch().catch((error) => {
          console.log(error);
      });
      console.log('NOT-Authenticated');
    },
    actions: {
      accessDenied() {
          this.transitionTo('/'); //redirect to index route
      },
    },

});
