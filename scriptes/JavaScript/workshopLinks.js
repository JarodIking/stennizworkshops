$(window).ready(function (){

// navbarlinks
    $("#home").click(function(){
        location.reload();
    });

    $("#contact").click(function(){
        window.location.href = "scriptes/html/contact.html";
    });

    $('#overOns').click(function(){
        window.location.href = "scriptes/html/overOns.html";
    })

    $('#toTeamwork').click(()=>{
        $('#gallery').attr('id' , 'galleryWorkshop');
        $("#galleryWorkshop").empty();
        sessionStorage.setItem("workshop" , 6);
        $.getScript("scriptes/JavaScript/workshop.js")
    })

    $("#navbarImg").click(()=>{
        location.reload();
    })



    // links to workshops---------------------------------------------
    var beeldkunst = 0;

    $("#w0").click(function(){
        window.location.href='workshopPages/beeldkunst/'
        // $("#gallery").attr('id' , 'galleryWorkshop');   
        // $("#galleryWorkshop").empty();
        // sessionStorage.setItem("workshop" , 0);
        // $.getScript("scriptes/JavaScript/workshop.js");
    });

    $("#w1").click(function(){
        $("#gallery").attr('id' , 'galleryWorkshop');   
        $("#galleryWorkshop").empty();
        sessionStorage.setItem("workshop" , 1);
        $.getScript("scriptes/JavaScript/workshop.js")

    });

    $("#w2").click(function(){
        $("#gallery").attr('id' , 'galleryWorkshop');   
        $("#galleryWorkshop").empty();
        sessionStorage.setItem("workshop" , 2);
        $.getScript("scriptes/JavaScript/workshop.js")

    });

    $("#w3").click(function(){
        $("#gallery").attr('id' , 'galleryWorkshop');   
        $("#galleryWorkshop").empty();
        sessionStorage.setItem("workshop" , 3);
        $.getScript("scriptes/JavaScript/workshop.js")

    });

    $("#w4").click(function(){
        $("#gallery").attr('id' , 'galleryWorkshop');   
        $("#galleryWorkshop").empty();
        sessionStorage.setItem("workshop" , 4);
        $.getScript("scriptes/JavaScript/workshop.js")
    });

    $("#w5").click(function(){
        $("#gallery").attr('id' , 'galleryWorkshop');   
        $("#galleryWorkshop").empty();
        sessionStorage.setItem("workshop" , 5);
        $.getScript("scriptes/JavaScript/workshop.js")
    });

    $("#w6").click(function(){
        $("#gallery").attr('id' , 'galleryWorkshop');   
        $("#galleryWorkshop").empty();
        sessionStorage.setItem("workshop" , 6);
        $.getScript("scriptes/JavaScript/workshop.js")
    });

    $("#w7").click(function(){
        $("#gallery").attr('id' , 'galleryWorkshop');   
        $("#galleryWorkshop").empty();
        sessionStorage.setItem("workshop" , 7);
        $.getScript("scriptes/JavaScript/workshop.js")
    });

    $("#w8").click(function(){
        $("#gallery").attr('id' , 'galleryWorkshop');   
        $("#galleryWorkshop").empty();
        sessionStorage.setItem("workshop" , 8);
        $.getScript("scriptes/JavaScript/workshop.js")
    });

    $("#w9").click(function(){
        $("#gallery").attr('id' , 'galleryWorkshop');   
        $("#galleryWorkshop").empty();
        sessionStorage.setItem("workshop" , 9);
        $.getScript("scriptes/JavaScript/workshop.js")
    });

    $("#link1").click(function(){
        $("#gallery").attr('id' , 'galleryWorkshop');   
        $("#galleryWorkshop").empty();
        sessionStorage.setItem("workshop" , 10);
        $.getScript("scriptes/JavaScript/workshop.js")
    });

    // ----------------------------------------------------------------































});




