import React from 'react';
import AddAdmin from './AddAdmin';

import * as DBValues from '../db/Values';

function Add(props) 
{
  switch(props.type)
  {
    case DBValues.ADMIN:
      return (<AddAdmin />);
    default:
      return null
  }
}

export default Add;