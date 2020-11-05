

window.addEventListener('load', ()=>{


const home = document.getElementById("home");
const overOns = document.getElementById("overOns");
const contact = document.getElementById('contact');
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const logo = document.getElementById('navbarImg');



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
    window.location.href='../../workshopPages/bso';
}

link2.onclick = ()=>{
    window.location.href='../../workshopPages/bso';
}



// const carouselSlide = document.querySelector(".slide");
// const carouselImages = document.querySelectorAll('.slide img')
// const prevBtn = document.querySelector("#prev");
// const nextBtn = document.querySelector("#next");s


// //counter
// let counter = 1;
// const size = carouselImages[0].clientWidth;

// carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

// //button listeners
// nextBtn.addEventListener("click", ()=>{
//     if(counter >= carouselImages.length -2) return;

//     console.log(carouselImages[counter].id);

//     carouselSlide.style.transition = "transform 0.4s ease-in-out";
//     counter++;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
// });

// prevBtn.addEventListener("click", ()=>{
//     if(counter <= 0) return;

//     console.log(carouselImages[counter].id);

//     carouselSlide.style.transition = "transform 0.4s ease-in-out";
//     counter--;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
// })

// carouselSlide.addEventListener('transitionend', ()=>{
//     if(carouselImages[counter].id === 'lastClone' || carouselImages[counter].id === 'secondLastClone'){
//         carouselSlide.style.transition = "none";
//         counter = carouselImages.length -2;
//         carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

//     }
//     if(carouselImages[counter].id === 'firstClone' || carouselImages[counter].id === 'secondFirstClone'){
//         carouselSlide.style.transition = "none";
//         counter = carouselImages.length -counter;
//         carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

//     }

// });








































































































































})

