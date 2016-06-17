var sheets = document.styleSheets;
var re = /(float: left|float:left)/g;
var match;
var count = 0;

for (var i in sheets) {
	var sheet = sheets[i];
	var rules = sheet.rules || sheet.cssRules;
	for (var j in rules) {
		while (match = re.exec(rules[j].cssText)) {
			count++;
		}
	}
}

chrome.extension.sendRequest({content: count}, function(response) { });
