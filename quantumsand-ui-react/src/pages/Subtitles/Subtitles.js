import React, {useEffect} from 'react';
import Avatar from "@mui/material/Avatar";
import './Subtitles.css';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export default function Subtitles({ subtitles = [{
    iso: "en_GB",
    content: "We will learn Mathematics"
}], handleEvent }) {

  function handleClick() {
    console.log("clicked")
  }

  useEffect(() => {
    if (!handleEvent) return;
    handleEvent("time-updated", (data) => {
      // use data to update your component
      console.log("time-updated")
      //console.log(data)
      //setTime(data.posts)
    })

    handleEvent("update-title", (_) => {
      // use data to update your component
      console.log("Update title")
      //console.log(data)
    })
  }, [handleEvent])

  // const notify = () => toast(<div className="notification" phx-click="clicked" phx-value-ref={"notification.id"}>
  //                               <Avatar src="/images/locale/russian.jpg" alt="Natalia"></Avatar>
  //                               <p>🦄 Wow so easy!</p>
  //                             </div>, {
  //                                       position: "top-right",
  //                                       autoClose: 10000,
  //                                       hideProgressBar: false,
  //                                       closeOnClick: true,
  //                                       pauseOnHover: true,
  //                                       draggable: true,
  //                                       progress: undefined,
  //                                       theme: "light",
  //                                       onClose: () => console.log('Notification closed (notification.id)')
  //                                     });

  return (
    <div className="subtitles-overlay">
      <div className="subtitles__notification">
        {/* <ToastContainer limit={2} /> */}
      </div>
      {subtitles.map((subtitle, index) => (
        <p className="subtitles" key={subtitle.iso} onClick={handleClick}>
          {subtitle.content}
        </p>
      ))}
    </div>
  )
}
