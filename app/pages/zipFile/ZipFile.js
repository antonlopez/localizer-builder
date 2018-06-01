import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import{ bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import BorderButton from '../../components/BorderButton';
import { generateFile, reset } from '../../actions';
const {shell} = require('electron');

class ZipFile extends Component {

generateZip () {
    const {generateFile, manifest, projectName} = this.props;
    generateFile(manifest, projectName);


}

openFile = () => {
   shell.showItemInFolder(this.props.fileLocation);
  }

  goHome = () => {
    this.props.reset();
    this.props.history.push('./');
  }

render() {

  const {zipGenerated, fileAt} = this.props;


    return (
      <Container>

{ zipGenerated ?
  <Container>
  <Link to="/workspace"><i className="material-icons"> arrow_left</i> Back </Link>
  <ButtonContainer>
    <BorderButton onClick={this.goHome} icon="home" color="#FFF" height="28vh" width="18vw" iconSize="148px" border="4px" radius="10px" hoverColor="#32CD32" />
     <p>Your file has been generated on Desktop!</p>
     <p style={{color:'#32CD32', fontSize:'20px', cursor:'pointer'}} onClick= {this.openFile}>
          <u style = {{textDecoration: 'none', borderBottom: '1px solid #00BFF' }}>Open File <i class="material-icons">description</i></u>
        </p>
  </ButtonContainer>
</Container>
  :
  <Container>
    <Link to="/workspace"><i className="material-icons"> arrow_left</i> Back </Link>
    <ButtonContainer>
      <BorderButton onClick={() => this.generateZip()} icon="done_all" color="#FFF" height="28vh" width="18vw" iconSize="148px" border="4px" radius="10px" hoverColor="#32CD32" />
       <p> You are ready to generate the zip file!</p>
    </ButtonContainer>

  </Container>

   }
  </Container>

    );
  }

}

const Container = styled.div`
display: flex;
flex-direction: column;
height: 80vh;
`;

const ButtonContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  text-align: center;

`;

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ generateFile, reset }, dispatch);
};

const mapStateToProps = state => {
  const { generatingFile, manifest, projectName } = state.workspace;
  const { fileLocation } = state.zipFile;
  const { zipGenerated } = state.zipFile;
  return { generatingFile, manifest, zipGenerated, projectName, fileLocation };
}

export default connect(mapStateToProps, mapDispatchToProps)(ZipFile);
