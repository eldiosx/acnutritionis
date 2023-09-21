<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["telefono"];
    $email = $_POST["email"];
    $message = $_POST["info"];

    $receiver = "danieldelgadojimenez@protonmail.com";
    $main = "Consulta de $name";

    $content = "Nombre: $name\n";
    $content .= "Teléfono: $phone\n";
    $content .= "Email: $email\n";
    $content .= "Mensaje:\n$message\n";

    $header = "From: $email\r\n";
    $header .= "Reply-To: $email\r\n";

    mail($receiver, $main, $content, $header);

    header("Location: ./index.html");
?>
