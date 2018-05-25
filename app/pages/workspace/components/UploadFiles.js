import React from 'react';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import{ bindActionCreators } from 'redux';
import{ addImage } from '../../../actions';

class UploadFiles extends React.Component {

  onDrop(images) {

    images.map(img => this.props.addImage(img));
  }

  render() {
    return (
      <Section>
        <Container>
          <Dropzone style={{ height: '500px', width: '700px', display:'flex', justifyContent:'center', alignItems:'center', flexDirection: 'column' }} onDrop={this.onDrop.bind(this)}>
            <P>Try dropping some images here, or click to select images to upload.</P>
              <I className="material-icons">add_photo_alternate</I>
          </Dropzone>
        </Container>
      </Section>
    );
  }
}
const Container = styled.div`
  height: 500px;
  width: 700px;
  border:4px dotted white;
  text-align: center;
  cursor: pointer;
  transition: .3s ease-in-out;
  :hover {
    color: #32CD32;
    border:4px dotted #32CD32;
  }
`;

const I = styled.i`
   font-size:138px;
`;

const P = styled.p`
width: 80%;
`;



const Section = styled.section`
  height: 100%;
  width: 100%;
  margin-top: 4%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addImage }, dispatch);
};


export default connect(null, mapDispatchToProps )(UploadFiles);
