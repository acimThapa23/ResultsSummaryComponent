const summarySection = document.getElementsByClassName("summary-section")[0];
const btnContainer = document.getElementsByClassName("button-container")[0];

const fetchData = async () => {
  try {
    const response = await fetch("./data.json");
    const info = await response.json();
    const btn = reCreateElement("btn", "button", "btn", "Continue");

    info.forEach((i, index) => {
      const { category, score, icon } = i;
      const section = reCreateElement("div", "div", "section-summary-reaction");

      const divSingle = reCreateElement(
        "div",
        "div",
        `single-tab ${"tab" + index.toString()}`
      );

      const flexContainer = reCreateElement("div", "div", "flex");

      const img = reCreateElement("img", "img", "", "", icon);

      const span = reCreateElement(
        "span",
        "span",
        `action ${"hi" + index.toString()} `,
        category
      );

      const scoreDiv = reCreateElement("div", "div", score);

      const scored = reCreateElement("span", "span", "scored", score);

      const slash = reCreateElement("span", "span", "slash", "/");

      const total = reCreateElement("span", "span", "total", 100);

      appendElement(section, divSingle);
      appendElement(divSingle, flexContainer);
      appendElement(flexContainer, img);
      appendElement(flexContainer, span);
      scoreDiv.append(scored, slash, total);
      appendElement(divSingle, scoreDiv);
      appendElement(summarySection, section);
    });

    appendElement(summarySection, btnContainer);
    appendElement(btnContainer, btn);
  } catch (error) {
    console.log(error);
  }
};

fetchData();

//function  for creating element
function reCreateElement(variableName, name, className, text, src) {
  variableName = document.createElement(`${name}`);
  variableName.setAttribute("class", `${className}`);
  variableName.src = `${src}`;
  variableName.innerHTML = text || "";

  name === "img" ? variableName.removeAttribute("class") : "";
  //   console.log(variableName);

  return variableName;
}

//append function
function appendElement(parentElement, childElement) {
  parentElement.append(childElement);
}
