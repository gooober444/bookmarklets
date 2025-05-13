javascript:(function() {
  // RegEx: "reddit.com", "/r/", "not a /, repeat", "/comments/", capture group postId "not a /, repeat",
  // "/, anything not a /, repeat, /", capture group commentId "anything, repeat" optional
  let redditLongUrl = window.location.href.match(/reddit\.com\/r\/[^\/]+\/comments\/(?<postId>[^\/]+)\/[^\/]+\/(?<commentId>.*)?/)
  
  if (redditLongUrl !== null && redditLongUrl.groups.commentId == null) {
    prompt("Shortened post URL:", 'https://redd.it/' + redditLongUrl.groups.postId);
  } else if (redditLongUrl !== null && redditLongUrl.groups.commentId !== null) {
    prompt("Comment URLs can't be shortened.\n" + "Shortened post URL:", 'https://redd.it/' + redditLongUrl.groups.postId);
  }
  else {
    alert("This only works on posts on reddit.com");
  }
} )();
