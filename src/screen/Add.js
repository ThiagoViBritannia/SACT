import React from 'react';
import AddAdmin from './AddAdmin';

import * as DBValues from '../db/Values';
import AddAvaliator from './AddAvaliator';

function Add(props) 
{
  switch(props.type)
  {
    case DBValues.ADMIN:
      return (<AddAdmin />);
    case DBValues.AVALIATOR:
      return (<AddAvaliator />)
    default:
      return null
  }
}

export default Add;