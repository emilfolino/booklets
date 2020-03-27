javascript:(function(){
    let myStorage = window.localStorage;
    let users = ["Kenneth", "Andreas", "Emil", "Mikael", "Matilda", "Martin B", "Niklas", "Jakob", "Alexander", "Wissam", "Martin L"];
    let usersSelect = users.map(function(user) {
        return `<option value="${user}">${user}</option>`;
    });

    let box = document.getElementsByClassName("ic-Input grading_comment")[0];
    box.rows = 30;
    let course = document.getElementsByClassName("ellipsible")[1].innerHTML.toLowerCase().replace("/", "");
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

        workingDiv.innerHTML += `<div style='background-color:#2C3539;color:#fff;border-bottom:1px solid orange;width:818px;font-size:18px;margin-bottom:0;text-align:center;display:block;'>Du rättar som: <span id='user'>" + myStorage.getItem("name") + "</span></div><textarea autofocus id='feedbackText' style='width:800px;height:200px;background-color:#2C3539;font-size:18px;color:#fff;margin-bottom:0;'></textarea>\
        <div style='background-color:#2C3539;width:808px;border-top:1px solid orange;padding:5px;'>\
        <button id='pressMePlease' style='height:40px;background:#eee;'>INSERT FEEDBACK</button>\
        <select id='preChoices'>\
        <option value=''>Välj någon feedback...</option>\
        <option value='Jag har tittat på din inlämning och både skärmdumpen och loggfilen finns med och har korrekt innehåll och me-sidan fanns på plats. Bra jobbat med redovisningstexten. Kör så det ryker med nästa kursmoment.'>vlinux 01 (intro)</option>\
        <option value='Jag har gått igenom din inlämning och tittat på labben, sandboxen och din me-sida. Alla delarna fungerar fint och enligt kraven. Kör på med nästa moment!'>js1 01 (intro)</option>\
        <option value='Jag har testat de olika tangenbordsinmatningarna och allt ser bara bra ut. Din text är reflekterande och väl skriven. Kör så det ryker med nästa kursmoment!'>js1 05</option>\
        <option value='Jag har spelat ditt Hangman och det fungerar fint. Alla delarna är på plats och rätt metoder är publika. Mycket bra jobbat! Kämpa på nu och lycka till med projektet.'>js1 06</option>\
        <option value='Jag har tittat på ditt projekt och bra jobbat med kraven och implementationen! Projektet fungerar och koden validerar, Din redovisningstext är reflekterande och väl skriven, stiligt!'>js1 10</option>\
        <option value='Jag har tittat på din inlämning och alla delarna är på plats. Loggen innehåller rätt data och skärmdumpen visar vad som tänkts. Även me-sidan är på plats. Bra jobbat och kör på med nästa kursmoment!'>Linux 01</option>\
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
        <option value='Dina klasser ser bra och korrekta ut. Efter att ha läst din redovisningstext och kollat på din kod känns det som att veta vad klasser och objekt är. Bra jobbat!.'>kmom01 (oopython)</option>\
        <option value='Jag har inspekterat dina klasser och labben. Klasserna ser ut som det är tänkt. Du har en bra förklaring på klasser och objekt, det ser ut som att du förstår klasser och objekt.'>kmom01 (oopython) alt. 2</option>\
        <option value='Jag har tittat på labben och Flask-applikationen och läst igenom din redovisningstext. Det verkar som om du har koll på klasser och objekt! Din Flaskapplikation snurrar också på fint med korrekt innehåll enligt instruktionerna. Bra jobbat - kör på med nästa kursmoment!'>kmom01 (oopython) alt. 3</option>\
        <option value='Labben ser bra ut och frågersporten fungerar som den ska. Koden och klasserna är bra gjorda, du har uttnytja arv på rätt sätt och inte skapat onödiga metoder i Question klasserna. Bra förklaringar av de olika koncepten i redovisningtexten. '>kmom02 (oopython)</option>\
        <option value='Du har bra struktur i din kod och använder dina klasser på ett bra sätt. War klassen kunde haft mer metoder och inte bara en stor. Din tester kunde varit lite mer utförliga och även testat vad som händer när något går fel. Klassdiagrammet ser bra ut.'>kmom03 (oopython)</option>\
        <option value='Koden för båda insertionsort ser bra ut, inget att kommentera på. Din redovisningstext visar på att du förstår vad du har gjort i kursmomentet, bra jobbat!'>kmom05 (oopython)</option>\
        <option value='Bra att du gjorde labben. Get() ser bra ut, inget att påpeka. Du använder rekursion korrekt. Remove() får ju det gjort men du hade kunnat dela upp den i fler metoder eller ännu bättre hade varit att försöka identifiera  funktionalitet som är lika mellan flera fall och bryta ut det till en egen metod och återanvänt den. Du förklara de olika begreppen väldigt bra och visar att du förstår de olika koncepten. Bra jämförelse mellan datastrukturerna.'>kmom06 (oopython)</option>\
        <option value='Bra jobbat med projektet! Efter läst din text och kollat igenom din video känns det som du behärskar klasser, datastrukturer och att arbeta rekursivt.'>kmom10 (oopython)</option>\
        </select>\
        <select id='names'>\
        <option value=''>Vem är du?</option>\
        ${usersSelect.join("\n")}\
        </select></div>`;

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
