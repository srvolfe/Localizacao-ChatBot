document.querySelector('#record').onclick = () => {
  let stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
    token: token,
    outputElement: "#ouput"
  });
  
  stream.on("error", err => {
    console.log(err);
  });

  document.querySelector("#stop").onclick = () => {
    stream.stop();
  }
  
}