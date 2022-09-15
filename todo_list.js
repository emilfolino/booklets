(async function() {
    const baseURL = "https://bth.instructure.com/api/v1";
    const canvasAuth = "Bearer 12133~ETWXzNlkTWVzvg3sW1fad6BxZNFO6BvkUjwwtZduSBXc6oqLMvxZ6sShs8MEMaQA";
    const favouritesURL = `${baseURL}/users/self/favorites/courses`;

    const response = await fetch(favouritesURL, {
        headers: {
            "Authorization": canvasAuth
        }
    });
    const result = await response.json();

    // renderBox(result);
})();

// async function renderBox(courses) {
//     let box = document.createElement("div");
//
//     box.style = "width:600px;height:800px;overflow:scroll;position:absolute;top:50px;left:20px;background-color:#2C3539;color:#fff;padding:10px;z-index:100;";
//
//     let button = document.createElement("button");
//
//     button.textContent = "Stäng";
//
//     button.addEventListener("click", function() {
//         box.parentNode.removeChild(box);
//     });
//
//     box.appendChild(button);
//
//     //for (let i = 0; i < courses.length; i++) {
//         // const submissionsURL = `${baseURL}/api/v1/courses/${courses[i].id}/students/submissions`;
//         // const submissionResponse = await fetch(submissionsURL, {
//         //         headers: {
//         //             "Authorization": canvasAuth
//         //         }
//         //     });
//         // const submissionsResult = await submissionResponse.json();
//         // console.log(submissionsResult);
//         //
//         // let coursesElement = document.createElement("div");
//         //
//         // //coursesElement.innerHTML = `<h2>${courses[i].name}</h2>`;
//         // //coursesElement.innerHTML+= `<p>${submissionsResult</p>`;
//         //
//         // box.appendChild(coursesElement);
//     //}
//
//     document.body.appendChild(box);
// }
