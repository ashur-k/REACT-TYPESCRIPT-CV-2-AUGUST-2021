import React, { useState, useEffect } from "react";

// Redux imports
import { useAppDispatch } from "../../hooks/useActions";
import { listAboutme } from "../../redux/actions/resumeActions";

// Typescript imports
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ResumeDataInterface } from "../../utils/types";

// Material UI and bootstrap Components import
import { Grid, Typography } from "@mui/material";
import { Alert, Spinner } from "react-bootstrap";

// Custom components import
import WorkExpreience from "../../components/WorkExpreience/WorkExpreience";
import Education from "../../components/Education/Education";
import Skills from "../../components/Skills/Skills";
import SkillsCapabilities from "../../components/SkillsCapabilities/SkillsCapabilities";
import SiteTitle from "../../components/SiteTitle/SiteTitle";
import Contact from "../../components/Contact/Contact";

// css imports
// @ts-ignore CSS imports are resolved by the bundler.
import "./Resume.css";

const Resume = () => {
  const dispatch = useAppDispatch();
  const { error, loading, aboutme } = useTypedSelector((state) => state.resumeList);

  // React UseStates
  const [aboutMeText, setAboutMeText] = useState<string>("");

  const [education, setEducation] = useState<ResumeDataInterface["education_details"]>([]);
  const [work, setWork] = useState<ResumeDataInterface["work_expereinces"]>([]);
  const [skills, setSkills] = useState<ResumeDataInterface["skills"]>([]);
  const [skillCapabilities, setSkillCapabilities] = useState<
    ResumeDataInterface["skill_capabilities"]
  >([]);

  // React UseEffects
  useEffect(() => {
    dispatch(listAboutme());
    document.title = "Ash's Resume";
  }, [dispatch]);

  useEffect(() => {
    if (!aboutme || aboutme.length === 0) {
      return;
    }

    const me = aboutme[0];

    setAboutMeText(me.about_me ?? "");
    setEducation(me.education_details ?? []);
    setWork(me.work_expereinces ?? []);
    setSkills(me.skills ?? []);
    setSkillCapabilities(me.skill_capabilities ?? []);
  }, [aboutme]);

  return (
    <div>
      {loading ? (
        <Grid container className="section pb_45 pt_45">
          <Spinner animation="border" variant="danger" />
        </Grid>
      ) : error ? (
        <Grid container className="section pb_45 pt_45">
          <Alert variant="danger">{error}</Alert>
        </Grid>
      ) : (
        <div>
          {/* About Me */}
          <Grid container className="section pb_45 pt_45">
            {loading && <Spinner animation="border" variant="danger" />}
            <SiteTitle title="About Me" />

            <Grid size={12}>
              <Typography variant="body2" className="aboutme_text">
                {aboutMeText}
              </Typography>
            </Grid>
          </Grid>

          {/* Education and Experience */}
          <Grid container className="section pb_45">
            <SiteTitle title="Resume" />
            <Grid size={12}>
              <Grid container className="resume_timeline">
                {/* Education */}
                <Grid
                  size={{
                    sm: 12,
                    md: 6,
                  }}
                >
                  {loading && <Spinner animation="border" variant="danger" />}
                  <Education education_details={education} />
                </Grid>

                {/* Experience */}
                <Grid
                  size={{
                    sm: 12,
                    md: 6,
                  }}
                >
                  {loading && <Spinner animation="border" variant="danger" />}
                  <WorkExpreience work_expereinces={work} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Services */}
          <Grid container className="section pb_45">
            <SiteTitle title="My Skills" />
            <Grid size={12}>
              {loading && <Spinner animation="border" variant="danger" />}
              <Skills skills={skills} />
            </Grid>
          </Grid>

          {/* Skills */}
          <SkillsCapabilities skillCapabilities={skillCapabilities} />

          <Contact />
        </div>
      )}
    </div>
  );
};

export default Resume;
