

window.addEventListener('load', ()=>{


    const home = document.getElementById("home");
    const overOns = document.getElementById("overOns");
    const contact = document.getElementById('contact');
    const link1 = document.getElementById('link1');
    const link2 = document.getElementById('link2');
    const logo = document.getElementById('navbarImg');
    const solliciteer = document.getElementById('solliciteer');
    const insta = document.getElementById('instaLogo');
    const news = document.getElementById('revealPopup');
    const news1 = document.getElementById('nieuwsbrief');
    const whatsapp = document.getElementById('whatsappLink');
    const close = document.getElementById('close');


    whatsapp.onclick = ()=>{
        window.location.href='https://wa.me/+31624715745'
    } 



    let attr = 'none';
    news.onclick = ()=>{
        if(attr == 'none'){
            news1.setAttribute('style', 'display: block !important');
            attr = news1.style.display;
            console.log(attr);    
        } else {
            news1.setAttribute('style', 'display: none !important');
            attr = 'none'
        }
    }

    close.onclick = ()=>{
        if(attr == 'block'){
            news1.setAttribute('style', 'display: block !important');
            attr = 'none';
            // console.log(attr)
        } else {
            news1.setAttribute('style', 'display: none !important');
            attr = news1.style.display;
            // console.log(attr);    
        }
    }





    insta.onclick = ()=>{
        window.location.href='https://www.instagram.com/stennizproducties/?hl=en'
    }

    solliciteer.onclick = ()=>{
        window.location.href='../html/solliciteer.html'
    }

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











































































































































})

