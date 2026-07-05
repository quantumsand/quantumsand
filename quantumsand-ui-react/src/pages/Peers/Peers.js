import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Workbook } from '@fortune-sheet/react'
import "@fortune-sheet/react/dist/index.css"

import cell from "../../cell";

export default function Peers() {
  return (
    <div className="grains">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="trusted-keys-content"
          id="trusted-keys-header"
        >
          <Typography component="span">Trusted Keys</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Manage trusted keys for automatic decentralised peer-to-peer syncing
          </Typography>
        </AccordionDetails>
      </Accordion>

      <div
      style={{
        width: "100%",
        height: "300px"
      }}
      >
        <Workbook data={[cell]} onOp={console.log} />
      </div>

    </div>
  );
}
