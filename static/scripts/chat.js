const allMessageFromUser = [];
const getMessageFromUser = document.getElementById("inputMessage");
const btn1 = document.querySelector(".button");

const event1 = function (event) {
  if (event.key === "Enter" || event == "[object PointerEvent]") {
    const userMessage = document.getElementById("inputMessage").value; // Retrieving messages from the user
    allMessageFromUser.push(userMessage);
    document.getElementById("inputMessage").value = ""; // Clearing the input from the user

    document
      .getElementById("chatbot_sender")
      .insertAdjacentHTML(
        "beforeend",
        `<div class="chat outgoing"><div class="details"><p> ${userMessage} </p></div></div>`
      );

    setTimeout(responseFromBot, 1000);
  }
};

getMessageFromUser.addEventListener("keyup", event1);
btn1.addEventListener("click", event1);

function responseFromBot() {
  const messageFromUser = allMessageFromUser[allMessageFromUser.length - 1];
  const botMessageToUser = messageFromUser; // Test code. Currently, the bot is sending the same message that it received from the user
  document
    .getElementById("chatbot_sender")
    .insertAdjacentHTML(
      "beforeend",
      `<div class="chat incoming"><div class="details"><p> ${botMessageToUser} </p></div></div>`
    );
}
