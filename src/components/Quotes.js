import React, { useEffect, useState } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch(`https://www.breakingbadapi.com/api/quote/random`)
      .then((response) => response.json())
      .then((data) => setQuote(data[0]))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Quotes</h1>
      <h2>{quote.quote}</h2>
      <h3>{quote.author}</h3>
    </div>
  );
};

export default Quotes;
