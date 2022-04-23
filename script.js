// global consts
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

// global vars
var pattern = [1, 3, 6, 2, 2, 5, 4, 4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000; // how long to hold each clue's light/sound
var guessTime = 7000;
var guessInterval;
var timerTimeout;

function patternGenerator() {
  for (let i = 0; i < 8; i++) {
    pattern[i] = Math.floor(Math.random() * 6 + 1);
  }
  console.log(pattern);
}

function startGame() {
  // initialize game vars
  patternGenerator();
  guessTime = 7000;
  clueHoldTime = 1000;
  drawTimer();
  progress = 0;
  gamePlaying = true;
  // hide the Start button, show the Stop button
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("endBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  clearInterval(guessInterval);
  clearTimeout(timerTimeout);
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("endBtn").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    timerTimeout = setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  context.resume();
  let delay = nextClueWaitTime;
  for (let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  clueHoldTime -= 100;
  setTimeout("guessInterval = setInterval(guessTimer, 280)", delay);
}

function guessTimer() {
  if (guessTime >= 280 && gamePlaying) {
    guessTime -= 280;
  } else if (!gamePlaying) {
    return;
  } else {
    loseGame();
    guessTime = 7000; 
  }
  drawTimer();
  console.log("guessTime: " + guessTime);
}

function drawTimer() {
  let lightning = String.fromCodePoint(0x26A1);
  document.getElementById("lightningTimer").innerText = lightning.repeat(guessTime / 280);
}

function guess(btn) {
  console.log("user guessed " + btn);
  if (!gamePlaying) {
    return;
  }
  if (guessTime != 0) {
    if (btn != pattern[guessCounter]) {
      loseGame();
      clearInterval(guessInterval);
    } else if (guessCounter != progress) {
      guessCounter ++;
    } else if (progress < pattern.length - 1) {
      progress++;
      clearInterval(guessInterval);
      clearTimeout(timerTimeout);
      guessTime = 7000;
      playClueSequence();
    } else {
      winGame();
      clearInterval(guessInterval);
      clearTimeout(timerTimeout);
    }
  } else {
    loseGame();
    clearInterval(guessInterval);
  }
  drawTimer();
}

function loseGame() {
  stopGame();
  alert("Game over. You lost!");
}

function winGame() {
  stopGame();
  alert("Good job, you won!");
}

function changeVolume() {
  volume = document.getElementById("volumeRange").value;
}

// Sound Synthesis Functions
const freqMap = {
  1: 200,
  2: 261.6,
  3: 329.6,
  4: 392,
  5: 466.2,
  6: 528
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
