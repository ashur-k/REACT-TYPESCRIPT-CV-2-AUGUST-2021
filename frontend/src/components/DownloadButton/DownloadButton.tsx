import React from "react";

// Material UI and bootstrap Components import
import { Button } from "@mui/material";

// css imports
import "./DownloadButton.css";

interface buttonInterface {
  text: string;
  icon: React.ReactElement | null;
  downloadPDF: () => void;
}

const DownloadButton = ({ text, icon, downloadPDF }: buttonInterface) => {
  return (
    <Button
      className="custom_btn"
      type="submit"
      endIcon={icon ? <div className="btn_icon_container">{icon}</div> : null}
      onClick={() => downloadPDF()}
    >
      <span className="btn_text">{text}</span>
    </Button>
  );
};

export default DownloadButton;
