var results = [0, 0, 0, 0, 0];
// 0 = min, 4 = max

var questions = [
  {
    text: "What is your hobby?",
    answers: [
      { text: "Computer games", category: 4 },
      { text: "Reading books", category: 0 },
      { text: "Drawing", category: 2 },
      { text: "Sports", category: 1 },
      { text: "Music", category: 3 },
    ],
  },
  {
    text: "How long have you been on internet?",
    answers: [
      { text: "2-3 years", category: 1 },
      { text: "4-7", category: 2 },
      { text: "10+", category: 4 },
    ],
  },
  {
    text: "Choose a popular video game please",
    answers: [
      { text: "Undertale/Deltarune", category: 2 },
      { text: "Bendy And The Ink Machine", category: 2 },
      { text: "Roblox", category: 4 },
      { text: "Minecraft", category: 3 },
      { text: "Doki Doki Literature Club!", category: 1 },
      { text: "Some else", category: 1 },
      { text: "I don't like video games", category: 0 },
    ],
  },
  {
    text: "Choose a music genre please",
    answers: [
      { text: "Pop", category: 3 },
      { text: "Rock", category: 2 },
      { text: "Jazz", category: 1 },
      { text: "Electronic", category: 4 },
      { text: "Hip Hop", category: 0 },
    ],
  },
  {
    text: "How many close friends do you have?",
    answers: [
      { text: "0", category: 4 },
      { text: "1 or 2", category: 3 },
      { text: "3 or 4", category: 2 },
      { text: "5 or 6", category: 1 },
      { text: "7+", category: 0 },
      { text: "Don't need them", category: 4 },
    ],
  },
];

var qnumber = 0;
var showDisclaimer = true;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("skyblue");

  if (showDisclaimer) {
    textSize(16);
    fill(0);
    text("DISCLAIMER: THIS GAME IS ALL JOKES AND NOT ACTUALLY A REAL THING", 10, 200);
    text("Press any key to continue...", 10, 230);
  } else if (qnumber >= questions.length) {
    var maxPoints = Math.max(...results);
    var maxIndex = results.indexOf(maxPoints);
    var resultMessages = [
      "Wow! You are not chronically online!",
      "Oh, well that's good!",
      "Ok buddy, you're on thin ice here!",
      "Oh.. umm. Maybe you should spend more time on air.",
      "Wow! You are chronically online!",
    ];
    var resultText = resultMessages[maxIndex];
    text(resultText, 10, 10);
  } else {
    text(questions[qnumber].text, 10, 10);
    for (var i = 0; i < questions[qnumber].answers.length; i++) {
      text(i + ": " + questions[qnumber].answers[i].text, 10, 100 + i * 20);
    }
  }
}

function keyPressed() {
  if (showDisclaimer) {
    showDisclaimer = false;
  } else if (qnumber < questions.length) {
    var answerIndex = parseInt(key);
    if (!isNaN(answerIndex) && answerIndex >= 0 && answerIndex < questions[qnumber].answers.length) {
      var cat = questions[qnumber].answers[answerIndex].category;
      results[cat] += 1;
      qnumber++;
    }
  }
}