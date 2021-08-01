import { Button } from '@material-ui/core'
import React from 'react';
import './Button.css';

interface buttonInterface {
  text: string;
  icon: any | null;
}


const CustomButton = ({text, icon}: buttonInterface) => {
  return (
    <Button 
      className='custom_btn' 
      endIcon={
        icon ? (
          <div className="btn_icon_container">{icon}</div>
          ): null }>
        <span className='btn_text'>{text}</span>
    </Button>
  )
}

export default CustomButton