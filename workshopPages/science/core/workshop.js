$(window).ready(function(){
    var getJson;
    var pic;
    let title;
    let location = 0;



      const textInsert = document.getElementsByClassName('textInsert');
    //   const vid = document.getElementById('video');

      reveal = ()=>{
        for (let i = 0; i < textInsert.length; i++) {
            textInsert[i].style.opacity = 1;
        }
        // vid.style.filter = 'greyscale(0.8)';


      }


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
        url: 'core/science.json',
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

                if(data[0].title == 'Film & Muziek Avontuur'){
                    $("body").append("<div id='popUp'></div")
                    if(location !== 1){
                        $("#popUp").css("background-image","url(media/fotos/reeks/pdf-1.png)");
                    } else {
                        $("#popUp").css("background-image","url(../../media/fotos/reeks/pdf-1.png)");
                    }
                    $("#popUp").append("<div id='exitPopUp'>X</div")    
                } else {
                    reveal();
                }

                $("#exitPopUp").on('click',()=>{
                    $('#popUp').remove();
                })
    
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

                if(data[1].title == 'Game Design Avontuur'){
                    $("body").append("<div id='popUp'></div")
                    if(location !== 1){
                        $("#popUp").css("background-image","url(media/fotos/reeks/game.jpg)");
                    } else {
                        $("#popUp").css("background-image","url(../../media/fotos/reeks/game.jpg)");
                    }
                    $("#popUp").append("<div id='exitPopUp'>X</div")    
                } else {
                    reveal();
                }

                $("#exitPopUp").on('click',()=>{
                    $('#popUp').remove();
                })

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

            

            });

            $("#pol8").click(function(){
                $("#workshopTitle").html(data[8].title);
                $("#intro").html(data[8].intro);
                $("#about").html(data[8].about);
                $("#goals").html(data[8].goals);
                $("#age").html(data[8].age);
                $("#amount").html(data[8].amount);
                $("#time").html(data[8].time);
                $("#required").html(data[8].required);
                $("#given").html(data[8].given);
                $("#result").html(data[8].result);
                reveal();
                $('#video').css({filter: "grayscale(0.9)"});

            

            });

            $("#pol9").click(function(){
                $("#workshopTitle").html(data[9].title);
                $("#intro").html(data[9].intro);
                $("#about").html(data[9].about);
                $("#goals").html(data[9].goals);
                $("#age").html(data[9].age);
                $("#amount").html(data[9].amount);
                $("#time").html(data[9].time);
                $("#required").html(data[9].required);
                $("#given").html(data[9].given);
                $("#result").html(data[9].result);
                reveal();
                $('#video').css({filter: "grayscale(0.9)"});

            

            });

            $("#pol10").click(function(){
                $("#workshopTitle").html(data[10].title);
                $("#intro").html(data[10].intro);
                $("#about").html(data[10].about);
                $("#goals").html(data[10].goals);
                $("#age").html(data[10].age);
                $("#amount").html(data[10].amount);
                $("#time").html(data[10].time);
                $("#required").html(data[10].required);
                $("#given").html(data[10].given);
                $("#result").html(data[10].result);
                reveal();
                $('#video').css({filter: "grayscale(0.9)"});

            

            });

            $("#pol11").click(function(){
                $("#workshopTitle").html(data[11].title);
                $("#intro").html(data[11].intro);
                $("#about").html(data[11].about);
                $("#goals").html(data[11].goals);
                $("#age").html(data[11].age);
                $("#amount").html(data[11].amount);
                $("#time").html(data[11].time);
                $("#required").html(data[11].required);
                $("#given").html(data[11].given);
                $("#result").html(data[11].result);
                reveal();
                $('#video').css({filter: "grayscale(0.9)"});

            

            });

            $("#pol12").click(function(){
                $("#workshopTitle").html(data[12].title);
                $("#intro").html(data[12].intro);
                $("#about").html(data[12].about);
                $("#goals").html(data[12].goals);
                $("#age").html(data[12].age);
                $("#amount").html(data[12].amount);
                $("#time").html(data[12].time);
                $("#required").html(data[12].required);
                $("#given").html(data[12].given);
                $("#result").html(data[12].result);
                reveal();
                $('#video').css({filter: "grayscale(0.9)"});

            

            });

            $("#pol13").click(function(){
                $("#workshopTitle").html(data[13].title);
                $("#intro").html(data[13].intro);
                $("#about").html(data[13].about);
                $("#goals").html(data[13].goals);
                $("#age").html(data[13].age);
                $("#amount").html(data[13].amount);
                $("#time").html(data[13].time);
                $("#required").html(data[13].required);
                $("#given").html(data[13].given);
                $("#result").html(data[13].result);
                reveal();
                $('#video').css({filter: "grayscale(0.9)"});

            

            });

            $("#pol14").click(function(){
                $("#workshopTitle").html(data[14].title);
                $("#intro").html(data[14].intro);
                $("#about").html(data[14].about);
                $("#goals").html(data[14].goals);
                $("#age").html(data[14].age);
                $("#amount").html(data[14].amount);
                $("#time").html(data[14].time);
                $("#required").html(data[14].required);
                $("#given").html(data[14].given);
                $("#result").html(data[14].result);
                reveal();
                $('#video').css({filter: "grayscale(0.9)"});

            

            });

            $("#pol15").click(function(){
                $("#workshopTitle").html(data[15].title);
                $("#intro").html(data[15].intro);
                $("#about").html(data[14].about);
                $("#goals").html(data[15].goals);
                $("#age").html(data[15].age);
                $("#amount").html(data[15].amount);
                $("#time").html(data[15].time);
                $("#required").html(data[15].required);
                $("#given").html(data[15].given);
                $("#result").html(data[15].result);
                reveal();
                $('#video').css({filter: "grayscale(0.9)"});

            

            });

            $("#pol16").click(function(){
                $("#workshopTitle").html(data[16].title);
                $("#intro").html(data[16].intro);
                $("#about").html(data[16].about);
                $("#goals").html(data[16].goals);
                $("#age").html(data[16].age);
                $("#amount").html(data[16].amount);
                $("#time").html(data[16].time);
                $("#required").html(data[16].required);
                $("#given").html(data[16].given);
                $("#result").html(data[16].result);
                reveal();
                $('#video').css({filter: "grayscale(0.9)"});

            

            });

            $("#pol17").click(function(){
                $("#workshopTitle").html(data[17].title);
                $("#intro").html(data[17].intro);
                $("#about").html(data[17].about);
                $("#goals").html(data[17].goals);
                $("#age").html(data[17].age);
                $("#amount").html(data[17].amount);
                $("#time").html(data[17].time);
                $("#required").html(data[17].required);
                $("#given").html(data[17].given);
                $("#result").html(data[17].result);
                reveal();
                $('#video').css({filter: "grayscale(0.9)"});

            

            });

            $("#pol18").click(function(){
                $("#workshopTitle").html(data[18].title);
                $("#intro").html(data[18].intro);
                $("#about").html(data[18].about);
                $("#goals").html(data[18].goals);
                $("#age").html(data[18].age);
                $("#amount").html(data[18].amount);
                $("#time").html(data[18].time);
                $("#required").html(data[18].required);
                $("#given").html(data[18].given);
                $("#result").html(data[18].result);
                reveal();
                $('#video').css({filter: "grayscale(0.9)"});

            

            });

            $("#pol19").click(function(){
                $("#workshopTitle").html(data[19].title);
                $("#intro").html(data[19].intro);
                $("#about").html(data[19].about);
                $("#goals").html(data[19].goals);
                $("#age").html(data[19].age);
                $("#amount").html(data[19].amount);
                $("#time").html(data[19].time);
                $("#required").html(data[19].required);
                $("#given").html(data[19].given);
                $("#result").html(data[19].result);
                reveal();
                $('#video').css({filter: "grayscale(0.9)"});

            

            });

            $("#pol20").click(function(){
                $("#workshopTitle").html(data[20].title);
                $("#intro").html(data[20].intro);
                $("#about").html(data[20].about);
                $("#goals").html(data[20].goals);
                $("#age").html(data[20].age);
                $("#amount").html(data[20].amount);
                $("#time").html(data[20].time);
                $("#required").html(data[20].required);
                $("#given").html(data[20].given);
                $("#result").html(data[20].result);
                reveal();
                $('#video').css({filter: "grayscale(0.9)"});

            

            });

            $("#pol21").click(function(){
                $("#workshopTitle").html(data[21].title);
                $("#intro").html(data[21].intro);
                $("#about").html(data[21].about);
                $("#goals").html(data[21].goals);
                $("#age").html(data[21].age);
                $("#amount").html(data[21].amount);
                $("#time").html(data[21].time);
                $("#required").html(data[21].required);
                $("#given").html(data[21].given);
                $("#result").html(data[21].result);
                reveal();
                $('#video').css({filter: "grayscale(0.9)"});

            

            });

            $("#pol22").click(function(){
                $("#workshopTitle").html(data[22].title);
                $("#intro").html(data[22].intro);
                $("#about").html(data[22].about);
                $("#goals").html(data[22].goals);
                $("#age").html(data[22].age);
                $("#amount").html(data[22].amount);
                $("#time").html(data[22].time);
                $("#required").html(data[22].required);
                $("#given").html(data[22].given);
                $("#result").html(data[22].result);
                reveal();
                $('#video').css({filter: "grayscale(0.9)"});

            

            });

            $("#pol23").click(function(){
                $("#workshopTitle").html(data[23].title);
                $("#intro").html(data[23].intro);
                $("#about").html(data[23].about);
                $("#goals").html(data[23].goals);
                $("#age").html(data[23].age);
                $("#amount").html(data[23].amount);
                $("#time").html(data[23].time);
                $("#required").html(data[23].required);
                $("#given").html(data[23].given);
                $("#result").html(data[23].result);
                reveal();
                $('#video').css({filter: "grayscale(0.9)"});

            

            });

            $("#pol24").click(function(){
                $("#workshopTitle").html(data[24].title);
                $("#intro").html(data[24].intro);
                $("#about").html(data[24].about);
                $("#goals").html(data[24].goals);
                $("#age").html(data[24].age);
                $("#amount").html(data[24].amount);
                $("#time").html(data[24].time);
                $("#required").html(data[24].required);
                $("#given").html(data[24].given);
                $("#result").html(data[24].result);
                reveal();
                $('#video').css({filter: "grayscale(0.9)"});

            

            });

            $("#pol25").click(function(){
                $("#workshopTitle").html(data[25].title);
                $("#intro").html(data[25].intro);
                $("#about").html(data[25].about);
                $("#goals").html(data[25].goals);
                $("#age").html(data[25].age);
                $("#amount").html(data[25].amount);
                $("#time").html(data[25].time);
                $("#required").html(data[25].required);
                $("#given").html(data[25].given);
                $("#result").html(data[25].result);
                reveal();
                $('#video').css({filter: "grayscale(0.9)"});

            

            });

            $("#pol26").click(function(){
                $("#workshopTitle").html(data[26].title);
                $("#intro").html(data[26].intro);
                $("#about").html(data[26].about);
                $("#goals").html(data[26].goals);
                $("#age").html(data[26].age);
                $("#amount").html(data[26].amount);
                $("#time").html(data[26].time);
                $("#required").html(data[26].required);
                $("#given").html(data[26].given);
                $("#result").html(data[26].result);
                reveal();
                $('#video').css({filter: "grayscale(0.9)"});

            

            });



        
            
        
        }
        
        
    });

    // -----------------------------------------------------------------------------





})


