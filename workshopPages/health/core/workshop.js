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
        url: 'core/health.json',
        success: function(data){
            if(ws1 == 'bodybeat'){
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

            if(ws1 == 'capoeira'){
                function workshop1(){
                    $("#workshopTitle").html(data[1].title);
                    $("#intro").html(data[1].intro);
                    $("#about").html(data[1].about);
                    $("#goals").html(data[1].goals);
                    $("#age").html(data[1].age);
                    $("#amount").html(data[1].amount);
                    $("#time").html(data[1].time);
                    $("#required").html(data[1].required);
                    $("#given").html(data[1].given);
                    $("#location").html(data[1].location);
                    $("#result").html(data[1].result);
                    reveal();
                    $('#video').css({filter: "grayscale(0.9)"});
                    $("html, body").animate({ scrollTop: 700 }, 500);
    
                }
                workshop1();
            }

            if(ws1 == 'freerunning'){
                function workshop2(){
                    $("#workshopTitle").html(data[2].title);
                    $("#intro").html(data[2].intro);
                    $("#about").html(data[2].about);
                    $("#goals").html(data[2].goals);
                    $("#age").html(data[2].age);
                    $("#amount").html(data[2].amount);
                    $("#time").html(data[2].time);
                    $("#required").html(data[2].required);
                    $("#given").html(data[2].given);
                    $("#location").html(data[2].location);
                    $("#result").html(data[2].result);
                    reveal();
                    $('#video').css({filter: "grayscale(0.9)"});
                    $("html, body").animate({ scrollTop: 700 }, 500);
    
                }
                workshop2();
            }

            if(ws1 == 'longboarding'){
                function workshop3(){
                    $("#workshopTitle").html(data[3].title);
                    $("#intro").html(data[3].intro);
                    $("#about").html(data[3].about);
                    $("#goals").html(data[3].goals);
                    $("#age").html(data[3].age);
                    $("#amount").html(data[3].amount);
                    $("#time").html(data[3].time);
                    $("#required").html(data[3].required);
                    $("#given").html(data[3].given);
                    $("#location").html(data[3].location);
                    $("#result").html(data[3].result);
                    reveal();
                    $('#video').css({filter: "grayscale(0.9)"});
                    $("html, body").animate({ scrollTop: 700 }, 500);
    
                }
                workshop3();
            }

            if(ws1 == 'stuntman'){
                function workshop4(){
                    $("#workshopTitle").html(data[4].title);
                    $("#intro").html(data[4].intro);
                    $("#about").html(data[4].about);
                    $("#goals").html(data[4].goals);
                    $("#age").html(data[4].age);
                    $("#amount").html(data[4].amount);
                    $("#time").html(data[4].time);
                    $("#required").html(data[4].required);
                    $("#given").html(data[4].given);
                    $("#location").html(data[4].location);
                    $("#result").html(data[4].result);
                    reveal();
                    $('#video').css({filter: "grayscale(0.9)"});
                    $("html, body").animate({ scrollTop: 700 }, 500);
    
                }
                workshop4();
            }

            if(ws1 == 'yoga'){
                function workshop5(){
                    $("#workshopTitle").html(data[5].title);
                    $("#intro").html(data[5].intro);
                    $("#about").html(data[5].about);
                    $("#goals").html(data[5].goals);
                    $("#age").html(data[5].age);
                    $("#amount").html(data[5].amount);
                    $("#time").html(data[5].time);
                    $("#required").html(data[5].required);
                    $("#given").html(data[5].given);
                    $("#location").html(data[5].location);
                    $("#result").html(data[5].result);
                    reveal();
                    $('#video').css({filter: "grayscale(0.9)"});
                    $("html, body").animate({ scrollTop: 700 }, 500);
    
                }
                workshop5();
            }

            if(ws1 == 'acrobatiek'){
                function workshop6(){
                    $("#workshopTitle").html(data[6].title);
                    $("#intro").html(data[6].intro);
                    $("#about").html(data[6].about);
                    $("#goals").html(data[6].goals);
                    $("#age").html(data[6].age);
                    $("#amount").html(data[6].amount);
                    $("#time").html(data[6].time);
                    $("#required").html(data[6].required);
                    $("#given").html(data[6].given);
                    $("#location").html(data[6].location);
                    $("#result").html(data[6].result);
                    reveal();
                    $('#video').css({filter: "grayscale(0.9)"});
                    $("html, body").animate({ scrollTop: 700 }, 500);
    
                }
                workshop6();
            }

            if(ws1 == 'taichi'){
                function workshop7(){
                    $("#workshopTitle").html(data[7].title);
                    $("#intro").html(data[7].intro);
                    $("#about").html(data[7].about);
                    $("#goals").html(data[7].goals);
                    $("#age").html(data[7].age);
                    $("#amount").html(data[7].amount);
                    $("#time").html(data[7].time);
                    $("#required").html(data[7].required);
                    $("#given").html(data[7].given);
                    $("#location").html(data[7].location);
                    $("#result").html(data[7].result);
                    reveal();
                    $('#video').css({filter: "grayscale(0.9)"});
                    $("html, body").animate({ scrollTop: 700 }, 500);
    
                }
                workshop7();
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
        window.location.href = '../../scriptes/html/contact.php'
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
        url: 'core/health.json',
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
            
        

            $("#pol1").click(function(){
                $("#workshopTitle").html(data[1].title);
                $("#intro").html(data[1].intro);
                $("#about").html(data[1].about);
                $("#goals").html(data[1].goals);
                $("#age").html(data[1].age);
                $("#amount").html(data[1].amount);
                $("#time").html(data[1].time);
                $("#required").html(data[1].required);
                $("#given").html(data[1].given);
                $("#result").html(data[1].result);
                $('#video').css({filter: "grayscale(0.9)"});
                $("html, body").animate({ scrollTop: 700 }, 500);
                reveal();
    


            });



            $("#pol2").click(function(){
                $("#workshopTitle").html(data[2].title);
                $("#intro").html(data[2].intro);
                $("#about").html(data[2].about);
                $("#goals").html(data[2].goals);
                $("#age").html(data[2].age);
                $("#amount").html(data[2].amount);
                $("#time").html(data[2].time);
                $("#required").html(data[2].required);
                $("#given").html(data[2].given);
                $("#result").html(data[2].result);
                reveal();
                $('#video').css({filter: "grayscale(0.9)"});
                $("html, body").animate({ scrollTop: 700 }, 500);

            

            });

            $("#pol3").click(function(){
                $("#workshopTitle").html(data[3].title);
                $("#intro").html(data[3].intro);
                $("#about").html(data[3].about);
                $("#goals").html(data[3].goals);
                $("#age").html(data[3].age);
                $("#amount").html(data[3].amount);
                $("#time").html(data[3].time);
                $("#required").html(data[3].required);
                $("#given").html(data[3].given);
                $("#result").html(data[3].result);
                reveal();
                $('#video').css({filter: "grayscale(0.9)"});
                $("html, body").animate({ scrollTop: 700 }, 500);

            

            });

            $("#pol4").click(function(){
                $("#workshopTitle").html(data[4].title);
                $("#intro").html(data[4].intro);
                $("#about").html(data[4].about);
                $("#goals").html(data[4].goals);
                $("#age").html(data[4].age);
                $("#amount").html(data[4].amount);
                $("#time").html(data[4].time);
                $("#required").html(data[4].required);
                $("#given").html(data[4].given);
                $("#result").html(data[4].result);
                reveal();
                $('#video').css({filter: "grayscale(0.9)"});
                $("html, body").animate({ scrollTop: 700 }, 500);

            

            });

            $("#pol5").click(function(){
                $("#workshopTitle").html(data[5].title);
                $("#intro").html(data[5].intro);
                $("#about").html(data[5].about);
                $("#goals").html(data[5].goals);
                $("#age").html(data[5].age);
                $("#amount").html(data[5].amount);
                $("#time").html(data[5].time);
                $("#required").html(data[5].required);
                $("#given").html(data[5].given);
                $("#result").html(data[5].result);
                reveal();
                $('#video').css({filter: "grayscale(0.9)"});
                $("html, body").animate({ scrollTop: 700 }, 500);

            

            });

            $("#pol6").click(function(){
                $("#workshopTitle").html(data[6].title);
                $("#intro").html(data[6].intro);
                $("#about").html(data[6].about);
                $("#goals").html(data[6].goals);
                $("#age").html(data[6].age);
                $("#amount").html(data[6].amount);
                $("#time").html(data[6].time);
                $("#required").html(data[6].required);
                $("#given").html(data[6].given);
                $("#result").html(data[6].result);
                reveal();
                $('#video').css({filter: "grayscale(0.9)"});
                $("html, body").animate({ scrollTop: 700 }, 500);

            

            });

            $("#pol7").click(function(){
                $("#workshopTitle").html(data[7].title);
                $("#intro").html(data[7].intro);
                $("#about").html(data[7].about);
                $("#goals").html(data[7].goals);
                $("#age").html(data[7].age);
                $("#amount").html(data[7].amount);
                $("#time").html(data[7].time);
                $("#required").html(data[7].required);
                $("#given").html(data[7].given);
                $("#result").html(data[7].result);
                reveal();
                $('#video').css({filter: "grayscale(0.9)"});
                $("html, body").animate({ scrollTop: 700 }, 500);

            

            });

        }
        
        
    });

    // -----------------------------------------------------------------------------





})


