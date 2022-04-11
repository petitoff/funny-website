const getMessageFromUser = document.getElementById("inputMessage");
getMessageFromUser.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    const userMessage = document.getElementById("inputMessage").value; // Retrieving messages from the user
    document.getElementById("inputMessage").value = ""; // Clearing the input from the user

    document
      .getElementById("chatbot_sender")
      .insertAdjacentHTML(
        "beforeend",
        `<div class="chat outgoing"><div class="details"><p> ${userMessage} </p></div></div>`
      );
  }
});
