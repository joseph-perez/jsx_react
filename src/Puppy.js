import React from 'react';

// JSX allows HTML like markup to be written and then transformed
// into "React.createElement" function calls just like below.
// The React.createElement component below works just like the JSX version

// const Puppy = (props) => {
//   return React.createElement('div', {}, [
//     React.createElement('h2', { }, props.name),
//     React.createElement('h3', { }, props.breed),
//   ]);
// };

const Puppy = (props) => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h3>Breed: {props.breed}</h3>
    </div>
  );
};

export default Puppy;
