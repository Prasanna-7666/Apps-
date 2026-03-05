/**
 * Global Utilities for App Store Website
 */
document.addEventListener('DOMContentLoaded', () => {

    // 1. Back to Top Button Logic
    const backToTopButton = document.getElementById('backToTop');

    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.style.display = 'flex';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 2. Offcanvas menu auto-close on link click (for mobile)
    const offcanvasLinks = document.querySelectorAll('.offcanvas-body .nav-link');
    const offcanvasElement = document.getElementById('offcanvasNavbar');

    if (offcanvasElement) {
        // We only try to close it if bootstrap is properly loaded
        if (typeof bootstrap !== 'undefined') {
            offcanvasLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth < 992) {
                        const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);
                        if (bsOffcanvas) {
                            bsOffcanvas.hide();
                        }
                    }
                });
            });
        }
    }
});
