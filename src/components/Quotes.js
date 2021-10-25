import React, { useEffect, useState } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [name, setName] = useState('');

  const getQuote = () => {
    fetch(`https://www.breakingbadapi.com/api/quote/random`)
      .then((response) => response.json())
      .then((data) => {
        setQuote(data[0]);
        setName(data[0].author);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div>
      <h1>Quotes</h1>
      <h2>{quote.quote}</h2>
      <h3>{quote.author}</h3>
      <input type="button" onClick={getQuote} value="Get Quote" />
    </div>
  );
};

export default Quotes;
