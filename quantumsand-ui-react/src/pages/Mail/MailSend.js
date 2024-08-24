import React from 'react';
import CloseIcon from "@mui/icons-material/Close";
import { Button } from '@mui/material';
import "./MailSend.css";

export default function MailSend() {
  function sendMail(e) {
    e.preventDefault();
    console.log("Send email");
  }

  return (
    <div className="mail__sendMail">
      <div className="mail__sendMailHeader">
        <h3>New Message</h3>
        <CloseIcon className="mail__sendMailClose" />
      </div>

      <form>
        <input placeholder="To" type="text" />
        <input placeholder="Subject" type="text" />
        <input placeholder="Message..." type="text" className="mail__sendMailMessage" />

        <div className="mail__sendMailOptions">
          <Button className="mail__sendMailSend"
            onClick={sendMail.bind(this)}
            variant="contained"
            color="primary"
            type="submit">Send</Button>
        </div>
      </form>
    </div>
  )
}

