<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    require 'vendor/autoload.php';

        if (isset($_POST['name'])) {
            $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        }

        if (isset($_POST['phone'])) {
            $phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
        }

        if (isset($_POST['email'])) {
            $email = filter_var($_POST['email'], FILTER_SANITIZE_STRING);
        }

        if (isset($_POST['subject'])) {
            $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
        }

        if (isset($_POST['message'])) {
            $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
        }

        if(isset($_FILES['attachment']['name']) && $_FILES['attachment']['name'] !=""){
            $file = "attachment/" . basename($_FILES['attachment']['name']); 
            move_uploaded_file($_FILES['attachment']['tmp_name'], $file);
        } else{
            $file = "";
        }    

            if(empty($_POST['security'])){

                $mail = new PHPMailer(true);

                try {
                    //Server settings
                    $mail->SMTPDebug = 0;                      // Enable verbose debug output
                    $mail->isSMTP();                                            // Send using SMTP
                    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
                    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
                    $mail->Username   = 'stennizSolicitatie@gmail.com';                     // SMTP username
                    $mail->Password   = 'IUGA8934-00oB';                               // SMTP password
                    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
                    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

                    //Recipients
                    $mail->setFrom('stennizSolicitatie@gmail.com');
                    $mail->addAddress('stennizmusic@gmail.com');     // Add a recipient


                    // Content
                    $mail->isHTML(true);                                  // Set email format to HTML
                    $mail->Subject = 'Solicitatie '. $subject . ' ' . $name;
                    $mail->Body    = $message . "<br><br> $email <br> $phone";
                    $mail->AltBody = strip_tags($message);
                    $mail->addAttachment($file);

                        header('location: index.php');

                        if($mail->send()){
                            $autoRespond = new PHPMailer();

                            $autoRespond->IsSMTP();
                            $autoRespond->SMTPDebug  = 0;
                            $autoRespond->SMTPAuth   = TRUE;
                            $autoRespond->Port       = 587;
                            $autoRespond->Username   = "stennizSolicitatie@gmail.com";
                            $autoRespond->Password   = "IUGA8934-00oB";
                            $autoRespond->Host       = "smtp.gmail.com";

                            $autoRespond->setFrom('stennizSolicitatie@gmail.com', 'Dennis');
                            $autoRespond->addAddress($email);
                            $autoRespond->isHTML(true);                                  // Set email format to HTML
                            $autoRespond->Subject = "Ontvangstbericht stennizworkshops"; 
                            $autoRespond->Body = "Uw bericht is verzonden en wij nemen binnen 24 uur contact op. Mocht u niets vernemen dan gaat er iets mis en email of bel ons dan aub rechtstreeks." . "<br><br>Team StenniZ<br>0624715745<br>stennizmusic@gmail.com<br>www.stennizworkshops.nl<br>www.stenniz-games.com";

                            $autoRespond->Send(); 
                        }


                } catch (Exception $e) {
                    echo "Message could not be sent.";
                    header('location: index.php');
                }
            }
    



?>
