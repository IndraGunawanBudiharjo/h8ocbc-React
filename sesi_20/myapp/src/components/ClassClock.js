import React, { Component } from 'react';

class ClassClock extends Component {
  constructor() {
    super()
    this.state = {
      date: new Date()
    }
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick.bind(this), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    return (
      <div className="App">
        <div className="card text-white bg-dark mb-3">
          <div className="card-header">Class Component</div>
          <div className="card-body">
            <h5 className="card-title">Today: {this.state.date.toLocaleDateString()}</h5>
            <p className="card-text">{this.state.date.toLocaleTimeString()}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassClock;