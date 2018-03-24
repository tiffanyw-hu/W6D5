import React from 'react';

class Clock extends React.Component{

  constructor() {
    super();
    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this);
  }

  render() {
    let Hours = this.state.time.getHours();
    let Minutes = this.state.time.getMinutes();
    let Seconds = this.state.time.getSeconds();

    Hours = (Hours < 10) ? `0${Hours}` : Hours;
    Minutes = (Minutes < 10) ? `0${Minutes}` : Minutes;
    Seconds = (Seconds < 10) ? `0${Seconds}` : Seconds;

    return (

      <div className="clock">
        <h1>Super Awesome Time Machine Clock</h1>
        <p className="time">{Hours} : {Minutes} : {Seconds}</p>
        <p>Date: {this.state.time.toDateString()}</p>
      </div>
    );
  }

  tick () {
    this.setState({time: new Date()});
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }


}

export default Clock;

  // setInterval(this.tick.bind(this), 1000);
