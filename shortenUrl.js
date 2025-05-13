javascript:(function() {
  const sourceEncodedUrl = encodeURIComponent(window.location.href)
  fetch(`https://tinyurl.com/api-create.php?url=${sourceEncodedUrl}`)
    .then(response => response.text())
    .then(shortUrl => alert(`Shortened URL: ${shortUrl}`))
    .catch(error => alert(`Error shortening URL: ${error}`));
} )();
