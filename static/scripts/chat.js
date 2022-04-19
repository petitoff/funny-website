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

function botBrain(messageFromUser) {
  messageFromUser = messageFromUser.trim().toLowerCase(); // remove whitespace and change all letter to lower case

  

  // check if message is command
  if (messageFromUser == "help") return helpCommand();
  else if (messageFromUser == "funny") return funnyCommand();

  // check if word is in dictionary
  for (const word of messageFromUser.split(" ")) {
    if (word in pattern) return pattern[word];
  }

  // if not send error message to user
  return errorMessage.noReplyToThisMessage;
}

const helpCommand = function () {
  animationDivMovForBotMessage("You can: ");
  animationDivMovForBotMessage("Go to another page! Type: funny ");
  animationDivMovForBotMessage("Try to hack this page! Type: hack ");
  animationDivMovForBotMessage("Try to find hidden things!");

  // responseFromBotInnerHtml("You can: ");
};

const funnyCommand = function () {
  animationDivMovForBotMessage("Ołkej! We are going to the new galaxy....!");

  setTimeout(function () {
    window.location.href = "hidden/funny.html";
  }, 2000);
};
