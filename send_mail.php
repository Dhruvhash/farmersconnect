<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "dhruvghosal2342gmail.com"; // Replace with your email
    $subject = "New Contact Query";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $headers = "From: $email";

    $mailBody = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    if (mail($to, $subject, $mailBody, $headers)) {
        echo "<p>Thank you for contacting us, $name. We will get back to you shortly.</p>";
    } else {
        echo "<p>Sorry, something went wrong. Please try again later.</p>";
    }
} else {
    echo "<p>Invalid request</p>";
}
?>

