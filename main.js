// Quot List
var quoteList = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    writer: "― Oscar Wilde",
  },
  {
    quote:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    writer: "― Marilyn Monroe",
  },
  {
    quote: "“A friend is someone who knows all about you and still loves you.”",
    writer: "― Elbert Hubbard",
  },
  {
    quote:
      "“I am so clever that sometimes I don't understand a single word of what I am saying.”",
    writer: "― Oscar Wilde",
  },
  {
    quote:
      "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
    writer: "― Maya Angelou",
  },
  {
    quote:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
    writer: "― Robert Frost",
  },
];


var quote = document.getElementById("quote");
var quoteWriter = document.getElementById("quote-writer");



// Random number
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var currentNum = -1;

function randomQuote() {
  var random;
  do {
    random = randomNum(0, 5);
  } while (random == currentNum);
  currentNum = random;
  quote.innerHTML = quoteList[random].quote;
  quoteWriter.innerHTML = quoteList[random].writer;
}
