import { useState, useEffect } from 'react';

function PuppiesFunctionalComponent() {
  // This is a hook! The useState hook is essential to a functional component
  // that wants to keep track of some piece of state. The useState hook returns
  // an array. The first value in the array is the value you pass to useState. In
  // this case it is the empty array. The second value of the array is a function
  // that can be used to update that piece of state.

  // destructuring the array that's returned from useState
  const [puppyImages, setPuppyImages] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/1')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPuppyImages(data.message);
      });
  }, []);

  return (
    <>
      {puppyImages.length === 0 ? (
        <h2>
          No puppies in functional component{' '}
          <span role="img" aria-label="dog emoji">
            🐶
          </span>{' '}
          <span role="img" aria-label="confounded face emoji">
            😖
          </span>
        </h2>
      ) : (
        puppyImages.map((puppyImg) => (
          <img
            key={puppyImg}
            style={{ width: 200, height: 200 }}
            src={puppyImg}
            alt="a puppy"
          />
        ))
      )}
    </>
  );
}

export default PuppiesFunctionalComponent;
