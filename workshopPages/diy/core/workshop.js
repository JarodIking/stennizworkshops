
const textInsert = document.getElementsByClassName('textInsert');
reveal = ()=>{
    for (let i = 0; i < textInsert.length; i++) {
        textInsert[i].style.opacity = 1;
    }
}



function ws(ws1){
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'core/diy.json',
        success: function(data){
            if(ws1 == 'diy'){
                function workshop0(){
                    $("#workshopTitle").html(data[0].title);
                    $("#intro").html(data[0].intro);
                    $("#about").html(data[0].about);
                    $("#goals").html(data[0].goals);
                    $("#age").html(data[0].age);
                    $("#amount").html(data[0].amount);
                    $("#time").html(data[0].time);
                    $("#required").html(data[0].required);
                    $("#given").html(data[0].given);
                    $("#location").html(data[0].location);
                    $("#result").html(data[0].result);
                    reveal();
                    $('#video').css({filter: "grayscale(0.9)"});
                    $("html, body").animate({ scrollTop: 700 }, 500);
    
                }
                workshop0();
            }
            
        }

    })
}


$(window).ready(function(){
    var getJson;
    var pic;
    let title;
    let location = 0;

    // navbar links----------------------------------------------------------------------------------------------
    $("#contact").click(function(){
        window.location.href = '../../scriptes/html/contact.html'
    });

    $('#overOns').click(function(){
        window.location.href = '../../scriptes/html/overOns.html'
    })

    $('#home').click(()=>{
        window.location.href='http://www.stennizworkshops.nl'
    })

    $('#link1').click(()=>{
        window.location.href='../bso/'
    })

    $('#link2').click(()=>{
        window.location.href='../bso/'
    })

    $('#toTeamwork').click(()=>{
        window.location.href='../teamwork/';
    })

    $('#navbarImg').click(()=>{
        window.location.href='http://www.stennizworkshops.nl'
    })



    // --------------------------------------------------------------------------------------------------------


    // -----------------------------------------------------------------------------------------



    // get json information for polaroids and load polariods and polariod styles-----------------------------------------------
    var i = 0;
    var rot = 0;
    var xy= 0;

    let xyS = 0;

    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'core/diy.json',
        success: function(data){
            // generate polariods
            for(i = 0;i<data.length;i++){
                $("#polariodView").append("<div id=" + "cell"+ i + " " + "class='polariodCell'><div id=" + "pol" + i + " " + "class='polariod' ><div id=" + "photo" + i + " " + " class='polariodPhoto'><div class='polariodTitle'>"+ data[i].title + "</div></div></div></div>"); 
                $("#photo" + i).css("background-image" , 'url(' + 'media/fotos/'+ data[i].img + ')');

                // polariod rotation
                xy = Math.floor((Math.random() * 10) + 1);

                if(xy % 2 !== 0){
                    rot = Math.floor((Math.random() * -10) + 1);
                } else {
                    rot = Math.floor((Math.random() * 10) + 1);
                }
        
                $('#pol' +i).css(
                    "transform" , "rotate("+rot+"deg)"
                )        

                // polariod sizes
                xyS = Math.floor((Math.random() * 10) + 1);

                if(xyS % 2 !== 0){
                    $('#pol' +i).css({height: "180"});
                    $('#pol' +i).css({width: "210"});
                } 
            }



            // click functions for extra information about workshops
            $("#pol0").click(function(){
                $("#workshopTitle").html(data[0].title);
                $("#intro").html(data[0].intro);
                $("#about").html(data[0].about);
                $("#goals").html(data[0].goals);
                $("#age").html(data[0].age);
                $("#amount").html(data[0].amount);
                $("#time").html(data[0].time);
                $("#required").html(data[0].required);
                $("#given").html(data[0].given);
                $("#location").html(data[0].location);
                $("#result").html(data[0].result);
                $('#video').css({filter: "grayscale(0.9)"});
                $("html, body").animate({ scrollTop: 700 }, 500);
                reveal();    
            });    
                        
        
        }
        
        
    });






})


