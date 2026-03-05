/**
 * Theme Toggle Script for App Store Website
 */
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtns = document.querySelectorAll('.theme-toggle');
    const body = document.body;

    // Check localStorage for saved theme preference
    const currentTheme = localStorage.getItem('apphub_theme');

    // Apply theme if saved, otherwise check system preference
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
    } else if (currentTheme === null) {
        // Default to system preference if no saved preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.classList.add('dark-mode');
        }
    }

    // Update icons initially
    updateThemeIcons();

    // Add click event to all theme toggle buttons
    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // Toggle body class
            body.classList.toggle('dark-mode');

            // Save to localStorage
            let theme = 'light';
            if (body.classList.contains('dark-mode')) {
                theme = 'dark';
            }
            localStorage.setItem('apphub_theme', theme);

            // Update icons
            updateThemeIcons();
        });
    });

    function updateThemeIcons() {
        const isDark = body.classList.contains('dark-mode');
        themeToggleBtns.forEach(btn => {
            const icon = btn.querySelector('i');
            const text = btn.querySelector('.theme-text');

            if (icon) {
                if (isDark) {
                    icon.classList.remove('bi-moon');
                    icon.classList.add('bi-sun');
                    if (text) text.textContent = 'Light Mode';
                } else {
                    icon.classList.remove('bi-sun');
                    icon.classList.add('bi-moon');
                    if (text) text.textContent = 'Dark Mode';
                }
            }
        });
    }
});
