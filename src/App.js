import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      deadline: 'August 18, 2018',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({deadline: 'January 25, 2018'})
  }

  render () {
    return (
      <div className='App'>
        <div className='App-title'>ASEAN 50 years countdown to { this.state.deadline }</div>
        <div>
          <div className='Clock-days'>150 Days</div>
          <div className='Clock-hours'>17 Hours</div>
          <div className='Clock-minutes'>3 Minutes</div>
          <div className='Clock-seconds'>55 Seconds</div>
        </div>
        <div>
          <input placeholder='new date' onChange={event => console.log('event', event.target.value)}/>
          <button onClick={() => this.changeDeadline()}>Submit</button>
        </div>
      </div>      
    )
  }
}

export default App