


Template.newsNew.events({
	"submit #news-new__form": function(e, template){
		e.preventDefault();

		var title = template.find("#news-new__form-title").value,
			content = template.find("#news-new__form-content").value,
			publicationDate = Date.now();

		NewsItems.insert({
			title: title,
			content: content,
			publicationDate: publicationDate
		}, function(err, newsItemId){
			if( !err ){
				Router.go('newsShow', {view: newsItemId})
			}
		});
	}
})