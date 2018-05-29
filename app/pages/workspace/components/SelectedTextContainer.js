// @flow
import React, { Component } from 'react';
import {zoomIn} from 'react-animations';
import styled, {keyframes} from 'styled-components';



class SelectedTextContainer extends Component<Props> {
  props: Props;
  constructor(props) {
    super(props);

  }



  render() {

    return (
      <Container>
        <Card>
           Continue
        </Card>



      </Container>
    );
  }
}

const Container = styled.div`
width: 80%;
height: 100%;
display: flex;
align-items: center;
flex-wrap: wrap;

`;

const Card = styled.div`
    text-align: center;
    min-height:3vh;
    width: 8vw;
    border-radius: .5vw;
    box-shadow: 0px 1px 1px 2px rgba(0,0,0,0.2);
    overflow: hidden;
    background-color: #32CD32;
    margin: 1vw 0 0 1vw;
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


export default SelectedTextContainer;
