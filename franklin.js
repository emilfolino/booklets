javascript:(function(){
    let myStorage = window.localStorage;
    let users = ["Kenneth", "Andreas", "Emil", "Mikael"];
    let box = document.getElementsByClassName("ic-Input grading_comment")[0];
    box.rows = 30;
    let course = document.getElementsByClassName("ellipsible")[1].innerHTML.toLowerCase();
    let kmom = document.getElementsByClassName("ellipsible")[3].innerHTML.toLowerCase();

    fetch('https://franklin.emilfolino.se/feedback/' + course + "/" + kmom)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        let textBefore = myJson.data.before;
        let feedback = "Feedback: ";
        let textAfter = myJson.data.after;
        let workingDiv = document.createElement("div");
        workingDiv.id = "feedbackArea";
        workingDiv.style.position = "absolute";
        workingDiv.style.top = "10px";
        workingDiv.style.left = "500px";
        workingDiv.style.zIndex = 10000;
        workingDiv.style.width = "800px";
        workingDiv.style.height = "250px";

        workingDiv.innerHTML += "<div style='background-color:#2C3539;color:#fff;border-bottom:1px solid orange;width:818px;font-size:18px;margin-bottom:0;text-align:center;display:block;'>Du rättar som: <span id='user'>" + myStorage.getItem("name") + "</span></div><textarea autofocus id='feedbackText' style='width:800px;height:200px;background-color:#2C3539;font-size:18px;color:#fff;margin-bottom:0;'></textarea>\
        <div style='background-color:#2C3539;width:808px;border-top:1px solid orange;padding:5px;'>\
        <button id='pressMePlease' style='height:40px;background:#eee;'>INSERT FEEDBACK</button>\
        <select id='preChoices'>\
        <option value=''>Välj någon feedback...</option>\
        <option value='Jag har tittat på din inlämning och alla delarna ser bra ut. '>Intro 1 (Bra)</option>\
        <option value='Bra jobbat! '>Bra jobbat!</option>\
        <option value='Härligt att du gjort extrauppgifterna! '>Extrauppgifter ok</option>\
        <option value='Vänligen komplettera följande: '>Komplettering</option>\
        </select>\
        <select id='names'>\
        <option value=''>Vem är du?</option>\
        <option value='Kenneth'>Kenneth</option>\
        <option value='Andreas'>Andreas</option>\
        <option value='Emil'>Emil</option>\
        <option value='Mikael'>Mikael</option>\
        </select></div>";

        document.getElementsByTagName("body")[0].appendChild(workingDiv);

        document.getElementById("names").addEventListener("change", function() {
            if (document.getElementById("names").value != "") {
                myStorage.setItem("name", document.getElementById("names").value);
                document.getElementById("user").innerHTML = myStorage.getItem("name");
            }
        });
        console.log(myStorage.getItem("name"));
        document.getElementById("preChoices").addEventListener("change", function() {
            if (document.getElementById("preChoices").value != "") {
                document.getElementById("feedbackText").value += document.getElementById("preChoices").value;
            }
        });

        document.getElementById("pressMePlease").addEventListener("click", function() {
            if (users.indexOf(myStorage.getItem("name")) > -1) {
                feedback += document.getElementById("feedbackText").value + "\n";
                box.textContent = textBefore + feedback + textAfter + myStorage.getItem("name");
                document.getElementsByTagName("body")[0].removeChild(workingDiv);
            } else {
                window.alert("Vem är det som rättar?");
            }

        });
    });



    console.log("Go fuck yourself, Andreas!");
})();
