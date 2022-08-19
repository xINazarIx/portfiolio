import React from "react";
import { ArrowRightCircle } from 'react-bootstrap-icons';

import './connect-button-secondary.scss';

const ConnectButtonSecondary = () => {
  return (
    <button className="connect-button-secondary">Let’s Connect <ArrowRightCircle size={25} /></button>
  );
};

export default ConnectButtonSecondary;