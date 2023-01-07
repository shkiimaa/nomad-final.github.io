const quotes = [
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Nelson Mandela',
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
  },
  {
    quote: 'If life were predictable it would cease to be life, and be without flavor.',
    author: 'Eleanor Roosevelt',
  },
  {
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: 'Oprah Winfrey',
  },
  {
    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: 'James Cameron',
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: 'John Lennon',
  },
];

const quoteContainer = document.querySelector('#quote p');
const author = document.querySelector('#author');
const random = Math.floor(Math.random() * quotes.length);

quoteContainer.innerHTML = `${quotes[random].quote} <figcaption></figcaption>`;
author.innerText = quotes[random].author;
