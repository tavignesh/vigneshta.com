document.addEventListener('DOMContentLoaded', () => {
    const referrer = document.referrer;
    const fromHome = referrer.includes('vigneshta.com') && referrer.endsWith('/');

    if (fromHome) {
        const loader = document.getElementById('loader');
        if (loader) loader.style.display = 'none';
    }
});
