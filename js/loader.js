window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.classList.add("hide");
    }, 1000); // Show loader for 1 second
});
