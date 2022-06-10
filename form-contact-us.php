<?php
$name = $POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$feedback = $_POST['feedback'];
$message = $_POST['message'];

$email_from = 'ragulrocks@gmail.com';

$email_subject = 'New Form Submission';

$email_body = "User Name: $name.\n".
               "User Name: $name.\n".
               "Subject: $subject.\n".
               "User Email: $visitor_email.\n";

$to = 'ragulrocks24@gmail.com';

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email_to \r\n";


mail( $to,$email_subject, $email_body, $headers);

header("Location: contact.html")
?>