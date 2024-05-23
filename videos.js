javascript:(function() {
    const mediaUrl = document.querySelector("#mep_0 .mejs-inner .mejs-mediaelement audio").children[2].src;

    const newElement = document.createElement("div");

    newElement.style = "width:600px;height:347px;overflow:scroll;position:absolute;top:50px;left:20px;background-color:#2C3539;color:#fff;padding:10px;";

    newElement.innerHTML = `<video controls width="580">
            <source src="${mediaUrl}" />
        </video> `;

    document.body.append(newElement);
})();
