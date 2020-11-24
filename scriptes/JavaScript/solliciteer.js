window.addEventListener('load', ()=>{
    const vacatuurView = document.querySelector('#vacatuurView');
    const subject = document.querySelector('#subject')


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