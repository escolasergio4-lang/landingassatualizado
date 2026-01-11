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
    const openBtn = document.getElementById('openSurveyBtn'); // We need to add this button somewhere, or auto-open
    const closeBtn = document.querySelector('.close-modal');
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const step3 = document.getElementById('step-3');

    // Auto open after a few seconds or use a trigger? 
    // User didn't specify, but "Bem-vindo Professor" suggests it might be on load or easily accessible.
    // I will add a floating button to open it.

    window.openSurvey = () => {
        modal.classList.add('active');
    };

    window.closeSurvey = () => {
        modal.classList.remove('active');
    };

    window.nextStep = () => {
        step1.style.display = 'none';
        step2.style.display = 'block';
    };

    // Star Rating Logic
    const stars = document.querySelectorAll('.star-rating span');
    const ratingInput = document.getElementById('ratingValue');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = star.dataset.value;
            ratingInput.value = value;
            updateStars(value);
        });
    });

    function updateStars(value) {
        stars.forEach(s => {
            if (parseInt(s.dataset.value) <= parseInt(value)) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
    }
});
