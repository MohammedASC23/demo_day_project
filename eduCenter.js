document.getElementById('check-button').addEventListener('click', function() {
    const urlInput = document.getElementById('url-input');
    const result = document.getElementById('result');
    const url = urlInput.value;

    if (isWebsiteSafe(url)) {
        result.textContent = "Safe URL";
        result.style.color = 'green';
    } else {
        result.textContent = 'Unsafe URL!';
        result.style.color = 'red';
    }
});

function isWebsiteSafe(url) {
    return url.startsWith("https://");
}
