function setup() {
    createCanvas(500,1);
    let bgpage = chrome.extension.getBackgroundPage();
    let  word = bgpage.word;
    createP(word).style('font-size','25pt');
    
    let url="http://api.wordnik.com/v4/word.json/";
    url+=word;
    url+="/definitions?limit=1&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
    
    loadJSON(url,gotData);
    
    function gotData(data) {
        createP(data[0].text).style('font-size','18pt');
    }
    
}

function draw() {
    
}
