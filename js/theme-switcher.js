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
      document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('theme-toggle');

    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
      if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
      }
    }

    // Handle theme switch
    toggleSwitch.addEventListener('change', function(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    });
});
