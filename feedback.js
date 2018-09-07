javascript:(function(){
    let name = "Kenneth";
    let box = document.getElementsByClassName("ic-Input grading_comment")[0];
    let textBefore = "Hej,\nVälkommen till kursen Webbteknologier aka htmlphp.\n\n";
    let feedback;
    let textAfter = "\nHär beskrivs vilken feedback du kan förvänta dig på rättningarna: https://dbwebb.se/kurser/faq/vilken-feedback-far-man-pa-inlamningarna\n\nHär finns bra beskrivningar av hur du skriver en reflekterande redovisningstext: https://dbwebb.se/kurser/faq/att-skriva-en-bra-redovisningstext\n\nKom ihåg att du alltid kan ställa frågor och få feedback i forumet (https://dbwebb.se/forum/viewforum.php?f=4) och på gitter (https://gitter.im/dbwebb-se/htmlphp).\n\n// ";
    let workingDiv = document.createElement("div");
    workingDiv.id = "feedbackArea";

    workingDiv.style.position = "absolute";
    workingDiv.style.top = "10px";
    workingDiv.style.left = "500px";
    workingDiv.style.zIndex = 10000;
    workingDiv.style.width = "800px";
    workingDiv.style.height = "250px";

    workingDiv.innerHTML += "<textarea autofocus id='feedbackText' style='width:800px;height:200px;background-color:#2C3539;font-size:18px;color:#fff'></textarea>\
    <button id='pressMePlease' style='height:40px'>INSERT FEEDBACK</button>\
    <select id='preChoices'>\
    <option value=''>Välj någon feedback...</option>\
    <option value='Jag har tittat på din inlämning och alla delarna ser bra ut. '>Intro 1 (Bra)</option>\
    <option value='Bra jobbat! '>Bra jobbat!</option>\
    <option value='Härligt att du gjort extrauppgifterna! '>Extrauppgifter ok</option>\
    <option value='Vänligen komplettera följande: '>Komplettering</option>\
    </select>";

    document.getElementsByTagName("body")[0].appendChild(workingDiv);


    document.getElementById("preChoices").addEventListener("change", function() {
        if (document.getElementById("preChoices").value != "") {
            document.getElementById("feedbackText").value += document.getElementById("preChoices").value;
        }
    });

    document.getElementById("pressMePlease").addEventListener("click", function() {
        feedback = document.getElementById("feedbackText").value + "\n";
        box.textContent = textBefore + feedback + textAfter + name;
        document.getElementsByTagName("body")[0].removeChild(workingDiv);
    });

    console.log("Go fuck yourself, Andreas!");
})();
