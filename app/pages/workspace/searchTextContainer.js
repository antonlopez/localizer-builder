// @flow
import React, { Component } from 'react';
import {zoomIn} from 'react-animations';
import styled, {keyframes} from 'styled-components';
import SearchFilter from './components/Search';


class SearchTextContainer extends Component<Props> {
  props: Props;
  constructor(props) {
    super(props);
    this.state = { value: ''};
  }

  render() {
    return (
      <div style = {{ position:'absolute', right:0, top:0, width:'20%', overflow:'auto'}}>
        <SearchFilter />

      </div>
    );
  }
}

// using styled component in production causes error Uncaught ReferenceError: _ref is not defined
const Container = styled.div`
position: absolute;
right: 0;
top:0;
width: 20%;
overflow: auto;
`;


export default SearchTextContainer;
