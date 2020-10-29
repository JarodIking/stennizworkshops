window.addEventListener('load', ()=>{

const home = document.getElementById("home");
const overOns = document.getElementById("overOns");
const contact = document.getElementById('contact');
const link1 = document.getElementById('link1');
const logo = document.getElementById('navbarImg');
const gallery = document.getElementById('galleryContact');

const carouselSlide = document.querySelector(".slide");
const carouselImages = document.querySelectorAll('.slide img')
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");


//counter
let counter = 1;
const size = carouselImages[0].clientWidth * 2;

carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

//button listeners
nextBtn.addEventListener("click", ()=>{
    if(counter >= carouselImages.length -2) return;

    console.log(carouselImages[counter].id);

    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

prevBtn.addEventListener("click", ()=>{
    if(counter <= 0) return;

    console.log(carouselImages[counter].id);

    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
})

carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImages[counter].id === 'lastClone' || carouselImages[counter].id === 'secondLastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

    }
    if(carouselImages[counter].id === 'firstClone' || carouselImages[counter].id === 'secondFirstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

    }

});















logo.onclick = ()=>{
    window.location.href="http://www.stennizworkshops.nl"
}


home.onclick = ()=>{
    window.location.href="http://www.stennizworkshops.nl"
}

overOns.onclick = ()=>{
    window.location.href="../html/overOns.html"
}

contact.onclick = ()=>{
    location.reload();

}


link1.onclick = ()=>{
    gallery.setAttribute('id', 'galleryWorkshop');
    document.getElementById('galleryWorkshop').innerHTML='';
    sessionStorage.setItem("workshop" , 12);
    $.getScript("../JavaScript/workshop.js")

}


























































































































})

