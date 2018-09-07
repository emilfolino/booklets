javascript:(function(){

    var box = document.getElementsByClassName("ic-Input grading_comment")[0];
    var textBefore = "Hej,\nVälkommen till kursen Webbteknologier aka htmlphp.\n\n";
    var feedback = "[INSERT_FEEDBACK_COMMENT]\n\n";
    var name = "Kenneth";
    var textAfter = "\n\nHär beskrivs vilken feedback du kan förvänta dig på rättningarna: https://dbwebb.se/kurser/faq/vilken-feedback-far-man-pa-inlamningarna\n\nHär finns bra beskrivningar av hur du skriver en reflekterande redovisningstext: https://dbwebb.se/kurser/faq/att-skriva-en-bra-redovisningstext\n\nKom ihåg att du alltid kan ställa frågor och få feedback i forumet (https://dbwebb.se/forum/viewforum.php?f=4) och på gitter (https://gitter.im/dbwebb-se/htmlphp).\n\n//";

    box.textContent = textBefore + feedback + textAfter + name;

    console.log("Go fuck yourself, Andreas!");
})();
