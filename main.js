function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ynF09a9Iw/model.json', modelReady)
}

function modelReady(){
    classifier.classify( gotResults);
}

function gotResults(error, results) {
    if(error) {
    console.error(error);
}

else
{
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+
    results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
    (results[0].confidence * 100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("
    +random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color = "rgb("
    +random_number_r+","+random_number_g+","+random_number_b+")";


img1 = 'african-grey-parrot.png';
img2 = 'antelope.png';
img3 = 'ape.png';
img4 = 'chicken.png';
img5 = 'hedgehog.png';
img6 = 'horse.png';
img7 = 'komodo-dragon.png';
img9 = 'rooster.png';
img10 = 'tiger.png';
img11 = 'wolf.png';
img12 = 'background_noise.gif';

if(results[0].label == "African Grey Parrot")
{
    document.getElementById("Animal").src = img1;
}

else if(results[0].label == "Antelope")
{
    document.getElementById("Animal").src = img2;
}

else if(results[0].label == "Ape")
{
    document.getElementById("Animal").src = img3;
}

else if(results[0].label == "Chicken")
{
    document.getElementById("Animal").src = img4;
}

else if(results[0].label == "Hedgehog")
{
    document.getElementById("Animal").src = img5;
}

else if(results[0].label == "Horse")
{
    document.getElementById("Animal").src = img6;
}

else if(results[0].label == "Komodo-Dragon")
{
    document.getElementById("Animal").src = img7;
}

else if(results[0].label == "Rooster")
{
    document.getElementById("Animal").src = img9;
}

else if(results[0].label == "Tiger")
{
    document.getElementById("Animal").src = img10;
}

else if(results[0].label == "Wolf")
{
    document.getElementById("Animal").src = img11;
}

else
{
    document.getElementById("Animal").src = img12;
}
}
}