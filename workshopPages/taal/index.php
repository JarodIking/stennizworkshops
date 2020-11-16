<html>
    <head>
        <link rel="stylesheet" href="core/navbar.css">
        <link rel="stylesheet" href="../workshop.css">
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
        <script src='core/workshop.js'></script>

    </head>
    <body>
        <!-- navbar -->
        <div id='navbar'>
            <!-- left part -->
            <div class='navbarLeftRight'>
                <div id='bso'>
                    <div class="dropdown">
                        <div class="dropbtn">BSO/ONDERWIJS</div>
                        <div class="dropdown-content">
                            <a id='link1' class='links' href="#">BSO/Onderbouw</a>
                            <a id='link2' class='links' href="#">Speciaal onderwijs</a>
                            <a class='links' href="http://stennizworkshops.nl">Basis bovenbouw</a>
                            <a class='links' href="http://stennizworkshops.nl">Voortgezet onderwijs</a>
                            <a class='links' href="#">Beroepsonderwijs</a>
                        </div>
                    </div>
                </div>
                <div id='bedrijf'>
                <div class="dropdown">
                        <div class="dropbtn">BEDRIJF/PARTICULIER</div>
                        <div class="dropdown-content">
                            <a id="toTeamwork" class='links' href="#">Teambuilding</a>
                            <a class='links' href="http://stennizworkshops.nl">Bedrijfsfeest</a>
                            <a class='links' href="http://stennizworkshops.nl">Kick-off</a>
                            <a class='links' href="http://stennizworkshops.nl">Vrijgezellenfeest</a>
                            <a class='links' href="http://stennizworkshops.nl">Verjaardag</a>
                        </div>
                    </div>
                </div>
                <div id='games'>
                <div class="dropdown">
                        <div class="dropbtn">GAMES</div>
                        <div class="dropdown-content">
                            <a class='links' href="http://www.stenniz-games.com">Game Design Studio</a>
                            <a class='links' href="http://www.stenniz-games.com/Workshop.html">Borealis VR</a>
                        </div>
                    </div>
                </div>       
            </div>
            <!-- logo -->
            <div id='navbarImg'>
                <img src="../../media/fotos/logo.png"> 
            </div>
            <!-- right part -->
            <div class='navbarLeftRight'>
                <div id='home' class='navbarLinks'>
                    ALLE WORKSHOPS
                </div>
                <div id='overOns' class='navbarLinks'>
                    OVER ONS
                </div>
                <div id='contact' class='navbarLinks'>
                    CONTACT/PRIJS
                </div>       
            </div>
        </div>

        <div id='galleryWorkshop'>
            <div id='polariods'>
                <div id='title'>
                    Taal
                </div>
                <div id='polariodView'>

                </div>
            </div>
            <div id='info'>
                <div id='workshopTitle'>
                    Kies een workshop!
                </div>
                <div id='infoView'>
                    <div id='intro'>

                    </div>

                    <div id='vidContainer'>
                        <video autoplay muted loop src="media/f.mp4"></video>
                        <div id='about'></div>
                    </div>

                    <div class='textInsert'><div class='textTitle'>Leerdoelen:</div><div id='goals' class='textHolder'></div></div>
                    <div class='textInsert'><div class='textTitle'>Doelgroep:</div><div id='age' class='textHolder'></div></div>
                    <div class='textInsert'><div class='textTitle'>Aantal:</div><div id='amount' class='textHolder'></div></div>
                    <div class='textInsert'><div class='textTitle'>Duur:</div><div id='time' class='textHolder'></div></div>
                    <div class='textInsert'><div class='textTitle'>Benodigheden:</div><div id='required' class='textHolder'></div></div>
                    <div class='textInsert'><div class='textTitle'>Inbegrepen:</div><div id='given' class='textHolder'></div></div>
                    <div class='textInsert'><div class='textTitle'>Resultaat:</div><div id='result' class='textHolder'></div></div>

               
                </div>
            </div>

        </div>







    </body>
</html>

<?php 
    if($_GET){
        $ws = $_GET['ws'];
        function sw($ws){
            if($ws == 'rap'){
                echo "<script type='text/javascript'> ws('rap'); </script>";  
            }

            if($ws == 'spokenword'){
                echo "<script type='text/javascript'> ws('spokenword'); </script>";  
            }

            if($ws == 'bloggen'){
                echo "<script type='text/javascript'> ws('bloggen'); </script>";  
            }

            if($ws == 'verhaalvertellen'){
                echo "<script type='text/javascript'> ws('verhaalvertellen'); </script>";  
            }

            if($ws == 'vloggen'){
                echo "<script type='text/javascript'> ws('vloggen'); </script>";  
            }

            if($ws == 'poezie'){
                echo "<script type='text/javascript'> ws('poezie'); </script>";  
            }

            if($ws == 'cabarapmethumorrappen'){
                echo "<script type='text/javascript'> ws('cabarapmethumorrappen'); </script>";  
            }

            if($ws == 'poetryslam'){
                echo "<script type='text/javascript'> ws('poetryslam'); </script>";  
            }

            if($ws == 'filmscript'){
                echo "<script type='text/javascript'> ws('filmscript'); </script>";  
            }

            if($ws == 'rapbattle'){
                echo "<script type='text/javascript'> ws('rapbattle'); </script>";  
            }

            if($ws == 'songwriting'){
                echo "<script type='text/javascript'> ws('songwriting'); </script>";  
            }
        }   
        sw($ws);
    }
?>
