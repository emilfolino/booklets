javascript:(function(){
    let myStorage = window.localStorage;
    let users = ["Kenneth", "Andreas", "Emil", "Mikael", "Bäck", "Matilda", "Jesper", "Martin", "Magnus", "Niklas"];
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
        <option value='Jag har gått igenom din inlämning och tittat på labben, sandboxen och din me-sida. Alla delarna fungerar fint och enligt kraven. Kör på med nästa moment!'>js1 01 (intro)</option>\
        <option value='Jag har testat de olika tangenbordsinmatningarna och allt ser bara bra ut. Din text är reflekterande och väl skriven. Kör så det ryker med nästa kursmoment!'>js1 05</option>\
        <option value='Jag har spelat ditt Hangman och det fungerar fint. Alla delarna är på plats och rätt metoder är publika. Mycket bra jobbat! Kämpa på nu och lycka till med projektet.'>js1 06</option>\
        <option value='Jag har tittat på din inlämning och alla delarna ser bra ut. '>htmlphp 01 (intro)</option>\
        <option value='Jag har gått igenom labben och me-sidan och '>htmlphp 02 (intro)</option>\
        <option value='Jag har tittat på din inlämning och alla delarna finns på plats och fungerar som det ska. Din redovisningstext är välskriven och reflekterande. Snyggt jobbat! '>htmlphp 04 (intro)</option>\
        <option value='Jag har tittat på uppgifterna och både labben och sökfunktionen fungerar fint. Bra redovisningstext så det är bara att köra på!'>htmlphp 05 (intro)</option>\
        <option value='Jag har gått igenom CRUD och labben. Uppgiften är väl utförd och fungerar i enlighet med kraven. Jag har även läst din redovisningstext och den beskriver bra hur du resonerat genom kursmomentet. Kör på och lycka till med projeket!'>htmlphp 06 (intro)</option>\
        <option value='Din redovisingstext är välskriven och reflekterande. '>Bra redovisningtext</option>\
        <option value='Bra jobbat! '>Bra jobbat!</option>\
        <option value='Härligt att du gjort extrauppgifterna! '>Extrauppgifter ok</option>\
        <option value='Vänligen komplettera följande: '>Komplettering</option>\
        <option value='Jobba mer med din redovisningstext till nästa inlämning, i länken nedanför kan du läsa om vad tanken är med texten.'>Bättre redovisningstext</option>\
        <option value='Allt fungerar som tänkt, bra jobbat!'>Allt fungerar</option>\
        <option value='Din inlämning visar på en bra förståelse på skillnaden mellan de olika datastrukturerna. Den är även enligt specikationen och fungerar som det ska. Bra jobbat och lyckat till med examinationen.'>Kmom06 (python)</option>\
        </select>\
        <select id='names'>\
        <option value=''>Vem är du?</option>\
        <option value='Kenneth'>Kenneth</option>\
        <option value='Andreas'>Andreas</option>\
        <option value='Emil'>Emil</option>\
        <option value='Mikael'>Mikael</option>\
        <option value='Bäck'>Bäck</option>\
        <option value='Jesper'>Jesper</option>\
        <option value='Matilda'>Matilda</option>\
        <option value='Martin'>Martin</option>\
        <option value='Magnus'>Magnus</option>\
        <option value='Niklas'>Niklas</option>\
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

    console.log("Ready to serve.");
})();
