<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize inputs
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate inputs
    if (empty($name) || empty($email) || empty($message)) {
        echo "<script>alert('Please fill out all fields correctly.'); window.history.back();</script>";
        exit;
    }

    // Email Configuration
    $to = "iam.chel1021@gmail.com";
    $subject = "New Message from RBG Car Rentals - $name";
    $email_body = "You have received a new message from your website contact form.\n\n".
                  "Here are the details:\n".
                  "Name: $name\n".
                  "Email: $email\n".
                  "Message:\n$message";

    // Set headers
    $headers = "From: chel@mail.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to = 'iam.chel1021@gmail.com', $subject, $email_body, $headers)) {
        echo "<script>alert('Your message was successfully sent!'); window.location='index.html';</script>";
    } else {
        echo "<script>alert('Failed to send your message, please try again.'); window.location='index.html';</script>";
    }
}
