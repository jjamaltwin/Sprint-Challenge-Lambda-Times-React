import React from 'react';
import PropTypes from 'prop-types';
const Tab = props => {


  return (
    <div                 //used ternary instead of if statements 
      className={props.tab === props.selectedTab ? "tab active-tab": "tab"}
      onClick={() => {
        props.selectTabHandler(props.tab);

     
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};


Tab.propTypes = {
  data: PropTypes.shape({
    selectTabHandler: PropTypes.func.isRequired,
    selectedTab: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired

  })
}

export default Tab;
