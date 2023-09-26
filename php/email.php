<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $phone = $_POST["telefono"];
    $email = $_POST["email"];
    $message = $_POST["info"];
    
    // Create email message
    $to = "info@acnutritionis.com";
    $subject = "Contact Form AC Nutritionis";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $message_body = "Name: $name\n";
    $message_body .= "Phone: $phone\n";
    $message_body .= "Email: $email\n\n";
    $message_body .= "Message:\n$message";
    
    // Send email
    if (mail($to, $subject, $message_body, $headers)) {
        echo "Your message has been sent successfully!";
    } else {
        echo "Sorry, there was an error sending your message.";
    }
}
?>