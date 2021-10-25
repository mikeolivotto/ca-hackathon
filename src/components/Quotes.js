import React, { useEffect, useState } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [name, setName] = useState('');
  const [quoteAuthorId, setQuoteAuthorId] = useState('');

  //   const authorName = quote.author.split(' ').join('+');
  //   console.log(quote.author.split(' ').join('+'));

  useEffect(() => {
    fetch(`https://www.breakingbadapi.com/api/quote/random`)
      .then((response) => response.json())
      .then((data) => {
        setQuote(data[0]);
        setName(data[0].author);
        console.log(name);
        return name;
      })
      .then((name) => console.log(name))
      .catch((error) => console.log(error));
  }, [name]);

  //   const getCharacterId = () => {
  //     console.log(quote.author);
  //     fetch(`https://www.breakingbadapi.com/api/characters?name=${quote.author.split(' ').join('+')}`)
  //       .then((response) => response.json())
  //       .then((data) => console.log(data));
  //     // console.log(quote.author);
  //   };

  return (
    <div>
      <h1>Quotes</h1>
      <h2>{quote.quote}</h2>
      <h3>{quote.author}</h3>
    </div>
  );
};

export default Quotes;
