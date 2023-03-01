 
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    var imagesDiv = document.getElementsByClassName("megaPhotoThmbItems")[0];
		var imageList = imagesDiv.getElementsByTagName("IMG");
		var links =new Array();
		for(var i=0;i<imageList.length;i++){
			links.push(imageList[i].getAttribute("data-source"));
		}
    if (request.cmd == "download")
      sendResponse({ilanlar: links});
  });
