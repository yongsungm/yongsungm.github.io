// Dark Mode Toggle Functionality
(function() {
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the saved theme on page load
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Update the lightbulb icon and text based on current theme
    function updateIcon() {
        const toggles = document.querySelectorAll('.dark-mode-toggle');
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        
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
    
    // Initialize icon when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        updateIcon();
    });
    
    // Toggle dark mode function
    window.toggleDarkMode = function(event) {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Apply new theme
        document.documentElement.setAttribute('data-theme', newTheme);
        
        // Save preference to localStorage
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        updateIcon();
        
        // Remove focus from the button to prevent highlighting
        if (event && event.target) {
            event.target.blur();
        }
        
        // Add a subtle animation effect
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    };
    
    // Listen for system theme changes
    if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Only apply system preference if no user preference is saved
        if (!localStorage.getItem('theme')) {
            document.documentElement.setAttribute('data-theme', mediaQuery.matches ? 'dark' : 'light');
            updateIcon();
        }
        
        // Listen for changes in system preference
        mediaQuery.addEventListener('change', function(e) {
            // Only apply if no user preference is saved
            if (!localStorage.getItem('theme')) {
                document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
                updateIcon();
            }
        });
    }
})();