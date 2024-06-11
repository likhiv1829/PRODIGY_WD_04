document.addEventListener("DOMContentLoaded", function() {
    const circles = document.querySelectorAll('.circle');

    circles.forEach(circle => {
        const percentage = circle.getAttribute('data-percentage');
        circle.style.setProperty('--percentage', percentage);
    });

    circles.forEach(circle => {
        circle.addEventListener('mouseover', () => {
            circle.style.setProperty('--percentage', circle.dataset.percentage);
        });

        circle.addEventListener('mouseout', () => {
            circle.style.setProperty('--percentage', '0');
        });
    });
});
