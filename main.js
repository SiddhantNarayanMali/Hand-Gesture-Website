Predict = "";

Webcam.set(

    {

        width: 350,
        height:300,
        image_format: "png",
        png_quality: 90

    }

);

Webcam.attach("#webcam");

function capture()
{
    Webcam.snap(function(data)
    {
        document.getElementById("result").innerHTML = "<img src='"+data+"' id= 'image'>";
    });
    
}

console.log("ml5 version = "+ml5.version);

library = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ZWGNOgGed/model.json",check);

function check()
{
    console.log("Model Loded!");
}

function utter()
{
    var Api = window.speechSynthesis;
    Prediction = "The Prediction is "+Predict;
    

    var utter = new SpeechSynthesisUtterance(Prediction);
    Api.speak(utter);
}

function result()
{
    Images = document.getElementById("image");
    library.classify(Images, errororresult);
}

function errororresult(error,result)
{
    if (error)
    {
        console.error(error);
    }

    else
    {
        console.log(result);
        document.getElementById("ges1").innerHTML = result[0].label;
        Predict = result[0].label;

        utter()

        if (Predict = "Thumps Up")
        {
            document.getElementById("ture1").innerHTML = "&#128077;";
        }

        else if (Predict == "Right")
        {
            document.getElementById("ture1").innerHTML = "&#128073;";
        }

        else if(Predict == "Yo")
        {
            document.getElementById("ture1").innerHTML = "&#129304;";
        }

        else if (Predict == "Super")
        {
            document.getElementById("ture1").innerHTML = "&#128076;";
        }

        else if(Predict == "Rock")
        {
            document.getElementById("ture1").innerHTML = "&#9994;";
        }
        
    }
}
