document.addEventListener("DOMContentLoaded", () => {

const images=document.querySelectorAll(".photo-gallery img");

const overlay=document.createElement("div");
overlay.className="lightbox";

overlay.innerHTML=`
<span class="lightbox-close">&times;</span>
<img class="lightbox-image">
<button class="lightbox-prev">&#10094;</button>
<button class="lightbox-next">&#10095;</button>
`;

document.body.appendChild(overlay);

const lightboxImage=overlay.querySelector(".lightbox-image");

let current=0;

function show(index){

current=index;

lightboxImage.src=images[index].src;

overlay.classList.add("open");

}

images.forEach((img,index)=>{

img.addEventListener("click",()=>show(index));

});

overlay.querySelector(".lightbox-close").onclick=()=>{

overlay.classList.remove("open");

};

overlay.querySelector(".lightbox-prev").onclick=()=>{

show((current-1+images.length)%images.length);

};

overlay.querySelector(".lightbox-next").onclick=()=>{

show((current+1)%images.length);

};

document.addEventListener("keydown",e=>{

if(!overlay.classList.contains("open")) return;

if(e.key==="Escape") overlay.classList.remove("open");

if(e.key==="ArrowLeft") show((current-1+images.length)%images.length);

if(e.key==="ArrowRight") show((current+1)%images.length);

});

overlay.addEventListener("click",e=>{

if(e.target===overlay)

overlay.classList.remove("open");

});

});
