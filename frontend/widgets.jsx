import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';

const Panes = [
  {title: 'WON', content: 'I am number ONE!'},
  {title: 'PEACE', content: 'What it Dueces!'},
  {title: 'TREY', content: 'eight Trey gangsta!'}
];


class Root extends React.Component {


  render() {
    return (
      <div>
        <Clock/>
        <Tabs panes={Panes} />
      </div>
    );

  }
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root/>, root);
});
