import React from 'react';
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

const MyToast = () => {
    const notify = () => {
        toast("Default Notification !");
  
        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_CENTER,
          draggable: true,
          closeOnClick: true,
          pauseOnHover: true
        });
  
        toast.error("Error Notification !", {
          position: toast.POSITION.TOP_LEFT,
          draggable: true,
          closeOnClick: true,
          pauseOnHover: true,
          className: 'toast-message'
        });
  
        // toast.warn("Warning Notification !", {
        //   position: toast.POSITION.BOTTOM_LEFT
        // });
  
        // toast.info("Info Notification !", {
        //   position: toast.POSITION.BOTTOM_CENTER
        // });
  
        // toast("Custom Style Notification with css class!", {
        //   position: toast.POSITION.BOTTOM_RIGHT,
        //   className: 'foo-bar'
        // });
      };
  
    return (
        <div>
            <ToastContainer hideProgressBar={true} limit={5}/>
        </div>
    );
};

export default MyToast;