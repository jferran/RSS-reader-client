import React, { useEffect } from 'react'
import FeedsList from '../components/FeedsList';
import NewsList from '../components/NewsList';
import { getNewsUpdateService, refreshService } from '../services/user.services';
function Home() {
  useEffect(()=>{
    handleRefresh()
  },[])
  const handleRefresh = () => {
    refreshService()
    getNewsUpdateService()
  }
  return (
    <div>
      <h3>Welcome</h3>
      <NewsList/>
      <FeedsList/>
    </div>
    
  );
}

export default Home;
