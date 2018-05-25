// @flow
import React, { Component } from 'react';
import {zoomIn} from 'react-animations';
import styled, {keyframes} from 'styled-components';


class ImageContainer extends Component<Props> {
  props: Props;
  constructor(props) {
    super(props);
    this.state = { value: ''};
  }

  render() {
    return (
      <Container>
        <Img src={this.props.imagePath} border="0" alt={this.props.imagePath} />
      </Container>
    );
  }
}


const Container = styled.div`
`;

const Img = styled.img`
  height:70vh;
  width:65vw;
`;


export default ImageContainer;
