// carousel.js

document.addEventListener('DOMContentLoaded', () => {
    // --- EXPERTISE CAROUSEL (1 item at a time) ---
    const expertiseCarousel = document.querySelector('[data-carousel="expertise"]');
    if (expertiseCarousel) {
        let currentSlide = 0;
        const slides = expertiseCarousel.querySelectorAll('.expertise-slide');
        const images = expertiseCarousel.querySelectorAll('.expertise-image-pane img');
        const totalSlides = slides.length;
        const counterDisplay = expertiseCarousel.querySelector('.expertise-counter');
        const prevBtn = expertiseCarousel.querySelector('.arrow-btn[data-dir="prev"]');
        const nextBtn = expertiseCarousel.querySelector('.arrow-btn[data-dir="next"]');

        function updateExpertiseView() {
            slides.forEach((slide, index) => {
                slide.classList.toggle('active', index === currentSlide);
            });
            images.forEach((img, index) => {
                img.classList.toggle('active', index === currentSlide);
            });
            counterDisplay.textContent = `${currentSlide + 1} / ${totalSlides}`;
        }

        // Prev Button
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
            updateExpertiseView();
        });

        // Next Button
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
            updateExpertiseView();
        });

        updateExpertiseView(); // init
    }

    // --- PRODUCTS CAROUSEL (Multi-item) ---
    const productsCarousel = document.querySelector('[data-carousel="products"]');
    if (productsCarousel) {
        let currentPos = 0;
        const track = productsCarousel.querySelector('.products-track');
        const cards = Array.from(track.children);
        const prevBtn = productsCarousel.querySelector('.arrow-btn-circle[data-dir="prev"]');
        const nextBtn = productsCarousel.querySelector('.arrow-btn-circle[data-dir="next"]');
        const progressContainer = productsCarousel.querySelector('.products-progress');

        let visibleCards = 3;
        let cardMaxIndex = cards.length - visibleCards;

        function initProducts() {
            // Determine visible cards based on CSS media queries
            if (window.innerWidth <= 767) {
                visibleCards = 1;
            } else if (window.innerWidth <= 1023) {
                visibleCards = 2;
            } else {
                visibleCards = 3;
            }

            cardMaxIndex = Math.max(0, cards.length - visibleCards);

            // Keep position in bounds if resizing down
            if (currentPos > cardMaxIndex) {
                currentPos = cardMaxIndex;
            }

            // Re-init dots based on total stops needed
            // (Total stops = number of clicks needed + 1 for starting position)
            progressContainer.innerHTML = '';
            for (let i = 0; i <= cardMaxIndex; i++) {
                const dot = document.createElement('div');
                dot.className = 'products-progress-dot';
                if (i === currentPos) dot.classList.add('active');
                progressContainer.appendChild(dot);
            }

            updateProductsView();
        }

        function updateProductsView() {
            // Calculate how wide one card + gap is
            // We get gap from computing style of track
            const gapMatch = window.getComputedStyle(track).gap.match(/(\d+)px/);
            const gap = gapMatch ? parseInt(gapMatch[1]) : 24;

            const singleCardWidth = cards[0].offsetWidth;
            const shift = currentPos * (singleCardWidth + gap);

            track.style.transform = `translateX(-${shift}px)`;

            // Update dots
            const dots = progressContainer.querySelectorAll('.products-progress-dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentPos);
            });
        }

        prevBtn.addEventListener('click', () => {
            if (currentPos > 0) {
                currentPos--;
                updateProductsView();
            } else {
                // loop to end
                currentPos = cardMaxIndex;
                updateProductsView();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentPos < cardMaxIndex) {
                currentPos++;
                updateProductsView();
            } else {
                // loop to start
                currentPos = 0;
                updateProductsView();
            }
        });

        // Handle resize
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(initProducts, 200);
        });

        // Fire init immediately to setup initial state
        // We defer slightly to ensure CSS widths are computed
        setTimeout(initProducts, 100);
    }
});
