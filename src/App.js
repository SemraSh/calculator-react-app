import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator'

class App extends Component {
  state = {
    activeTemplate: 'light'
  }

  changeTemplate = (event) => {
    event.preventDefault()
    const newTemplate = event.target.value;
    this.setState({ activeTemplate: newTemplate })
  }

  render() {
    const templates = ['light', 'pinky', 'dark', 'shy']
    return (
      <div className={`App `}>
        <div className={`${this.state.activeTemplate} gradient`}></div>
        <div className='template-div'>
          <p>SELECT TEMPLATE</p>
          <select value={this.state.activeTemplate} onChange={this.changeTemplate}>
            {templates.map((template, i) => (
              <option key={`background-templates-${template}`} >{template}</option>
            ))}
          </select>
        </div>
        <Calculator />
      </div>
    );
  }
}

export default App;
