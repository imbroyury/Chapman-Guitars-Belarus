let main = document.body.querySelector('.main-section');

main.addEventListener('click', function(event) {
    if (event.target.tagName === 'H2' || event.target.classList.contains('artist-photo')) {
        console.log(event.target);
        event.target.closest('.artist-section').querySelector('.artist-description').classList.toggle('visible');
    }
});