import React from 'react';
import ReactDOM from 'react-dom';

const Puppy = (props) => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h3>Breed: {props.breed}</h3>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Puppies!</h1>
      <Puppy name="Coco" breed="Chihuahua" />
      <Puppy name="Donut" breed="The best breed :)" />
      <Puppy name="Daisy" breed="Beagle" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
