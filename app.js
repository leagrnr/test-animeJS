import anime from '/node_modules/animejs/lib/anime.es.js';

document.getElementById('animateButton').addEventListener('click', function() {
    const square = document.querySelector('.square');

    anime({
        targets: square,
        translateX: 250,
        translateY: 100,
        rotate: '1turn',
        duration: 1000,
        easing: 'easeInOutQuad'
    });
});