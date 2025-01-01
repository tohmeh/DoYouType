<style>
    body {
        background-image: url('<?php echo htmlspecialchars($current_theme['background_image']); ?>');
        color: <?php echo htmlspecialchars($current_theme['text_color']); ?>;
    }

    .monitor, .keyboard {
        background-image: linear-gradient(to bottom right, <?php echo htmlspecialchars($current_theme['gradient1']); ?>, <?php echo htmlspecialchars($current_theme['gradient2']); ?>);
        outline: 10px solid <?php echo htmlspecialchars($current_theme['outline']); ?>;
    }

    .key {
        border: 2px solid <?php echo htmlspecialchars($current_theme['key_border']); ?>;
    }

    .updated_text {
        color: <?php echo htmlspecialchars($current_theme['updated_text']); ?>;
    }

    .cursor {
        border-bottom: 2px solid <?php echo htmlspecialchars($current_theme['cursor']); ?>;
    }

    #avg_acc, #avg_wpm, #live_wpm, #live_acc, .result_prompt_below, .key.active, .secondary_monitor_content_result {
        color: <?php echo htmlspecialchars($current_theme['highlight']); ?>;
    }
</style>
