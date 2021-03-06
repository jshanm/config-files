// ==UserScript==
// @name            Harz Travel
// @version         1.0.0
// @description     Enable arrow navigation on Harz Travel
// @author          Darek Kay <hello@darekkay.com>
// @namespace       https://darekkay.com
// @include         http*://*harz-travel.de*
// @run-at          document-end
// ==/UserScript==

document.addEventListener("keydown", function(event){
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        document.getElementById("next") && document.getElementById("next").click();
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        document.getElementById("last") && document.getElementById("last").click();
    }
});
