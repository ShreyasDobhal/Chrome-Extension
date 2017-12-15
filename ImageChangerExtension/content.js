
(function(){
      
    let filenames = [
        "image0.png",
        "image1.png"
    ];
    let imgs = document.getElementsByTagName('img');
  
    for (elt of imgs) {
        //elt.style['background-color'] = '#55ff55';
        //elt.innerHTML="hey";
        //elt.src ="file:///F:/Brackets/Examples/ChromeExtension/icon.png";
        let r = Math.floor(Math.random()*filenames.length);
        let file = "images/"+filenames[r];
        let url = chrome.extension.getURL(file);
        elt.src=url;
    }
    
    
})();