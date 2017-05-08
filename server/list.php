<?php
session_start();

$data = isset($_SESSION['list']) ? $_SESSION['list'] : [];

echo json_encode($data);