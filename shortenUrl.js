javascript:(function() {
  const sourceEncodedUrl = encodeURIComponent(window.location.href)
  // Errors out on Reddit's redesigned frontend, super weird
  fetch(`https://tinyurl.com/api-create.php?url=${sourceEncodedUrl}`)
    .then(response => response.text())
    .then(shortUrl => alert(`Shortened URL:\n ${shortUrl}`))
    .catch(error => alert(`Error shortening URL: ${error}`));
} )();
