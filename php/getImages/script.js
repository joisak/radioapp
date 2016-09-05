$(document).ready(function(){

	$.ajax({
		type: "GET",
		dataType: "jsonp",
		url: "http://content.guardianapis.com/search?q=match-preview&api-key=fa9b7e32-1b16-4f32-b210-89ff47002f33",
		success: printLinks
	});

	function printLinks(data){
		var matchInfo = data.response.results;
		console.log(data);
		console.log(matchInfo);

		$.each(matchInfo, function(i){
			matchUrl = matchInfo[i].webUrl;
			matchTitle = matchInfo[i].webTitle;
			$('.match-list ul').append("<li><a href='" + matchUrl + "'>" + matchTitle + "</a></li>");
		})

	}
});