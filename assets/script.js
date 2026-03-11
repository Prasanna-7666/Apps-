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

    // 3. App Confirmation Modal Logic
    const initAppModal = () => {
        // Create modal element if it doesn't exist
        let modalOverlay = document.querySelector('.app-modal-overlay');
        if (!modalOverlay) {
            modalOverlay = document.createElement('div');
            modalOverlay.className = 'app-modal-overlay';
            modalOverlay.innerHTML = `
                <div class="app-modal-card">
                    <h2 class="app-modal-title">do you want this app or not</h2>
                    <div class="app-modal-btns">
                        <button class="app-modal-btn app-modal-btn-yes">Yes</button>
                        <button class="app-modal-btn app-modal-btn-no">No</button>
                    </div>
                </div>
            `;
            document.body.appendChild(modalOverlay);

            // Button listeners
            const yesBtn = modalOverlay.querySelector('.app-modal-btn-yes');
            const noBtn = modalOverlay.querySelector('.app-modal-btn-no');

            const closeModal = () => {
                modalOverlay.classList.remove('active');
            };

            yesBtn.addEventListener('click', () => {
                alert('App download started!');
                closeModal();
            });

            noBtn.addEventListener('click', closeModal);

            // Close on overlay click
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) closeModal();
            });
        }

        // Attach to all 'Get' buttons
        const getButtons = document.querySelectorAll('button');
        getButtons.forEach(btn => {
            if (btn.textContent.trim().toLowerCase() === 'get') {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    modalOverlay.classList.add('active');
                });
            }
        });
    };

    initAppModal();
});
