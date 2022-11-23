<?php

if(isset($_POST['send']))
{
    echo 'yes !';
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['letter'];
}
echo ''.$name.'';
$headers = "From: ".$email."";

    header("location:contact.php");

?>