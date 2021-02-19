$(window).ready(function (){


    $('#confirm').click(()=>{
        $('#center').css({display: 'none'})
    })




// navbarlinks
    $("#home").click(function(){
        location.reload();
    });

    $("#contact").click(function(){
        window.location.href = "scriptes/html/contact.php";
    });

    $('#overOns').click(function(){
        window.location.href = "scriptes/html/overOns.html";
    })

    $('#toTeamwork').click(()=>{
    })

    $("#navbarImg").click(()=>{
        location.reload();
    })



    // links to workshops---------------------------------------------
    var beeldkunst = 0;

    $("#w0").click(function(){
        window.location.href='workshopPages/beeldkunst/'
    });

    $("#w1").click(function(){
        window.location.href='workshopPages/science/'
    });

    $("#w2").click(function(){
        window.location.href='workshopPages/dans/'
    });

    $("#w3").click(function(){
        window.location.href='workshopPages/muziek/'
    });

    $("#w4").click(function(){
        window.location.href='workshopPages/health/'
    });

    $("#w5").click(function(){
        window.location.href='workshopPages/taal/'
    });

    $("#w6").click(function(){
        window.location.href='workshopPages/teamwork/'
    });

    $("#w7").click(function(){
        window.location.href='workshopPages/theater/'
    });

    $("#w8").click(function(){
        window.location.href='workshopPages/diy/'
    });

    $("#w9").click(function(){
        window.location.href='workshopPages/reeks/'
    });

    $("#link1").click(function(){
        window.location.href='workshopPages/bso/'
    });

    // ----------------------------------------------------------------































});




