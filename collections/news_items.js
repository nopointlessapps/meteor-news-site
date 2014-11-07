


NewsItems = new Meteor.Collection('news_items');

NewsItems.allow({
	insert: function(user){
		return !!user;
	}
})