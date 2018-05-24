import React, { Component } from 'react';
import styled from 'styled-components'
import FileSelector from '../../../components/FileSelector'

class StartMenu extends Component {
  render() {
    const {getFile, history } = this.props;
    return (
      <Container>
        <FileSelector getFile={getFile} history={history} />
        <p> Create project </p>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
`;

export default StartMenu;
