// const mgToUser = "Testowy";
const node = document.getElementsByClassName("inputMessage")[0];
node.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    const userMessage = document.getElementById("inputMessage").value;
    document.getElementById("inputMessage").value = "";

    document
      .getElementById("chatbot_sender")
      .insertAdjacentHTML(
        "beforeend",
        `<div class="chat outgoing"><div class="details"><p> ${userMessage} </p></div></div>`
      );
  }
});
