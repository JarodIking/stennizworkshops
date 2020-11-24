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
                    $mail->SMTPDebug = 2;                      // Enable verbose debug output
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


                        $mail->send();
                        header('location: index.php');
                        echo "<script>alert('email verstuurt')</script>";

                } catch (Exception $e) {
                    echo "Message could not be sent.";
                    header('location: index.php');
                }
            }
    



?>
