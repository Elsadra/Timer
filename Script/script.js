let btnSubmit = document.querySelector(".btn-submit");
let parentCard = document.querySelector(".parent-card");
let history = document.querySelector(".history");

btnSubmit.addEventListener("click", function () {
  let Minutes = document.querySelector(".Minutes-input").value;
  let Seconds = document.querySelector(".Seconds-input").value;
  
  let MinutesNode = document.querySelector(".Minutes");
  let SecondsNode = document.querySelector(".Seconds");
  let timer = setInterval(function () {
    if (Seconds === 0) {
      Minutes--;
      Seconds = 60;
    }
    if (Minutes === 0) {
    }
    if (Minutes <= 0 && Seconds === 1) {
      clearInterval(timer);
      parentCard.setAttribute(
        "style",
        "position: fixed; top: 0%; transition: 1s;"
      );
      history.addEventListener("click", function () {
        parentCard.setAttribute(
          "style",
          "position: fixed; top: -100%; transition: 1s;"
        );
      });
    }
    --Seconds;
    MinutesNode.innerHTML = Minutes;
    if (Minutes < 10) {
      MinutesNode.innerHTML = "0" + Minutes;
    }
    SecondsNode.innerHTML = Seconds;
    if (Seconds < 10) {
      SecondsNode.innerHTML = "0" + Seconds;
    }
  }, 1000);
});
