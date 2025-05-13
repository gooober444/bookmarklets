javascript:(function() {
  const sourceEncodedUrl = encodeURIComponent(window.location.href)
  // Errors out on Reddit's redesigned frontend, super weird
  fetch(`https://tinyurl.com/api-create.php?url=${sourceEncodedUrl}`)
    .then(response => response.text())
    // Chrome doesn't allow selecting / copying text from alerts with a newline TODO: find workaround
    .then(shortUrl => alert(`Shortened URL: ${shortUrl}`))
    .catch(error => alert(`Error shortening URL: ${error}`));
} )();
