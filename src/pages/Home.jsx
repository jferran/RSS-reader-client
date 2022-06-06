import React from 'react'
import FeedsList from '../components/FeedsList';
import NewsList from '../components/NewsList';
function Home() {
  return (
    <div>
      <h3>Welcome</h3>
      <NewsList/>
      <FeedsList/>
    </div>
    
  );
}

export default Home;
