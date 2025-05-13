javascript:(function() {
    const articleEncodedUrl = encodeURIComponent(window.location.href);
    /* const archiveIsSubmitUrl = 'https://archive.is/submit/?url='; */

    const bypassUrl = `https://archive.is/submit/?url=${articleEncodedUrl}`;

    window.location.href = bypassUrl;
} )();
