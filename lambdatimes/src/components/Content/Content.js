import React, { Component } from 'react';
import Tabs from './Tabs';
import Cards from './Cards';
import { tabData, cardData } from '../../data';
import Carousel from '../Carousel/Carousel';




export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState ({tabs: tabData, cards: cardData})
  }

  changeSelected = tab => {
    this.setState({selected:tab})
  };

  filterCards = () => {
    if(this.state.selected === "all") {
      return cardData;
    }else{
      return cardData.filter(card => card.tab === this.state.selected);
    }
  };

  render() {
    return (
      <div className="content-container">
        {
        
        }
        <Tabs tabs={this.state.tabs} selectedTab={this.state.tabs} selectTabHandler={this.changeSelected} />
        <Carousel/>
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
