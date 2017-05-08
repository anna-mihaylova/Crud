<?php
session_start();

$key = isset($_GET['key']) ? $_GET['key'] : '';

if (isset($_SESSION['list'][$key])) {
	unset($_SESSION['list'][$key]);
}

echo json_encode(['success' => true]);