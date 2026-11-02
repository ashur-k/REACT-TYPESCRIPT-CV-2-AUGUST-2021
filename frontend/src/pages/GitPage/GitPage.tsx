import React from "react";

import { Grid } from "@mui/material";

import SiteTitle from "../../components/SiteTitle/SiteTitle";

import GitApi from "../../components/GitHubApi/GitApi";
import "./GitPage.css";

function GitPage() {
  document.title = "Ash's Codes";

  return (
    // Contact
    <Grid container className="section pb_45 pt_45">
      <Grid container spacing={3} size={12}>
        {/* Git Information */}
        <Grid className="top_30" size={12}>
          <SiteTitle title="Git Information" />
          <GitApi />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default GitPage;
