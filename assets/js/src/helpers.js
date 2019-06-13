import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";
import about from "./about.js";

function renderTab(n) {
    const tab = document.createElement("div");
    tab.innerHTML = "<img src='./assets/images/tab" + n + ".png' alt=''>";
    tab.addEventListener("click", () => changeTab(n));

    return tab;
}

function changeTab(n) {
    document.querySelectorAll(".tabs div").forEach((tab) => tab.setAttribute("class", "unselected"));
    document.querySelector(".tabs div:nth-child(" + n + ")").setAttribute("class", "selected");
    const display = document.querySelector(".display");
    display.innerHTML = getPage(n);
}

function getPage(n) {
    switch (n) {
        case 1:
        return home();
        case 2:
        return menu();
        case 3:
        return contact();
        case 4:
        return about();
    }
}

export {renderTab, changeTab}
