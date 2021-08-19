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
        <h2>No puppies in class component 🐶 😖</h2>
        {this.state.puppyImages.map((puppyImg) => (
          <img
            key={puppyImg}
            style={{ width: 200, height: 200 }}
            src={puppyImg}
            alt="a puppy"
          />
        ))}
      </>
    );
  }
}

export default PuppiesClassComponent;
