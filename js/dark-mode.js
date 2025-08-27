// Dark Mode Toggle Functionality - GitHub Pages Compatible
(function () {
    'use strict';

    // Debug function
    function debug(message) {
        console.log('[Dark Mode]', message);
    }

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    debug('Initial theme: ' + currentTheme);

    // Apply the saved theme immediately (before DOM loads)
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Update the lightbulb icon and text based on current theme
    function updateIcon() {
        const toggles = document.querySelectorAll('.dark-mode-toggle');
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

        debug('Updating icons, isDark: ' + isDark + ', found toggles: ' + toggles.length);

        toggles.forEach(toggle => {
            const icon = toggle.querySelector('i');
            const text = toggle.querySelector('.theme-text');

            if (icon) {
                if (isDark) {
                    icon.className = 'lightbulb outline icon'; // Outline for dark mode
                } else {
                    icon.className = 'lightbulb icon'; // Solid for light mode
                }
            }

            if (text) {
                if (isDark) {
                    text.textContent = 'Light Mode'; // Show "Light Mode" when in dark mode
                } else {
                    text.textContent = 'Dark Mode'; // Show "Dark Mode" when in light mode
                }
            }
        });
    }

    // Toggle dark mode function
    window.toggleDarkMode = function (event) {
        debug('Toggle function called');

        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        debug('Switching from ' + currentTheme + ' to ' + newTheme);

        // Apply new theme
        document.documentElement.setAttribute('data-theme', newTheme);

        // Save preference to localStorage
        try {
            localStorage.setItem('theme', newTheme);
            debug('Theme saved to localStorage: ' + newTheme);
        } catch (e) {
            debug('Failed to save to localStorage: ' + e.message);
        }

        // Update icon
        updateIcon();

        // Remove focus from the button to prevent highlighting
        if (event && event.target) {
            // Capture the active tab button BEFORE any changes
            const activeTabButton = document.querySelector('.tab-button.active');
            const activeTabData = activeTabButton ? activeTabButton.getAttribute('data-tab') : null;
            
            event.target.blur();
            // Ensure no active class is accidentally applied to dark mode toggle
            event.target.classList.remove('active');

            // Preserve the active state of tab buttons with multiple fallbacks
            if (activeTabButton && activeTabData) {
                // Immediate preservation
                activeTabButton.classList.add('active');
                
                // Multiple setTimeout fallbacks to ensure it sticks
                setTimeout(() => {
                    const currentActive = document.querySelector('.tab-button.active');
                    if (!currentActive || currentActive.getAttribute('data-tab') !== activeTabData) {
                        activeTabButton.classList.add('active');
                    }
                }, 0);
                
                setTimeout(() => {
                    const currentActive = document.querySelector('.tab-button.active');
                    if (!currentActive || currentActive.getAttribute('data-tab') !== activeTabData) {
                        activeTabButton.classList.add('active');
                    }
                }, 50);
                
                setTimeout(() => {
                    const currentActive = document.querySelector('.tab-button.active');
                    if (!currentActive || currentActive.getAttribute('data-tab') !== activeTabData) {
                        activeTabButton.classList.add('active');
                    }
                }, 100);
            }
        }

        // Add a subtle animation effect
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);

        // Force a repaint
        document.body.offsetHeight;
    };

    // Initialize when DOM is ready
    function initialize() {
        debug('Initializing dark mode');
        updateIcon();

        // Also update after a short delay to catch any late-loading elements
        setTimeout(updateIcon, 100);
    }

    // Multiple ways to ensure initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }

    // Also initialize when window loads (backup)
    window.addEventListener('load', initialize);

    // Listen for system theme changes
    if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        // Only apply system preference if no user preference is saved
        if (!localStorage.getItem('theme')) {
            const systemTheme = mediaQuery.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', systemTheme);
            debug('Applied system theme: ' + systemTheme);
        }

        // Listen for changes in system preference
        mediaQuery.addEventListener('change', function (e) {
            // Only apply if no user preference is saved
            if (!localStorage.getItem('theme')) {
                const systemTheme = e.matches ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', systemTheme);
                updateIcon();
                debug('System theme changed to: ' + systemTheme);
            }
        });
    }

    debug('Dark mode script loaded');
})();