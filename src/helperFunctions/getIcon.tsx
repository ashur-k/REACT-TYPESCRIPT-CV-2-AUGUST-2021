import WebOutlinedIcon from '@material-ui/icons/WebOutlined';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import AndroidIcon from '@material-ui/icons/Android';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WorkIcon from '@material-ui/icons/Work';
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import CloseIcon from '@material-ui/icons/Close';

const getIcon = (icon: string): JSX.Element => {
  switch(icon) {
    case 'WorkIcon':
      return (<WorkIcon className="SVG" />);
    case 'SchoolRoundedIcon':
      return (<SchoolRoundedIcon className="SVG" />);
    case 'FacebookIcon':
      return (<FacebookIcon className="SVG" />);
    case 'TwitterIcon':
      return (<TwitterIcon className="SVG" />);
    case 'LinkedInIcon':
      return (<LinkedInIcon className="SVG" />);
    case 'GitHubIcon':
      return (<GitHubIcon />);
    case 'WebOutlinedIcon':
      return (<WebOutlinedIcon className="SVG" />);
    case 'AddIcCallIcon':
      return (<AddIcCallIcon className="SVG" />);
    case 'AndroidIcon':
      return (<AndroidIcon className="SVG" />);
    case 'CloseIcon':
      return (<CloseIcon />);
    default:
      return (<small>No Icon Found</small>);
  }
};

export default getIcon;