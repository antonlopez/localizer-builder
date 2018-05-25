import React from 'react';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import BorderButton from './BorderButton';
import { PlusButton } from 'react-svg-buttons';


export default class FileSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { getFile, history } = this.props;
    const pathToZip = e.target.files[0].path;
    getFile(pathToZip, history);
  }



  render() {
    return (
      <Container>
        <Label>
          <Input type="file" accept=".json" onChange={(e) => this.handleChange(e)} />
          <BorderButton icon="build" color="#FFF" height="200px" width="214px" iconSize="448px" border="4px" radius="20px" hoverColor="#32CD32" />
        </Label>
      </Container>
    );
  }
}

const fadeInAnimation = keyframes`${fadeIn}`;

const Container = styled.div`
  margin-top: 20px;
  animation: ${fadeInAnimation} .3s ease-in;
  background-color: transparent;
`;

const Input = styled.input`
    display: none;
`;
const Label = styled.label`
    padding: 12px 24px;
    cursor: pointer;
    background-color: transparent;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    justify-content: space-around;
    border-radius: 2px;


    i{
      font-size: 44px;
    }


`
