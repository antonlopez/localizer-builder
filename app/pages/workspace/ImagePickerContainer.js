  // @flow
import React, { Component } from 'react';
import {zoomIn} from 'react-animations';
import styled, {keyframes} from 'styled-components';
import AddImageCard from './components/AddImageCard';
import ImageCard from './components/ImageCard';
import Draggable from 'react-draggable';



class ImageContainer extends Component<Props> {
    props: Props;
    constructor(props) {
      super(props);
      this.state = {
         value: '',
         x: 0,
         controlledPosition: {
         x: 0, y: 0,
         },
       };

       this.handleDrag = this.handleDrag.bind(this);
    }


    handleDrag(e, ui) {
      const { x } = this.state;  // counter is used to display one notification of deleting

      this.setState({
        x: x + ui.deltaX,
        controlledPosition: {x: x + ui.deltaX, y: 0},
      });
    }

    adjustXPos(e) {
      this.setState({ controlledPosition: {x: 0, y: 0}});
    }


    render() {
      const { images, viewImage, workspaceUpdate } = this.props;



      return (
        <Container>
          <AddImageCard setImageUpload={workspaceUpdate} />
          <Draggable onDrag={this.handleDrag} position={this.state.controlledPosition} axis="x" bounds={{ top: 0, bottom: 0 }} >
          <div style={{width:'500px', display:'flex'}}>


          {images ? images.map((img, index) =>  <ImageCard viewImage={viewImage} key={index} index={index} url={img.path} />) : ''}
          </div>
          </Draggable>

        </Container>
      );
    }
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;



`;


export default (ImageContainer);
