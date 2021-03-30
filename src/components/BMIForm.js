import React from 'react'
import axios from 'axios'

class BMIForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      height: '',
      weight: '',
      age: '',
      sex: '' 
    };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      url: 'https://bmi.p.rapidapi.com/',
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        'x-rapidapi-host': 'bmi.p.rapidapi.com'
      },
      data: {
        weight: {value: '146', unit: 'lb'},
        height: {value: '5-10', unit: 'ft-in'},
        sex: 'm',
        age: '24'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log("response.data:", response.data);
    }).catch(function (error) {
      console.error(error);
    });

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} name="name" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default BMIForm