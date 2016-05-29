 
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    var imagesDiv = document.getElementsByClassName("classifiedDetailThumbList ")[0];
		var imageList = imagesDiv.getElementsByTagName("IMG");
		var links =new Array();
		for(var i=0;i<imageList.length;i++){
			links.push(imageList[i].getAttribute("src").replace("thmb_",""));
		}
    if (request.cmd == "download")
      sendResponse({ilanlar: links});
  });
