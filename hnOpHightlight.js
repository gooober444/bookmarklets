// ==UserScript==
// @name         HN OP highlight
// @version      0.1
// @description  Find OP username and change username color to blue
// @match        https://news.ycombinator.com/item?id=*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // get OP 'userid' from class 'hnuser' in post subtext
    const opUsername = document.querySelector('span.subline a.hnuser')?.getAttribute('href');

    // Match other instances of same 'userid' in 'hnuser' class elsewhere in page
    if (opUsername) {
        const opHighlight = document.createElement('style');
        opHighlight.textContent = `
            /* Post header username */
            span.subline a.hnuser[href="${opUsername}"],
            /* Comment header username */
            span.comhead a.hnuser[href="${opUsername}"] {
                color: #2749F5 !important;
            }
        `;
        document.head.appendChild(opHighlight);
    }
})();
