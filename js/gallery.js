function changeImage(thumbnail) {
    const mainImage = document.getElementById("mainImage");
    mainImage.src = thumbnail.src;

    document.querySelectorAll('.thumbnail-row img').forEach(img => img.classList.remove('active'));
    thumbnail.classList.add('active');
}

function scrollThumbnails(direction) {
    const row = document.querySelector('.thumbnail-row');
    const scrollAmount = 150;
    row.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
    });
}
