import React, {useState, useEffect} from "react";
import WarsCard from './WarsCard';
import styled from 'styled-components';
import axios from 'axios';

const DivContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

function WarsList() {
  const [char, setChar] = useState([]);
  
  
  useEffect(() => {
    axios
    .get(`https://swapi.co/api/people/`)
    .then(response => {
        const Chars = response.data.results
        setChar(Chars)
    })
    .catch(error => {
        console.log("server Error", error);
    })
  }, [])

  return (
    <DivContainer>
        {
      char.map((element, index) => {
        console.log(e);
        return (
        <WarsCard key={index} data={element} />
        )
      })}
    </DivContainer>
  )
}

export default WarsList;