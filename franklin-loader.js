javascript:(function() {
    let script = document.getElementById("speed_grader_comment_textarea") ? 'speed-franklin.js' : 'franklin.js';

    document.body.appendChild(document.createElement('script')).src='https://raw.githubusercontent.com/emilfolino/booklets/master/' + script;
})();
