<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    require 'vendor/autoload.php';


        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        $phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
        $email = filter_var($_POST['email'], FILTER_SANITIZE_STRING);
        $msg = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

        $msg = $msg . ' ' . $email;

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
                    $mail->Subject = 'Stennizworkshop Inschrijfformulier';
                    $mail->Body    = $msg;
                    $mail->AltBody = strip_tags($msg);

                        $mail->send();
                        header('location: index.php');
                } catch (Exception $e) {
                    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
                    header('location: index.php');
                }
            }
        








































































































?>
