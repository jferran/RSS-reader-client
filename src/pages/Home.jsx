import React, { useContext, useEffect } from 'react'
import FeedsList from '../components/FeedsList';
import NewsList from '../components/NewsList';
import { AuthContext } from '../context/auth.context';
import { getNewsUpdateService, refreshService } from '../services/user.services';
import Login from './auth/Login';
import Signup from './auth/Signup';


function Home() {
  const { isLoggedIn } = useContext(AuthContext)
  useEffect(()=>{
    isLoggedIn && handleRefresh()
  },[])
  const handleRefresh = () => {
    refreshService()
    getNewsUpdateService()
  }
  return (
    <div>
      <h3>Welcome</h3>
      {isLoggedIn ? <NewsList/> : <Login/>}
      {/* <FeedsList/> */}
    </div>
    
  );
}

export default Home;
