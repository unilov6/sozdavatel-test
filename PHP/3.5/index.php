<?php
function clockAngle($hours, $minutes) {
    $hours = $hours % 12;

    // $hourAngle = $hours * 30; если часовая стрелка фиксирована
    $hourAngle = $hours * 30 + $minutes * 0.5;
    $minuteAngle = $minutes * 6;

    $angle = abs($hourAngle - $minuteAngle);

    return min($angle, 360 - $angle);
}
?>