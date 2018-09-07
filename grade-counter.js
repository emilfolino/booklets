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
                console.log(cell.classList[1][1]);
                grade = cell.getElementsByClassName("Grade")[0].firstChild
                
            });
        });
    }
    
    function extractGrade(cell) {
        
    }
    countTurnIns();
})();
