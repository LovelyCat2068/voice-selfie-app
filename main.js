var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start_button(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);

    animagus = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = animagus;
}