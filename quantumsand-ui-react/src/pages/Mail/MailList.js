import React from 'react';
import { Checkbox, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MailListSection from "./MailListSection";
import MailRow from "./MailRow";
import "./MailList.css";

export default function MailList({ emails }) {
  return (
    <div className="mail__list">
      <div className="mail__listSettings">
        <div className="mail__listSettingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mail__listSettingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail__listSections">
        <MailListSection Icon={InboxIcon} title="Primary" color="red" selected />
        <MailListSection Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <MailListSection Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>
      <div className="mail__listList">
        {emails.map((mail, index) => (
          <MailRow key={mail.id} title={mail.title}
            subject={mail.subject}
            description={mail.description}
            time={mail.time}
          />
        ))}
      </div>
    </div>
  )
}
