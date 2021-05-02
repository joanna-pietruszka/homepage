console.log("Witam wszystkich! :)");

let changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
let body = document.body;
let nextColorName = document.querySelector(".js-nextColorName");

changeBackgroundButton.addEventListener("click", () => {
  body.classList.toggle("body--pink");
  nextColorName.innerText = body.classList.contains("body--pink") ? "jaśniejsze" : "ciemniejsze";
  
});
