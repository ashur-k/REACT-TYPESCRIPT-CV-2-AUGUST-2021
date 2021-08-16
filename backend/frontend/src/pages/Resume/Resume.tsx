import React, { useState, useEffect} from 'react';


// Redux imports
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { listAboutme } from '../../redux/actions/resumeActions';


// Material UI and bootstrap Components import
import { Grid, Typography } from '@material-ui/core';

// Custom components import
import WorkExpreience from '../../components/WorkExpreience/WorkExpreience';
import Education from '../../components/Education/Education';
import Skills from '../../components/Skills/Skills';
import SkillsCapabilities from '../../components/SkillsCapabilities/SkillsCapabilities';
import SiteTitle from '../../components/SiteTitle/SiteTitle';

// css imports
import './Resume.css';

import { ResumeDataInterface } from '../../utils/types'
import { Alert, Spinner } from 'react-bootstrap';



const Resume = () => {
  const dispatch = useDispatch()
  const {error, loading, aboutme} = useTypedSelector((state) => state.resumeList);
  

  const [aboutMeText, setAboutMeText] = useState<string>("");
  const [education, setEducation] = useState<ResumeDataInterface["education_details"] | any>([]);
  const [work, setWork] = useState<ResumeDataInterface["work_expereinces"] | any>([]);
  const [skills, setSkills] = useState<ResumeDataInterface["skills"] | any>([]);
  const [skillCapabilities, setSkillCapabilities] = useState<ResumeDataInterface["skill_capabilities"] | any>([]);


  useEffect(() => {
    dispatch(listAboutme())
  }, [dispatch]);

  useEffect(() => {
    aboutme.map((me) => (
      // eslint-disable-next-line no-sequences
      setAboutMeText(me.about_me),
      setEducation(me.education_details),
      setWork(me.work_expereinces),
      setSkills(me.skills),
      setSkillCapabilities(me.skill_capabilities)
    ))
  }, [aboutme]);
 
  return (
    <div>
      {
        loading ? 
        (<Grid container className="section pb_45 pt_45">
          <Spinner animation="border" variant="danger" />
        </Grid>)
        : error ?
        (
        <Grid container className="section pb_45 pt_45">
          <Alert variant='danger'>
            {error} 
          </Alert>
        </Grid>)
        :(
        <div>

       
      {/* About Me */}
      <Grid container className="section pb_45 pt_45">
        { loading &&  (<Spinner animation="border" variant="danger" />)}
        <SiteTitle title='About Me' />

        <Grid item xs={12}>        
          <Typography variant='body2' className="aboutme_text">
            {aboutMeText}
          </Typography>      
        </Grid>
      </Grid>

      {/* Education and Experience */}
      <Grid container className="section pb_45">
        <SiteTitle title='Resume' />
        <Grid item xs={12}>
          <Grid container className='resume_timeline'>
            {/* Education  */}
            <Grid item sm={12} md={6}>    
              { loading &&  (<Spinner animation="border" variant="danger" />)}        
              <Education education_details={education}/>
            </Grid>
            {/* Experience */}
            <Grid item sm={12} md={6}>
              { loading &&  (<Spinner animation="border" variant="danger" />)}
              <WorkExpreience work_expereinces={work} /> 
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Services */}
      <Grid container className="section pb_45">        
        <SiteTitle title='My Skills' />
        <Grid item xs={12}>
        { loading &&  (<Spinner animation="border" variant="danger" />)}
          <Skills skills={skills}/>
        </Grid>
      </Grid>
      {/* Skills */}
       
      <SkillsCapabilities skillCapabilities={skillCapabilities} />          
      </div>
        )
      } 
    </div>
  )
}

export default Resume