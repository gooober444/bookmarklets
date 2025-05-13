javascript:(function() {
    const articleUrl = window.location.href;
    // const archiveIsSubmitUrl = 'https://archive.is/submit/?url=';

    const bypassUrl = `https://archive.is/submit/?url=${articleUrl}`;

    // 4. Redirect the browser to the constructed archive.is URL
    window.location.href = bypassUrl;
} )();
