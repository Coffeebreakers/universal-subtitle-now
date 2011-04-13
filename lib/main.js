const widgets = require("widget");
const tabs = require("tabs");

var widget = widgets.Widget({
  id: "mozilla-link",
  label: "Mozilla website",
  contentURL: "http://www.mozilla.org/favicon.ico",
  onClick: function() {
    tabs.open("http://www.mozilla.org/");
  }
});

tabs.on('ready', function(tab) {
	var url = tab.url;
	if (url.match('^http://www.youtube.com')){
		console.log('tab is loaded', tab.title, tab.url);
	}
});
		
console.log("The add-on is running.");
