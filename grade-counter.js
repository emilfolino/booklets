javascript:(function(){
    let rows = document.getElementsByClassName("slick-row");
    let gradeRows = Array.from(rows).filter(function(row) {
        return row.childNodes.length === 9;
    });
    let counters = {
        "1": [0,0],
        "2": [0,0],
        "3": [0,0],
        "4": [0,0],
        "5": [0,0],
        "6": [0,0],
        "7": [0,0],
    };

    function countTurnIns() {
        Array.from(gradeRows).forEach(function(row) {
            gradesCols = Array.from(row.childNodes).slice(0, 7);
            Array.from(gradesCols).forEach(function(cell) {
                let index = cell.classList[1][1];
                let grade = cell.getElementsByClassName("Grade")[0].innerHTML[0];

                if (grade === 'G' || grade === 'Ux' || grade === 'ux' || grade === 'U' || grade === 'u') {
                    counters[index][0] += 1;
                } else if (grade === '–') {}
                else {
                    console.log(grade);
                    counters[index][1] += 1;
                }
            });
        });
    }
    function addElements() {
        let span, head;
        for (var i=1; i < 7; i++) {
            span = createElement(i);
            head = document.querySelector('[title="Kmom0' + i.toString() + '"]');
            head.insertBefore(span, head.firstChild);
        }
        span = createElement(i);
        head = document.querySelector('[title="Individuell examination"]');
        head.insertBefore(span, head.firstChild);
    }
    function createElement(i) {
        let span = document.createElement("span");
        span.setAttribute("style", "position: absolute;top: 10px;left: 2px;font-weight: bold;");
        let text = document.createTextNode(counters[i.toString()][0] + "/" + counters[i.toString()][1]);
        span.appendChild(text);
        return span;
    }
    countTurnIns();
    addElements();
})();
