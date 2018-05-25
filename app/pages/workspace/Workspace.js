// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import{ bindActionCreators } from 'redux';
import {zoomIn} from 'react-animations';
import styled, {keyframes} from 'styled-components';
import { Link } from 'react-router-dom';
import { getFile, saveLanguage, deletePrevious, viewImage, workspaceUpdate } from '../../actions';
import ImageContainer from './ImageContainer';
import ImagePickerContainer from './ImagePickerContainer';
import SearchTextContainer from './searchTextContainer';
import UploadFiles from './components/UploadFiles';



type Props = {};

class Workspace extends Component<Props> {
  props: Props;
  constructor(props) {
    super(props);
    this.state = { value: ''};
  }


  render() {
    const { getFile, addImage, images, viewImage, imagePath, workspaceUpdate} = this.props;


    return (
      <Container>
        <div data-tid="container">
          <h2>WorkSpace</h2>
        </div>
        <WorkspaceContainer>
          {addImage ? <UploadFiles />
             :
          <div style={{display:'flex', marginLeft: '6vw'}}>
            <ImageContainer imagePath={imagePath} />
            <SearchTextContainer />
          </div> }

        </WorkspaceContainer>
        <PreviewContainer>
          <ImagePickerContainer workspaceUpdate={workspaceUpdate} images={images} viewImage={viewImage} />
        </PreviewContainer>

      </Container>
    );
  }
}

const WorkspaceContainer = styled.div`
  display: flex;
`;

const PreviewContainer = styled.div`
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: rgba(45,45,45,0.5);
   color: white;
   text-align: center;
   height: 155px;
`;

const zoomInAnimationHome = keyframes`${zoomIn}`;
const Container = styled.div`
h2{ font-size: 1em;
    position: absolute;
}
`;

const MenuContainer = styled.div`
    margin-top: 10%;

  `;


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getFile, saveLanguage, deletePrevious, viewImage, workspaceUpdate }, dispatch);
};

const mapStateToProps = state => {
  const { loading, language, filesExtracted, addImage, images, imagePath, imageId } = state.workspace;
  return { loading, language, filesExtracted, addImage, images, imagePath };
}

export default connect(mapStateToProps, mapDispatchToProps)(Workspace);
