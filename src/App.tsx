import MyToast from 'components/pageComponent/MyToast/MyToast';
import React from 'react';
import {BrowserRouter } from "react-router-dom"
import Router from 'routers';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <BrowserRouter>
      <Router/>
      <MyToast/>
    </BrowserRouter>
  );
}

export default App;
