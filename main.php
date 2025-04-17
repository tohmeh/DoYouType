<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DoYouType</title>
    <link rel="stylesheet" href="css/main_page/common_monitor.css">
    <link rel="stylesheet" href="css/main_page/keyboard.css">
    <link rel="stylesheet" href="css/main_page/main.css">
    <link rel="stylesheet" href="css/main_page/monitor.css">
    <link rel="stylesheet" href="css/main_page/result_related.css">
    <link rel="stylesheet" href="css/main_page/theme_monitor.css">
    <link rel="stylesheet" href="css/main_page/ui_elements.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Londrina+Sketch&family=Metal&display=swap"
        rel="stylesheet">
</head>

<?php
include 'api/theme_logic.php';
include 'api/avg_print_logic.php';
include 'api/variable_style.php'
?>
<style>
    /* Style for the Sign Out Button */
    
</style>

<body id="body">


    <div style="height: 100px;"></div>


    <div class="monitors">

        <!-- left monitor -->
        <div style="display: flex; flex-direction: row;">
            <div id="left_monitor" class="left_monitor_before">
                <div class="secondary_monitor_content"> live wpm </div>
                <div class="secondary_monitor_content secondary_monitor_content_result" id="live_wpm">_</div>
                <div class="secondary_monitor_content"> live acc</div>
                <div class="secondary_monitor_content secondary_monitor_content_result" id="live_acc">_</div>
                <div class="secondary_monitor_content">avg wpm</div>
                <div class="secondary_monitor_content secondary_monitor_content_result" id="avg_wpm">
                    <?php echo $avg_wpm; ?>
                </div>
                <div class="secondary_monitor_content">avg acc</div>
                <div class="secondary_monitor_content secondary_monitor_content_result" id="avg_acc">
                    <?php echo $avg_acc; ?>
                </div>
                <div class="secondary_monitor_content" style="margin-top: auto;">
                    <a href="leaderboard.php" class="leaderboard-btn">Leaderboard</a>
                </div>
                <!-- Sign Out Button -->
                <!-- Sign Out Button -->
                <div class="sign-out-button">
                    <a href="api/logout.php">Sign Out</a>
                </div>


            </div>
            <!-- Left arrow -->
            <div class="left_hover">
                <img src="images/ui elements/yellow_arrow.png" style="height: 0.7cm;" class="arrow left_arrow"
                    id="left_arrow">
            </div>
        </div>



        <!-- main monitor -->
        <div style="display: flex; flex-direction: column;">
            <div class="monitor main_monitor" id="monitor">
                <div id="typing-area" class="monitor-content">Hello world !</div>
                <input type="text" id="user-input" class="hidden_input">
                <div class="result_prompt">
                    <div>
                        WPM
                    </div>
                    <div>
                        ACC
                    </div>
                    <div>
                        <img src="images/ui elements/yellow_restart.png" style="height: 0.7cm;" id="restart_button">
                    </div>
                    <div>
                        <img src="images/ui elements/yellow_next.png" style="height: 0.7cm;" id="next_button">
                    </div>
                </div>
                <div class="result_prompt result_prompt_below">
                    <div id="final_wpm_result">

                    </div>
                    <div id="final_acc_result">

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>


        <!-- right monitor -->
        <div style="display: flex; flex-direction: row;">
            <div class="right_hover">
                <img src="images/ui elements/yellow_arrow.png" style="height: 0.7cm;" class="arrow right_arrow"
                    id="right_arrow">
            </div>
            <div id="right_monitor" class="right_monitor_before">
                <div class="theme-selector-title">Select Theme</div>
                <?php
                $all_themes = array_merge(['retro'], $themes);
                foreach ($all_themes as $theme):
                    ?>
                    <div class="theme-option" data-theme="<?php echo htmlspecialchars($theme); ?>"
                        onclick="window.location.href='api/get_theme_styles.php?theme_name=<?php echo urlencode($theme); ?>';">
                        <?php echo ucfirst(htmlspecialchars($theme)); ?>
                    </div>
                <?php endforeach; ?>
                <div class="add-theme-button" onclick="window.location.href='custom.php';">
                    <span>+</span>
                    <span>Create Theme</span>
                </div>
                <div class="add-theme-button" onclick="window.location.href='delete_theme.php';">
                    <span>-</span>
                    <span>Delete Theme</span>
                </div>
            </div>
        </div>


    </div>



    <!-- keyboard -->
    <div class="keyboard" id="keyboard">
        <div class="keyboard_row">
            <div id="key_escape" class="key key-1u">Esc</div>
            <div id="key_1" class="key key-1u">1</div>
            <div id="key_2" class="key key-1u">2</div>
            <div id="key_3" class="key key-1u">3</div>
            <div id="key_4" class="key key-1u">4</div>
            <div id="key_5" class="key key-1u">5</div>
            <div id="key_6" class="key key-1u">6</div>
            <div id="key_7" class="key key-1u">7</div>
            <div id="key_8" class="key key-1u">8</div>
            <div id="key_9" class="key key-1u">9</div>
            <div id="key_0" class="key key-1u">0</div>
            <div id="key_minus" class="key key-1u">-</div>
            <div id="key_equals" class="key key-1u">=</div>
            <div id="key_backspace" class="key key-2u">Bksp</div>
        </div>
        <div class="keyboard_row">
            <div id="key_tab" class="key key-1_5u">Tab</div>
            <div id="key_q" class="key key-1u">Q</div>
            <div id="key_w" class="key key-1u">W</div>
            <div id="key_e" class="key key-1u">E</div>
            <div id="key_r" class="key key-1u">R</div>
            <div id="key_t" class="key key-1u">T</div>
            <div id="key_y" class="key key-1u">Y</div>
            <div id="key_u" class="key key-1u">U</div>
            <div id="key_i" class="key key-1u">I</div>
            <div id="key_o" class="key key-1u">O</div>
            <div id="key_p" class="key key-1u">P</div>
            <div id="key_left_bracket" class="key key-1u">[</div>
            <div id="key_right_bracket" class="key key-1u">]</div>
            <div id="key_backslash" class="key key-1_5u">\</div>
        </div>
        <div class="keyboard_row">
            <div id="key_capslock" class="key key-1_5u">Caps</div>
            <div id="key_a" class="key key-1u">A</div>
            <div id="key_s" class="key key-1u">S</div>
            <div id="key_d" class="key key-1u">D</div>
            <div id="key_f" class="key key-1u">F</div>
            <div id="key_g" class="key key-1u">G</div>
            <div id="key_h" class="key key-1u">H</div>
            <div id="key_j" class="key key-1u">J</div>
            <div id="key_k" class="key key-1u">K</div>
            <div id="key_l" class="key key-1u">L</div>
            <div id="key_semicolon" class="key key-1u">;</div>
            <div id="key_quote" class="key key-1u">'</div>
            <div id="key_enter" class="key key-2u">Enter</div>
        </div>
        <div class="keyboard_row">
            <div id="key_shift_left" class="key key-2_5u">Shift</div>
            <div id="key_z" class="key key-1u">Z</div>
            <div id="key_x" class="key key-1u">X</div>
            <div id="key_c" class="key key-1u">C</div>
            <div id="key_v" class="key key-1u">V</div>
            <div id="key_b" class="key key-1u">B</div>
            <div id="key_n" class="key key-1u">N</div>
            <div id="key_m" class="key key-1u">M</div>
            <div id="key_comma" class="key key-1u">,</div>
            <div id="key_period" class="key key-1u">.</div>
            <div id="key_slash" class="key key-1u">/</div>
            <div id="key_shift_right" class="key key-2_5u">Shift</div>
        </div>
        <div class="keyboard_row">
            <div id="key_ctrl_left" class="key key-2u">ctrl</div>
            <div class="key key-1u">^_^</div>
            <div id="key_alt_left" class="key key-2u">alt</div>
            <div id="key_space" class="key key-space">Space</div>
            <div id="key_alt_right" class="key key-2u">alt</div>
            <div class="key key-1u">^.^</div>
            <div id="key_ctrl_right" class="key key-2u">ctrl</div>

        </div>
    </div>
    <script src="js/utils/results.js"></script> <!-- Your file where functions are defined -->
    <script src="js/utils/text.js"></script>
    <script src="js/utils/text_related_animation.js"></script>
    <script src="js/utils/user_input.js"></script>
    <script src="js/utils/secondary_monitors_animations.js"> </script>
    <script src="js/all_event_handling.js"></script>
</body>

</html>