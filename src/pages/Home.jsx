import React from 'react'
import './Home.css'
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  )
}

export default Home