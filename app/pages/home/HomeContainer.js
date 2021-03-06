// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import{ bindActionCreators } from 'redux';
import {zoomIn} from 'react-animations';
import styled, {keyframes} from 'styled-components';
import { Link } from 'react-router-dom';
import { getFile, saveLanguage, deletePrevious } from '../../actions';
import StartMenu from './components/StartMenu';



type Props = {};

class Home extends Component<Props> {
  props: Props;
  constructor(props) {
    super(props);
    this.state = { value: ''};
  }


  render() {
    const { getFile, language, history, loading, filesExtracted } = this.props;


    return (
      <Container>
        <div data-tid="container">
          <h2>Localizer build tool</h2>
        </div>
        <MenuContainer>
          <StartMenu getFile={getFile} history={history} />
        </MenuContainer>
      </Container>
    );
  }
}

const zoomInAnimationHome = keyframes`${zoomIn}`;
const Container = styled.div``;

const MenuContainer = styled.div`
    margin-top: 10%;

  `;


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getFile, saveLanguage, deletePrevious }, dispatch);
};

const mapStateToProps = state => {
  const { loading, language, filesExtracted } = state.workspace;
  return { loading, language, filesExtracted };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
