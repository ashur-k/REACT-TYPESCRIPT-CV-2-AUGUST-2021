import React from 'react';

// Material UI and bootstrap Components import
import { Button } from '@material-ui/core';

// css imports
import './DownloadButton.css';

interface buttonInterface {
  text: string;
  icon: JSX.Element | null;
  downloadPDF: Function;
}

const DownloadButton = ({text, icon, downloadPDF}: buttonInterface) => {
  return (
    <Button 
      className='custom_btn'
      type="submit"
      endIcon={
        icon ? (
          <div className="btn_icon_container">{icon}</div>
          ): null }
      onClick={() => downloadPDF()}
      >
        <span className='btn_text'>{text}</span>
    </Button>
  )
}

export default DownloadButton