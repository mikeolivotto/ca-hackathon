import React, { useEffect, useState } from 'react';

const Quotes = () => {
  document.title = "Quotes - Broken Bad"
  const [quote, setQuote] = useState('');

  const getQuote = () => {
    fetch(`https://www.breakingbadapi.com/api/quote/random`)
      .then((response) => response.json())
      .then((data) => {
        setQuote(data[0]);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getQuote();
  }, []);

  const quoteStyle = {
    fontSize: '1.7em'
  }

  const author = {
    fontSize: '1.2em'
  }

  return (
    <div  className="ui container">
      <h1>Quotes from Breaking Bad</h1>
      <div className="ui message">
        <p style={quoteStyle}><i>{quote.quote}</i></p>
        <p style={author}><b>- {quote.author}</b></p>
      </div>

      <input type="button" onClick={getQuote} value="Get Quote" className="ui button primary" />
    </div>
  );
};

export default Quotes;
