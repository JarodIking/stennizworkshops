





<html>
    <head>
        <title>contact/prijs</title>
        <link rel="stylesheet" href="../CSS/navbar.css">
        <link rel="stylesheet" href="../CSS/glide.core.min.css">
        <link rel="stylesheet" href="../CSS/glide.theme.min.css">
        <link rel="stylesheet" href="../CSS/contact.css">
        <script src="../JavaScript/contact.js"></script>

        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/8381c75a1f.js" crossorigin="anonymous"></script>
    </head>
    <body>

        <form id="nieuwsbrief" method="POST" action="../../send2.php">
            <input class='text' type="email" name="email" placeholder="vull hier u email address in">
            <input class='submit' type="submit">
            <br>
            <div class="closeSubscribe" id="close">Terug</div>
        </form>





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
                        <a class='links' href="http://stennizworkshops.nl">verjaardag</a>
                    </div>
                </div>
            </div>
            <div id='games'>
            <div class="dropdown">
                    <div class="dropbtn">GAMES</div>
                    <div class="dropdown-content">
                        <a class='links' href="http://www.stenniz-games.com">Game Design Studio</a>
                        <a class='links' href="http://www.stenniz-games.com/Workshop.html">Borealis</a>
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




    <div id="galleryContact">

        <div id="firsthalf">
            <div id='contactCon'>
                <div id='contactTitle'>CONTACT</div>
                <div class="contactText">D. Renkema</div>
                <div class="contactText"><a href='mailto:stennizmusic@gmail.com'>stennizmusic@gmail.com</a></div>
                <div class="contactText">0624715745</div>
                <div class="contactText">melissekade 311</div>
                <div class="contactText">3544 CX Utrecht</div>
                <div class="imageLinks">
                    <div class="logos" id="whatsappLink">
                        <img src="../../media/fotos/contact/whatsappLogo.png" alt="">
                    </div>
                    <div id='instaLogo' class="logos">
                        <img src="../../media/fotos/contact/instagramLogo.png" alt="">
                    </div>
                </div>
                <div class="contactNews">Klik hier om automatisch op de hoogte te blijven van nieuwe workshops en reeksen!</div>
                <button id="revealPopup" class="subscribeBt">Aanmelden</button>

            </div>

                <form id='mailCon' method='post' action='../../send.php'>
                    <div id='mailName'><label>Naam:</label><br><input name='name' type='text' required></input></div>
                    <div id='mailPhone'><label>Telefoon:</label><br><input name='phone' type='text' required></input></div>
                    <div id='mailEmail'><label>Email:</label><br><input name='email' type='email' required></input></div>
                    <div id='mailSubject'><label>Onderwerp:</label><br><input name='subject' type='text' required></input></div>
                    <div id='mailMessage'><label>Bericht:</label><br><textarea name='message' required> </textarea></div>
                    <div id='mailSubmit'><input type='submit' value='Versturen'></input></div>
                    <div id='security'><input type='hidden' name='security'></input></div>
                </form>
        </div>


        <div id="secondHalf">
            <div id='stageLopen'>
                <div id='stageTitle'>STAGE LOPEN?</div>
                <div class='stageTexts'>Wij zijn een SBB erkend leerbedrijf.</div>
                <div class='stageTexts'>Mail jouw motivatie, CV en stageperiode.</div>
                <div class='stageTexts'>Stagemarkt beschikbaarheid: <a href='http://tiny.cc/t0yt4y'>stagemarkt</a></div>
            </div>


            <div id='klanten'>
                <div id='klantenTitle'>KLANTENLOGIN</div>
                <div class='klantenTexts'>Klik hier om in te loggen: <a href='../../inschrijving/'>klantenlogin</a></div>

            </div>

            <div class="vacatures">
                <div class="vacaturesTitle">VACATURES</div>
                <div class="vacaturesText">Wil jij een uitdagende functie als Freelance workshopdocent?</div>
                <button id="solliciteer" class='vacaturesBt'>solliciteer</button>
            </div>

            <div id='calculatorCon'>
                <div id='calTitle'>PRIJSCALCULATOR</div>
                <div id='calTexts'>Calculeer direct uw prijs!</div>
                <a href='../../prijs-calculator/'><div id='calculator'>
                    <img src="../../media/fotos/contact/Cal.png" alt="">
                </div></a>
            </div>
        </div>

        <div id="bottom">
            <div id="partners">
                PARTNERS
            </div>

            <div id="slider">
                <div class="glide">
                    <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides">
                        <img src="../../media/fotos/contact/slideshow/0.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/1.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/2.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/3.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/4.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/5.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/6.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/7.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/8.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/9.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/10.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/11.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/12.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/13.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/14.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/15.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/16.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/17.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/18.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/19.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/20.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/21.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/22.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/23.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/24.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/25.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/26.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/27.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/28.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/29.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/30.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/31.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/32.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/33.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/34.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/35.png" alt="">
                        <img src="../../media/fotos/contact/slideshow/36.png" alt="">
                    </ul>
                    </div>
                </div>  
            </div>            
        </div>




        </div>










    <script src="../JavaScript/glide.min.js"></script>
    <script>
        const config = {
            type: 'carousel',
            perView: 6,
            perSwipe: 3,
            dots: '.dots',
            autoplay: 2000
        }
        new Glide('.glide', config).mount()

      </script>



    </body>
</html>

s
<?php 
            if($_GET){
                $view = $_GET['view'];
                if($view == 1){
                    echo "<script>document.getElementById('nieuwsbrief').setAttribute('style', 'display: block !important');attr = 'none'; console.log(attr);  </script>";
                }
            }
?>




