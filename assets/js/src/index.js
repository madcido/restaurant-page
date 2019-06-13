import {renderTab, changeTab} from "./helpers.js";

function init() {
    const tabs = document.createElement("div");
    tabs.className = "tabs";
    for (let i = 1; i <= 4; i++) {
        tabs.appendChild(renderTab(i));
    }
    document.getElementById("content").appendChild(tabs);
    document.querySelector(".tabs div:first-child img").className = "logo";
    
    const display = document.createElement("div");
    display.className = "display";
    document.getElementById("content").appendChild(display);

    changeTab(1);
}

init();
