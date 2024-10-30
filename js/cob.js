"use strict";
(function() {


	function truncateViaEllipses(text, max) {
        return text.substr(0, max-1) + (text.length > max ? '...' : '');
    };

    /**
     * Truncate News Titles
     * locations at: / & /news
     */
    let newsTitleTextElm  = document.querySelectorAll('.news header h3 span');
    newsTitleTextElm.forEach(function(title, i) {
        if (i == 0) { title.innerHTML = truncateViaEllipses(title.innerHTML, 200); }
        title.innerHTML = truncateViaEllipses(title.innerHTML, 100);
    });

    /**
     * Truncate News Summaries
     * locations at: / & /news
     */
    let newsSummaryTextElm  = document.querySelectorAll('.news .summary');
    newsSummaryTextElm.forEach(function(summary) {
        summary.innerHTML = truncateViaEllipses(summary.innerHTML, 300);
    });

    function socialSharer (e) {
        let urlBase     = this.getAttribute("data-href"),
            urlParams   = this.getAttribute("data-params");
        window.open(urlBase + urlParams, "popup", "width=600,height=450");
    }

    // Twitter Setter & Listener
    var socialTwitterElement = document.getElementsByClassName('item twitter');
    socialTwitterElement[0].addEventListener("click", socialSharer);

    // Facebook Setter & Listener
    var socialFacebookElement = document.getElementsByClassName('item facebook');
    socialFacebookElement[0].addEventListener("click", socialSharer);
})();
