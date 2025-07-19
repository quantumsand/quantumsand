import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Workbook } from '@fortune-sheet/react'
import "@fortune-sheet/react/dist/index.css"
import "./Grains.css"

import cell from "./cell";

export default function Grains() {
  return (
    <div className="grains">
      <FormControl fullWidth sx={{ m: 1 }}>
        <TextField id="filled-basic" label="Grain git repo name" variant="filled" />
        <TextField id="filled-basic" label="Grain title" variant="filled" />
      </FormControl>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="adverts-content"
          id="adverts-header"
        >
          <Typography component="span">Advertising Tiles</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="narrative-sync-content"
          id="narrative-sync-header"
        >
          <Typography component="span">Narrative Sync</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="anim-blender-content"
          id="anim-blender-header"
        >
          <Typography component="span">Animations (Blender)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="anim-lottie-content"
          id="anim-lottie-header"
        >
          <Typography component="span">Animations (Lottie)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="slides-content"
          id="slides-header"
        >
          <Typography component="span">Slides (Text/Images/Mathematics/Code)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="simulations-content"
          id="simulations-header"
        >
          <Typography component="span">Simulations</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="virtual-globes-content"
          id="virtual-globes-header"
        >
          <Typography component="span">Virtual Globes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="map-drawings-content"
          id="map-drawings-header"
        >
          <Typography component="span">Map Drawings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="charts-nivo-content"
          id="charts-nivo-header"
        >
          <Typography component="span">Charts (nivo)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="charts-matplotlib-content"
          id="charts-matplotlib-header"
        >
          <Typography component="span">Charts (Matplotlib)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="notebooks-jupyter-content"
          id="notebooks-jupyter-header"
        >
          <Typography component="span">Notebooks (Jupyter)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="notebooks-livebook-content"
          id="notebooks-livebook-header"
        >
          <Typography component="span">Notebooks (Elixir and Livebook)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="word-clouds-content"
          id="word-clouds-header"
        >
          <Typography component="span">Word Clouds</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="videogames-content"
          id="videogames-header"
        >
          <Typography component="span">Videogames</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="ebooks-content"
          id="ebooks-header"
        >
          <Typography component="span">EBooks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="musical-notation-content"
          id="musical-notation-header"
        >
          <Typography component="span">Musical Notation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="disabled-content"
          id="disabled-header"
        >
          <Typography component="span">Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
