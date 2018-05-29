import React from 'react';
import styled from 'styled-components';

export default ({setImageUpload}) => {
  return (
    <Card onClick={()=>setImageUpload('addImage', true)}>
      <i className="material-icons">save</i>
      <p> Save </p>
    </Card>
  );
};

const Card = styled.div`
    position: absolute;
    right: 7px;
    color: #32CD32;
    text-align: center;
    height: 80%
    width: 6%;
    border-radius: .5vw;
    box-shadow: 0px 1px 2px 4px rgba(0,0,0,0.2);
    overflow: hidden;
    background-color: white;
    margin: 0 0 0 1vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
    transition: .3s ease-in-out;
    i {
      font-size:44px;
    }

    p {
      font-size: 13px;
      margin: 0 0 0 0 ;
    }

    :hover{
      background-color: #32CD32;
      color: black;
    }

`;
Card.displayName = 'Card';
