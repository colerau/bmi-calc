import React, { Component } from 'react'
import axios from 'axios'

class FetchBMI extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {

    const options = {
      method: 'POST',
      url: 'https://bmi.p.rapidapi.com/',
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-key': '2233086461mshebbd5afefb4c79ap13b401jsndb3cf3fc7335',
        'x-rapidapi-host': 'bmi.p.rapidapi.com'
      },
      data: {
        weight: {value: '85.00', unit: 'kg'},
        height: {value: '170.00', unit: 'cm'},
        sex: 'm',
        age: '24',
        waist: '34.00',
        hip: '40.00'
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
      <>
      </>
    );
  }
}

export default FetchBMI;