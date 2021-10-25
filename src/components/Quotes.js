import React, { useEffect, useState } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [name, setName] = useState('');
  const [quoteAuthorId, setQuoteAuthorId] = useState('');


  useEffect(() => {
    fetch(`https://www.breakingbadapi.com/api/quote/random`)
      .then((response) => response.json())
      .then((data) => {
        setQuote(data[0]);
        setName(data[0].author);
      })
      .catch((error) => console.log(error));
  }, []);

  
  const authorName = name
  // console.log(authorName)

  if (name.length > 0) {
    fetch(`https://www.breakingbadapi.com/api/characters`)
    .then(response => response.json())
    .then(data => {})
    .catch(error => console.log(error))
  } 



  // console.log(name.split(" ").join('+'))

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
      {/* <p>{quoteAuthorId}</p> */}
    </div>
  );
};

export default Quotes;
