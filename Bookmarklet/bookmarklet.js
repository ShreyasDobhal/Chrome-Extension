(function(){
    console.log("Bookmark starting");
    let paragraphs = document.getElementsByTagName('p');
    for (let i=0;i<paragraphs.length;i++) {
        paragraphs[i].innerHTML ='This is p container';
    }
    
    
    
    let divider = document.getElementsByTagName('div');
    for (let i=0;i<divider.length;i++) {
        divider[i].innerHTML ='This is div container';
    }
    
    let header1 = document.getElementsByTagName('h1');
    for (let i=0;i<header1.length;i++) {
        header1[i].innerHTML ='This is h1 container';
    }
    
    let header2 = document.getElementsByTagName('h2');
    for (let i=0;i<header2.length;i++) {
        header2[i].innerHTML ='This is h2 container';
    }
    
    let body = document.getElementsByTagName('body');
    for (let i=0;i<head.length;i++) {
        head[i].innerHTML ='This is body container';
    }
    
})();

