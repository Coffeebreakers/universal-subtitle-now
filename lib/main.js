// SDK Libs
const widgets = require('widget'), 
      tabs = require('tabs'), 
      self = require('self');

// Addon const
const universalSubtitlesImg = 'http://s3.www.universalsubtitles.org/images';

tabs.on('ready', function (tab) {
  var tabUrl = tab.url;
  if (tabUrl.match('^http://www.youtube.com')) {
    var widget = widgets.Widget({
      id: 'active-universal-subtitles',
      label: 'Active Universal Subtitles',
      contentURL: universalSubtitlesImg +'/favicon.png',
      onClick: function () {
        console.log($('body').html());
        console.log('esta no youtube')
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

