import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import{ bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import BorderButton from '../../components/BorderButton';
import { generateFile } from '../../actions';

class ZipFile extends Component {

generateZip () {
    const {generateFile, manifest} = this.props;
    generateFile(manifest);


}

render() {

  const {zipGenerated, fileAt} = this.props;
  console.log(zipGenerated);

    return (
      <Container>

{ zipGenerated ?
  <Container>
  <Link to="/workspace"><i className="material-icons"> arrow_left</i> Back </Link>
  <ButtonContainer>
    <BorderButton onClick={() => console.log('')} icon="home" color="#FFF" height="28vh" width="18vw" iconSize="148px" border="4px" radius="10px" hoverColor="#32CD32" />
     <p> Your file is in desktop!</p>
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
  return bindActionCreators({ generateFile }, dispatch);
};

const mapStateToProps = state => {
  const { generatingFile, manifest } = state.workspace;
  const { zipGenerated } = state.zipFile;
  return { generatingFile, manifest, zipGenerated };
}

export default connect(mapStateToProps, mapDispatchToProps)(ZipFile);
