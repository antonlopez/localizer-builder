import React, {Component} from 'react';
import styled from 'styled-components';
import SearchInput, {createFilter} from 'react-search-input';
import { connect } from 'react-redux';
import{ bindActionCreators } from 'redux';
import { workspaceUpdate } from '../../../actions';
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
    Object.keys(language).map(key => {
      valuesToFilter.push(language[key]);
      keys.push(language);
    });

    this.props.workspaceUpdate('valuesToFilter', valuesToFilter);
    this.props.workspaceUpdate('filteredWords', valuesToFilter);

    //this.setState({ valuesToFilter, keys });
  }

  searchUpdated(searchTerm) {
    const{workspaceUpdate} = this.props;
    const filteredWords = this.props.valuesToFilter.filter( el => {
      return el.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

    workspaceUpdate('searchTerm', searchTerm);
    workspaceUpdate('filteredWords', filteredWords);
  }

  addToFile(word){

  }


  render() {
    //const{ keys, valuesToFilter, filteredWords } = this.state;
    const{ valuesToFilter, filteredWords } = this.props;

    return (
      <Container>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        {filteredWords.map(word => {

          return (

              <Card onClick={()=> this.addToFile(word)} className="from">{word}</Card>

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
  return bindActionCreators({ workspaceUpdate }, dispatch);
};

const mapStateToProps = state => {
  const { valuesToFilter, searchTerm, filteredWords } = state.workspace;
  return { valuesToFilter, searchTerm, filteredWords };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter);
