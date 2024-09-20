const hearts = document.querySelectorAll('.heart');

hearts.forEach(heart => {
    setInterval(() => {
        heart.classList.toggle('beat');
    }, 1000);
});
