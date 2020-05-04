import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    Name: '',
    Number: "",
    Month: '',
    Year: ''
  }
  handleNameChange = (event) => {
    event.target.value = event.target.value.toUpperCase().replace(/[^a-zA-Z]+/g, " ")
    this.setState({ Name: event.target.value })

  }

  handleNumberChange = (event) => {
    event.target.value = event.target.value.replace(/[^0-9]+/g, " ")
    this.setState({ Number: event.target.value })

  }
  handleMonthChange = (event) => {
    event.target.value = event.target.value.replace(/[^0-9]+/g, " ")
    this.setState({ Month: event.target.value })
  }
  handleYearChange = (event) => {
    event.target.value = event.target.value.replace(/[^0-9]+/g, " ")
    this.setState({ Year: event.target.value })
  }

  render() {
    return (
      <div className="input">
        <input type="text" maxLength="16" onChange={this.handleNameChange} placeholder='Name' />
        <h2> {this.state.Name} </h2>
        <input type="text" maxLength="16" onChange={this.handleNumberChange} placeholder='Card Number' />
        <h2> {this.state.Number} </h2>
        <input type="text" maxLength="2" onChange={this.handleMonthChange} placeholder='MM' />
        <h2> {this.state.Month} </h2>
        <input type="text" maxLength="2" onChange={this.handleYearChange} placeholder='YY' />
        <h2> {this.state.Year} </h2>

      </div>


    )
  }
}

export default App
