import React from 'react';
import Directory from '../directory/directory-component';
import Workouts from '../workout-design/workout-design';
import Deals from '../deals/deals';

function HomePage() {
    return (
      <div className="homepage-component">
        <p>this is homepage component</p>
        <Workouts/>
        <Directory/>
        <Deals/>
      </div>
    );
}

export default HomePage;