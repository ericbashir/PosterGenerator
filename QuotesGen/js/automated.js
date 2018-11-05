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
    ctx.textAlign = 'center';

    // Top text font size
    fontSize = canvas.width * topTextSize;
    ctx.font = 'bold 80pt Calibri';

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
    ctx.fillText(bottomText.split('\n'), canvas.width / 2, canvas.height / 1.15 );
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

    var format = 'png';

    ctx = canvas.getContext('2d');

    canvas.width = canvas.height = 0;


    //QUOTE GENERATOR
    var quotes = [
        {
            quoteText:"THE BEST\nINVESTMENT\nON EARTH\nIS EARTH.", 
            quoteAuthor:"James Madison"
        },
        {
            quoteText:"BUY LAND.\nTHEY ARE NOT\nMAKING IT\nANYMORE",
            quoteAuthor:"Mark Twain"
        },
        {
            quoteText:"DON'T WAIT TO\nBUY A HOUSE.\nBUY A HOUSE\nTHEN WAIT",
            quoteAuthor:"Max Locux"
        },
        {
            quoteText:"I ALWAYS\nFELT VERY SECURE\nAND VERY SAFE\nWITH REAL ESTATE.\nREAL ESTATE ALWAYS\nAPPRECIATES.",
            quoteAuthor:"Ivana Trump"
        },
        {
            quoteText:"I WANT TO BE A\nSUCCESSFUL LANDLORD.\nI LIKE\nREAL ESTATE.",
            quoteAuthor:"Two Chainz"
        },
        {
            quoteText:"FIRST AND FOREMOST,\nI'M A REAL\nESTATE PERSON.\nAND THAT'S WHAT\nI LOVE THE MOST.",
            quoteAuthor:"Donald Trump"
        },
        {
            quoteText:"A FUNNY THING HAPPENS\nIN REAL ESTATE.\nWHEN IT COMES BACK,\nIT COMES BACK UP\nLIKE GANGBUSTERS.",
            quoteAuthor:"Barbara Corcoran"
        },
        {
            quoteText:"REAL ESTATE IS MY LIFE.\nIT IS MY DAY JOB,\nIF YOU WILL. BUT IT\nCONSUMES MY NIGHTS\nAND WEEKENDS, TOO.",
            quoteAuthor:"Ivanka Trump"
        },
        {
            quoteText:"I VIEW REAL ESTATE\nAS THE MOST INTRIGUING\nOPPORTUNITY THAT I'VE\nSEEN IN MY BUSINESS\nLIFETIME.",
            quoteAuthor:"Richard Rainwater"
        },
        {
            quoteText:"REAL ESTATE PROVIDES\nTHE HIGHEST RETURNS,\nTHE GREATEST VALUES\nAND THE LEAST RISK.",
            quoteAuthor:"Armstrong Williams"
        },
        {
            quoteText:"IT'S TANGIBLE,\nIT'S SOLID,\nIT'S BEAUTIFUL.\nIT'S ARTISTIC, FROM\nMY STANDPOINT, AND\nI JUST LOVE REAL ESTATE.",
            quoteAuthor:"Donald Trump"
        },
        {
            quoteText:"REAL ESTATE INVESTING,\nEVEN ON A VERY SMALL\nSCALE, REMAINS A TRIED\nAND TRUE MEANS OF\nBUILDING AN\nINDIVIDUAL'S WEALTH.",
            quoteAuthor:"Robert Kiyosaki"
        },
        {
            quoteText:"TO ME,\nI LOVE REAL ESTATE\nBECAUSE YOU CAN\nFEEL IT.",
            quoteAuthor:"Donald Trump"
        },
        {
            quoteText:"IN REAL ESTATE,\nTHREE THINGS ARE\nIMPORTANT;LOCATION,\nLOCATION,LOCATION.",
            quoteAuthor:"Damilola Agbede"
        },
        {
            quoteText:"REAL ESTATE CANNOT\nBE LOST OR STOLEN,\nIT IS ABOUT THE\nSAFEST INVESTMENT IN\nTHE WORLD.",
            quoteAuthor:"Franklin D. Roosevelt, U.S. President"
        },
        {
            quoteText:"NINETY PERCENT OF\nALL MILLIONAIRES\nBECOME SO THROUGH\nOWNING REAL ESTATE.",
            quoteAuthor:"Andrew Carnegie"
        },
        {
            quoteText:"MORE MONEY HAS\nBEEN MADE IN\nREAL ESTATE THAN IN\nALL INDUSTRIAL\nINVESTMENTS\nCOMBINED.",
            quoteAuthor:"Andrew Carnegie"
        },
        {
            quoteText:"THE WISE YOUNG MAN\nOR WAGE EARNER OF\nTODAY INVESTS HIS\nMONEY IN REAL ESTATE",
            quoteAuthor:"Andrew Carnegie"
        },
        {
            quoteText:"IF YOU DON’T OWN\nA HOME, BUY ONE.\nIF YOU OWN A HOME,\nBUY ANOTHER ONE.\nIF YOU OWN TWO HOMES,\nBUY A THIRD.",
            quoteAuthor:"John Paulson"
        },
        {
            quoteText:"THE BEST TIME TO\nBUY A HOME WAS \nFIVE YEARS AGO.\nNEXT BEST TIME\nIS TODAY",
            quoteAuthor:"Damilola Agbede"
        },
        {
            quoteText:"MOST OF\nTHE SUCCESSFUL\nPEOPLE I’VE KNOWN\nARE THE ONES WHO DO\nMORE LISTENING\nTHAN TALKING.",
            quoteAuthor:"Bernard Baruch"
        },
        {
            quoteText:"BUY LAND, THEY’RE\nNOT MAKING IT\nANY MORE.",
            quoteAuthor:"Mark Twain"
        },
        {
            quoteText:"DON’T WAIT TO BUY\nREAL ESTATE.\nBUY REAL ESTATE\nAND WAIT.",
            quoteAuthor:"Will Rogers"
        },
        {
            quoteText:"FIND OUT WHERE\nPEOPLE ARE MOVING TO\nAND BUY THE LAND\nBEFORE THEY GET THERE.",
            quoteAuthor:"Damilola Agbede"
        },
        {
            quoteText:"WE PUT THE\nCUSTOMER BACK\nIN CUSTOMER SERVICE.",
            quoteAuthor:"Damilola Agbede"
        },
        {
            quoteText:"THERE IS SOMETHING\nPERMANENT,AND\nSOMETHING EXTREMELY\nPROFOUND, IN\nOWNING A HOME",
            quoteAuthor:"Kenny Guinn"
        },
        {
            quoteText:"HOW YOU MAKE\nYOUR MONEY IS A LOT\nMORE IMPORTANT THAN\nHOW MUCH YOU MAKE",
            quoteAuthor:"Gary Vaynerchuk"
        },
        {
            quoteText:"USE WHAT YOU HAVE,\nTO GET WHAT YOU NEED,\nNOT WHAT YOU WANT.",
            quoteAuthor:"Aaron Norris"
        },
        {
            quoteText:"INNOVATION IS POWERFUL…\nEXECUTION IS\nWORSHIPPED.",
            quoteAuthor:"Eriks Draiska"
        },
        {
            quoteText:" YOU ARE NOT\nBUYING A HOME…\nYOU ARE BUYING\nA LIFESTYLE.",
            quoteAuthor:"Sarah F. Findel"
        },
        {
            quoteText:"WHAT YOU WILL BECOME,\nMUST FIRST BE\nSEEN IN YOUR\nMIND",
            quoteAuthor:"David Oyedepo"
        },
        {
            quoteText:"DO YOU SEE A MAN\nDILIGENT IN HIS\nBUSINESS? HE WILL\nSTAND BEFORE KINGS; HE\nWILL NOT STAND\nBEFORE MEAN MEN.",
            quoteAuthor:"Proverbs 22:29"
        },
        {
            quoteText:"IT IS INSANITY\nTO DO THE SAME\nTHING IN THE SAME\nWAY, AND EXPECT\nA DIFFERENT RESULT",
            quoteAuthor:"Albert Einstein"
        },
        {
            quoteText:"YOU DONT GROW\nBIG TO MANAGE\nWELL, YOU MANAGE\nWELL TO GROW BIG",
            quoteAuthor:"David Oyedepo"
        },
        {
            quoteText:"A MAN WITHOUT\nSELF CONTROL,\nIS LIKE A CITY\nWITH BROKEN WALLS.",
            quoteAuthor:"Proverbs 25:28"
        },
        {
            quoteText:"IT IS GOOD\nFOR A MAN THAT\nHE BEAR THE\nTHE YOKE\nIN HIS YOUTH",
            quoteAuthor:"Lamentations 3:27"
        }
    ]

    // HANDLER
    function _(x) {
        return document.getElementById(x);
    }


    // Generate button click listener
    generateBtn.addEventListener('click', function () {

        // RANDOM QUOTE NUMBER
        var quoteNumber = (Math.floor(Math.random() * quotes.length));

        topTextInput.value = quotes[quoteNumber].quoteText;
        bottomTextInput.value = quotes[quoteNumber].quoteAuthor;

        // GENERATE BACKGROUND
        // RANDOM BACKGROUND NUMBER
        var backgrounds = 15;
        var bkgNumber = (Math.floor(Math.random() * backgrounds)+1);
        _('bkg').src = 'js/backgrounds/'+bkgNumber+'.png';
        var bkg = _('bkg').src;

        // Read image as DataURL using the FileReader API
        let reader = new FileReader();
        reader.onload = function () {
            var img = new Image;
            img.src = bkg;

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