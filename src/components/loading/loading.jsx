import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import {Colors} from '../../const';

const Spinner = () => {
  return (
    <div style={{position: `fixed`, left: `50%`, top: `50%`, transform: `translate(-50%, -50%)`}}>
      <Loader
        type={`Oval`}
        color={Colors.SITE_BLUE}
        height={100}
        width={100}
        position={`absolute`}
      />
    </div>
  );
};

export default Spinner;
