import Ember from 'ember';

export default Ember.Controller.extend({  
	firebaseApp: Ember.inject.service(),
  	
  	actions: {
    	signUp() {
    		let controller = this;
			const auth = this.get('firebaseApp').auth();

			auth.createUserWithEmailAndPassword(this.get('email') || '', this.get('password') || '').then((userResponse) => {
				const user = this.store.createRecord('user', {
					id: userResponse.uid,
					email: userResponse.email
				});
				user.save();
				controller.transitionToRoute('sign-in');
			});
    	}
 	},

});


