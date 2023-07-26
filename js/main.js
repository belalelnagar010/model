var lightboxcontainer= document.getElementById("lightbox-container");
var lightboxitem= document.getElementById("lightbox-item")
var img = Array.from( document.querySelectorAll(".img-fluid"));
var closes = document.getElementById("closes")
var prev = document.getElementById("prev")
var next = document.getElementById("next")
var currentindex=0;


for(i=0;i<img.length;i++){
    img[i].addEventListener("click",function(eventinfo){
        lightboxcontainer.style.display="flex";
        var imgsrc=eventinfo.target.src;
        lightboxitem.style.backgroundImage=`url(${imgsrc})`
        currentindex=img.indexOf(eventinfo.target);
    })
}

closes.addEventListener("click",closelider);

function closelider (){
    lightboxcontainer.style.display="none";
}

next.addEventListener("click",function(){
    if(currentindex==img.length){
        currentindex=0;
    }
    currentindex++;
    var imgsrc=img[currentindex].src;
    lightboxitem.style.backgroundImage=`url(${imgsrc})`
})


prev.addEventListener("click",function(){
    if(currentindex<0){
        currentindex=img.length-1
    }
    currentindex--;
    var imgsrc=img[currentindex].src;
    lightboxitem.style.backgroundImage=`url(${imgsrc})`
})

