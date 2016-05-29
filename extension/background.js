chrome.tabs.onUpdated.addListener(function (okayId) {
	chrome.tabs.get(okayId, function (okay) {
		{
			if (okay.url.indexOf('https://www.sahibinden.com/ilan/') > -1) {
				chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				  chrome.tabs.sendMessage(tabs[0].id, {cmd: "download"}, function(response) {
					for(var i=0;i<response.ilanlar.length;i++){
						chrome.downloads.download({
							url: response.ilanlar[i],
							filename: i +".jpg"
						});
					}
				  });
				});
			}
		}
	})
});