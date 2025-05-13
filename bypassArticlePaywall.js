javascript:(function() {
    const articleUrl = window.location.href;
    const articleEncodedUrl = encodeURIComponent(articleUrl);
    /* const archiveIsSubmitUrl = 'https://archive.is/submit/?url='; */

    const bypassUrl = `https://archive.is/submit/?url=${articleEncodedUrl}`;

    window.location.href = bypassUrl;
} )();
