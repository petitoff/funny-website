function responseFromBotW() {
  const botMessageToUser =
    pattern.welcomeMessage ?? errorMessage.errorFindingTheMessage;

  animationDivMovForBotMessage(botMessageToUser);
}
responseFromBotW();
