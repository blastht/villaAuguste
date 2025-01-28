document.addEventListener('DOMContentLoaded', () => {
    // Carrousel Logic
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        const slides = carousel.querySelector('.slides');
        const prev = carousel.querySelector('.prev');
        const next = carousel.querySelector('.next');
        let index = 0;

        prev.addEventListener('click', () => {
            index = (index > 0) ? index - 1 : slides.children.length - 1;
            updateCarousel(slides, index);
        });

        next.addEventListener('click', () => {
            index = (index < slides.children.length - 1) ? index + 1 : 0;
            updateCarousel(slides, index);
        });

        function updateCarousel(slides, index) {
            slides.style.transform = `translateX(-${index * 100}%)`;
        }
    });

    // Toggle Description Logic
    const toggleButtons = document.querySelectorAll('.toggle-description');
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const description = button.nextElementSibling;
            const isHidden = description.style.display === 'none' || description.style.display === '';
            description.style.display = isHidden ? 'block' : 'none';
            button.textContent = isHidden ? 'Masquer Description' : 'Voir Description';
        });
    });
});