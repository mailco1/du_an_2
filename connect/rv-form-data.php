<?php
/* x-www-form-urlencoded */
include_once('./config.php');
var_dump($_POST);
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $token = test_input($_POST["token"]);
    $check_token = mysqli_fetch_array(mysqli_query($connect, "SELECT * FROM `lifebuoy_in` WHERE `token`='{$token}'"));
    if (isset($check_token)) {
        $location = test_input($_POST["location"]);
        $heart_rate = test_input($_POST["heart_rate"]);
        $water_state = test_input($_POST["water_state"]);
        $bat_cap = test_input($_POST["bat_cap"]);
        $update = "UPDATE `lifebuoy_in` SET `location`='{$location}', `heart_rate`='{$heart_rate}', `water_state`='{$water_state}',  `bat_cap`='{$bat_cap}' WHERE `token`='{$token}'";
        if ($connect->query($update) === FALSE) {
            echo "Error:" . $connect->error;
        }
        $connect->close();
    } else {
        echo ('Không tồn tại token');
    }
} else {
    echo "No data posted with HTTP POST.";
}
