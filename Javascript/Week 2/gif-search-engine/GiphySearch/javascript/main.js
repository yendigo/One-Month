/* 1. Grab the input value */

var a = document.querySelector(".js-go").addEventListener('click',function(){

    var input = document.querySelector("input").value;
    
    cleanContainer();
    searchGif(input);
    // pushToDOM(input);

    });

document.querySelector(".js-userinput").addEventListener('keyup',function(e){

    var input = document.querySelector("input").value;
    if(e.which === 13){
        
        cleanContainer();
        searchGif(input);
        // pushToDOM(input);
    } 

}); 



/* 2. do the data stuff with the API */

function searchGif(input){

    var url="https://api.giphy.com/v1/gifs/search?api_key=159OHMHxOFt4jbZ90TLmp2biQe7m74e6&q=" + input + "&limit=25&offset=0&rating=g&lang=en";

    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET',url);
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load',function(e){

        var data = e.target.response;
        pushToDOM(data);
    });

}

/* 3. Show me the GIFs */

function pushToDOM(input){
    
    var response = JSON.parse(input);
    var imageUrls = response.data;
    var container = document.querySelector(".js-container");

    imageUrls.forEach(function(image){

        var src = image.images.fixed_height.url;
        console.log(src);
        container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";

    });

    

}

function cleanContainer() {
    document.querySelector('.js-container').innerHTML = ""
}

