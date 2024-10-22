document.addEventListener('DOMContentLoaded', function() {
    const points = document.querySelectorAll('.point');

    points.forEach(function(point) {
        point.addEventListener('click', function() {
            
            point.classList.toggle('active');
            
            const description = point.querySelector('p');
            if (description.style.display === 'block') {
                description.style.display = 'none';
            } else {
                description.style.display = 'block';
            }
        });
    });
});