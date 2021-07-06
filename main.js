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
    if(animagus == "Take my selfie."){
        console.log("take my selfie");
        audio();
    }
}

function audio(){
    var synth = window.speechSynthesis;

    var speak_data = "Your Selfie Will Be Taken In 2 Sec";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function(){
        take_snapshot();
        save();
    }, 2000);
}

camera = document.getElementById("camera");

Webcam.set({
    width: 350,
    height: 350,
    image_format: 'jpeg',
    jpeg_quality: 100
});

function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';    })
};

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}