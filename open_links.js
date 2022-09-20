javascript: (function () {
    let pattern_log = /https:\/\/umbridge\.arnesson\.dev\/results\/feedback\/[\w\-]+/i;
    let pattern_inspect = /https:\/\/umbridge\.arnesson\.dev\/results\/inspect\/\d+\/[\w]+/i;
    let comments = document.querySelectorAll("div.comment > div.comment > span");
    for (var i = comments.length - 1; i >= 0; i--) {
        let match_log = comments[i].innerHTML.match(pattern_log);
        let match_inspect = comments[i].innerHTML.match(pattern_inspect);
        let found = false;
        if (match_inspect !== null) {
            window.open(match_inspect, '_blank');
            found = true;
        }
        if (match_log !== null) {
            window.open(match_log, '_blank');
            found = true;
        }

        if (found === true) {
            break;
        }
    }
})();