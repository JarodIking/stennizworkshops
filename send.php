<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    require 'vendor/autoload.php';


        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        $phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
        $email = filter_var($_POST['email'], FILTER_SANITIZE_STRING);
        $sub = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
        $msg = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

        if(empty($name)){
            header("location: index.php?nouser");
            exit();
        } 
        if(empty($phone)){
            header("location: index.php?nophone");
            exit();
        }

        if(empty($email)){
            header("location: index.php?noemail");
            exit();
        }

        if(empty($msg)){
            header("location: index.php?nomsg");
            exit();
        }

        if(empty($sub)){
            header("location: index.php?nosubject");
            exit();
        }



            if(empty($_POST['security'])){

                $mail = new PHPMailer(true);

                try {
                    //Server settings
                    $mail->SMTPDebug = 0;                      // Enable verbose debug output
                    $mail->isSMTP();                                            // Send using SMTP
                    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
                    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
                    $mail->Username   = 'workshopinschrijving@gmail.com';                     // SMTP username
                    $mail->Password   = '!wdD233Vef3#45ghWCcw';                               // SMTP password
                    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
                    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

                    //Recipients
                    $mail->setFrom('workshopinschrijving@gmail.com', $name);
                    $mail->addAddress('stennizmusic@gmail.com');     // Add a recipient


                    // Content
                    $mail->isHTML(true);                                  // Set email format to HTML
                    $mail->Subject = $sub;
                    $mail->Body    = $msg . "<br><br> $email <br> $phone";
                    $mail->AltBody = strip_tags($msg);

                        if($mail->send()){
                            $autoRespond = new PHPMailer();

                            $autoRespond->IsSMTP();
                            $autoRespond->SMTPDebug  = 0;
                            $autoRespond->SMTPAuth   = TRUE;
                            $autoRespond->Port       = 587;
                            $autoRespond->Username   = "workshopinschrijving@gmail.com";
                            $autoRespond->Password   = "!wdD233Vef3#45ghWCcw";
                            $autoRespond->Host       = "smtp.gmail.com";

                            $autoRespond->setFrom('workshopinschrijving@gmail.com', 'Dennis');
                            $autoRespond->addAddress($email);
                            $autoRespond->isHTML(true);                                  // Set email format to HTML
                            $autoRespond->Subject = "Ontvangstbericht stennizworkshops"; 
                            $autoRespond->Body = "Uw bericht is verzonden en wij nemen binnen 24 uur contact op. Mocht u niets vernemen dan gaat er iets mis en email of bel ons dan aub rechtstreeks." . "<br><br>Team StenniZ<br>0624715745<br>stennizmusic@gmail.com<br>www.stennizworkshops.nl<br>www.stenniz-games.com";

                            $autoRespond->Send(); 
                        }


                        header('location: index.php');


                } catch (Exception $e) {
                    echo "Message could not be sent.";
                }
            }
        








































































































?>
