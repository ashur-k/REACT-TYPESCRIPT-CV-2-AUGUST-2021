// Material UI Icons import
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WorkIcon from '@material-ui/icons/Work';
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';


// React Icons import
import { IoLogoReact, IoLogoPython, IoLogoVercel, IoLogoFirebase } from "react-icons/io5";
import { FiDatabase } from "react-icons/fi";
import { FaGit } from "react-icons/fa";
import { GrHeroku } from "react-icons/gr";
import { SiNetlify } from "react-icons/si";
import { VscChecklist } from "react-icons/vsc";


const getIcon = (icon:string | undefined): JSX.Element => {
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
    case 'IoLogoPython':
      return (<IoLogoPython />);
    case 'CloseIcon':
      return (<CloseIcon />);
    case 'IoLogoReact':
      return (<IoLogoReact />);
    case 'FiDatabase':
      return (<FiDatabase />);
    case 'FaGit':
      return (<FaGit />);
    case 'GrHeroku':
      return (<GrHeroku />);
    case 'IoLogoVercel':
      return (<IoLogoVercel />);
    case 'IoLogoFirebase':
      return (<IoLogoFirebase />);
    case 'SiNetlify':
      return (<SiNetlify />);
    case 'SendIcon':
      return (<SendIcon />);
    case 'SearchIcon':
      return (<SearchIcon />);
    case 'VscChecklist':
      return (<VscChecklist className="SVG"/>);
    case 'DescriptionIcon':
      return (<DescriptionIcon className="SVG"/>);
    default:
      return (<small>No Icon Found</small>);
  }
};

export default getIcon;