import React, {useState, useEffect} from 'react';
import WaveSurfer from "wavesurfer.js";
import { Grid, Slider } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import "./AudioPlayerFooter.css";

export default function AudioPlayerFooter({ id, artistName, trackName, trackImage, 
                                            src, srcArrayBuffer, srcJson, srcLength }) {

  const [wavesInstance, setWavesInstance] = useState([]);
  const [playbackPos, setPlaybackPos] = useState("");
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    var wavesurfer = WaveSurfer.create({
    container: document.querySelector(`#waveform_${id}`),
    waveColor: '#1ad2fb',
    progressColor: '#1ed760',
    cursorColor: '#fff',
    barWidth: 3,
    barRadius: 3,
    cursorWidth: 3,
    height: 28,
    barGap: 3,
    normalize: true,
    responsive: true
  });

  setWavesInstance(wavesurfer);

  // onPosChange
  wavesurfer.on('audioprocess', function(e) {
    console.log(wavesurfer.getCurrentTime());
    setPlaybackPos(Math.trunc(wavesurfer.getCurrentTime()));
    setPlaying(true);
  });

  wavesurfer.on('pause', function(e) {
    setPlaying(false);
  });

  fetch(srcJson)
  .then(response => {
      if (!response.ok) {
          throw new Error("HTTP error " + response.status);
      }
      return response.json();
  })
  .then(peaks => {
      console.log('loaded peaks! sample_rate: ' + peaks.sample_rate);

      // load peaks into wavesurfer.js
      wavesurfer.load(src, peaks.data);
  })
  .catch((e) => {
      console.error('error', e);
  });

  }, [src, srcJson]);

  const playPause = e => {
    e.preventDefault();
    console.log("playPause");
    wavesInstance.playPause();
  }

    /*
      https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds
    */
    function fancyTimeFormat(duration)
    {   
      // Hours, minutes and seconds
      var hrs = ~~(duration / 3600);
      var mins = ~~((duration % 3600) / 60);
      var secs = ~~duration % 60;
  
      // Output like "1:01" or "4:03:59" or "123:03:59"
      var ret = "";
  
      if (hrs > 0) {
          ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
      }
  
      ret += "" + mins + ":" + (secs < 10 ? "0" : "");
      ret += "" + secs;
      return ret;
    }

  return (
    <div className="audio__playerFooter">
      <div className="audio__playerFooterLeft">
        <img className="audio__playerFooterAlbumLogo"
          src={trackImage} alt="" />
        <div className="audio__playerFooterSongInfo">
          <h4>{trackName}</h4>
          <p>{artistName}</p>
        </div>
      </div>
      <div className="audio__playerWaveform" id={`waveform_${id}`}></div>
      <div className="audio__playerPos">
        <h4>{fancyTimeFormat(playbackPos)} / {fancyTimeFormat(srcLength)}</h4>
      </div>
      <div className="audio__playerFooterCenter">
        <ShuffleIcon className="audio__playerFooterBlue" />
        <SkipPreviousIcon className="audio__playerFooterIcon" />
        <PlayCircleOutlineIcon className="audio__playerFooterIcon" fontSize="large" onClick={playPause.bind(this)} />
        <SkipNextIcon className="audio__playerFooterIcon" />
        <RepeatIcon className="audio__playerFooterBlue" />
      </div>
      <div className="audio__playerFooterRight">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
