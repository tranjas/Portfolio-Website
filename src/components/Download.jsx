import { saveAs } from 'file-saver';
import Resume from '../assets/';

import React from 'react'

const Download = () => {
    saveAs(Resume, 'Jason-Resume');
  };

export default Download;

