import React from 'react';

const HogDetails = ({ hog }) => (
  <div className="ui segment">
    <h3>Details for {hog.name}</h3>
    <p>Specialty: {hog.specialty}</p>
    <p>Weight: {hog.weight}</p>
    <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
    <p>Highest Medal: {hog.highestMedal}</p>
  </div>
);

export default HogDetails;
