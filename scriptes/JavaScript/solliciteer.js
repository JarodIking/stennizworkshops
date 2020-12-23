window.addEventListener('load', ()=>{
    const vacatuurView = document.querySelector('#vacatuurView');
    const subject = document.querySelector('#subject');
    const link1 = document.querySelector('#link1');
    const link2 = document.querySelector('#link2');
    const teamwork = document.querySelector('#toTeamwork');
    const logo = document.querySelector('#navbarImg');
    const home = document.querySelector('#home');
    const overOns = document.querySelector('#overOns');
    const contact = document.querySelector('#contact');

    link1.onclick = ()=>{
        window.location.href='../../workshopPages/bso'
    }

    link2.onclick = ()=>{
        window.location.href='../../workshopPages/bso'
    }

    teamwork.onclick = ()=>{
        window.location.href='../../workshopPages/teamwork'
    }

    logo.onclick = ()=>{
        window.location.href='http://www.stennizworkshops.nl'
    }

    home.onclick = ()=>{
        window.location.href='http://www.stennizworkshops.nl'
    }

    overOns.onclick = ()=>{
        window.location.href='../html/overOns.html'
    }

    contact.onclick = ()=>{
        window.location.href='../html/contact.html'
    }




    // vacatuur docent game design
        const game = document.querySelector('#vacatuurGame');
        const vacatuur = document.querySelector('#docentGameDesign');
        const terug = document.querySelector('#terugGame');
        const solGame = document.querySelector('#solGame');

        game.onclick = ()=>{
            vacatuurView.style.display = 'none';
            vacatuur.style.display = 'block';

            terug.addEventListener('click', ()=>{
                vacatuurView.style.display = 'block';
                vacatuur.style.display = 'none';
                subject.value = ''; 
            })

            solGame.addEventListener('click', ()=>{
                subject.value = 'Docent game artist';
            })

        }
    // ----------------------------

    // vacatuur Kinderopvang begeleider
    const kinder = document.querySelector('#vacatuurKinder');
    const vacatuur1 = document.querySelector('#kinderopvangBegeleider');
    const terug1 = document.querySelector('#terugKinder');
    const solKinder = document.querySelector('#solKinder');

    kinder.onclick = ()=>{
        vacatuurView.style.display = 'none';
        vacatuur1.style.display = 'block';

        terug1.addEventListener('click', ()=>{
            vacatuurView.style.display = 'block';
            vacatuur1.style.display = 'none';
            subject.value = '';
        })

        solKinder.addEventListener('click', ()=>{
            subject.value = 'Kinderopvang begeleider';
        })

    }











})