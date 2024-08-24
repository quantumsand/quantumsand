import React from 'react';
import MailHeader from "./MailHeader";
import MailSidebar from "./MailSidebar";
import MailList from "./MailList";
import "./Mail.css";

export default function Mail({ logo, avatar, emails = [
  {
    id: 1,
    title: "Akio",
    subject: "Dojo",
    description: "Are you coming to the dojo tomorrow?",
    time: "11pm"
  },
  {
    id: 2,
    title: "Xenia",
    subject: "Hey!",
    description: "Did you make progress on the dinar/dirham wallet?",
    time: "10pm"
  },
  {
    id: 3,
    title: "Xenia",
    subject: "Thank God!",
    description: "The UK makes dinar/dirham legal tender",
    time: "9pm"
  },
  {
    id: 4,
    title: "Abdallah",
    subject: "Malware",
    description: "Did you manage to delete the malware off my phone?",
    time: "8pm"
  }] }) {
  return (
    <div className="mail">
      <MailHeader logo={logo} avatar={avatar} />

      <div className="mail__body">
        <MailSidebar />
        {/* <MailView /> */}
        <MailList emails={emails} />
      </div>
      {/* <MailSend /> */}
    </div>
  )
}
