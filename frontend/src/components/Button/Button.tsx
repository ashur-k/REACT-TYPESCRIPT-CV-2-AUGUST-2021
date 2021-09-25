import React from 'react';

// Material UI and bootstrap Components import
import { Button } from '@material-ui/core';

// css imports
import './Button.css';

interface buttonInterface {
  text: string;
  icon: JSX.Element | null;
}

const CustomButton = ({text, icon}: buttonInterface) => {
  return (
    <Button 
      className='custom_btn'
      type="submit"
      endIcon={
        icon ? (
          <div className="btn_icon_container">{icon}</div>
          ): null }>
        <span className='btn_text'>{text}</span>
    </Button>
  )
}

export default CustomButton