chrome.runtime.onMessage.addListener(gotMessage);


function gotMessage(message,sender,sendResponse) {
    console.log(message.txt);
    if (message.txt==="hello") {
        editPage();
    }
}

function editPage(){
      
    let filenames = [
        "image.png"
    ];
    let imgs = document.getElementsByTagName('img');
  
    for (elt of imgs) {
        //elt.style['background-color'] = '#55ff55';
        //elt.innerHTML="hey";
        //elt.src ="file:///F:/Brackets/Examples/ChromeExtension/icon.png";
        let r = Math.floor(Math.random()*filenames.length);
        let file = filenames[r];
        let url = chrome.extension.getURL(file);
        elt.src=url;
    }
    
    
}