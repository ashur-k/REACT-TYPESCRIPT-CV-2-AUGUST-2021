// Material UI Icons import
import type { ReactElement } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WorkIcon from "@mui/icons-material/Work";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";

// React Icons import
import { IoLogoReact, IoLogoPython, IoLogoVercel, IoLogoFirebase } from "react-icons/io5";
import { FiDatabase } from "react-icons/fi";
import { FaGit } from "react-icons/fa";
import { GrHeroku } from "react-icons/gr";
import { SiNetlify } from "react-icons/si";
import { VscChecklist } from "react-icons/vsc";
import { FaBookReader } from "react-icons/fa";
import { MdAspectRatio } from "react-icons/md";
import { BsFillTerminalFill } from "react-icons/bs";
import { DiReact } from "react-icons/di";
import { BiCodeBlock } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { VscRocket } from "react-icons/vsc";
import { SiKeycloak } from "react-icons/si";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { SiJira } from "react-icons/si";
import { SiMailchimp } from "react-icons/si";
import { SiHashicorp } from "react-icons/si";
import LanIcon from "@mui/icons-material/Lan";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { SiDocker } from "react-icons/si";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import BoltIcon from "@mui/icons-material/Bolt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GroupsIcon from "@mui/icons-material/Groups";

import ApiIcon from "@mui/icons-material/Api";
import WidgetsIcon from "@mui/icons-material/Widgets";
import DnsIcon from "@mui/icons-material/Dns";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SecurityIcon from "@mui/icons-material/Security";
import CloudIcon from "@mui/icons-material/Cloud";

const getIcon = (icon: string | undefined): ReactElement => {
  switch (icon) {
    case "WorkIcon":
      return <WorkIcon className="SVG" />;
    case "SchoolRoundedIcon":
      return <SchoolRoundedIcon className="SVG" />;
    case "FacebookIcon":
      return <FacebookIcon className="SVG" />;
    case "TwitterIcon":
      return <TwitterIcon className="SVG" />;
    case "LinkedInIcon":
      return <LinkedInIcon className="SVG" />;
    case "GitHubIcon":
      return <GitHubIcon className="SVG" />;
    case "IoLogoPython":
      return <IoLogoPython className="SVG" />;
    case "CloseIcon":
      return <CloseIcon />;
    case "IoLogoReact":
      return <IoLogoReact />;
    case "FiDatabase":
      return <FiDatabase className="SVG-PRIMARY-COLOR" />;
    case "FaGit":
      return <FaGit />;
    case "GrHeroku":
      return <GrHeroku />;
    case "IoLogoVercel":
      return <IoLogoVercel />;
    case "IoLogoFirebase":
      return <IoLogoFirebase />;
    case "SiNetlify":
      return <SiNetlify />;
    case "SendIcon":
      return <SendIcon />;
    case "SearchIcon":
      return <SearchIcon />;
    case "VscChecklist":
      return <VscChecklist className="SVG" />;
    case "DescriptionIcon":
      return <DescriptionIcon className="SVG" />;
    case "FaBookReader":
      return <FaBookReader className="SVG" />;
    case "MdAspectRatio":
      return <MdAspectRatio className="SVG-PRIMARY-COLOR" />;
    case "BsFillTerminalFill":
      return <BsFillTerminalFill className="SVG" />;
    case "DiReact":
      return <DiReact className="SVG" />;
    case "BiCodeBlock":
      return <BiCodeBlock className="SVG-PRIMARY-COLOR" />;
    case "FaPython":
      return <FaPython className="SVG-PRIMARY-COLOR" style={{ fontSize: "20px" }} />;
    case "VscRocket":
      return <VscRocket className="SVG-PRIMARY-COLOR" />;
    case "SiKeycloak":
      return <SiKeycloak className="SVG-PRIMARY-COLOR" style={{ fontSize: "20px" }} />;
    case "DashboardIcon":
      return <DashboardIcon className="SVG-PRIMARY-COLOR" style={{ fontSize: "20px" }} />;
    case "ConfirmationNumberIcon":
      return <ConfirmationNumberIcon className="SVG-PRIMARY-COLOR" />;
    case "SiJira":
      return <SiJira className="SVG-PRIMARY-COLOR" style={{ fontSize: "20px" }} />;
    case "SiMailchimp":
      return <SiMailchimp className="SVG-PRIMARY-COLOR" style={{ fontSize: "20px" }} />;
    case "SiHashicorp":
      return <SiHashicorp className="SVG-PRIMARY-COLOR" style={{ fontSize: "20px" }} />;
    case "LanIcon":
      return <LanIcon className="SVG-PRIMARY-COLOR" style={{ fontSize: "20px" }} />;
    case "QueryStatsIcon":
      return <QueryStatsIcon className="SVG-PRIMARY-COLOR" style={{ fontSize: "20px" }} />;
    case "EngineeringIcon":
      return <EngineeringIcon className="SVG-PRIMARY-COLOR" style={{ fontSize: "20px" }} />;
    case "SiDocker":
      return <SiDocker className="SVG-PRIMARY-COLOR" style={{ fontSize: "20px" }} />;
    case "RocketLaunchIcon":
      return <RocketLaunchIcon className="SVG-PRIMARY-COLOR" />;
    case "BoltIcon":
      return <BoltIcon className="SVG-PRIMARY-COLOR" />;

    case "CheckCircleIcon":
      return <CheckCircleIcon className="SVG-PRIMARY-COLOR" />;
    case "GroupsIcon":
      return <GroupsIcon className="SVG-PRIMARY-COLOR" />;
    case "ApiIcon":
      return <ApiIcon className="SVG-PRIMARY-COLOR" />;

    case "WidgetsIcon":
      return <WidgetsIcon className="SVG-PRIMARY-COLOR" />;

    case "DnsIcon":
      return <DnsIcon className="SVG-PRIMARY-COLOR" />;

    case "AccountTreeIcon":
      return <AccountTreeIcon className="SVG-PRIMARY-COLOR" />;

    case "SecurityIcon":
      return <SecurityIcon className="SVG-PRIMARY-COLOR" />;

    case "CloudIcon":
      return <CloudIcon className="SVG-PRIMARY-COLOR" />;
    default:
      return <small>No Icon Found</small>;
  }
};

export default getIcon;
