// Реализовать 10 карточек с числами от 0 до 9 и при нажатии на какую-либо карточку присвоить ей класс active.
// В классе active должны быть стили, которые меняют цвет текста и цвет заднего фона местами.

let navButtons = document.createElement("div");
navButtons.classList.add("navButtons");
document.body.append(navButtons);
navButtons.style.display = "flex";
navButtons.style.justifyContent = "center";

let buttonPrevious = document.createElement("button");
buttonPrevious.classList.add("button");
buttonPrevious.innerText = "previous page";
buttonPrevious.setAttribute(
    "onclick",
    "document.location='/pages/taskFirst/taskFirst.html'"
);
buttonPrevious.setAttribute("target", "_blank");
navButtons.append(buttonPrevious);
buttonPrevious.style.margin = "10px auto";

let buttonNext = document.createElement("button");
buttonNext.classList.add("button");
buttonNext.innerText = "next page";
buttonNext.setAttribute(
    "onclick",
    "document.location='/pages/taskThird/taskThird.html'"
);
buttonNext.setAttribute("target", "_blank");
navButtons.append(buttonNext);
buttonNext.style.margin = "10px auto";

let title = document.createElement("h1");
title.classList.add("title");
title.innerText = "Second task:";
document.body.append(title);
title.style.textAlign = "center";
title.style.color = "black";

let paragraphTask = document.createElement("p");
paragraphTask.classList.add("paragraphTask");
paragraphTask.innerText =
    " Реализовать 10 карточек с числами от 0 до 9 и при нажатии на какую-либо карточку присвоить ей класс active. В классе active должны быть стили, которые меняют цвет текста и цвет заднего фона местами.";
document.body.append(paragraphTask);
paragraphTask.style.width = "75%";
paragraphTask.style.margin = "10px auto";
paragraphTask.style.backgroundColor = "#f7f6f4";
paragraphTask.style.border = "1px solid #c9c0b1";
paragraphTask.style.borderRadius = "5px";
paragraphTask.style.textAlign = "center";
paragraphTask.style.fontFamily = "Gilroy";

let divButtons = document.createElement("div");
divButtons.classList.add("divButtons");
document.body.append(divButtons);
divButtons.style.display = "flex";
divButtons.style.justifyContent = "center";

let buttonCreate = document.createElement("button");
buttonCreate.classList.add("button");
divButtons.append(buttonCreate);
buttonCreate.innerText = "Create!";
buttonCreate.style.margin = "20px";
buttonCreate.style.backgroundColor = "mediumseagreen";
buttonCreate.style.borderRadius = "5px";

let buttonReset = document.createElement("button");
buttonReset.classList.add("button");
divButtons.append(buttonReset);
buttonReset.innerText = "Reset!";
buttonReset.style.margin = "20px";
buttonReset.style.backgroundColor = "mediumvioletred";
buttonReset.style.borderRadius = "5px";

let buttonKill = document.createElement("button");
buttonKill.classList.add("buttonKill");
divButtons.append(buttonKill);
buttonKill.innerText = "Kill all!";
buttonKill.style.margin = "20px";
buttonKill.style.backgroundColor = "red";
buttonKill.style.borderRadius = "5px";

let divElements = document.createElement("div");
divElements.classList.add("divElements");
document.body.append(divElements);
divElements.style.border = "2px solid black";
divElements.style.margin = "10px auto";
divElements.style.width = "75%";
divElements.style.borderRadius = "5px";
divElements.style.display = "flex";
divElements.style.justifyContent = "space-evenly";
divElements.style.flexWrap = "wrap";
divElements.style.alignContent = "space-around";

let arrBackColor = [
    "#bc012e",
    "#008cc1",
    "#f36196",
    "#fed200",
    "#9f0000",
    "#74c365",
    "#220099",
    "#770001",
    "#66cdaa",
    "#1db394",
];

let arrColor = [
    "#4c4f56",
    "#090807",
    "#000011",
    "#130a06",
    "#070d0d",
    "#110011",
    "#483c3c",
    "#69655b",
    "#8b8589",
    "#8c8475",
];

function create() {
    for (let i = 0; i < 10; i++) {
        let cardDiv = document.createElement("div");
        cardDiv.innerText = i;
        cardDiv.style.width = "15%";
        cardDiv.style.height = "75px";
        cardDiv.style.margin = "10px auto";
        cardDiv.style.padding = "10px";
        cardDiv.style.borderBottom = "1px dotted black";
        cardDiv.style.textAlign = "center";
        cardDiv.style.fontFamily = "Gilroy";
        cardDiv.style.fontWeight = "bold";
        cardDiv.style.fontSize = "30px";
        cardDiv.style.display = "flex";
        cardDiv.style.alignItems = "center";
        cardDiv.style.justifyContent = "center";
        cardDiv.style.color = arrColor[i];
        cardDiv.style.backgroundColor = arrBackColor[i];
        cardDiv.style.border = "2px solid #553f2d";
        cardDiv.style.borderRadius = "5px";
        cardDiv.addEventListener("click", function () {
            if (cardDiv.classList.contains("active")) {
                cardDiv.classList.remove("active");
            } else {
                cardDiv.classList.add("active");
            }
            cardDiv.style.color = arrBackColor[i];
            cardDiv.style.backgroundColor = arrColor[i];
        });
        divElements.append(cardDiv);
    }
}

function reset() {
    let x = divElements.querySelectorAll("div");
    for (let i = 0; i < x.length; i++) {
        x[i].classList = "";
        x[i].style.color = arrColor[i];
        x[i].style.backgroundColor = arrBackColor[i];
    }
}

function kill() {
    let x = divElements.querySelectorAll("div");
    for (let i = 0; i < x.length; i++) {
        x[i].remove(i);
    }
}

buttonCreate.addEventListener("click", create);
buttonReset.addEventListener("click", reset);
buttonKill.addEventListener("click", kill);
