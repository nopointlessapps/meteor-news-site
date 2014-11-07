


Router.configure( {
	layoutTemplate: 'layout'
} );

Router.route( '/', {
	template: 'newsList',
	name: 'newsList',
	waitOn: function() {
		return Meteor.subscribe( 'newsItems' );
	},

	data: function() {
		return NewsItems.find();
	}
} );

Router.route( '/news/new', {
	template: 'newsNew',
	name: 'newsNew',

	onBeforeAction: function(){
		if( !Meteor.user() ){
			this.redirect('newsList')
		}
	}
} );


Router.route( '/news/:view', {
	template: 'newsShow',
	name: 'newsShow',

	waitOn: function() {
		return Meteor.subscribe( 'newsItems' );
	},

	data: function() {
		return NewsItems.findOne({_id: this.params.view});
	}
} );


Router.route( '/news/new', {
	template: 'newsNew',
	name: 'newsNew',

	onBeforeAction: function(){
		if( !Meteor.user() ){
			this.redirect('newsList')
		}
	}
	where: 'server'
} );


