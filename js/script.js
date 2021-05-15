{
  const welcome = () => {
    console.log("Witam wszystkich! :)");
  }

  const toggleBackground = () => {
    const body = document.body;
    const nextColorName = document.querySelector(".js-nextColorName");

    body.classList.toggle("body--pink");
    nextColorName.innerText = body.classList.contains("body--pink") ? "jaśniejsze" : "ciemniejsze";
  };

  const init = () => {
    const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
    changeBackgroundButton.addEventListener("click", toggleBackground);

    welcome();
  };

  init();
}

