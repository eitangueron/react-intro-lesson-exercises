import React, { Component } from 'react';
import './App.css';

class App extends Component {
  getStuff() {
    return <h1>Stuff: "Wild function'ed text"</h1>
  }

  getMorningGreeting() {
    return <div>Good Morning!</div>
  }

  getEveningGreeting() {
    return <div>Good Evening!</div>
  }

  showCompany(name, revenue) {
    return <div id={name}>{name} makes {revenue} every year</div>
  }

  getClassName(temperature) {
    let status
    if (temperature < 15) {
      status = 'freezing'
    } else if (temperature >= 15 && temperature <= 30) {
      status = 'fair'
    } else {
      status = 'hell-scape'
    }

    return <div id="weatherBox" class={status}></div>
  }

  // "freezing" - if the temperature is below 15
  // "fair" - if the temperature is between 15 and 30
  // "hell-scape" - otherwise

  render() {

    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }
    ]

    return (
      <div>
        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 1</h4 >
          <div className="exercise" id="spotcheck-1">
            {this.getStuff()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 2</h4>
          <div className="exercise" id="spotcheck-2">
            {new Date().getHours() < 12 ? this.getMorningGreeting() : this.getEveningGreeting()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 3</h4>
          <div className="exercise" id="spotcheck-3">
            {[this.getMorningGreeting(), this.getEveningGreeting(), 'Some text']}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {companies.map(companie => this.showCompany(companie.name, companie.revenue))}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 2</h4>
          <div className="exercise" id="ex-2">
            {this.getClassName(20)}
          </div>
        </div>
      </div>
    )
  }
}

export default App;



