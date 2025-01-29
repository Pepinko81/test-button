$(document).ready(function() {
    const themeToggle = $('#theme-toggle');

    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeToggle.prop('checked', currentTheme === 'light');

    // Handle theme toggle
    themeToggle.change(function() {
        const theme = $(this).prop('checked') ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });
});
