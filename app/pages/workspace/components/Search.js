import React, {Component} from 'react';
import styled from 'styled-components';
import SearchInput, {createFilter} from 'react-search-input';
import { connect } from 'react-redux';
import{ bindActionCreators } from 'redux';
import { workspaceUpdate, addToManifest } from '../../../actions';
import Emails from './Emails';
import language from './language.json';
import '../../../Assets/css/searchFilter.css';


class SearchFilter extends Component {
  constructor (props) {
    super(props)
    this.searchUpdated = this.searchUpdated.bind(this);
    this.addToFile = this.addToFile.bind(this);
  }

  componentWillMount() {
    let valuesToFilter = [];
    let keys= [];
    const {workspaceUpdate} = this.props;
    Object.keys(language).map(key => {
      valuesToFilter.push(language[key]);
      keys.push(key);
    });

    workspaceUpdate('valuesToFilter', valuesToFilter);
    workspaceUpdate('filteredWords', valuesToFilter);
    workspaceUpdate('devKeys', keys);

  }

  searchUpdated(searchTerm) {
    const{workspaceUpdate} = this.props;
    const filteredWords = this.props.valuesToFilter.filter( el => {
      return el.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

    workspaceUpdate('searchTerm', searchTerm);
    workspaceUpdate('filteredWords', filteredWords);

  }

  addToFile(word) {
    const{ devKeys, imagePath, addToManifest, valuesToFilter, manifest} = this.props;
    const index = valuesToFilter.indexOf(word);
    const key = devKeys[index];
    addToManifest(word, key, imagePath, manifest );

  }


  render() {
    //const{ keys, valuesToFilter, filteredWords } = this.state;
    const{ filteredWords } = this.props;

    return (
      <Container>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        {filteredWords.map((word, index) => {

          return (

            <Card onClick={() => this.addToFile(word, index)} className="from">{word}</Card>

          )
        })}
      </Container>
    )
  }


}

const Container = styled.div`
  background-color: transparent;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
    color: white;
    width: 90%;
    text-align: center;
    border-radius: .1vw;
    box-shadow: 0px 1px 2px 4px rgba(0,0,0,0.2);
    overflow: hidden;
    background-color: #2D2D2D;
    margin: .5vw 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
    transition: .3s ease-in-out;
    i {
      font-size:84px;
    }

    p {
      font-size: 16px;
      margin: 0 0 0 0 ;
    }

    :hover{
      background-color: #009900;
      color: white;
    }

    min-width: 158px;
`;
Card.displayName = 'Card';


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ workspaceUpdate, addToManifest }, dispatch);
};

const mapStateToProps = state => {
  const { valuesToFilter, searchTerm, filteredWords, devKeys, imagePath, ImageId, manifest } = state.workspace;
  return { valuesToFilter, searchTerm, filteredWords, devKeys, imagePath, ImageId, manifest };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter);
