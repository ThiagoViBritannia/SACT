import React from 'react';
import AddAdmin from './AddAdmin';
import AddAvaliator from './AddAvaliator';
import AddProject from './AddProject';

import * as DBValues from '../db/Values';


function Add(props) 
{
  switch(props.type)
  {
    case DBValues.ADMIN:
      return (<AddAdmin />);
    case DBValues.AVALIATOR:
      return (<AddAvaliator />)
    case DBValues.PROJECT:
      return (<AddProject />)
    default:
      return null
  }
}

export default Add;