let topTextInput, bottomTextInput, topTextSizeInput, bottomTextSizeInput, imageInput, generateBtn, canvas, ctx;

function generateMeme (img, topText, bottomText, topTextSize, bottomTextSize) {
    let fontSize;

    // Size canvas to image
    canvas.width = img.width;
    canvas.height = img.height;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw main image
    ctx.drawImage(img, 0, 0);

    // Text style: white with black borders
    ctx.fillStyle = 'white';
    //    ctx.strokeStyle = 'black';
    ctx.textAlign = 'center';

    // Top text font size
    fontSize = canvas.width * topTextSize;
//    var fontStyle = 'bold 195pt '+fontChoice;
    ctx.font = 'bold 95pt Calibri';

    // Draw top text
    ctx.textBaseline = 'top';
    topText.split('\n').forEach(function (t, i) {
        ctx.fillText(t, canvas.width / 2, (i * fontSize));
    });

    // Bottom text font size
    fontSize = canvas.width * bottomTextSize;
    ctx.font = 'bold 30pt Calibri';

    // Draw bottom text
    ctx.textBaseline = 'bottom';
    ctx.fillText(bottomText.split('\n'), canvas.width / 2, canvas.height / 1.2 );
}

function init () {
    // Initialize variables
    topTextInput = document.getElementById('top-text');
    bottomTextInput = document.getElementById('bottom-text');
    topTextSizeInput = document.getElementById('top-text-size-input');
    bottomTextSizeInput = document.getElementById('bottom-text-size-input');
    imageInput = document.getElementById('image-input');
    generateBtn = document.getElementById('generate-btn');
    canvas = document.getElementById('meme-canvas');
    $imgs = document.getElementById('imgs');
    $view = document.getElementById('view');
    fontChoice = document.getElementById('fontChoice').value;

    var format = 'png';


    ctx = canvas.getContext('2d');

    canvas.width = canvas.height = 0;

    // Default/Demo text
    topTextInput.value = 'THE BEST\nINVESTMENT\nON EARTH\nIS EARTH.';
    bottomTextInput.value = 'DAMI AGBEDE';

    // Generate button click listener
    generateBtn.addEventListener('click', function () {
        // Read image as DataURL using the FileReader API
        let reader = new FileReader();
        reader.onload = function () {
            let img = new Image;
            img.src = reader.result;
            var quoteText = '\n\n' + topTextInput.value;
            generateMeme(img, quoteText, bottomTextInput.value, topTextSizeInput.value, bottomTextSizeInput.value);
        };
        reader.readAsDataURL(imageInput.files[0]);
    });

    $view.onclick = function (e) {
        var type = format,
            w = canvas.width,
            h = canvas.height;
        $imgs.appendChild(Canvas2Image.convertToImage(canvas, w, h, type))
    }

}

init();

//    DOWNLOAD
//var download = document.getElementById('img-download');
//
//download.addEventListener('click', prepareDownload, false);
//
//function prepareDownload() {
//    var data = canvas.toDataURL();
//    download.href = data;
//}