import React from 'react';
// import { makeStyles } from '@mui/system/';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Replay10Icon from '@mui/icons-material/Replay10';
import Forward10Icon from '@mui/icons-material/Forward10';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import AVControlsButton from "./AVControlsButton";
import './AVControls.css';

// const useStyles = makeStyles({
//   root: {
//     padding: "5px 10px",
//     width: "155px",
//     color: "#3137fd"
//   },
// });

export default function AVControls({ time }) {
  // const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="av__controls">
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>

      <Slider defaultValue={30} aria-labelledby="time-slider" />
      <Typography id="time-slider" className="av__controlsPlaybackTime">
        <strong>{time}</strong>
      </Typography>

      <div className="av__controlsButtons">
        <AVControlsButton Icon={Replay10Icon} alt="Rewind" />
        <AVControlsButton Icon={Forward10Icon} alt="Forward" />
        <AVControlsButton Icon={FeedbackOutlinedIcon} alt="Feedback" />
      </div>
      <div className="av__controlsButtons">
        <AVControlsButton Icon={ThumbUpOutlinedIcon} alt="Like" />
        <AVControlsButton Icon={ThumbDownOutlinedIcon} alt="Dislike" />
        <AVControlsButton Icon={FavoriteBorderIcon} alt="Favourite" />
      </div>
    </div>
  );
}
