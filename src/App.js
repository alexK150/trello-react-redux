import React from 'react';
import MainList from './components/mainList/MainList';
import {connect} from 'react-redux';

import './App.scss';

function App({lists}) {
  return (
    <div>
      <p>Hello World</p>
      <div className={'app'}>
        {
          lists.map(listEl => <MainList key={listEl.id} title={listEl.title} listItems={listEl.listItems}/>)
        }
      </div>
    </div>
  );
}

const mapStateToProps = ({lists}) => ({
  lists
})

export default connect(mapStateToProps)(App)
