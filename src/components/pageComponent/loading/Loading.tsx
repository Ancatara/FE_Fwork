import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";

const Loading = () => {

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      flexDirection: 'column'
    }}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        // wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
