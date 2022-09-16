(async function() {
    const baseURL = "https://bth.instructure.com/api/v1";
    const canvasAuth = "Bearer [INSERT TOKEN HERE]";
    const favouritesURL = `${baseURL}/users/self/favorites/courses`;

    const response = await fetch(favouritesURL, {
        headers: {
            "Authorization": canvasAuth
        }
    });
    const courses = await response.json();

    let box = document.createElement("div");

    box.style = "width:600px;height:800px;overflow:scroll;position:absolute;top:50px;left:20px;background-color:#2C3539;color:#fff;padding:10px;z-index:100;";

    let button = document.createElement("button");

    button.textContent = "Stäng";

    button.addEventListener("click", function() {
        box.parentNode.removeChild(box);
    });

    box.appendChild(button);

    for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        const submissionsURL = `${baseURL}/courses/${course.id}/students/submissions?student_ids[]=all&workflow_state=submitted`;
        const submissionResponse = await fetch(submissionsURL, {
                headers: {
                    "Authorization": canvasAuth
                }
            });
        const submissionsResult = await submissionResponse.json();


        let coursesElement = document.createElement("div");

        console.log(course);

        coursesElement.innerHTML = `<h2>${course.name}</h2>`;
        coursesElement.innerHTML+= `<p><a href="https://bth.instructure.com/courses/${course.id}">Finns ${submissionsResult.length} orättade uppgifter.</a></p>`;

        box.appendChild(coursesElement);
    }

    document.body.appendChild(box);
})();
