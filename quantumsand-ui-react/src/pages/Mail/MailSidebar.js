import React from 'react';
import { Button, IconButton } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
import MailSidebarOption from './MailSidebarOption';
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import "./MailSidebar.css";

export default function MailSidebar() {
  return (
    <div className="mail__sidebar">
      <Button startIcon={<AddIcon />} fontSize="large"
        className="mail__sidebarCompose">Compose</Button>

      <MailSidebarOption Icon={InboxIcon} title="Inbox" number={50} selected />
      <MailSidebarOption Icon={StarIcon} title="Starred" number={45} />
      <MailSidebarOption Icon={AccessTimeIcon} title="Snoozed" number={45} />
      <MailSidebarOption Icon={LabelImportantIcon} title="Important" number={45} />
      <MailSidebarOption Icon={NearMeIcon} title="Sent" number={45} />
      <MailSidebarOption Icon={NoteIcon} title="Drafts" number={45} />
      <MailSidebarOption Icon={ExpandMoreIcon} title="More" number={45} />

      <div className="mail__sidebarFooter">
        <div className="mail__sidebarFooterIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}
