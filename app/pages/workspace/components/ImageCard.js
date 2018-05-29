import React from 'react';
import styled from 'styled-components';

export default ({url, index,  viewImage}) => {
  return (
    <Card onClick={()=> viewImage(index, url)}>
      <Img src={url} border="0" alt={url} />
    </Card>
  );
};

const Card = styled.div`
    text-align: center;
    height: 80%
    width: 8vw;
    border-radius: .5vw;
    box-shadow: 0px 1px 2px 4px rgba(0,0,0,0.2);
    overflow: hidden;
    background-color: #1B2633;
    margin: 0 0 0 1vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
    transition: .3s ease-in-out;
    min-width: 90px;


    :hover{

    }
`;
Card.displayName = 'Card';

const Img = styled.img`
  height:10vh;
  width:100%;
`;
