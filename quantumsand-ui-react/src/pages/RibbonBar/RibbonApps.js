import React from 'react';

import Ribbon from "./ReactBootstrapRibbon/ReactBootstrapRibbon";
import RibbonButton from "./ReactBootstrapRibbon/ReactBootstrapRibbonButton";
import RibbonGroup from "./ReactBootstrapRibbon/ReactBootstrapRibbonGroup";
import RibbonGroupItem from "./ReactBootstrapRibbon/ReactBootstrapRibbonGroupItem";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Avatar from "@mui/material/Avatar";

import StoreIcon from '@mui/icons-material/Store';
import GavelIcon from '@mui/icons-material/Gavel';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import ChatIcon from '@mui/icons-material/Chat';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailIcon from '@mui/icons-material/Mail';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PeopleIcon from '@mui/icons-material/People';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import InstagramIcon from '@mui/icons-material/Instagram';
import MovieIcon from '@mui/icons-material/Movie';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PushPinIcon from '@mui/icons-material/PushPin';

import "./RibbonApps.css";

export default function RibbonApps({ username, avatar, pushEvent }) {

  const switchMode = mode => {
    console.log(mode);
    pushEvent("switch-mode", mode);
  }

  return (
    <div className="ribbon__apps">
      <Carousel onChange={console.log("Ribbon apps changed")}
        emulateTouch={true}
        useKeyboardArrows={true}
        swipeable={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        selectedItem={0}>
        <Ribbon breakpoint="lg" title="Apps" >
          <RibbonGroup title="" colClass="col-4">
            <RibbonGroupItem colClass="col-4">
              <RibbonButton onClick={() => switchMode("market")}>
                <StoreIcon />
                <div className="ribbon__appsName">Market</div>
              </RibbonButton>
            </RibbonGroupItem>

            <RibbonGroupItem colClass="col-4">
              <RibbonButton onClick={() => switchMode("services")}>
                <RoomServiceIcon />
                <div className="ribbon__appsName">Services</div>
              </RibbonButton>
            </RibbonGroupItem>

            <RibbonGroupItem colClass="col-4">
              <RibbonButton onClick={() => switchMode("auction")}>
                <GavelIcon />
                <div className="ribbon__appsName">Auction</div>
              </RibbonButton>
            </RibbonGroupItem>

            <RibbonGroupItem colClass="col-4">
              <RibbonButton onClick={() => switchMode("news")}>
                <NewspaperIcon />
                <div className="ribbon__appsName">News</div>
              </RibbonButton>
            </RibbonGroupItem>

            <RibbonGroupItem colClass="col-4">
              <RibbonButton onClick={() => switchMode("profession")}>
                <BusinessCenterIcon />
                <div className="ribbon__appsName">Profession</div>
              </RibbonButton>
            </RibbonGroupItem>

            <RibbonGroupItem colClass="col-4">
              <RibbonButton onClick={() => switchMode("wallet")}>
                <AccountBalanceWalletIcon />
                <div className="ribbon__appsName">Wallet</div>
              </RibbonButton>
            </RibbonGroupItem>
          </RibbonGroup>

          <RibbonGroup title="" colClass="col-4">
            <RibbonGroupItem colClass="col-4">
              <RibbonButton onClick={() => switchMode("chat")}>
                <ChatIcon />
                <div className="ribbon__appsName">Chat</div>
              </RibbonButton>
            </RibbonGroupItem>

            <RibbonGroupItem colClass="col-4">
                <RibbonButton onClick={() => switchMode("chirp")}>
                  <TwitterIcon />
                  <div className="ribbon__appsName">Chirp</div>
                </RibbonButton>
              </RibbonGroupItem>

              <RibbonGroupItem colClass="col-4">
                <RibbonButton onClick={() => switchMode("collab")}>
                  <GroupWorkIcon />
                  <div className="ribbon__appsName">Collab</div>
                </RibbonButton>
              </RibbonGroupItem>

              <RibbonGroupItem colClass="col-4">
                <RibbonButton onClick={() => switchMode("pins")}>
                  <PushPinIcon />
                  <div className="ribbon__appsName">Pins</div>
                </RibbonButton>
              </RibbonGroupItem>

              <RibbonGroupItem colClass="col-4">
                <RibbonButton onClick={() => switchMode("mail")}>
                  <MailIcon />
                  <div className="ribbon__appsName">Mail</div>
                </RibbonButton>
              </RibbonGroupItem>

              <RibbonGroupItem colClass="col-4">
                <RibbonButton onClick={() => switchMode("scrapbook")}>
                  <ImportContactsIcon />
                  <div className="ribbon__appsName">Scrapbook</div>
                </RibbonButton>
              </RibbonGroupItem>
            </RibbonGroup>

            <RibbonGroup title="" colClass="col-4">
              <RibbonGroupItem colClass="col-4">
                <RibbonButton onClick={() => switchMode("images")}>
                  <InstagramIcon />
                  <div className="ribbon__appsName">Images</div>
                </RibbonButton>
              </RibbonGroupItem>

              <RibbonGroupItem colClass="col-4">
                <RibbonButton onClick={() => switchMode("reels")}>
                  <MovieIcon />
                  <div className="ribbon__appsName">Reels</div>
                </RibbonButton>
              </RibbonGroupItem>

              <RibbonGroupItem colClass="col-4">
                <RibbonButton onClick={() => switchMode("av")} className="ribbon__appsButtonSelected btn btn-light btn-block text-nowrap">
                  <YouTubeIcon />
                  <div className="ribbon__appsName">AV</div>
                </RibbonButton>
              </RibbonGroupItem>

              <RibbonGroupItem colClass="col-4">
                <RibbonButton onClick={() => switchMode("audio")}>
                  <AudiotrackIcon />
                  <div className="ribbon__appsName">Audio</div>
                </RibbonButton>
              </RibbonGroupItem>

              <RibbonGroupItem colClass="col-4">
                <RibbonButton onClick={() => switchMode("tonat")}>
                  <FlashOnIcon />
                  <div className="ribbon__appsName">Tonat</div>
                </RibbonButton>
              </RibbonGroupItem>

              <RibbonGroupItem colClass="col-4">
                <RibbonButton onClick={() => switchMode("ofl")}>
                  <img src="/icons/coracaozinho-para-o-luiz-otavio.svg" style={{width: "1.5em", height: "1.5em"}} alt="OFL" />
                  <div className="ribbon__appsName">OFL</div>
                </RibbonButton>
              </RibbonGroupItem>
            </RibbonGroup>
        </Ribbon>

        <Ribbon breakpoint="lg" title="Apps" >
          <RibbonGroup title="" colClass="col-4">
            <RibbonGroupItem colClass="col-4">
                <RibbonButton onClick={() => switchMode("life")}>
                  <Avatar alt={username} src={avatar} style={{height: "1.0em", width: "1.0em", margin: "auto", marginTop: "6px", marginBottom: "2px"}} />
                  <div className="ribbon__appsName">Life</div>
                </RibbonButton>
              </RibbonGroupItem>
          </RibbonGroup>
        </Ribbon>

      </Carousel>
    </div>
  )
}
