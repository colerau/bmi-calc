import React from 'react'
import axios from 'axios'

class BMIForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      feet: '',
      inches: '',
      weight: '',
      age: '',
      sex: 'f' 
    };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let feetInches = `${this.state.feet}-${this.state.inches}`

    const options = {
      method: 'POST',
      url: 'https://bmi.p.rapidapi.com/',
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        'x-rapidapi-host': 'bmi.p.rapidapi.com'
      },
      data: {
        weight: {value: this.state.weight, unit: 'lb'},
        height: {value: feetInches, unit: 'ft-in'},
        sex: this.state.sex,
        age: this.state.age
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });

  }

  render() {
    return (
      <>
        <h1>
          BMI Calculator
        </h1>

        <form onSubmit={this.handleSubmit}>

          <label>
            Weight (lb):
            <input type="text" value={this.state.weight} name="weight" onChange={this.handleChange} />
          </label>
          <br />

          <label>
            Feet:
            <input type="text" value={this.state.feet} name="feet" onChange={this.handleChange} />
          </label>

          &nbsp;

          <label>
            Inches:
            <input type="text" value={this.state.inches} name="inches" onChange={this.handleChange} />
          </label>
          <br />

          <label>
            Age:
            <input type="text" value={this.state.age} name="age" onChange={this.handleChange} />
          </label>
          <br />

          <label>
            Sex:
            <select value={this.state.sex} name="sex" onChange={this.handleChange}>
              <option value="f">Female</option>
              <option value="m">Male</option>
            </select>
          </label>
          <br />
          <br />

          <input type="submit" value="Calculate" />
        </form>
      </>
    );
  }
}

export default BMIForm