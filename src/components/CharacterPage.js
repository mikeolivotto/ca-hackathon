import React, {useEffect, useState} from 'react';
import {Link, useRouteMatch, Switch, Route, useParams} from 'react-router-dom'


const CharacterPage = () => {

  let { char_id } = useParams();
  const [character, setCharacter ] = useState({})

  useEffect(() => {
    fetch(`https://www.breakingbadapi.com/api/characters/${char_id}`)
      .then(response => response.json())
      .then(body => setCharacter(body))
      .catch(error => console.log(error))
    }, [])
    
    console.log("kjhgstgjkbwerghk")

  return (
    <div>
      <h1>
        {character}
      </h1>

    </div>

  )
};

export default CharacterPage;
