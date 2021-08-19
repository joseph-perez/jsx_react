import { Component } from 'react';

class PuppiesClassComponent extends Component {
  constructor() {
    super();

    this.state = {
      puppyImages: [],
    };
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random/1')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ puppyImages: data.message });
      });
  }

  render() {
    return (
      <>
        {this.state.puppyImages.length === 0 ? (
          <h2>
            No puppies in class component{' '}
            <span role="img" aria-label="dog emoji">
              🐶
            </span>{' '}
            <span role="img" aria-label="confounded face emoji">
              😖
            </span>
          </h2>
        ) : (
          this.state.puppyImages.map((puppyImg) => (
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
}

export default PuppiesClassComponent;
