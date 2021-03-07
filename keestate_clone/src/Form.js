import { TextField ,Button } from '@material-ui/core'
import React from 'react'
import "./Form.css"

function Form() {
    return (
    <div className="contact-form">
      <h3 className="section-title">Contact us</h3>
      <TextField>
          <p>Message (Required)</p>
          <textarea></textarea>
          <p>* Required fields must be filled</p>

      </TextField>
      <Button>Send</Button>
    </div>
    )
}

export default Form
