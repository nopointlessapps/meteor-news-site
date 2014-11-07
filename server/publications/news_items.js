


Meteor.publish('newsItems', function(newsId){

	if( newsId ){
		return NewsItems.findOne({_id: newsId});

	}

	return NewsItems.find();

});