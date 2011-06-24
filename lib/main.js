// SDK Libs
const widgets = require('widget'), 
      tabs = require('tabs'), 
      data = require('self').data;

// Addon const
const universalSubtitlesImg = 'http://s3.www.universalsubtitles.org/images';

tabs.on('ready', function (tab) {
  var tabUrl = tab.url;
  if (tabUrl.match('^http://www.youtube.com')) {
    var widget = widgets.Widget({
      id: 'active-universal-subtitles',
      label: 'Active Universal Subtitles',
      contentURL: universalSubtitlesImg +'/favicon.png',
      contentScriptFile: [data.url('jquery-1.6.1.min.js'),
                          data.url('universal-subtitles-now.js')],
      contentScriptWhen: "start",
      onClick: function (tabUrl) {
        widget.USN.setVideoContainer(tabUrl);
        console.log($(document));
      }
    })
  } else {
    var notifications = require('notifications');
    notifications.notify({
      title: 'Universal Subtitles',
      text: 'Não esta na página do Youtube',
      iconURL: universalSubtitlesImg +'/favicon.png'
    });
  }
});

