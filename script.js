// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('SW registered:', registration);
            })
            .catch(error => {
                console.log('SW registration failed:', error);
            });
    });
}

// Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('surveyModal');
    const openBtn = document.getElementById('openSurveyBtn');
    const closeBtn = document.querySelector('.close-modal');
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const step3 = document.getElementById('step-3');

    // Open Modal
    if (openBtn) {
        openBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
        });
    }

    // Close Modal
    window.closeSurvey = () => {
        modal.classList.remove('active');
    };

    if (closeBtn) {
        closeBtn.addEventListener('click', window.closeSurvey);
    }

    // Close on outside click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                window.closeSurvey();
            }
        });
    }

    // Navigation
    window.nextStep = () => {
        if (step1) step1.style.display = 'none';
        if (step2) step2.style.display = 'block';
    };

    // Star Rating Logic
    const stars = document.querySelectorAll('.star-rating span');
    const ratingInput = document.getElementById('ratingValue');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = star.dataset.value;
            if (ratingInput) ratingInput.value = value;
            updateStars(value);
        });
    });

    function updateStars(value) {
        stars.forEach(s => {
            if (parseInt(s.dataset.value) <= parseInt(value)) {
                s.classList.add('active');
                s.style.color = '#fbbf24';
            } else {
                s.classList.remove('active');
                s.style.color = 'rgba(255,255,255,0.2)';
            }
        });
    }
});
