import React from 'react';
import Widgets from './widgets';

class Tabs extends React.Component {



  constructor (props) {
    super(props);
    this.state = {
      currentPane: 0
    };

    this.panes = props.panes;

  }

  render() {
    return (
      <h1>These are the tabs</h1>
    );
  }

}

export default Tabs;
