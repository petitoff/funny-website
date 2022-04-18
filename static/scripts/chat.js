const allMessageFromUser = [];
const getMessageFromUser = document.getElementById("inputMessage");
const btn1 = document.querySelector(".button");

const scrollDownChat = function () {
  const elements = document.getElementsByClassName("details");
  elements[elements.length - 1].scrollIntoView();
};

const animationDivMovForBotMessage = function (botMessageToUser) {
  setTimeout(function () {
    document
      .getElementById("chatbot_sender")
      .insertAdjacentHTML(
        "beforeend",
        `<div class="animation-div-mov chat incoming"><div class="details"><p> ${botMessageToUser} </p></div></div>`
      );
    scrollDownChat();

    const animation1 = document.querySelectorAll(".animation-div-mov");
    animation1[animation1.length - 1].classList.add("move");
  }, 1000);
};

const messageFromUser = function (event) {
  if (event.key === "Enter" || event == "[object PointerEvent]") {
    const userMessage = document.getElementById("inputMessage").value; // Retrieving messages from the user
    if (userMessage.trim() == "") return;
    allMessageFromUser.push(userMessage);
    document.getElementById("inputMessage").value = ""; // Clearing the input from the user

    document
      .getElementById("chatbot_sender")
      .insertAdjacentHTML(
        "beforeend",
        `<div class="chat outgoing"><div class="details"><p> ${userMessage} </p></div></div>`
      );
    scrollDownChat();
    responseFromBot();
  }
};

getMessageFromUser.addEventListener("keyup", messageFromUser);
btn1.addEventListener("click", messageFromUser);

const responseFromBot = function () {
  const messageFromUser = allMessageFromUser[allMessageFromUser.length - 1];
  const botMessageToUser = botBrain(messageFromUser) ?? "";

  if (botMessageToUser !== "") responseFromBotInnerHtml(botMessageToUser);
  // setTimeout(responseFromBotInnerHtml, 1000, botMessageToUser);
};

const responseFromBotInnerHtml = function (botMessageToUser) {
  setTimeout(function () {
    document
      .getElementById("chatbot_sender")
      .insertAdjacentHTML(
        "beforeend",
        `<div class="chat incoming"><div class="details"><p> ${botMessageToUser} </p></div></div>`
      );
    scrollDownChat();
  }, 1000);
};

};
