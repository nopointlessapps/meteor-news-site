




Template.registerHelper("formatDate", function(date){
	return moment(date).format('MMMM Do, YYYY')
});