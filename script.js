const aplicar = document.querySelector(".btnEnviar");
const inputColor = document.getElementById("color");

aplicar.addEventListener("click", () => {
  let inputColor = document.getElementById("color").value;
  inputColor.innerHTML = inputColor.innerHTML;

  bodyColor = document.querySelector(".body_color");
  bodyColor.style.backgroundColor = inputColor;
  bodyColor.style.transition = "1s cubic-bezier(0, 0.09, 0, 0.63)";

  if (inputColor === "#") {
    console.log("falta codigo");
  } else {
    if (inputColor == "#000000" || "#000") {
      let titulo = document.querySelector(".titulo");
      titulo.style.color = "#FFF";
      bodyColor.style.transition = "1s";
    } else {
      let titulo = document.querySelector(".titulo");
      titulo.style.color = "#FFF";
      bodyColor.style.transition = "1s";
    }
  }
});
