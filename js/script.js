// FSJS - Random Quote Generator
// 1. Create the quotes array of quote objects
// 2. Create the getRandomQuote function
// 3. Create the printQuote funtion
// 4. Create the changeBackgroundColor function
// 5. Create the autoPlay function
// 6. Create the stopAutoPlay function

// 1. Create the array of quote objects and name it quotes
let quotes = [
  // 0
  {
    quote: "You get fifteen democrats in a room, and you get twenty opinions.",
    source: "Senator Patrick Leahy",
    citation: "Keynote Speech",
    year: "1940"
  },
  // 1
  {
    quote: "Most people are good. They may not be saints, but they are good.",
    source: "Jimmy Wales",
    citation: "Keynote Speech",
    year: "2006"
  },

  //2
  {
    quote: "Angels dancing on the head of a pin dissolve into nothingness at the bedside of a dying child.",
    source: "Waiter Rant",
    citation: "Waiter Rant weblog",
    year: "2015"
  },

  //3
  {
    quote: "I like work: it fascinates me. I can sit and look at it for hours.",
    source: "Jerome K. Jerome ",
    citation: "Three Men in a Boat",
    year: "1889"
  },

  //4
  {
    quote: "Time is a cruel thief to rob us of our former selves. We lose as much to life as we do to death.",
    source: "Elizabeth Forsythe Hailey",
    citation: "A Woman of Independent Means",
    year: ""
  },

  //5
  {
    quote: "We have to have the money to do the work we want to do, as well as to keep a roof over our heads and food on the table.",
    source: "Elizabeth Aston",
    citation: "The True Darcy Spirit",
    year: "2006"
  },

  //6
  {
    quote: "Mama exhorted her children at every opportunity to 'jump at de sun.' We might not land on the sun, but at least we would get off the ground.",
    source: "Zora Neale Hurston",
    citation: "", //Dust Tracks on a Road
    year: ""
  }, //1942

  // 7
  {
    quote: "There are no secrets better kept than the secrets that everybody guesses.",
    source: "George Bernard Shaw ",
    citation: "", //Mrs. Warren's Profession
    year: "1983"
  },

  // 8
  {
    quote: "When a stupid man is doing something he is ashamed of, he always declares that it is his duty.",
    source: "George Bernard Shaw",
    citation: "Caesar and Cleopatra",
    year: "1901"
  }
];

// 2. Create the getRandomQuote function and name it getRandomQuote to get a certain quote.
function getRandomQuote(array) {
  let randQuote = array[Math.floor(Math.random() * (quotes.length))];
  return randQuote;
}
// 3. Create the printQuote funtion and name it printQuote
function printQuote() {
  let getQuote = getRandomQuote(quotes); // store a random quote from quotes object to getQuote
  let dispQuote = "<p class='quote'>" + getQuote.quote + "</p>"; //display quote value
  let dispInfo = "<p class='source'>" + getQuote.source; //display infomation of a quote
  if (!getQuote.citation) //Condition for citations
    dispInfo += "";
  else
    dispInfo += "<span class='citation'>" + getQuote.citation; + "</span>";
  if (!getQuote.year) // Condition for years
    dispInfo += "";
  else
    dispInfo += "<span class='year'>" + getQuote.year + "</span>";
  dispInfo += "</p>";
  document.getElementById('quote-box').innerHTML = dispQuote + dispInfo; //write the quote on the webpage
  changeBackgroundColor(); // call randBackgroundColor function to change background color
}

//4. Create the changeBackgroundColor function to change background color.
//Code adapted from https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
function changeBackgroundColor() {
  var rand_1 = Math.floor(Math.random() * 256);
  var rand_2 = Math.floor(Math.random() * 256);
  var rand_3 = Math.floor(Math.random() * 256);
  document.body.style.background = "rgb(" + rand_1 + "," + rand_2 + "," + rand_3 + ")";
}

let myTime;
//5. Create the autoPlay function to change quotes after a certain amount of time passes
function autoPlay() {
  myTime = setInterval((printQuote), 2000);
}

//6. Create the stopAutoPlay function to stop autoPlay function.
function stopAutoPlay() {
  clearInterval(myTime);
}

// This event listener will respond to "Show another quote" button clicks
// Everytime user clicks on the button, the "printQuote" function is called to display quotes
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
// When user licks on the Automatic button, the quoteTimer function is called
document.getElementById('loadQuoteAuto').addEventListener("click", autoPlay, false);
//When user click on the Stop Automatic, the quoteTimerStop function is called
document.getElementById('loadQuoteAutoStop').addEventListener("click", stopAutoPlay, false);
