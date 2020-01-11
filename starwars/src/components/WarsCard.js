import React from 'react';
import styled from 'styled-components';

const DivContainer = styled.div`
  background: #264653;
  width: 16%;
  margin: 1.5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  color: lightgrey;
  font-weight:450;
  box-shadow: 0px 0 0.5rem;
  border: 2px solid black;
  opacity: 0.6;
 
`;

const Header = styled.h3`
  font-size: 1.1rem;
`;

const Paragraph = styled.p`
  text-decoration: underline;
  font-size: 1.2rem;
`;


const WarsCard = props => {
  console.log('this is props', props);
  return (
    <DivContainer>
      <Header>Character Name: {props.data.name}</Header>
      <Paragraph>Mass: {props.data.mass}</Paragraph>
      <Paragraph>Height: {props.data.height}</Paragraph>
      <Paragraph>Hair Color: {props.data.hair_color}</Paragraph>
      <Paragraph>Skin Color: {props.data.skin_color}</Paragraph>
      <Paragraph>Eye Color: {props.data.eye_color}</Paragraph>
      <Paragraph>Birth Year: {props.data.birth_year}</Paragraph>
      <Paragraph>Gender: {props.data.gender}</Paragraph>
    </DivContainer>
  )
}

export default WarsCard;