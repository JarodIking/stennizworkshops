<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    require 'vendor/autoload.php';


        $email = filter_var($_POST['email'], FILTER_SANITIZE_STRING);


        if(empty($email)){
            header("location: index.php?noemail");
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
                    $mail->Username   = 'newsbriefstenniz@gmail.com';                     // SMTP username
                    $mail->Password   = 'WSmkiw9728^&&y65!';                               // SMTP password
                    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
                    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

                    //Recipients
                    $mail->setFrom('newsbriefstenniz@gmail.com');
                    $mail->addAddress('stennizmusic@gmail.com');     // Add a recipient


                    // Content
                    $mail->isHTML(true);                                  // Set email format to HTML
                    $mail->Subject = "Inschrijving nieuwsbrief";
                    $mail->Body    = "Deze email heeft zich ingeschreven: " . $email;
                    $mail->AltBody = strip_tags($msg);

                        if($mail->send()){
                            $autoRespond = new PHPMailer();

                            $autoRespond->IsSMTP();
                            $autoRespond->SMTPDebug  = 0;
                            $autoRespond->SMTPAuth   = TRUE;
                            $autoRespond->Port       = 587;
                            $autoRespond->Username   = "newsbriefstenniz@gmail.com";
                            $autoRespond->Password   = "WSmkiw9728^&&y65!";
                            $autoRespond->Host       = "smtp.gmail.com";

                            $autoRespond->setFrom('workshopinschrijving@gmail.com', 'Dennis');
                            $autoRespond->addAddress($email);
                            $autoRespond->isHTML(true);                                  // Set email format to HTML
                            $autoRespond->Subject = "Ontvangstbericht nieuwsbrief stennizworkshops"; 
                            $autoRespond->Body = "Uw bericht is verzonden. Wij nemen dit zo snel mogelijk door" . "<br><br>Team StenniZ<br>0624715745<br>stennizmusic@gmail.com<br>www.stennizworkshops.nl<br>www.stenniz-games.com";

                            $autoRespond->Send(); 
                        }


                        header('location: index.php');


                } catch (Exception $e) {
                    echo "Message could not be sent.";
                }
            }
        

?>
