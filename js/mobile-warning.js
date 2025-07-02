document.addEventListener("DOMContentLoaded", function () {
    if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        const warning = document.getElementById("mobile-warning");
        if (warning) {
            warning.style.display = "flex";
        }
    }
});

function dismissWarning() {
    const warning = document.getElementById("mobile-warning");
    if (warning) {
        warning.style.display = "none";
    }
}
