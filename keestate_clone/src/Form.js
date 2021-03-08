import React from 'react'
import "./Form.css"
import { Button ,Input,IconButton } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import SchoolSharpIcon from '@material-ui/icons/SchoolSharp';
import PhoneEnabledTwoToneIcon from '@material-ui/icons/PhoneEnabledTwoTone';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';




function Form() {
    return (
    <div className="form">
      <div className ="form__name">
        <IconButton>
          <PersonIcon />
        </IconButton>
        <Input defaultValue="" inputProps={{ 'aria-label': 'description','placeholder':"Name*" }} />
      </div>
      <div className ="form__collegename">
        <IconButton>
          <SchoolSharpIcon />
        </IconButton>
        <Input defaultValue="" inputProps={{ 'aria-label': 'description','placeholder':"College Name*" }} />
      </div>
      <div className ="form__phone">
        <IconButton>
          <PhoneEnabledTwoToneIcon />
        </IconButton>
        <Input defaultValue="" inputProps={{ 'aria-label': 'description','placeholder':"Phone Number*" }} />

      </div>
      <div className ="form__email">
        <IconButton>
          <MailOutlineRoundedIcon />
        </IconButton>
        <Input defaultValue="" inputProps={{ 'aria-label': 'description','placeholder':"Email*" }} />

      </div>
      <div className ="form__button">
          <Button className="button">Submit</Button>
      </div>
    </div>
    )
}

export default Form
