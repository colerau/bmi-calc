import React from "react"

const DisplayBMI = (props) => {

  return (
    <>
      <br />
      <br />
      <h2>
        BMI: {props.bmi}
      </h2>
      <h3>
        <em>Status:</em> {props.status} 
      </h3>
      <h3>
        <em>Risk:</em> {props.risk}
      </h3>
      {/* <h3>
        <em>Ideal Weight For You:</em> {props.idealWeight}
      </h3> */}
    </>
  )
}

export default DisplayBMI