<?php

const USER_NAME = 'anna';
const PASSWORD = 'anna';

$userName = empty($_POST['username']) ? '' : $_POST['username'];
$password = empty($_POST['password']) ? '' : $_POST['password'];

$response = [
    'success' => true,
    'error' => '',
];

if ($userName != USER_NAME || $password != PASSWORD) {
    $response['success'] = false;
    $response['error'] = 'Invalid user name or password';
}
echo json_encode($response);
