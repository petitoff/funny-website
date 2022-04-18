function responseFromBotW() {
  const botMessageToUser =
    pattern.welcomeMessage ?? errorMessage.errorFindingTheMessage;

  document
    .getElementById("chatbot_sender")
    .insertAdjacentHTML(
      "beforeend",
      `<div class="animation-div-mov chat incoming"><div class="details"><p> ${botMessageToUser} </p></div></div>`
    );
  scrollDownChat();
}

// setTimeout(responseFromBotW, 1000);
responseFromBotW();
const animation1 = document.querySelector(".animation-div-mov");

animation1.classList.add("move");
