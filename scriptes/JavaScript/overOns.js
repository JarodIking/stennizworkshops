window.addEventListener('load', ()=>{

    const button = document.getElementById("privacy");
    const promotie = document.getElementById("promotie");
    const title = document.getElementsByClassName("titleHidden");
    const text = document.getElementsByClassName("textHidden");
    const link1 = document.getElementById('link1');
    const link2 = document.getElementById('link2');
    const logo = document.getElementById('navbarImg');
    const homeButton = document.getElementById('home');
    const contact = document.getElementById('contact');



    promotie.onclick = ()=>{
        window.location.href='https://www.youtube.com/watch?v=x9w-d1tvGgI';
    }

    logo.onclick = ()=>{
        window.location.href="http://www.stennizworkshops.nl"
    }

    homeButton.onclick = ()=>{
        window.location.href="http://www.stennizworkshops.nl"
    }

    contact.onclick = ()=>{
        window.location.href="../html/contact.html";
    }

    link1.onclick = ()=>{
        window.location.href='../../workshoppages/bso';
    }
    
    link2.onclick = ()=>{
        window.location.href='../../workshoppages/bso';
    }
    





    let titleStyle = getComputedStyle(title[1]).display;
    let textStyle = getComputedStyle(text[0]).display;

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
























})




