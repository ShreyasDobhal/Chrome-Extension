function setup() {
    noCanvas();
    let userinput = select('#userInput');
    userinput.input(changeText);
    
    function changeText() {
        
        let params = {
            active:true,
            currentWindow:true
        }
        chrome.tabs.query(params,gotTab);
        
        function gotTab(tabs) {
            let message=userinput.value();
            let msg={
                txt:userinput.value()
            };
            chrome.tabs.sendMessage(tabs[0].id,msg);    
        }
    }
}

function draw() {
    
}
