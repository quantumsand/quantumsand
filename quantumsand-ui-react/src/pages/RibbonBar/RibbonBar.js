import React, { Component } from "react";
import { Ribbon, RibbonGroup, RibbonGroupItem, RibbonButton } from "react-bootstrap-ribbon";
import { Tabs, Tab } from "react-bootstrap";

import SearchIcon from '@mui/icons-material/Search';

// In this example Bootsrap is installed via NPM. Here it gets imported from the "./node_modules" folder:
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-ribbon/dist/react-bootstrap-ribbon.css";

import "./RibbonBar.css";

const switchMode = mode => {
  console.log(mode);
}

const RibbonBar = () => {
  return (
    <div className="ribbon_bar">
        <div className="ribbon">
                {/* 
                    `breakpoint` prop is optional and defines when to switch between mobile and desktop view. 
                    Possible values: "sm", "md", "lg", "xl", default: "md"
                    `height` is also optional. Default is "8rem".
                */}
                <Tabs className="ribbon__barTabs" defaultActiveKey={0} transition={false}>
                  <Tab className="ribbon__barTab" eventKey={0} title={<SearchIcon style={{fontSize: "1.8em"}} />}>
                    <Ribbon breakpoint="lg" height="6.5rem">
                        <RibbonGroup title="Content" colClass="col-3">
                            <RibbonGroupItem colClass="col-4">
                                <RibbonButton onClick={() => switchMode("create")}>
                                    ✏️
                                    <div>Create</div>
                                </RibbonButton>
                            </RibbonGroupItem>
                            <RibbonGroupItem colClass="col-4">
                                <RibbonButton onClick={() => switchMode("edit")}>
                                    ✏️
                                    <div>Edit</div>
                                </RibbonButton>
                            </RibbonGroupItem>
                            <RibbonGroupItem colClass="col-4">
                                <RibbonButton onClick={() => switchMode("share")}>
                                    ✏️
                                    <div>Share</div>
                                </RibbonButton>
                            </RibbonGroupItem>

                            {/* more Ribbon group items */}
                        </RibbonGroup>

                        {/* more Ribbon groups */}
                    </Ribbon>
                  </Tab>
                </Tabs>
        </div>
    </div>
  )
};

export default RibbonBar;
