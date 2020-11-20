import React from 'react';
import './listItem.scss'

const ListItem = ({text}) => {
  return(
    <div className={'list-item'}>{text}</div>
  )
}

export default ListItem;