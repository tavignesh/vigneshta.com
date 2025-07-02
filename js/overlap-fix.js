document.addEventListener("DOMContentLoaded", function () {
    var grids = document.querySelectorAll('.portfolio-container');

    grids.forEach(function (grid) {
        var iso = new Isotope(grid, {
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        imagesLoaded(grid, function () {
            iso.layout();
        });

        window.addEventListener('resize', function () {
            iso.layout();
        });
    });
});
