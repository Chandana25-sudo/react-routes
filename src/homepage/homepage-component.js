import React from 'react';
import Directory from '../directory/directory-component';
import Workouts from '../workout-design/workout-design';
import Deals from '../deals/deals';

function HomePage() {
    return (
      <div className="homepage-component">
        <h3>This is homepage component</h3>
        <Workouts/>
        <Directory/>
        <Deals/>
      </div>
    );
}

export default HomePage;