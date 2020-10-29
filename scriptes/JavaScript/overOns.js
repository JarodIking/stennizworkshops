window.addEventListener('load', ()=>{

    const button = document.getElementById("privacy");
    const promotie = document.getElementById("promotie");
    const title = document.getElementsByClassName("titleHidden");
    const text = document.getElementsByClassName("textHidden");
    const link1 = document.getElementById('link1');
    const gallery = document.getElementById('galleryOverOns');
    const logo = document.getElementById('navbarImg');

    let titleStyle = getComputedStyle(title[1]).display;
    let textStyle = getComputedStyle(text[0]).display;

    promotie.onclick = ()=>{
        window.location.href='https://www.youtube.com/watch?v=x9w-d1tvGgI';
    }

    logo.onclick = ()=>{
        window.location.href="http://www.stennizworkshops.nl"
    }

    button.onclick = ()=>{
        
        if(titleStyle === 'none' && textStyle === 'none'){
            for(i = 0; i < title.length;i++){
                title[i].style.display = 'block';
                text[i].style.display = 'block';
            }

            titleStyle = getComputedStyle(title[1]).display;
            textStyle = getComputedStyle(text[0]).display;
        
        } else {
            for(a = 0; a < title.length;a++){
                title[a].style.display = 'none';
                text[a].style.display = 'none';
            }

            titleStyle = getComputedStyle(title[1]).display;
            textStyle = getComputedStyle(text[0]).display;

        }

    }

    link1.onclick = ()=>{
        gallery.setAttribute('id', 'galleryWorkshop');
        document.getElementById('galleryWorkshop').innerHTML='';
        sessionStorage.setItem("workshop" , 12);
        $.getScript("../JavaScript/workshop.js")
    }
    


    var slideIndex = 0;
    showSlides();

    function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
    } 



    const homeButton = document.getElementById('home');
    homeButton.onclick = ()=>{
        window.location.href="http://www.stennizworkshops.nl"
    }

    const contact = document.getElementById('contact');
    contact.onclick = ()=>{
        window.location.href="../html/contact.html";
    }





















})




