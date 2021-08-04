import WebOutlinedIcon from '@material-ui/icons/WebOutlined';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import AndroidIcon from '@material-ui/icons/Android';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WorkIcon from '@material-ui/icons/Work';
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';


const getIcon = (icon: string): JSX.Element => {
  switch(icon) {
    case 'WorkIcon':
      return (<WorkIcon />);
    case 'SchoolRoundedIcon':
      return (<SchoolRoundedIcon />);
    case 'FacebookIcon':
      return (<FacebookIcon />);
    case 'TwitterIcon':
      return (<TwitterIcon />);
    case 'LinkedInIcon':
      return (<LinkedInIcon />);
    case 'GitHubIcon':
      return (<GitHubIcon />);
    case 'WebOutlinedIcon':
      return (<WebOutlinedIcon />);
    case 'AddIcCallIcon':
      return (<AddIcCallIcon />);
    case 'AndroidIcon':
      return (<AndroidIcon />);
    default:
      return (<small>No Icon Found</small>);
  }
};

export default getIcon;