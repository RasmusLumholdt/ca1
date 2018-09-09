const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0];
var interval;
var timerRunning = false;
var texts = ["I don't want to talk to you no more, you empty-headed animal food trough wiper! I fart in your general direction! Your mother was a hamster and your father smelt of elderberries!",
 "Society is commonly too cheap. We meet at very short intervals, not having had time to acquire any new value for each other. We meet at meals three times a day, and give each other a new taste of that old musty cheese that we are.",
"Don't tell me it's not worth trying for. You can't tell me it's not worth dying for. You know it's true. Everything I do, I do it for you.",
"G.I. Joel's peers can question his ability, world championship or not, and laugh at his physical tics, but it's hard not to admire his quirky devotion.",
"There are places I'll remember all my life, though some have changed. Some forever, not for better. Some have gone and some remain. All these places have their moments with lovers and friends I still can recall.",
"The whole point was to find a way to practice nuclear war without destroying ourselves. To get the computers to learn from mistakes we couldn't afford to make. Except I never could get Joshua to learn the most important lesson.",
"I'd ask you about love, you'd probably quote me a sonnet. But you've never looked at a woman and been totally vulnerable. Known someone that could level you with her eyes, feeling like God put an angel on earth just for you.",
"Messes of men in farmer poverty; not much for monks but we pretend to be. Share a silent meal and a pot of chamomile, gypsies like us should be stamped in solidarity. Hold you in my fond but distant memory while waiting for the Mother Hen to gather me who regretfully wrote.",
"It was hard to toss things I had once thought were valuable enough to spend money on and just as hard to separate myself from worn and ragged clothing I had for sentimental reasons. Once I'd passed through the first few tough decisions, though, the momentum had been built and it was a breeze.",
"It looks like your little adventure has reached its penultimate chapter. I suppose that means it's time for me to go look for real work... Whoa! I can't believe I just said that! No, seriously... I gotta find that treasure..."
];
// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time){
    if(time <= 9){
        time = "0" + time;
    }

    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer(){
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Match the text entered with the provided text on the page:
function spellCheck(){
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0, textEntered.length);
    
    if(textEntered == originText){
        clearInterval(interval);
        testWrapper.style.borderColor = "#429890";
    }else {
        if(textEntered == originTextMatch){
            testWrapper.style.borderColor = "#65CCF3";
        }else {
            testWrapper.style.borderColor = "#E95D0F";
        }
    }
}

// Start the timer:
function start(){
    let textEnteredLength = testArea.value.length;
    if(textEnteredLength === 0 && !timerRunning){
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }
}

// Reset everything:
function reset(){
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    timerRunning = false;

    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";
    newText();
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);

// Random text chooser
function newText(){
    let rnd = Math.floor(Math.random() * (9 - 0 + 1));

    document.querySelector("#origin-text p").innerHTML = texts[rnd];
}