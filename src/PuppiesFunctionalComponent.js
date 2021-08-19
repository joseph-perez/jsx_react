import { useState, useEffect } from 'react';

function PuppiesFunctionalComponent() {
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
