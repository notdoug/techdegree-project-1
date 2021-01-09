/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// create and populate quotes array with 5 quotes

const quotes = [
  {quote: "And remember, each 10,000 mile journey begins with just one step.", source: "Laozi", citation: "Chinese Proverb"},
  {quote: "You only go around once, but if you play your cards right, once is enough.", source: "Frank Sinatra"},
  {quote: "Great Scott!", source: "Dr. Emmett Brown", year: 1985},
  {quote: "The hardest part of the day is all the stuff after I open my eyes in the morning.", source: "Jim Gaffigan", genre: "Comedian"},
  {quote: "I know Kung Fu.", source: "Neo", citation: "The Matrix"}
];

// [extra credit] create array for random background color

const colors = ["red", "orange", "yellow", "green", "blue", "purple", "black", "gray"];

// create and return a random number based on
// the number of elements in the quotes array

function getRandomQuote(array) {
  const randomNumber = Math.floor( Math.random() * array.length);
  return randomNumber;
}

// [extra credit] create and return a random item in an array,
// used for background color selection

function getRandomArrayItem(array) {
  const randomItem = Math.floor( Math.random() * array.length);
  return randomItem;
}

// The printQuote function takes the random number to select a quote,
// builds the HTML and inserts it into the page

function printQuote() {
  const selectedQuote = getRandomQuote(quotes);
    let htmlQuote = `
      <p class="quote"> ${quotes[selectedQuote].quote} </p>
      <p class="source"> ${quotes[selectedQuote].source}
      `;
  if (quotes[selectedQuote].citation !== undefined) {
      htmlQuote += `<span class="citation"> ${quotes[selectedQuote].citation} </span>`;
    } if (quotes[selectedQuote].year !== undefined) {
      htmlQuote += `<span class="year"> ${quotes[selectedQuote].year} </span>`;
    } if (quotes[selectedQuote].genre !== undefined) {
          htmlQuote += `<span class="genre">, ${quotes[selectedQuote].genre} </span>`;
    }
  htmlQuote += "</p>";
  document.getElementById('quote-box').innerHTML = htmlQuote;

// [extra credit] assign randomly selected color for background

  let color = getRandomArrayItem(colors);
  document.body.style.backgroundColor = colors[color];

}

printQuote();

// [extra credit] create a timing function to reload the page automatically

function pageRefresh(time) {
  window.setInterval(printQuote, time);
}

// call the pageRefresh function with a 10 second refresh interval

pageRefresh(10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
