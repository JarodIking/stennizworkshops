window.addEventListener('load', ()=>{

    const button = document.getElementById("privacy");
    const button1 = document.getElementById("voorwaarden");
    const promotie = document.getElementById("promotie");
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
        window.location.href='../../workshopPages/bso';
    }
    
    link2.onclick = ()=>{
        window.location.href='../../workshopPages/bso';
    }
    

// privacy policy

    const title = document.getElementsByClassName("titleHidden");
    const text = document.getElementsByClassName("textHidden");


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




// algemeene voorwaarden
    const title1 = document.getElementsByClassName("titleHidden1");
    const text1 = document.getElementsByClassName("textHidden1");


    let titleStyle1 = getComputedStyle(title1[1]).display;
    let textStyle1 = getComputedStyle(text1[0]).display;

    button1.onclick = ()=>{
        
        if(titleStyle1 === 'none' && textStyle1 === 'none'){
            for(i = 0; i < text1.length;i++){
                title1[i].style.display = 'block';
                text1[i].style.display = 'block';
                console.log(text1[i]);
            }

            titleStyle1 = getComputedStyle(title1[1]).display;
            textStyle1 = getComputedStyle(text1[0]).display;
        
        } else {
            for(a = 0; a < text1.length;a++){
                title1[a].style.display = 'none';
                text1[a].style.display = 'none';
                console.log(text1[i]);
            }

            titleStyle1 = getComputedStyle(title1[1]).display;
            textStyle1 = getComputedStyle(text1[0]).display;

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




