chrome.runtime.onMessage.addListener(gotMessage);


function gotMessage(message,sender,sendResponse) {
    console.log(message);
    
    let para = document.getElementsByTagName('p');
  
    for (elt of para) {
        elt.innerHTML=message.txt;
    }
}