
Webcam.set({
    width:250,
    height:360,
    image_format:'png',
    png_quality:90

});
camera=document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_1" src=" '+data_uri+' "/>';
    
    });
}    
        
