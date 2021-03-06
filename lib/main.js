// SDK Libs
const widgets = require('widget'),
      tabs = require('tabs'),
      data = require('self').data;

// Addon const
const universalSubtitlesImg = 'http://s3.www.universalsubtitles.org/static-cache/3e003cdb/images';

tabs.on('ready', function (tab) {
  var tabUrl = tab.url;
  if (tabUrl.match('^http://www.youtube.com')) {
    var widget = widgets.Widget({
      id: 'active-universal-subtitles',
      label: 'Active Universal Subtitles',
      contentURL: universalSubtitlesImg +'/favicon.png',
      contentScriptFile: [data.url('jquery-1.6.4.min.js')],
      contentScriptWhen: "start",
      onClick: function (tabUrl) {
        console.log(tabUrl);
      }
    })
  }
});

