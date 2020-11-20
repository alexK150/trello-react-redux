import React from 'react';
import ListItem from "../listItem/ListItem";

import './mainList.scss'

const MainList = ({title, listItems}) => {
  return (
    <div className={'main-list'}>
      <h3>{title}</h3>
      {
        listItems.map(listEl => <ListItem key={listEl.id} text={listEl.text}/>)
      }
    </div>
  )
}

export default MainList;