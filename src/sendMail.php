<?php

$ip = $_SERVER['REMOTE_ADDR'];
$timeWindow = 3600; 
$maxRequests = 6;

$logFile = __DIR__ . '/form-log.json';

if (!file_exists($logFile)) {
    file_put_contents($logFile, json_encode([]));
}

$log = json_decode(file_get_contents($logFile), true);

// Filter alte Einträge
$log = array_filter($log, function ($entry) use ($timeWindow) {
    return time() - $entry['time'] < $timeWindow;
});

// Zähle Anfragen pro IP
$ipRequests = array_filter($log, fn($entry) => $entry['ip'] === $ip);

if (count($ipRequests) >= $maxRequests) {
    http_response_code(429); // "Too Many Requests"
    echo "You have reached the message limit. Try again later.";
    exit;
}

// Anfrage loggen
$log[] = ['ip' => $ip, 'time' => time()];
file_put_contents($logFile, json_encode($log));

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
        case("POST"): //Send the email;
            header("Access-Control-Allow-Origin: *");
            // Payload is not send to $_POST Variable,
            // is send to php:input as a text
            $json = file_get_contents('php://input');
            //parse the Payload from text format to Object
            $params = json_decode($json);
    
            $email = $params->email;
            $name = $params->name;
            $message = $params->message;
    
            $recipient = 'mail@felix-oppermann.com';  
            $subject = "Contact From <$email>";
            $message = "From:" . $name . "<br>" . $message ;
    
            $headers   = array();
            $headers[] = 'MIME-Version: 1.0';
            $headers[] = 'Content-type: text/html; charset=utf-8';

            // Additional headers
            $headers[] = "From: contact@felix-oppermann.com";

            mail($recipient, $subject, $message, implode("\r\n", $headers));
            break;
        default: //Reject any non POST or OPTIONS requests.
            header("Allow: POST", true, 405);
            exit;
    } 
