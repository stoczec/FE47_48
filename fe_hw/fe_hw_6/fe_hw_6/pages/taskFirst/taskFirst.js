// Написать программу, которая формирует на основе массива строк множество параграфов
// и выводит их в интерфейс. При клике на параграф текст должен меняться на звездочки.
// На данном этапе делать процесс обратимым при повторном клике необязательно.

let navButtons = document.createElement("div");
navButtons.classList.add("navButtons");
document.body.append(navButtons);
navButtons.style.display = "flex";
navButtons.style.justifyContent = "center";

let buttonPrevious = document.createElement("button");
buttonPrevious.classList.add("button");
buttonPrevious.innerText = "previous page";
buttonPrevious.setAttribute("onclick","document.location='/index.html'");
buttonPrevious.setAttribute("target","_blank");
navButtons.append(buttonPrevious);
buttonPrevious.style.margin = "10px auto";

let buttonNext = document.createElement("button");
buttonNext.classList.add("button");
buttonNext.innerText = "next page";
buttonNext.setAttribute("onclick","document.location='/pages/taskSecond/taskSecond.html'");
buttonNext.setAttribute("target","_blank");
navButtons.append(buttonNext);
buttonNext.style.margin = "10px auto";

let title = document.createElement("h1");
title.classList.add("title");
title.innerText = "First task:";
document.body.append(title);
title.style.textAlign = "center";
title.style.color = "black";

let paragraphTask = document.createElement("p");
paragraphTask.classList.add("paragraphTask");
paragraphTask.innerText =
    " Написать программу, которая формирует на основе массива строк множество параграфов и выводит их в интерфейс. При клике на параграф текст должен меняться на звездочки. На данном этапе делать процесс обратимым при повторном клике необязательно.";
document.body.append(paragraphTask);
paragraphTask.style.width = "75%";
paragraphTask.style.margin = "10px auto";
paragraphTask.style.backgroundColor = "#f7f6f4";
paragraphTask.style.border = "1px solid #c9c0b1"
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
divElements.style.backgroundColor = "#f7f6f4";

let array = [
    "border-collapse - устанавливает, как отображать границы вокруг ячеек таблицы.",
    "text-decoration - добавляет оформление текста в виде его подчеркивания, перечеркивания, линии над текстом и мигания.",
    "right - для позиционированного элемента определяет расстояние от правого края родительского элемента, не включая отступ, поле и ширину рамки, до правого края дочернего элемента.",
    "overflow - управляет отображением содержания блочного элемента, если оно целиком не помещается и выходит за область заданных размеров.",
    "padding - устанавливает значение полей вокруг содержимого элемента.",
    "font-size - определяет размер шрифта элемента.",
    "list-style - универсальное свойство, позволяющее одновременно задать стиль маркера, его положение, а также изображение, которое будет использоваться в качестве маркера.",
];
let arrColor = [
    "mediumaquamarine",
    "#008cc1",
    "#f36196",
    "#fed200",
    "#9f0000",
    "#74c365",
    "#220099",
];
function create() {
    for (let i = 0; i < array.length; i++) {
        let paragraph = document.createElement("p");
        paragraph.innerText = array[i];
        paragraph.style.margin = "0px auto";
        paragraph.style.padding = "10px";
        paragraph.style.borderBottom = "1px dotted black";
        paragraph.style.textAlign = "center";
        paragraph.style.fontFamily = "Gilroy";
        paragraph.style.color = arrColor[i];
        paragraph.addEventListener("click", function () {
            paragraph.innerText = "***";
        });
        divElements.append(paragraph);
    }
}

function reset() {
    let x = divElements.querySelectorAll("p");
    for (let i = 0; i < x.length; i++) {
        x[i].innerText = array[i];
    }
}

function kill() {
    let x = divElements.querySelectorAll("p");
    for (let i = 0; i < x.length; i++) {
        x[i].remove(i);
    }
}

buttonCreate.addEventListener("click", create);
buttonReset.addEventListener("click", reset);
buttonKill.addEventListener("click", kill);
