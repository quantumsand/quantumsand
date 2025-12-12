import React from 'react';
import Avatar from "@mui/material/Avatar";

import "./Notifications.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Notifications() {
  const notify = () => toast(<div className="notification">
                                <Avatar src="/locale/japanese.jpg" alt="Natalia"></Avatar>
                                <p>🦄 Wow so easy!</p>
                              </div>, {
                                        position: "top-right",
                                        autoClose: 10000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "light",
                                        pauseOnFocusLoss: false,
                                        onClose: () => console.log('Notification closed (notification.id)')
                                      });

  return (
    <div className="notifications">
      <button onClick={notify}>Notify !</button>
      <ToastContainer limit={2} />
    </div>
  )
}
