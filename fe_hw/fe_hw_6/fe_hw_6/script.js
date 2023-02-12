let title = document.createElement("h1");
title.classList.add("title");
title.innerText = "My last home work, basic frontend course.";
document.body.append(title);
title.style.textAlign = "center";
title.style.color = "white";

let buttonTaskFirst = document.createElement("button");
buttonTaskFirst.classList.add("button");
buttonTaskFirst.innerText = "First Task";
buttonTaskFirst.setAttribute("onclick","document.location='pages/taskFirst/taskFirst.html'");
buttonTaskFirst.setAttribute("target","_blank");
document.body.append(buttonTaskFirst);
buttonTaskFirst.style.margin = "10px auto";
buttonTaskFirst.style.display = "block";

let buttonTaskSecond = document.createElement("button");
buttonTaskSecond.classList.add("button");
buttonTaskSecond.innerText = "Second Task";
buttonTaskSecond.setAttribute("onclick","document.location='pages/taskSecond/taskSecond.html'");
buttonTaskSecond.setAttribute("target","_blank");
document.body.append(buttonTaskSecond);
buttonTaskSecond.style.margin = "10px auto";
buttonTaskSecond.style.display = "block";