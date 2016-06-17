document.addEventListener('DOMContentLoaded', function() {
	chrome.tabs.executeScript(null,{
		file: 'cs.js'        
	});
});

chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		var count = parseInt(request.content);
		
		$('#score-circle').circliful({
			animationStep: 5,
			foregroundBorderWidth: 5,
			backgroundBorderWidth: 15,
			percent: Math.min(Math.max(count, 0), 100)
		});
		
		var result = '';
		if (count == 0)
			result = 'Sucker';
		else if (count < 10)
			result = 'Pretty crap';
		else if (count < 30)
			result = 'Needs more float: left';
		else if (count < 70)
			result = 'Not good enough';
		else if (count < 100)
			result = 'Good'
		else if (count > 100)
			result = 'CSS wizard';
		
		$('#result').text(result);
		$('#noof').text('Found ' + count + ' float: left');
	}
);

