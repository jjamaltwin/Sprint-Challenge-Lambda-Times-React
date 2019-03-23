import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import { tabData } from '../../data';

const Tabs = props => {
 
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
      
    
        {props.tabs.map((tab, i) => <Tab key={i} selectTabHandler ={props.selectTabHandler} selectedTab ={props.selectedTab} tab={tab}/>)
            
          }
      </div>
    </div>
  );
};


  Tabs.propTypes = {
    data: PropTypes.shape({
      tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
      selectedTab: PropTypes.string.isRequired,
      selectTabHandler: PropTypes.func.isRequired
    })
  }



export default Tabs;
