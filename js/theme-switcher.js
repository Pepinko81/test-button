<link href="css/bootstrap-toggle.min.css" rel="stylesheet">
<link href="css/dark-theme.css" rel="stylesheet">
<script src="js/bootstrap-toggle.min.js"></script>
<script src="js/theme-switcher.js"></script><link href="css/bootstrap-toggle.min.css" rel="stylesheet">
<link href="css/dark-theme.css" rel="stylesheet">
<script src="js/bootstrap-toggle.min.js"></script>
<script src="js/theme-switcher.js"></script><link href="css/bootstrap-toggle.min.css" rel="stylesheet">
<link href="css/dark-theme.css" rel="stylesheet">
<script src="js/bootstrap-toggle.min.js"></script>
<script src="js/theme-switcher.js"></script>$(document).ready(function() {
    const themeToggle = $('#theme-toggle');

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        $('body').addClass('dark-theme');
        themeToggle.bootstrapToggle('off');
    }

    // Handle theme toggle
    themeToggle.change(function() {
        if ($(this).prop('checked')) {
            $('body').removeClass('dark-theme');
            localStorage.setItem('theme', 'light');
        } else {
            $('body').addClass('dark-theme');
            localStorage.setItem('theme', 'dark');
        }
    });
});
