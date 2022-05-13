(function() {
    const pathname = window.location.pathname;
    const queryString = window.location.search;

    const courseID = pathname.split("/")[2];
    const studentMatch = /student_id=(\d+)/i;
    const studentID = queryString.match(studentMatch)[1];

    const canvasAuth = "Bearer [INSERT TOKEN]";
    const canvasURL = `/api/v1/courses/${courseID}/students/submissions?student_ids[]=${studentID}`;

    fetch(canvasURL, {
        headers: {
            "Authorization": canvasAuth
        }
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            renderBox(result);
        });
})();

function renderBox(assignments) {
    let box = document.createElement("div");

    box.style = "width:600px;height:800px;overflow:scroll;position:absolute;top:50px;left:20px;background-color:#2C3539;color:#fff;padding:10px;";

    assignments.forEach(function(assignment, index) {
        let assignmentElement = document.createElement("div");

        assignmentElement.innerHTML = "<h2>kmom0" + (index + 1) + "</h2>";
        assignmentElement.innerHTML += assignment.body;

        box.appendChild(assignmentElement);
    });

    document.body.appendChild(box);
}
