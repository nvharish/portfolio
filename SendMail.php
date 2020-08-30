<?php

$contact = filter_input(INPUT_POST, 'contact', FILTER_DEFAULT, FILTER_REQUIRE_ARRAY);

$headers = "From: <{$contact['email']}>";
$subject = "Portfolio-Email Notification";
$message = $contact['message'];
$to = "harishnv1991@gmail.com";

if (mail($to, $subject, $message, $headers)) {
    echo json_encode([
        'status' => 'SUCCESS',
        'message' => 'Message sent successfully'
    ]);
} else {
    echo json_encode([
        'status' => 'FAILURE',
        'message' => 'Message sending failed'
    ]);
}
