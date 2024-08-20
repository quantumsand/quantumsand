import React, { Component } from "react";
import { Ribbon, RibbonGroup, RibbonGroupItem, RibbonButton } from "react-bootstrap-ribbon";
import { Tabs, Tab } from "react-bootstrap";

import SearchIcon from '@mui/icons-material/Search';

// In this example Bootsrap is installed via NPM. Here it gets imported from the "./node_modules" folder:
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-ribbon/dist/react-bootstrap-ribbon.css";

const SampleRibbonBar = () => {
  return (
    <div className="container">
        <div className="ribbon__bar">
                {/* 
                    `breakpoint` prop is optional and defines when to switch between mobile and desktop view. 
                    Possible values: "sm", "md", "lg", "xl", default: "md"
                    `height` is also optional. Default is "8rem".
                */}
                <Tabs className="ribbon__barTabs" defaultActiveKey={0} transition={false}>
                  <Tab className="ribbon__barTab" eventKey={0} title={<SearchIcon style={{fontSize: "1.8em"}} />}>
                    <Ribbon breakpoint="lg" height="8rem">
                        <RibbonGroup title="Clipboard" colClass="col-3">
                            <RibbonGroupItem colClass="col-4">
                                <RibbonButton onClick={() => console.log("edit")}>
                                    ✏️
                                    <div>Edit</div>
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

export default SampleRibbonBar;
