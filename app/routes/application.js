import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel() {
		if (this.get('session.isAuthenticated')) {
			return; // Already authenticated
		}
		//return this.get('session').fetch();
    	this.get('session').fetch().catch((error) => {
      		console.log(error);
    	});
  	},
  	actions: {
    	accessDenied() {
      		this.transitionTo('/'); //redirect to index route
    	},
  	},

});
