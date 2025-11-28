// JavaScript for interactive button on About page
document.addEventListener('DOMContentLoaded', function () {
    const motivationBtn = document.getElementById('motivationBtn');
    const motivationText = document.getElementById('motivationText');

    const motivations = [
        "The only bad workout is the one that didn't happen.",
        "Your body can stand almost anything. It's your mind you have to convince.",
        "Don't wish for a good body, work for it.",
        "Strength doesn't come from what you can do. It comes from overcoming the things you once thought you couldn't.",
        "The hardest lift of all is lifting your butt off the couch.",
        "Success isn't always about greatness. It's about consistency.",
        "Your future self will thank you for the efforts you make today.",
        "Fitness is not about being better than someone else. It's about being better than you used to be.",
        "The only person you are destined to become is the person you decide to be.",
        "Don't stop when you're tired. Stop when you're done."
    ];

    if (motivationBtn) {
        motivationBtn.addEventListener('click', function () {
            const randomIndex = Math.floor(Math.random() * motivations.length);
            motivationText.textContent = motivations[randomIndex];

            // Add a fade-in effect
            motivationText.style.opacity = 0;
            setTimeout(() => {
                motivationText.style.transition = 'opacity 0.5s';
                motivationText.style.opacity = 1;
            }, 10);
        });
    }

    // Optional: Display a random motivation on page load
    if (motivationText) {
        const randomIndex = Math.floor(Math.random() * motivations.length);
        motivationText.textContent = motivations[randomIndex];
    }
});